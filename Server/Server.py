#!/usr/bin/python3
#source py3env/bin/activate

import json
import queue
from threading import Lock

from autobahn.asyncio.websocket import WebSocketServerFactory, WebSocketServerProtocol
import asyncio


class Game:
    available = queue.PriorityQueue(10)
    lock = Lock()
    playerNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    curPlayers = []
    connectedNum = 0
    destroyed = []

    uniquePlayer = {}
    playerPositions = []
    gameState = []

    inProgress = False

    @classmethod
    def setup(cls):
        for i in range(1, 11):
            cls.available.put(i, i)
        inProgress = False

    @classmethod
    def board(cls):
        bb = [40, 41, 42, 43, 44, 45, 46, 47]
        bf = [30, 31, 32, 33, 34, 35, 36, 37]
        wf = [10, 11, 12, 13, 14, 15, 16, 17]
        wb = [20, 21, 22, 23, 24, 25, 26, 27]

        cls.gameState.append(bb)
        cls.gameState.append(bf)
        for i in range(0, 4):
            t = [0, 0, 0, 0, 0, 0, 0, 0]
            cls.gameState.append(t)
        cls.gameState.append(wf)
        cls.gameState.append(wb)

    @classmethod
    def checkWinner(cls):
        kingWhite = False
        kingBlack = False
        for i in cls.gameState:
            if 44 in i:
                kingBlack = True
            if 24 in i:
                kingWhite = True
        if not kingWhite:
            return 'blackWins'
        if not kingBlack:
            return 'whiteWins'
        return 'continue'

    @classmethod
    def reset(cls):
        cls.curPlayers[:] = []
        cls.connectedNum = 0
        cls.destroyed[:] = []

        cls.uniquePlayer.clear()
        cls.playerPositions[:] = []
        cls.gameState[:] = []

        cls.board()

        cls.inProgress = False
        return




class Server(WebSocketServerProtocol):
    def onConnect(self, request):
        print('Player connecting: ')#, str(request))

    def onOpen(self):
        print('Socket Connection Open')
        self.factory.register(self)

    def onClose(self, wasClean, reason, wtf):
        print('Websocket closed: ' + str(reason))
        self.factory.unregister(self)

        Game.connectedNum -= 1
        
        pNum = Game.uniquePlayer[self._wskey]
        Game.uniquePlayer.pop(self._wskey, None)
        pID = -1
        for d in Game.playerPositions:
            if d['name'] == pNum:
                pID = d['pID']
                Game.playerPositions.remove(d)
                break
        
        Game.available.put(pNum, pNum)
        if Game.available.full():
            Game.reset();

        broadcast = {'message': 'playerleft', 'name': pNum, 'pID': pID}
        self.factory.broadcast(broadcast)

    def onMessage(self, payload, isBinary):
        print('Received: ', payload.decode('utf8'))

        m = json.loads(payload.decode('utf8'))
        self.handleMessage(m)

        if len(Game.uniquePlayer) > 1:
            Game.inProgress = True

    def handleMessage(self, message): 
        m = message['msg']

        if m == 'newplayer':
            Game.connectedNum += 1
            pNum = 101
            if not Game.available.empty():
                pNum = Game.available.get()
            message = json.dumps({'msg': 'assignname', 'name': pNum})
            self.sendMessage(message.encode('utf8'), False)

            key = str(self._wskey)
            Game.uniquePlayer[self._wskey] = pNum

            broadcast = 'playerjoined'
            self.factory.broadcast(broadcast)

            gameStateMsg = {'msg': 'destroyed', 'destroyed': Game.destroyed}
            self.factory.broadcast(gameStateMsg)
        elif m == 'playerposition':
            self.addPlayer(message)
            self.updateGameState(message)
        elif m == 'destroyed':
            Game.destroyed.append(message['pID'])

    def updateGameState(self, message):
        Game.lock.acquire()
        name = message['name']
        x = int(message['xPos'])
        y = int(message['yPos'])
        xMove = int(message['xMove'])
        yMove = int(message['yMove'])
        xWorld = x
        yWorld = y
        xMWorld = x
        yMWorld = y
        pID = message['pID']

        if pID >= 30:
            x = 7 - x
            y = 7 - y
            xMove = 7 - xMove
            yMove = 7 - yMove

        pieceAtPosition = Game.gameState[yMove][xMove]
        print(name, pieceAtPosition, pID)
        for d in Game.playerPositions:
            if d['name'] == name:
                d['xPos'] = xMove
                d['yPos'] = yMove
                d['pID'] = pID
                break

        if pieceAtPosition != pID and pieceAtPosition != 0:
            isPlayerPiece = False
            for d in Game.playerPositions:
                if d['pID'] == pieceAtPosition:
                    d['pID'] = 0
                    isPlayerPiece = True
                    break

            if not isPlayerPiece:
                Game.destroyed.append(pieceAtPosition)
                self.factory.broadcast({'msg': 'destroypid', 'pID': pieceAtPosition})

        Game.gameState[y][x] = 0
        Game.gameState[yMove][xMove] = pID

        self.factory.broadcast({'msg': 'playerpositions', 'positions': Game.playerPositions})

        winner = Game.checkWinner()
        if winner != 'continue':
            self.factory.broadcast({'msg': winner})
        Game.lock.release()


    def addPlayer(self, message):
        name = message['name']
        containsPlayer = False
        for d in Game.playerPositions:
            if d['name'] == name:
                containsPlayer = True
                break

        if not containsPlayer:
            Game.playerPositions.append(message)

        #pDict = {'msg': 'playerpositions', 'positions': Game.playerPositions}
        #self.factory.broadcast(pDict)



class Broadcast(WebSocketServerFactory):
    def __init__(self, url, debug = False, debugCodePaths = False):
        WebSocketServerFactory.__init__(self, url, debug, debugCodePaths)
        self.clients = []

    def register(self, client):
        if client not in self.clients:
            print('Register: ', client._wskey)
            self.clients.append(client)

    def unregister(self, client):
        if client in self.clients:
            print('Unregister: ', client._wskey)
            self.clients.remove(client)
    
    def broadcast(self, message):
        if message == 'playerjoined':
            playerList = []
            for key, val in Game.uniquePlayer.items():
                playerList.append(val) 
                playerList.sort()

            message = {'msg': 'playerjoined', 'names': playerList}

        message = json.dumps(message);

        print('broadcasting' + message)
        for c in self.clients:
            c.sendMessage(message.encode('utf8'))

if __name__ == '__main__':
    factory = Broadcast('ws://127.0.0.1:8889')
    factory.protocol = Server
    
    loop = asyncio.get_event_loop()
    coro = loop.create_server(factory, '127.0.0.1', 8889)
    server = loop.run_until_complete(coro)

    Game.setup()
    Game.board()

    try:
        loop.run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.close()
        loop.close()