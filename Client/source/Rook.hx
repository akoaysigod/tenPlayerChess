import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;
import flixel.util.FlxPoint;

class Rook extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteRook.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackRook.png");
            isWhite = false;
        }

        type = 1;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayRook.png");
        case 2:
            loadGraphic("assets/images/darkGrayRook.png");
        case 3:
            loadGraphic("assets/images/blueRook.png");
        case 4:
            loadGraphic("assets/images/orangeRook.png");
        case 5:
            loadGraphic("assets/images/tealRook.png");
        case 6:
            loadGraphic("assets/images/redRook.png");
        case 7:
            loadGraphic("assets/images/purpleRook.png");
        case 8:
            loadGraphic("assets/images/pinkRook.png");
        case 9:
            loadGraphic("assets/images/yellowRook.png");
        case 10:
            loadGraphic("assets/images/greenRook.png");

        case 20:
            loadGraphic("assets/images/whiteRook.png");
        case 21:
            loadGraphic("assets/images/blackRook.png");
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

        var attackR = false;
        var attackL = false;
        var attackU = false;
        var attackD = false;
        var isBlockedR = false;
        var isBlockedL = false;
        var isBlockedU = false;
        var isBlockedD = false;

        for (i in 1...8) {
            var rX = x + (i * 80);
            var lX = x - (i * 80);
            var uY = y + (i * 80);
            var dY = y - (i * 80);
            
            var canAttackR = checkPieces(rX, y, attack, false);
            var canAttackL = checkPieces(lX, y, attack, false);
            var canAttackU = checkPieces(x, uY, attack, false);
            var canAttackD = checkPieces(x, dY, attack, false);

            if (canAttackR && !attackR) {
                moves.push(new FlxPoint(rX, y));
                attackR = true;
            }

            if (canAttackL && !attackL) {
                moves.push(new FlxPoint(lX, y));
                attackL = true;
            }

            if (canAttackU && !attackU) {
                moves.push(new FlxPoint(x, uY));
                attackU = true;
            }

            if (canAttackD && !attackD) {
                moves.push(new FlxPoint(x, dY));
                attackD = true;
            }

            var blockedR = checkPieces(rX, y, blocked, true);
            if (blockedR) isBlockedR = true;
            var blockedL = checkPieces(lX, y, blocked, true);
            if (blockedL) isBlockedL = true;
            var blockedU = checkPieces(x, uY, blocked, true);
            if (blockedU) isBlockedU = true;
            var blockedD = checkPieces(x, dY, blocked, true);
            if (blockedD) isBlockedD = true;

            if (!isBlockedR && !blockedR) {
                if (!attackR) moves.push(new FlxPoint(rX, y));
            }

            if (!isBlockedL && !blockedL) {
                if (!attackL) moves.push(new FlxPoint(lX, y));
            }

            if (!isBlockedU && !blockedU) {
                if (!attackU) moves.push(new FlxPoint(x, uY));
            }

            if (!isBlockedD && !blockedD) {
                if (!attackD) moves.push(new FlxPoint(x, dY));
            }
        }
        return moves;
    }
}