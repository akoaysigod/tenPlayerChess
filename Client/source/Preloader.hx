import flixel.system.FlxPreloaderBase;
import flash.display.Bitmap;
import flash.display.BitmapData;

@:bitmap("assets/images/logoblack.png")
private class Logo extends BitmapData {}

class Preloader extends FlxPreloaderBase {
    private var _logo:Bitmap;

    public function new() {
        super();
        
        _logo = new Bitmap(new Logo(320, 320));
        _logo.x = getWidth() / 4.0;
        _logo.y = getHeight() / 4.0;
        addChild(_logo);

    }

    private function destroy() {
        _logo = null;
    }
       
    private function create() {

    }
        
    private function update(Percent:Float) {
        
    }
}