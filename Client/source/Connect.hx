import js.html.WebSocket;
import haxe.Json;

typedef Position = {
    msg : String,
    name : Int, 
    xPos : Float,
    yPos : Float,
    xMove : Float,
    yMove : Float,
    pID : Int
}

typedef Update = {
    msg : String
}

typedef PlayerPositions = {
    name : Int,
    posX : Int,
    posY : Int
}

class Connect {
    static private var _server = "ws://127.0.0.1:8889";
    static var socket:WebSocket;

    public var playerNum:Int;
    public var currentPlayers:Array<Int>;
    public var playerPositions:Array<PlayerPositions>;

    private var _game:PlayState;

    public function new(game:PlayState) {
        playerNum = 101;
        _game = game;
    }

    public function connect() {
        socket = new WebSocket(_server);
        socket.onopen = onOpen;
        socket.onclose = onClose;
        socket.onmessage = onMessage;
        socket.onerror = onError;
    }

    public function onOpen(e) {
        trace("connected!");

        var getName = {
            msg : "newplayer"
        };
        
        sendMessage(getName);
    }

    public function onClose(e) {
        trace("disconnected!");
    }

    public function sendMessage(m:Dynamic) {
        var send = haxe.Json.stringify(m);
        trace("Sending: ", send);
        socket.send(send);
    }

    public function onMessage(m) {
        trace("Received: ", m.data);
        
        var o = haxe.Json.parse(m.data);

        if (o.msg == "assignname") {
            playerNum = o.name;
            trace("player assigned name", playerNum);
            _game.assignPlayerPiece();
        } 
        else if (o.msg == "playerjoined") {
            currentPlayers = o.names;
            if (playerNum != 101) {
                _game.sendPosition();
            }
        }
        else if (o.msg == "playerpositions") {
            var positions:Array<Connect.Position> = o.positions;
            for (p in positions) {
                _game.updatePositions(p.name, p.pID, cast(p.xPos, Float), cast(p.yPos, Float));
                if (p.name == playerNum) {
                    _game.checkUpgrade();
                    continue;
                }

                _game.colorSprite(p.name, p.pID);
            }

            if (playerNum != 101) {
                _game.displayMoves();
            }
        }
        else if (o.msg == "destroypid" || o.msg == "destroyed") {
            if (o.msg == "destroyed") {
                var pieces:Array<Int> = o.destroyed;
                for (p in pieces) {
                    _game.removePieceByPID(p);
                }
            }
            else {
                _game.removePieceByPID(o.pID);
            }
        }
        else if (o.msg == "playerleft") {
            _game.playerLeft(o.pID);
        }
        else if (o.msg == "upgradepawn") {
            if (o.pName != playerNum) {
                _game.upgradePawn(o.pID, o.pName);
            }
        }
        else if (o.msg == "whiteWins" || o.msg == "blackWins") {
            playerNum = 101;
            socket.close(1000, "game end");
            _game.resetGame(o.msg);
        }
    }

    public function sendDestroyed(pID: Int) {
        var lostPiece = {
            msg: "destroyed",
            pID: pID,
            pName: playerNum
        }
        sendMessage(lostPiece);
    }

    public function upgradePawn(pID: Int) {
        var upgradePiece = {
            msg: "upgradepawn",
            pID: pID,
            pName: playerNum
        }
        sendMessage(upgradePiece);
    }

    public function onError(e) {
        trace(e.data);
    }
}