import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;

class Piece extends FlxSprite {
    public var pID:Int;
    public var playerNum:Int;

    public var xPos:Float;
    public var yPos:Float;

    public var isWhite:Bool;

    public var type:Int;

    public function new(x, y):Void {
        super(x, y);

        playerNum = -1;
    }
}