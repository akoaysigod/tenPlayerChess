import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

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
}