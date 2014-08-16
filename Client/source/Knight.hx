import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.util.FlxPoint;
import flixel.group.FlxTypedGroup;

class Knight extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteKnight.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackKnight.png");
            isWhite = false;
        }

        type = 2;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayKnight.png");
        case 2:
            loadGraphic("assets/images/darkGrayKnight.png");
        case 3:
            loadGraphic("assets/images/blueKnight.png");
        case 4:
            loadGraphic("assets/images/orangeKnight.png");
        case 5:
            loadGraphic("assets/images/tealKnight.png");
        case 6:
            loadGraphic("assets/images/redKnight.png");
        case 7:
            loadGraphic("assets/images/purpleKnight.png");
        case 8:
            loadGraphic("assets/images/pinkKnight.png");
        case 9:
            loadGraphic("assets/images/yellowKnight.png");
        case 10:
            loadGraphic("assets/images/greenKnight.png");

        case 20:
            loadGraphic("assets/images/whiteKnight.png");
        case 21:
            loadGraphic("assets/images/blackKnight.png");
        }
    }

    public function getMoves(white: FlxTypedGroup<Piece>, black:FlxTypedGroup<Piece>) {
        var blockedBy = black;
        if (isWhite) {
            blockedBy = white;
        }

        //clockwise starting at bottom left move
        var tempMoves:Array<FlxPoint> = new Array();
        if (!checkPieces(x - 160.0, y + 80.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x - 160.0, y + 80.0));
        }
        if (!checkPieces(x - 80.0, y + 160.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x - 80.0, y + 160.0));
        }
        if (!checkPieces(x + 80.0, y + 160.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x + 80.0, y + 160.0));
        }
        if (!checkPieces(x + 160.0, y + 80.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x + 160.0, y + 80.0));
        }
        if (!checkPieces(x + 160.0, y - 80.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x + 160.0, y - 80.0));
        }
        if (!checkPieces(x + 80.0, y - 160.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x + 80.0, y - 160.0));
        }
        if (!checkPieces(x - 80.0, y - 160.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x - 80.0, y - 160.0));
        }
        if (!checkPieces(x - 160.0, y - 80.0, blockedBy, true)) {
            tempMoves.push(new FlxPoint(x - 160.0, y - 80.0));
        }

/*
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
*/
        return tempMoves;
    }
}