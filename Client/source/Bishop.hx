import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

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
}