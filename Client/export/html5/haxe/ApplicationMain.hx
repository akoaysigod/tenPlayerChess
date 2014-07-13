package;


import openfl.Assets;


#if (!macro && !display)


import flash.display.Loader;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
import haxe.io.Path;
import js.html.HtmlElement;
import js.html.Image;
import flash.Lib;

@:access(flash.Lib) class ApplicationMain {
	
	
	public static var images (default, null) = new Map<String, Image> ();
	public static var urlLoaders = new Map <String, URLLoader> ();
	
	private static var assetsLoaded = 0;
	private static var preloader:NMEPreloader;
	private static var total = 0;
	
	//public static var loaders:Map <String, Loader>;
	//public static var urlLoaders:Map <String, URLLoader>;
	
	
	static function main () {
		
		#if munit
		var element = null;
		#else
		var element:HtmlElement = cast js.Browser.document.getElementById ("openfl-embed");
		#end
		
		flash.Lib.create (640, 640, element, 0);
		
		preloader = new NMEPreloader ();
		Lib.current.addChild (preloader);
		preloader.onInit ();
		
		var sounds = [];
		var id;
		
		
		var urlLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set("assets/music/music-goes-here.txt", urlLoader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteSquare.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteSquare.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackSquare.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackSquare.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whitePawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whitePawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/bluePawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/bluePawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blackQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blackQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/tealKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/tealKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/redBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/redBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowKnight.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangePawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangePawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/whiteKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/whiteKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayPawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayPawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purplePawn.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purplePawn.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayQueen.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayQueen.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/orangeBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/orangeBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/purpleBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/purpleBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/blueBishop.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/blueBishop.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkKing.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkKing.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/pinkRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/pinkRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/greenRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/greenRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/yellowRook.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/yellowRook.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/darkGrayMarker.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/darkGrayMarker.png", loader);
		total ++;
		
		
		
		var image = new Image ();
		id = "assets/images/lightGrayKnight.png";
		images.set (id, image);
		image.onload = image_onLoad;
		image.src = id;
		//var loader:Loader = new Loader();
		//loaders.set("assets/images/lightGrayKnight.png", loader);
		total ++;
		
		
		
		var urlLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set("assets/data/data-goes-here.txt", urlLoader);
		total ++;
		
		
		
		var urlLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set("assets/sounds/sounds-go-here.txt", urlLoader);
		total ++;
		
		
		
		
		
		
		
		var sound = Path.withoutExtension ("assets/sounds/beep.ogg");
		if (!sounds.remove (sound)) {
			total++;
		}
		sounds.push (sound);
		
		
		
		var sound = Path.withoutExtension ("assets/sounds/flixel.ogg");
		if (!sounds.remove (sound)) {
			total++;
		}
		sounds.push (sound);
		
		
		
		if (total == 0) {
			
			start ();
			
		} else {
			
			for (path in urlLoaders.keys ()) {
				
				var urlLoader = urlLoaders.get (path);
				urlLoader.addEventListener ("complete", loader_onComplete);
				urlLoader.load (new URLRequest (path));
				
			}
			
			for (soundName in sounds) {
				
				var sound = new Sound ();
				sound.addEventListener (Event.COMPLETE, sound_onComplete);
				sound.addEventListener (IOErrorEvent.IO_ERROR, sound_onIOError);
				sound.load (new URLRequest (soundName + ".ogg"));
				
			}
			
			
			
		}
		
	}
	
	
	private static function start ():Void {
		
		preloader.addEventListener (Event.COMPLETE, preloader_onComplete);
		preloader.onLoaded ();
		
	}
	
	
	private static function image_onLoad (_):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function loader_onComplete (event:Event):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function preloader_onComplete (event:Event):Void {
		
		preloader.removeEventListener (Event.COMPLETE, preloader_onComplete);
		Lib.current.removeChild (preloader);
		preloader = null;
		
		var hasMain = false;
		
		for (methodName in Type.getClassFields (Main)) {
			
			if (methodName == "main") {
				
				hasMain = true;
				break;
				
			}
			
		}
		
		if (hasMain) {
			
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
			
		} else {
			
			var instance:DocumentClass = Type.createInstance(DocumentClass, []);
			
			if (Std.is (instance, flash.display.DisplayObject)) {
				
				flash.Lib.current.addChild (cast instance);
				
			} else {
				
				trace ("Error: No entry point found");
				trace ("If you are using DCE with a static main, you may need to @:keep the function");
				
			}
			
		}
		
	}
	
	
	private static function sound_onComplete (event:Event):Void {
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
	private static function sound_onIOError (event:IOErrorEvent):Void {
		
		// if it is actually valid, it will load later when requested
		
		assetsLoaded++;
		
		preloader.onUpdate (assetsLoaded, total);
		
		if (assetsLoaded == total) {
			
			start ();
			
		}
		
	}
	
	
}


@:build(DocumentClass.build())
@:keep class DocumentClass extends Main {}


#elseif macro


import haxe.macro.Context;
import haxe.macro.Expr;


class DocumentClass {
	
	
	macro public static function build ():Array<Field> {
		
		var classType = Context.getLocalClass ().get ();
		var searchTypes = classType;
		
		while (searchTypes.superClass != null) {
			
			if (searchTypes.pack.length == 2 && searchTypes.pack[1] == "display" && searchTypes.name == "DisplayObject") {
				
				var fields = Context.getBuildFields ();
				var method = macro {
					
					this.stage = flash.Lib.current.stage;
					super ();
					dispatchEvent (new Event (Event.ADDED_TO_STAGE, false, false));
					
				}
				
				fields.push ({ name: "new", access: [ APublic ], kind: FFun({ args: [], expr: method, params: [], ret: macro :Void }), pos: Context.currentPos () });
				return fields;
				
			}
			
			searchTypes = searchTypes.superClass.t.get ();
			
		}
		
		return null;
		
	}
	
	
}


#else


import Main;

class ApplicationMain {
	
	
	public static function main () {
		
		
		
	}
	
	
}


#end