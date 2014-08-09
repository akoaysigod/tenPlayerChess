package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.group.FlxGroup;

class MenuState extends FlxState {
	private var _title:FlxText;
	private var _kings:FlxGroup;

	override public function create():Void {
		FlxG.cameras.bgColor = 0xFFFFFFFF;

		_title = new FlxText(0.0, 0.0, "Chess!", 100);
		_title.y = _title.height - 75.0;
		_title.x = (FlxG.width / 2.0) - (_title.fieldWidth / 2.0);
		_title.alignment = "center";
		_title.setBorderStyle(FlxText.BORDER_OUTLINE, 0xFFCC66, 1.0);
		_title.color = 0x6698FF;
		_title.antialiasing = true;
		add(_title);

		_kings = new FlxGroup();
		var x = 50.0;
		var y = _title.y + 100.0;
		for (i in 0...10) {
			var k = new King(x, y, 0);
			k.setGraphicSize(50, 50);
			k.playerNum = i + 1;
			k.changeColor();
			_kings.add(k);

			x += 50.0;
		}
		add(_kings);

		super.create();
	}
	

	override public function destroy():Void {
		_title = null;
		_kings.destroy();
		_kings = null;
		super.destroy();
	}

	override public function update():Void {
		super.update();
	}	
}