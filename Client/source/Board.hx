import flixel.FlxSprite;

class Board extends FlxSprite {
    private var _blackWhite:Int;
    public var playerNum:Int;
    private var _isWhite:Bool;
    public var selectable:Bool;

    public function new(x, y, blackWhite):Void {
        super(x, y);

        if (blackWhite == 0) { 
            loadGraphic("assets/images/whiteSquare.png");
            _isWhite = true;
        }
        else {
            loadGraphic("assets/images/blackSquare.png");
            _isWhite = false;
        }

        selectable = false;
    }

    public function defaultColor() {
        selectable = false;

        if (_isWhite) {
            loadGraphic("assets/images/whiteSquare.png");
        }
        else {
            loadGraphic("assets/images/blackSquare.png");
        }
    }

    public function changeColor() {
        selectable = true;
        switch(playerNum) {
        case 1:
            loadGraphic("assets/images/lightGrayMarker.png");
        case 2:
            loadGraphic("assets/images/darkGrayMarker.png");
        case 3:
            loadGraphic("assets/images/blueMarker.png");
        case 4:
            loadGraphic("assets/images/orangeMarker.png");
        case 5:
            loadGraphic("assets/images/tealMarker.png");
        case 6:
            loadGraphic("assets/images/redMarker.png");
        case 7:
            loadGraphic("assets/images/purpleMarker.png");
        case 8:
            loadGraphic("assets/images/pinkMarker.png");
        case 9:
            loadGraphic("assets/images/yellowMarker.png");
        case 10:
            loadGraphic("assets/images/greenMarker.png");
        }
    }
}