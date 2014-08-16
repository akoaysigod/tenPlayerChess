import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;
import flixel.util.FlxPoint;

class King extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteKing.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackKing.png");
            isWhite = false;
        }

        type = 5;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayKing.png");
        case 2:
            loadGraphic("assets/images/darkGrayKing.png");
        case 3:
            loadGraphic("assets/images/blueKing.png");
        case 4:
            loadGraphic("assets/images/orangeKing.png");
        case 5:
            loadGraphic("assets/images/tealKing.png");
        case 6:
            loadGraphic("assets/images/redKing.png");
        case 7:
            loadGraphic("assets/images/purpleKing.png");
        case 8:
            loadGraphic("assets/images/pinkKing.png");
        case 9:
            loadGraphic("assets/images/yellowKing.png");
        case 10:
            loadGraphic("assets/images/greenKing.png");

        case 20:
            loadGraphic("assets/images/whiteKing.png");
        case 21:
            loadGraphic("assets/images/blackKing.png");
        }
    }

    public function getMoves(white: FlxTypedGroup<Piece>, black:FlxTypedGroup<Piece>): Array<FlxPoint> {
        var moves: Array<FlxPoint> = new Array();
        var blocked = black;
        var attack = white;

        if (isWhite) {
            blocked = white;
            attack = black;
        }

        var rX = x + 80.0;
        var lX = x - 80.0;
        var uY = y + 80.0;
        var dY = y - 80.0;

        //you should figure out how to loop on a grid in a circle someday

        //WASD
        if (checkPieces(rX, y, attack, false)) {
            moves.push(new FlxPoint(rX, y));
        }
        if (checkPieces(lX, y, attack, false)) {
            moves.push(new FlxPoint(lX, y));
        }
        if (checkPieces(x, uY, attack, false)) {
            moves.push(new FlxPoint(x, uY));
        }
        if (checkPieces(x, dY, attack, false)) {
            moves.push(new FlxPoint(x, dY));
        }
        //DIAGONAL
        if (checkPieces(rX, uY, attack, false)) {
            moves.push(new FlxPoint(rX, uY));
        }
        if (checkPieces(lX, uY, attack, false)) {
            moves.push(new FlxPoint(lX, uY));
        }
        if (checkPieces(rX, dY, attack, false)) {
            moves.push(new FlxPoint(rX, dY));
        }
        if (checkPieces(lX, dY, attack, false)) {
            moves.push(new FlxPoint(lX, dY));
        }

        //WASD
        if (!checkPieces(rX, y, blocked, true)) {
            moves.push(new FlxPoint(rX, y));
        }
        if (!checkPieces(lX, y, blocked, true)) {
            moves.push(new FlxPoint(lX, y));
        }
        if (!checkPieces(x, uY, blocked, true)) {
            moves.push(new FlxPoint(x, uY));
        }
        if (!checkPieces(x, dY, blocked, true)) {
            moves.push(new FlxPoint(x, dY));
        }
        //DIAGONAL
        if (!checkPieces(rX, uY, blocked, true)) {
            moves.push(new FlxPoint(rX, uY));
        }
        if (!checkPieces(lX, uY, blocked, true)) {
            moves.push(new FlxPoint(lX, uY));
        }
        if (!checkPieces(rX, dY, blocked, true)) {
            moves.push(new FlxPoint(rX, dY));
        }
        if (!checkPieces(lX, dY, blocked, true)) {
            moves.push(new FlxPoint(lX, dY));
        }
        return moves;
    }
}