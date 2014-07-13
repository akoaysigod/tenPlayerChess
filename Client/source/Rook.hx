import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

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
}