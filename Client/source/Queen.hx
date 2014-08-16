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

            var canAttackR = checkPieces(rX, y, attack);
            var canAttackL = checkPieces(lX, y, attack);
            var canAttackU = checkPieces(x, uY, attack);
            var canAttackD = checkPieces(x, dY, attack);

            if (canAttackR && rX <= 560.0 && !attackR) {
                moves.push(new FlxPoint(rX, y));
                attackR = true;
            }

            if (canAttackL && lX >= 0.0 && !attackL) {
                moves.push(new FlxPoint(lX, y));
                attackL = true;
            }

            if (canAttackU && uY <= 560.0 && !attackU) {
                moves.push(new FlxPoint(x, uY));
                attackU = true;
            }

            if (canAttackD && dY >= 0.0 && !attackD) {
                moves.push(new FlxPoint(x, dY));
                attackD = true;
            }

            var blockedR = checkPieces(rX, y, blocked);
            if (blockedR) isBlockedR = true;
            var blockedL = checkPieces(lX, y, blocked);
            if (blockedL) isBlockedL = true;
            var blockedU = checkPieces(x, uY, blocked);
            if (blockedU) isBlockedU = true;
            var blockedD = checkPieces(x, dY, blocked);
            if (blockedD) isBlockedD = true;

            if (!isBlockedR && !blockedR && rX <= 560.0) {
                if (!attackR) moves.push(new FlxPoint(rX, y));
            }

            if (!isBlockedL && !blockedL && lX >= 0.0) {
                if (!attackL) moves.push(new FlxPoint(lX, y));
            }

            if (!isBlockedU && !blockedU && uY <= 560.0) {
                if (!attackU) moves.push(new FlxPoint(x, uY));
            }

            if (!isBlockedD && !blockedD && dY >= 0.0) {
                if (!attackD) moves.push(new FlxPoint(x, dY));
            }

            //DIAGONAL START
            var rX = x + (i * 80);
            var lX = x - (i * 80);
            var uY = y + (i * 80);
            var dY = y - (i * 80);

            var canAttackRU = checkPieces(rX, uY, attack);
            var canAttackLU = checkPieces(lX, uY, attack);
            var canAttackRD = checkPieces(rX, dY, attack);
            var canAttackLD = checkPieces(lX, dY, attack);

            if (canAttackRU && !attackRU) {
                if (rX <= 560.0 && uY <= 560.0) {
                    moves.push(new FlxPoint(rX, uY));
                    attackRU = true;
                }
            }

            if (canAttackLU && !attackLU) {
                if (lX >= 0.0 && uY <= 560.0) {
                    moves.push(new FlxPoint(lX, uY));
                    attackLU = true;
                }
            }

            if (canAttackRD && !attackRD) {
                if (rX <= 560.0 && dY >= 0.0) {
                    moves.push(new FlxPoint(rX, dY));
                    attackRD = true;
                }
            }

            if (canAttackLD && !attackLD) {
                if (lX >= 0.0 && dY >= 0.0) {
                    moves.push(new FlxPoint(lX, dY));
                    attackLD = true;
                }
            }

            var blockedRU = checkPieces(rX, uY, blocked);
            if (blockedRU) isBlockedRU = true;
            var blockedLU = checkPieces(lX, uY, blocked);
            if (blockedLU) isBlockedLU = true;
            var blockedRD = checkPieces(rX, dY, blocked);
            if (blockedRD) isBlockedRD = true;
            var blockedLD = checkPieces(lX, dY, blocked);
            if (blockedLD) isBlockedLD = true;

            if (!isBlockedRU && !blockedRU) {
                if (rX <= 560.0 && uY <= 560.0) {
                    if (!attackRU) moves.push(new FlxPoint(rX, uY));
                }
            }

            if (!isBlockedLU && !blockedLU) {
                if (lX >= 0.0 && uY <= 560.0) {
                    if (!attackLU) moves.push(new FlxPoint(lX, uY));
                }
            }


            if (!isBlockedRD && !blockedRD) {
                if (rX <= 560.0 && dY >= 0.0) {
                    if (!attackRD) moves.push(new FlxPoint(rX, dY));
                }
            }

            if (!isBlockedLD && !blockedLD) {
                if (lX >= 0.0 && dY >= 0.0) {
                    if (!attackLD) moves.push(new FlxPoint(lX, dY));
                }
            }
        }
        return moves;
    }
}