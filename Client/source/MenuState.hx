package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.group.FlxGroup;
import flixel.util.FlxPoint;

class MenuState extends FlxState {
	private var _title:FlxText;
	private var _kings:FlxGroup;
	private var _play:FlxSprite;
	private var _highlight:Bool;

	override public function create():Void {
		FlxG.cameras.bgColor = 0x34282C;

		_title = new FlxText(0.0, 0.0, "Chess!", 100);
		_title.y = _title.height - 75.0;
		_title.x = (FlxG.width / 2.0) - (_title.fieldWidth / 2.0);
		_title.alignment = "center";
		_title.setBorderStyle(FlxText.BORDER_OUTLINE, 0x2B65EC, 1.0);
		_title.color = 0xFF8C00;
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

		//FlxButton doesn't work on HTML target =(
		//Neither does the MouseEventManager, yay =(
		_play = new FlxSprite(0.0, FlxG.height / 2.0);
		_play.loadGraphic("assets/images/joinGameButtonNormal.png");
		_play.x = (FlxG.width / 2.0) - (_play.width / 2.0);
		_highlight = false;
		add(_play);

		super.create();
	}
	

	override public function destroy():Void {
		_title = null;
		_kings.destroy();
		_kings = null;
		_play = null;
		super.destroy();
	}

	override public function update():Void {
		var x = FlxG.mouse.x;
		var y = FlxG.mouse.y;
		var point = new FlxPoint(x, y);

		if (_play.overlapsPoint(point)) {
			if (!_highlight) {
				_highlight = true;
				_play.loadGraphic("assets/images/joinGameButtonHighlight.png");
			}

			if (FlxG.mouse.justPressed) {
				_play.loadGraphic("assets/images/joinGameButtonPressed.png");
			}
			else if (FlxG.mouse.justReleased) {
				joinGame();
			}
		}
		else {
			if (_highlight) {
				_highlight = false;
				_play.loadGraphic("assets/images/joinGameButtonNormal.png");
			}
		}

		super.update();
	}	

	
	private function joinGame():Void {
		//transitions don't seem to do anything on HTML5
		//FlxG.cameras.fade(0xFF00FF, 2.0, false, onFade, false);

		var s:PlayState = new PlayState();
		FlxG.switchState(s);
	}

	//private function onFade():Void {}
}