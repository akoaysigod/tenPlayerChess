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

    public function getMoves(white: FlxTypedGroup<Piece>, black:FlxTypedGroup<Piece>): Array<FlxPoint> {
        var moves: Array<FlxPoint> = new Array();
        var blocked = black;
        var attack = white;

        if (isWhite) {
            blocked = white;
            attack = black;
        }

        var foundRight = false;
        var foundLeft = false;
        var foundUp = false;
        var foundDown = false;
        var isBlockedR = false;
        var isBlockedL = false;
        var isBlockedU = false;
        var isBlockedD = false;

        for (i in 1...8) {
            var rX = x + (i * 80);
            var lX = x - (i * 80);
            var uY = y + (i * 80);
            var dY = y - (i * 80);
            
            var canAttackR = checkPieces(rX, y, attack);
            var canAttackL = checkPieces(lX, y, attack);
            var canAttackU = checkPieces(x, uY, attack);
            var canAttackD = checkPieces(x, dY, attack);

            if (canAttackR && rX < 560.0 && !foundRight) {
                moves.push(new FlxPoint(rX, y));
                foundRight = true;
            }

            if (canAttackL && lX > 80.0 && !foundLeft) {
                moves.push(new FlxPoint(lX, y));
                foundLeft = true;
            }

            if (canAttackU && uY > 80.0 && !foundUp) {
                moves.push(new FlxPoint(x, uY));
                foundUp = true;
            }

            if (canAttackD && dY > 560.0 && !foundDown) {
                moves.push(new FlxPoint(x, dY));
                foundDown = true;
            }

            var blockedR = checkPieces(rX, y, blocked);
            if (blockedR) { isBlockedR = true; }
            var blockedL = checkPieces(lX, y, blocked);
            if (blockedL) { isBlockedL = true; }
            var blockedU = checkPieces(x, uY, blocked);
            if (blockedU) { isBlockedU = true; }
            var blockedD = checkPieces(x, dY, blocked);
            if (blockedD) { isBlockedD = true; }

            if (!isBlockedR && !blockedR && rX < 560.0) {
                moves.push(new FlxPoint(rX, y));
                isBlockedR = true;
            }

            if (!isBlockedL && !blockedL && lX > 80.0) {
                moves.push(new FlxPoint(lX, y));
                isBlockedL = true;
            }

            if (!isBlockedU && !blockedU && uY > 80.0) {
                moves.push(new FlxPoint(x, uY));
                isBlockedU = true;
            }

            if (!isBlockedD && !blockedD && dY > 560.0) {
                moves.push(new FlxPoint(x, dY));
                isBlockedD = true;
            }
        }

        return moves;
    }
}