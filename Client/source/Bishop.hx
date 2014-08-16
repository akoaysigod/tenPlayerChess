import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;
import flixel.util.FlxPoint;

class Bishop extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteBishop.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackBishop.png");
            isWhite = false;
        }

        type = 3;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayBishop.png");
        case 2:
            loadGraphic("assets/images/darkGrayBishop.png");
        case 3:
            loadGraphic("assets/images/blueBishop.png");
        case 4:
            loadGraphic("assets/images/orangeBishop.png");
        case 5:
            loadGraphic("assets/images/tealBishop.png");
        case 6:
            loadGraphic("assets/images/redBishop.png");
        case 7:
            loadGraphic("assets/images/purpleBishop.png");
        case 8:
            loadGraphic("assets/images/pinkBishop.png");
        case 9:
            loadGraphic("assets/images/yellowBishop.png");
        case 10:
            loadGraphic("assets/images/greenBishop.png");

        case 20:
            loadGraphic("assets/images/whiteBishop.png");
        case 21:
            loadGraphic("assets/images/blackBishop.png");
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

        var attackRU = false;
        var attackLU = false;
        var attackRD = false;
        var attackLD = false;
        var isBlockedRU = false;
        var isBlockedLU = false;
        var isBlockedRD = false;
        var isBlockedLD = false;

        for (i in 1...8) {
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