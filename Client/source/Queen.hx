import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;
import flixel.util.FlxPoint;

class Queen extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteQueen.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackQueen.png");
            isWhite = false;
        }

        type = 4;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayQueen.png");
        case 2:
            loadGraphic("assets/images/darkGrayQueen.png");
        case 3:
            loadGraphic("assets/images/blueQueen.png");
        case 4:
            loadGraphic("assets/images/orangeQueen.png");
        case 5:
            loadGraphic("assets/images/tealQueen.png");
        case 6:
            loadGraphic("assets/images/redQueen.png");
        case 7:
            loadGraphic("assets/images/purpleQueen.png");
        case 8:
            loadGraphic("assets/images/pinkQueen.png");
        case 9:
            loadGraphic("assets/images/yellowQueen.png");
        case 10:
            loadGraphic("assets/images/greenQueen.png");

        case 20:
            loadGraphic("assets/images/whiteQueen.png");
        case 21:
            loadGraphic("assets/images/blackQueen.png");
        }
    }

    /*
    notes:
    this gets ALL attacks in a line currently since it doens't block
    based off whether or not an enemy piece is in the way

    also upgrading pawns is weird and sometimes they turn into kings? wtf
    need to flip positions also as it puts them on the wrong side of the board
    or at least that's what I think is happening
    */

    public function getMoves(white: FlxTypedGroup<Piece>, black:FlxTypedGroup<Piece>): Array<FlxPoint> {
        var moves: Array<FlxPoint> = new Array();
        var blocked: FlxTypedGroup<Piece>;
        var attack: FlxTypedGroup<Piece>;

        if (isWhite) {
            blocked = white;
            attack = black;
        }
        else {
            blocked = black;
            attack = white;
        }

        for (i in 1...8) {
            var rX = x + (i * 80);
            var lX = x - (i * 80);
            var uY = y + (i * 80);
            var dY = y - (i * 80);

            
            var canAttackR = checkPieces(rX, y, attack);
            var canAttackL = checkPieces(lX, y, attack);
            var canAttackU = checkPieces(x, uY, attack);
            var canAttackD = checkPieces(x, dY, attack);

            if (canAttackR && rX < 560.0) {
                moves.push(new FlxPoint(rX, y));
            }

            if (canAttackL && lX > 80.0) {
                moves.push(new FlxPoint(lX, y));
            }

            if (canAttackU && uY > 80.0) {
                moves.push(new FlxPoint(x, uY));
            }

            if (canAttackD && dY > 560.0) {
                moves.push(new FlxPoint(x, dY));
            }

            var blockedR = checkPieces(rX, y, blocked);
            var blockedL = checkPieces(lX, y, blocked);
            var blockedU = checkPieces(x, uY, blocked);
            var blockedD = checkPieces(x, dY, blocked);

            if (!blockedR && rX < 560.0) {
                moves.push(new FlxPoint(rX, y));
            }

            if (!blockedL && lX > 80.0) {
                moves.push(new FlxPoint(lX, y));
            }

            if (!blockedU && uY > 80.0) {
                moves.push(new FlxPoint(x, uY));
            }

            if (!blockedD && dY > 560.0) {
                moves.push(new FlxPoint(x, dY));
            }
        }

        return moves;
    }
}