import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

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
}