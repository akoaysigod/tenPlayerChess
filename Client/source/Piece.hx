import openfl.Assets;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.group.FlxTypedGroup;


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

    public function checkPieces(xPos, yPos, pieces:FlxTypedGroup<Piece>) {
        for (i in 0...pieces.length) {
            var w = pieces.members[i];
            if (w.x == xPos && w.y == yPos) {
                return true;
            }
        }
        return false;
    }

    public function checkUpgrade():Bool {
        if (type != 0) {
            return false;
        }

        if (y < 160.0) {
            return true;
        }
        return false;
    }
}