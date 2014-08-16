package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.util.FlxPoint;
import flixel.group.FlxTypedGroup;
import flixel.group.FlxGroup;

class PlayState extends FlxState {
	private var _playerControlling:Int;
	private var _socket:Connect;

	private var _board:FlxTypedGroup<Board>;
	private var _white:FlxTypedGroup<Piece>;
	private var _black:FlxTypedGroup<Piece>;

	private var _playerNum:Int;

	private var _playerPiece:Dynamic;

	private var _playerMoves:Array<FlxPoint>;

	override public function create():Void {
		super.create();

		//set up board
		_board = new FlxTypedGroup();
		var block:Board;
		for (i in 0...8) {
			for (k in 0...8) {
				if (k % 2 == 0 && i % 2 == 0) {
					block = new Board(k * 80, i * 80, 0);
				} 
				else if (k % 2 != 0 && i % 2 != 0) {
					block = new Board(k * 80, i * 80, 0);
				}
				else {
					block = new Board(k * 80, i * 80, 1);
				}
				_board.add(block);
				add(block);
			}
		}

		_white = new FlxTypedGroup();
		_black = new FlxTypedGroup();
		setupBoard();

		_playerControlling = -1;

		_socket = new Connect(this);
		_socket.connect();
	}

	public function resetGame(winner:String) {
		openSubState(new flixel.FlxSubState());

		var end:GameOverState = new GameOverState();
		end.winner = winner;
		FlxG.switchState(end);
	}

	override public function destroy():Void {
		_socket = null;
		_board.destroy();
		_board = null;
		_white.destroy();
		_white = null;
		_black.destroy();
		_black = null;
		_playerPiece = null;
		_playerMoves = null;

		super.destroy();
	}

	override public function update():Void {
		if (FlxG.mouse.justReleased && _playerNum < 101) {
			for (move in _playerMoves) {
				var x = FlxG.mouse.x;
				var y = FlxG.mouse.y;

				if (x > move.x && x < move.x + 80.0) {
					if (y > move.y && y < move.y + 80.0) {
						sendPosition(move.x, move.y);
						_playerMoves = [];
						resetBoardColor();
						break;
					}
				}
			}
		}

		super.update();
	}	

	private function resetBoardColor() {
		for (i in 0..._board.length) {
			var box = _board.members[i];
			box.defaultColor();
		}
	}

	private function getPieceFromPID(pID):Piece {
		var p:Piece = new Piece(0, 0);
		var pieces = new FlxTypedGroup();

		if (pID <= 27 || (pID >= 60 && pID <= 67)) {
			pieces = _white;
		}
		else if ((pID >= 30 && pID <= 47) || (pID >=- 80 && pID <= 87)) {
			pieces = _black;
		}

		for (i in 0...pieces.length) {
			p = pieces.members[i];
			if (p.pID == pID) {
				return p;
			}
		}
		return p;
	}

	private function getPieceTypeFromPID(pID):Dynamic {
		var p:Piece = getPieceFromPID(pID);
		if (p.type == 0) {
			return cast(p, Pawn);
		}
		else if (p.type == 1) {
			return cast(p, Rook);
		}
		else if (p.type == 2) {
			return cast(p, Knight);
		}
		else if (p.type == 3) {
			return cast(p, Bishop);
		}
		else if (p.type == 4) {
			return cast(p, Queen);
		}
		else if (p.type == 5) {
			return cast(p, King);
		}
		return p;
	}

	public function removePieceByPID(pID:Int) {
		var pieces = _white;
		if ((pID >= 30 && pID <= 47) || (pID >= 80 && pID <= 87)) {
			pieces = _black;
		}
		// else if ((pID >= 10 && pID <= 27) || (pID >= 60 && pID <= 67)) {
		// 	pieces = _white;
		// }

		for (i in 0...pieces.length) {
			var p:Piece = pieces.members[i];
			if (p.pID == pID) {
				p.kill();
				break;
			}
		}
	}

	private function removePiece(playerNum:Int) {
		var pieces:FlxTypedGroup<Piece>;
		if (playerNum % 2 == 0) {
			pieces = _black;
		}
		else {
			pieces = _white;
		}

		for (i in 0...pieces.length) {
			var p:Piece = pieces.members[i];
			if (p.playerNum == playerNum) {
				//pieces.remove(p, true);
				p.kill();
				//p = null;
				break;
			}
		}
	}

	public function updatePositions(playerNum, pID, xPos:Float, yPos:Float) {
		if (_playerNum == playerNum && pID == 0) {
			_socket.sendDestroyed(_playerPiece.pID);
			assignNewPiece();
			return;
		}
		else if (pID == 0) {
			removePiece(playerNum);
			return;
		}

		var x = xPos * 80.0;
		var y = yPos * 80.0;

		if (_playerNum % 2 == 0) {
			x = 560.0 - x;
			y = 560.0 - y;
			trace(xPos, yPos, playerNum);
		}

		var p:Piece = getPieceFromPID(pID);
		p.x = x;
		p.y = y;
	}

	private function assignPieceOfType(type:Int, pieces:FlxTypedGroup<Piece>) {
		if (type == -1) {
			//no piece left do something
			return;
		}

		for (i in 0...pieces.length) {
			var p:Piece = pieces.members[i];
			if (p.playerNum != -1) {
				continue;
			}

			if (p.type == type) {
				colorSprite(_playerNum, p.pID);
				break;
			}
		}
		determineMoves();
	}

	private function assignNewPiece() {
		resetBoardColor();

		var pawnCount = 0;
		var knightCount = 0;
		var bishopCount = 0;
		var rookCount = 0;
		var queenCount = 0;
		var kingCount = 0;

		var pieces;
		if (_playerNum % 2 == 0) {
			pieces = _black;
		}
		else {
			pieces = _white;
		}
		//pieces.remove(_playerPiece, true);
		_playerPiece.kill();
		//_playerPiece = null;

		for (i in 0...pieces.length) {
			var p:Piece = pieces.members[i];
			if (p.playerNum != -1) {
				continue;
			}

			if (p.type == 0) {
				pawnCount += 1;
			}
			else if (p.type == 1) {
				rookCount += 1;
			}
			else if (p.type == 2) {
				knightCount += 1;
			}
			else if (p.type == 3) {
				bishopCount += 1;
			}
			else if (p.type == 4) {
				queenCount += 1;
			}
			else {
				kingCount += 1;
			}
		}
			
		var getPieceType = -1;
		if (pawnCount >= 5) {
			getPieceType = 0;
		}
		else if (knightCount > 0) {
			getPieceType = 2;
		}
		else if (bishopCount > 0) {
			getPieceType = 3;
		}
		else if (rookCount > 0) {
			getPieceType = 1;
		}
		else if (queenCount > 0) {
			getPieceType = 4;
		}
		else if (kingCount > 0) {
			getPieceType = 5;
		}

		assignPieceOfType(getPieceType, pieces);
	}

	public function assignPlayerPiece() {
		_playerNum = _socket.playerNum;

		if (_playerControlling == -1) {
			if (_playerNum % 2 == 0) {
				flipBoard();
			}

			_playerControlling = startPosition(_playerNum);
			colorSprite(_playerNum, _playerControlling);
		}		
	}

	public function colorSprite(playerNum, pID) {
		var type = getPieceTypeFromPID(pID);
		if (type.playerNum != -1 || pID == 0) {
			return;
		}

		type.playerNum = playerNum;
		type.changeColor();

		if (_playerNum == playerNum) {
			_playerPiece = type;
			_playerControlling = pID;
			sendPosition();
		}
	}

	private function startPosition(n):Int {
		switch(n) {
		case 1: 	return 13;
		case 2: 	return 34;
		case 3: 	return 14;
		case 4: 	return 33;
		case 5: 	return 15;
		case 6: 	return 32;
		case 7:		return 12;
		case 8:		return 35;
		case 9:		return 11;
		case 10: 	return 36;
		default: 	return -1;
		}
	}

	private function setupBoard() {
		var bPawn = 30;
		var wPawn = 10;
		for (i in 0...8) {
			var b = new Pawn(i * 80, 80, 1);
			b.pID = bPawn;
			var w = new Pawn(i * 80, 480, 0);
			w.pID = wPawn;

			_white.add(w);
			_black.add(b);

			bPawn += 1;
			wPawn += 1;
		}

		var bRook = new Rook(0, 0, 1);
		bRook.pID = 40;
		var bRookR = new Rook(560, 0, 1);
		bRookR.pID = 47;
		_black.add(bRook);
		_black.add(bRookR);

		var wRook = new Rook(0, 560, 0);
		wRook.pID = 20;
		var wRookR = new Rook(560, 560, 0);
		wRookR.pID = 27;
		_white.add(wRook);
		_white.add(wRookR);

		var bKnight = new Knight(80, 0, 1);
		bKnight.pID = 41;
		var bKnightR = new Knight(480, 0, 1);
		bKnightR.pID = 46;
		_black.add(bKnight);
		_black.add(bKnightR);

		var wKnight = new Knight(80, 560, 0);
		wKnight.pID = 21;
		var wKnightR = new Knight(480, 560, 0);
		wKnightR.pID = 26;
		_white.add(wKnight);
		_white.add(wKnightR);

		var bBishop = new Bishop(160, 0, 1);
		bBishop.pID = 42;
		var bBishopR = new Bishop(400, 0, 1);
		bBishopR.pID = 45;
		_black.add(bBishop);
		_black.add(bBishopR);

		var wBishop = new Bishop(160, 560, 0);
		wBishop.pID = 22;
		var wBishopR = new Bishop(400, 560, 0);
		wBishopR.pID = 25;
		_white.add(wBishop);
		_white.add(wBishopR);

		var bQueen = new Queen(240, 0, 1);
		bQueen.pID = 43;
		var bKing = new King(320, 0, 1);
		bKing.pID = 44;
		_black.add(bQueen);
		_black.add(bKing);

		var wQueen = new Queen(240, 560, 0);
		wQueen.pID = 23;
		var wKing = new King(320, 560, 0);
		wKing.pID = 24;
		_white.add(wQueen);
		_white.add(wKing);

		add(_white);
		add(_black);
	}

	private function flipBoard() {
		for (i in 0..._white.length) {
			var t = _white.members[i];
			t.x = 560 - t.x;
			t.y = 560 - t.y;
		}

		for (i in 0..._black.length) {
			var t = _black.members[i];
			t.x = 560 - t.x;
			t.y = 560 - t.y;
		}
	}

	private function displayMoves(moves:Array<FlxPoint>) {
		for (p in moves) {
			for (i in 0..._board.length) {
				var box = _board.members[i];
				if (p.x == box.x && p.y == box.y) {
					box.playerNum = _playerNum;
					box.changeColor();
					break;
				}
			}
		}
		_playerMoves = moves;
	}

	public function determineMoves() {
		if (_playerNum == 101) {
			return;
		}

		resetBoardColor();

		var moves:Array<FlxPoint> = _playerPiece.getMoves(_white, _black);

		displayMoves(moves);
	}

	public function upgradePawn(pID: Int, pName: Int) {
		var piece = getPieceFromPID(pID - 50);
		var xPos = piece.x;
		var yPos = piece.y;

		var queen = new Queen(xPos, yPos, 0);

		if (pName % 2 == 0) {
			_black.remove(piece, true);
			queen.isWhite = false;
			_black.add(queen);
		}
		else {
			_white.remove(piece, true);
			queen.isWhite = true;
			_white.add(queen);
		}
		piece.kill();

		queen.pID = pName + 50;
		queen.playerNum = pName;
		queen.changeColor();
	}

	public function playerLeft(pID:Int) {
		var p = getPieceTypeFromPID(pID);
		if (p.playerNum % 2 == 1) {
			p.playerNum = 20;
		} else {
			p.playerNum = 21;
		}
		p.changeColor();
		p.playerNum = -1;
	}



	public function sendPosition(xMove:Float = -1.0, yMove:Float = -1.0) {
		var x = _playerPiece.x / 80;
		var y = _playerPiece.y / 80;

		_playerPiece.xPos = x;
		_playerPiece.yPos = y;

		var sendMoveX = xMove / 80.0;
		var sendMoveY = yMove / 80.0;

		if (xMove < 0.0) {
			sendMoveX = x;
			sendMoveY = y;
		}

		var m:Connect.Position = {
		    msg : "playerposition",
		    name : _playerNum,
		    xPos : x,
		    yPos : y,
		    xMove : sendMoveX,
		    yMove : sendMoveY,
		    pID : _playerPiece.pID
		};

		_socket.sendMessage(m);

		if (!_playerPiece.checkUpgrade()) {
			return;
		}

		//think of a better way to handle this
		var pID = _playerPiece.pID;
		if (pID >= 10 && pID <= 17) {
			var x = _playerPiece.x;
			var y = _playerPiece.y;

			_white.remove(_playerPiece, true);
			_playerPiece.kill();
			_playerPiece = new Queen(x, y, 0);
			_white.add(_playerPiece);
		}
		else if (pID >= 30 && pID <= 37) {
			var x = _playerPiece.x;
			var y = _playerPiece.y;

			_black.remove(_playerPiece, true);
			_playerPiece.kill();
			_playerPiece = new Queen(x, y, 1);
			_black.add(_playerPiece);
		}


		_playerPiece.playerNum = _playerNum;
		_playerPiece.pID = pID + 50;
		_playerPiece.changeColor();
		_playerControlling = _playerNum;

		_socket.upgradePawn(_playerPiece.pID);
	}
}


/*private function getKnightMoves(x:Float, y:Float, isWhite): Array<FlxPoint>  {
	var blockedBy = _black;
	if (isWhite) {
		blockedBy = _white;
	}

	//clockwise starting at bottom left move
	var tempMoves:Array<FlxPoint> = new Array();
	tempMoves.push(new FlxPoint(x - 160.0, y + 80.0));
	tempMoves.push(new FlxPoint(x - 80.0, y + 160.0));
	tempMoves.push(new FlxPoint(x + 80.0, y + 160.0));
	tempMoves.push(new FlxPoint(x + 160.0, y + 80.0));
	tempMoves.push(new FlxPoint(x + 160.0, y - 80.0));
	tempMoves.push(new FlxPoint(x + 80.0, y - 160.0));
	tempMoves.push(new FlxPoint(x - 80.0, y - 160.0));
	tempMoves.push(new FlxPoint(x - 160.0, y - 80.0));

	var retMoves:Array<FlxPoint> = new Array();
	for (move in tempMoves) {
		var isBlocked = false;
		for (i in 0...blockedBy.length) {
			var p:Piece = blockedBy.members[i];
			if (p.x == move.x && p.y == move.y) {
				isBlocked = true;
				break;
			}
		}
		if (!isBlocked) {
			retMoves.push(move);
		}
	}
	return retMoves;
}*/