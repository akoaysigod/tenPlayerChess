import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

class Pawn extends Piece {
    public var xStart:Float;
    public var yStart:Float;

    public function new(x:Float, y:Float, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whitePawn.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackPawn.png");
            isWhite = false;
        }

        if (isWhite) {
            xStart = x;
            yStart = y;
        }
        else { 
            xStart = 560 - x;
            yStart = 560 - y;
        }

        type = 0;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayPawn.png");
        case 2:
            loadGraphic("assets/images/darkGrayPawn.png");
        case 3:
            loadGraphic("assets/images/bluePawn.png");
        case 4:
            loadGraphic("assets/images/orangePawn.png");
        case 5:
            loadGraphic("assets/images/tealPawn.png");
        case 6:
            loadGraphic("assets/images/redPawn.png");
        case 7:
            loadGraphic("assets/images/purplePawn.png");
        case 8:
            loadGraphic("assets/images/pinkPawn.png");
        case 9:
            loadGraphic("assets/images/yellowPawn.png");
        case 10:
            loadGraphic("assets/images/greenPawn.png");

        case 20:
            loadGraphic("assets/images/whitePawn.png");
        case 21:
            loadGraphic("assets/images/blackPawn.png");
        }
    }
}