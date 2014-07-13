import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

class King extends Piece {
    public function new(x, y, blackWhite) {
        super(x, y);

        if (blackWhite == 0) {
            loadGraphic("assets/images/whiteKing.png");
            isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackKing.png");
            isWhite = false;
        }

        type = 5;
    }

    public function changeColor() {
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayKing.png");
        case 2:
            loadGraphic("assets/images/darkGrayKing.png");
        case 3:
            loadGraphic("assets/images/blueKing.png");
        case 4:
            loadGraphic("assets/images/orangeKing.png");
        case 5:
            loadGraphic("assets/images/tealKing.png");
        case 6:
            loadGraphic("assets/images/redKing.png");
        case 7:
            loadGraphic("assets/images/purpleKing.png");
        case 8:
            loadGraphic("assets/images/pinkKing.png");
        case 9:
            loadGraphic("assets/images/yellowKing.png");
        case 10:
            loadGraphic("assets/images/greenKing.png");

        case 20:
            loadGraphic("assets/images/whiteKing.png");
        case 21:
            loadGraphic("assets/images/blackKing.png");
        }
    }
}