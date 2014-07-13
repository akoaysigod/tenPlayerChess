package nme;


import openfl.Assets;


class AssetData {
	//
	public static var className:Map<String, Dynamic> = new Map<String, Dynamic>();
	public static var library:Map<String, LibraryType> = new Map<String, LibraryType>();
	public static var path:Map<String, String> = new Map<String, String>();
	public static var type:Map<String, AssetType> = new Map<String, AssetType>();
	//
	private static var initialized:Bool = false;
	
	public static function initialize ():Void {
		if (!initialized) {
			path.set("assets/music/music-goes-here.txt", "assets/music/music-goes-here.txt");
			type.set("assets/music/music-goes-here.txt", "text".toUpperCase());
			path.set("assets/images/whiteSquare.png", "assets/images/whiteSquare.png");
			type.set("assets/images/whiteSquare.png", "image".toUpperCase());
			path.set("assets/images/blackSquare.png", "assets/images/blackSquare.png");
			type.set("assets/images/blackSquare.png", "image".toUpperCase());
			path.set("assets/images/images-go-here.txt", "assets/images/images-go-here.txt");
			type.set("assets/images/images-go-here.txt", "text".toUpperCase());
			path.set("assets/data/data-goes-here.txt", "assets/data/data-goes-here.txt");
			type.set("assets/data/data-goes-here.txt", "text".toUpperCase());
			path.set("assets/sounds/sounds-go-here.txt", "assets/sounds/sounds-go-here.txt");
			type.set("assets/sounds/sounds-go-here.txt", "text".toUpperCase());
			path.set("assets/sounds/flixel.mp3", "assets/sounds/flixel.mp3");
			type.set("assets/sounds/flixel.mp3", "music".toUpperCase());
			path.set("assets/sounds/beep.mp3", "assets/sounds/beep.mp3");
			type.set("assets/sounds/beep.mp3", "music".toUpperCase());
			path.set("assets/sounds/beep.ogg", "assets/sounds/beep.ogg");
			type.set("assets/sounds/beep.ogg", "sound".toUpperCase());
			path.set("assets/sounds/flixel.ogg", "assets/sounds/flixel.ogg");
			type.set("assets/sounds/flixel.ogg", "sound".toUpperCase());
			
			
			initialized = true;
		}
	}
}


