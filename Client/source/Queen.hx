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

        //WASD
        var attackR = false;
        var attackL = false;
        var attackU = false;
        var attackD = false;
        var isBlockedR = false;
        var isBlockedL = false;
        var isBlockedU = false;
        var isBlockedD = false;

        //DIAGONAL
        var attackRU = false;
        var attackLU = false;
        var attackRD = false;
        var attackLD = false;
        var isBlockedRU = false;
        var isBlockedLU = false;
        var isBlockedRD = false;
        var isBlockedLD = false;

        for (i in 1...8) {
            //WASD START
            var rX = x + (i * 80);
            var lX = x - (i * 80);
            var uY = y + (i * 80);
            var dY = y - (i * 80);

            var canAttackR = checkPieces(rX, y, attack, false);
            var canAttackL = checkPieces(lX, y, attack, false);
            var canAttackU = checkPieces(x, uY, attack, false);
            var canAttackD = checkPieces(x, dY, attack, false);

            if (canAttackR  && !attackR) {
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

            //DIAGONAL START
            var canAttackRU = checkPieces(rX, uY, attack, false);
            var canAttackLU = checkPieces(lX, uY, attack, false);
            var canAttackRD = checkPieces(rX, dY, attack, false);
            var canAttackLD = checkPieces(lX, dY, attack, false);

            if (canAttackRU && !attackRU) {
                moves.push(new FlxPoint(rX, uY));
                attackRU = true;
            }

            if (canAttackLU && !attackLU) {
                moves.push(new FlxPoint(lX, uY));
                attackLU = true;
            }

            if (canAttackRD && !attackRD) {
                moves.push(new FlxPoint(rX, dY));
                attackRD = true;
            }

            if (canAttackLD && !attackLD) {
                moves.push(new FlxPoint(lX, dY));
                attackLD = true;
            }

            var blockedRU = checkPieces(rX, uY, blocked, true);
            if (blockedRU) isBlockedRU = true;
            var blockedLU = checkPieces(lX, uY, blocked, true);
            if (blockedLU) isBlockedLU = true;
            var blockedRD = checkPieces(rX, dY, blocked, true);
            if (blockedRD) isBlockedRD = true;
            var blockedLD = checkPieces(lX, dY, blocked, true);
            if (blockedLD) isBlockedLD = true;

            if (!isBlockedRU && !blockedRU) {
                if (!attackRU) moves.push(new FlxPoint(rX, uY));
            }

            if (!isBlockedLU && !blockedLU) {
                if (!attackLU) moves.push(new FlxPoint(lX, uY));
            }


            if (!isBlockedRD && !blockedRD) {
                if (!attackRD) moves.push(new FlxPoint(rX, dY));
            }

            if (!isBlockedLD && !blockedLD) {
                if (!attackLD) moves.push(new FlxPoint(lX, dY));
            }
        }
        return moves;
    }
}