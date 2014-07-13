package;


import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.MovieClip;
import flash.text.Font;
import flash.media.Sound;
import flash.net.URLRequest;
import flash.utils.ByteArray;
import haxe.Unserializer;
import openfl.Assets;

#if (flash || js)
import flash.display.Loader;
import flash.events.Event;
import flash.net.URLLoader;
#end

#if ios
import openfl.utils.SystemPath;
#end


@:access(flash.media.Sound)
class DefaultAssetLibrary extends AssetLibrary {
	
	
	public static var className (default, null) = new Map <String, Dynamic> ();
	public static var path (default, null) = new Map <String, String> ();
	public static var type (default, null) = new Map <String, AssetType> ();
	
	public function new () {
		
		super ();
		
		#if flash
		
		className.set ("assets/music/music-goes-here.txt", __ASSET__assets_music_music_goes_here_txt);
		type.set ("assets/music/music-goes-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("assets/images/whiteSquare.png", __ASSET__assets_images_whitesquare_png);
		type.set ("assets/images/whiteSquare.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackSquare.png", __ASSET__assets_images_blacksquare_png);
		type.set ("assets/images/blackSquare.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenKnight.png", __ASSET__assets_images_greenknight_png);
		type.set ("assets/images/greenKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whiteRook.png", __ASSET__assets_images_whiterook_png);
		type.set ("assets/images/whiteRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueQueen.png", __ASSET__assets_images_bluequeen_png);
		type.set ("assets/images/blueQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealQueen.png", __ASSET__assets_images_tealqueen_png);
		type.set ("assets/images/tealQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowPawn.png", __ASSET__assets_images_yellowpawn_png);
		type.set ("assets/images/yellowPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayQueen.png", __ASSET__assets_images_darkgrayqueen_png);
		type.set ("assets/images/darkGrayQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackPawn.png", __ASSET__assets_images_blackpawn_png);
		type.set ("assets/images/blackPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackKing.png", __ASSET__assets_images_blackking_png);
		type.set ("assets/images/blackKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkQueen.png", __ASSET__assets_images_pinkqueen_png);
		type.set ("assets/images/pinkQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeQueen.png", __ASSET__assets_images_orangequeen_png);
		type.set ("assets/images/orangeQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whitePawn.png", __ASSET__assets_images_whitepawn_png);
		type.set ("assets/images/whitePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealKnight.png", __ASSET__assets_images_tealknight_png);
		type.set ("assets/images/tealKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleRook.png", __ASSET__assets_images_purplerook_png);
		type.set ("assets/images/purpleRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowQueen.png", __ASSET__assets_images_yellowqueen_png);
		type.set ("assets/images/yellowQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueKnight.png", __ASSET__assets_images_blueknight_png);
		type.set ("assets/images/blueKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redMarker.png", __ASSET__assets_images_redmarker_png);
		type.set ("assets/images/redMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleMarker.png", __ASSET__assets_images_purplemarker_png);
		type.set ("assets/images/purpleMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenKing.png", __ASSET__assets_images_greenking_png);
		type.set ("assets/images/greenKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/bluePawn.png", __ASSET__assets_images_bluepawn_png);
		type.set ("assets/images/bluePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealPawn.png", __ASSET__assets_images_tealpawn_png);
		type.set ("assets/images/tealPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenMarker.png", __ASSET__assets_images_greenmarker_png);
		type.set ("assets/images/greenMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeKing.png", __ASSET__assets_images_orangeking_png);
		type.set ("assets/images/orangeKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenPawn.png", __ASSET__assets_images_greenpawn_png);
		type.set ("assets/images/greenPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackBishop.png", __ASSET__assets_images_blackbishop_png);
		type.set ("assets/images/blackBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayBishop.png", __ASSET__assets_images_darkgraybishop_png);
		type.set ("assets/images/darkGrayBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealBishop.png", __ASSET__assets_images_tealbishop_png);
		type.set ("assets/images/tealBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowMarker.png", __ASSET__assets_images_yellowmarker_png);
		type.set ("assets/images/yellowMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayKing.png", __ASSET__assets_images_lightgrayking_png);
		type.set ("assets/images/lightGrayKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowKing.png", __ASSET__assets_images_yellowking_png);
		type.set ("assets/images/yellowKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowBishop.png", __ASSET__assets_images_yellowbishop_png);
		type.set ("assets/images/yellowBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleQueen.png", __ASSET__assets_images_purplequeen_png);
		type.set ("assets/images/purpleQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackRook.png", __ASSET__assets_images_blackrook_png);
		type.set ("assets/images/blackRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redRook.png", __ASSET__assets_images_redrook_png);
		type.set ("assets/images/redRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealRook.png", __ASSET__assets_images_tealrook_png);
		type.set ("assets/images/tealRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayMarker.png", __ASSET__assets_images_lightgraymarker_png);
		type.set ("assets/images/lightGrayMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkKnight.png", __ASSET__assets_images_pinkknight_png);
		type.set ("assets/images/pinkKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleKing.png", __ASSET__assets_images_purpleking_png);
		type.set ("assets/images/purpleKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayPawn.png", __ASSET__assets_images_lightgraypawn_png);
		type.set ("assets/images/lightGrayPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackKnight.png", __ASSET__assets_images_blackknight_png);
		type.set ("assets/images/blackKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redKnight.png", __ASSET__assets_images_redknight_png);
		type.set ("assets/images/redKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whiteBishop.png", __ASSET__assets_images_whitebishop_png);
		type.set ("assets/images/whiteBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleKnight.png", __ASSET__assets_images_purpleknight_png);
		type.set ("assets/images/purpleKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blackQueen.png", __ASSET__assets_images_blackqueen_png);
		type.set ("assets/images/blackQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeRook.png", __ASSET__assets_images_orangerook_png);
		type.set ("assets/images/orangeRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkBishop.png", __ASSET__assets_images_pinkbishop_png);
		type.set ("assets/images/pinkBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redQueen.png", __ASSET__assets_images_redqueen_png);
		type.set ("assets/images/redQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueMarker.png", __ASSET__assets_images_bluemarker_png);
		type.set ("assets/images/blueMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayKing.png", __ASSET__assets_images_darkgrayking_png);
		type.set ("assets/images/darkGrayKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealMarker.png", __ASSET__assets_images_tealmarker_png);
		type.set ("assets/images/tealMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenBishop.png", __ASSET__assets_images_greenbishop_png);
		type.set ("assets/images/greenBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whiteQueen.png", __ASSET__assets_images_whitequeen_png);
		type.set ("assets/images/whiteQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayRook.png", __ASSET__assets_images_lightgrayrook_png);
		type.set ("assets/images/lightGrayRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/tealKing.png", __ASSET__assets_images_tealking_png);
		type.set ("assets/images/tealKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeKnight.png", __ASSET__assets_images_orangeknight_png);
		type.set ("assets/images/orangeKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redPawn.png", __ASSET__assets_images_redpawn_png);
		type.set ("assets/images/redPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redKing.png", __ASSET__assets_images_redking_png);
		type.set ("assets/images/redKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whiteKnight.png", __ASSET__assets_images_whiteknight_png);
		type.set ("assets/images/whiteKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayKnight.png", __ASSET__assets_images_darkgrayknight_png);
		type.set ("assets/images/darkGrayKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/redBishop.png", __ASSET__assets_images_redbishop_png);
		type.set ("assets/images/redBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowKnight.png", __ASSET__assets_images_yellowknight_png);
		type.set ("assets/images/yellowKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangePawn.png", __ASSET__assets_images_orangepawn_png);
		type.set ("assets/images/orangePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueKing.png", __ASSET__assets_images_blueking_png);
		type.set ("assets/images/blueKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkPawn.png", __ASSET__assets_images_pinkpawn_png);
		type.set ("assets/images/pinkPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenQueen.png", __ASSET__assets_images_greenqueen_png);
		type.set ("assets/images/greenQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueRook.png", __ASSET__assets_images_bluerook_png);
		type.set ("assets/images/blueRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeMarker.png", __ASSET__assets_images_orangemarker_png);
		type.set ("assets/images/orangeMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/whiteKing.png", __ASSET__assets_images_whiteking_png);
		type.set ("assets/images/whiteKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayBishop.png", __ASSET__assets_images_lightgraybishop_png);
		type.set ("assets/images/lightGrayBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkMarker.png", __ASSET__assets_images_pinkmarker_png);
		type.set ("assets/images/pinkMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayPawn.png", __ASSET__assets_images_darkgraypawn_png);
		type.set ("assets/images/darkGrayPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayRook.png", __ASSET__assets_images_darkgrayrook_png);
		type.set ("assets/images/darkGrayRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purplePawn.png", __ASSET__assets_images_purplepawn_png);
		type.set ("assets/images/purplePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayQueen.png", __ASSET__assets_images_lightgrayqueen_png);
		type.set ("assets/images/lightGrayQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/orangeBishop.png", __ASSET__assets_images_orangebishop_png);
		type.set ("assets/images/orangeBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/purpleBishop.png", __ASSET__assets_images_purplebishop_png);
		type.set ("assets/images/purpleBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/blueBishop.png", __ASSET__assets_images_bluebishop_png);
		type.set ("assets/images/blueBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkKing.png", __ASSET__assets_images_pinkking_png);
		type.set ("assets/images/pinkKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/pinkRook.png", __ASSET__assets_images_pinkrook_png);
		type.set ("assets/images/pinkRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/greenRook.png", __ASSET__assets_images_greenrook_png);
		type.set ("assets/images/greenRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/yellowRook.png", __ASSET__assets_images_yellowrook_png);
		type.set ("assets/images/yellowRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/darkGrayMarker.png", __ASSET__assets_images_darkgraymarker_png);
		type.set ("assets/images/darkGrayMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/images/lightGrayKnight.png", __ASSET__assets_images_lightgrayknight_png);
		type.set ("assets/images/lightGrayKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		className.set ("assets/data/data-goes-here.txt", __ASSET__assets_data_data_goes_here_txt);
		type.set ("assets/data/data-goes-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("assets/sounds/sounds-go-here.txt", __ASSET__assets_sounds_sounds_go_here_txt);
		type.set ("assets/sounds/sounds-go-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		className.set ("assets/sounds/flixel.mp3", __ASSET__assets_sounds_flixel_mp3);
		type.set ("assets/sounds/flixel.mp3", Reflect.field (AssetType, "music".toUpperCase ()));
		className.set ("assets/sounds/beep.mp3", __ASSET__assets_sounds_beep_mp3);
		type.set ("assets/sounds/beep.mp3", Reflect.field (AssetType, "music".toUpperCase ()));
		className.set ("assets/sounds/beep.ogg", __ASSET__assets_sounds_beep_ogg);
		type.set ("assets/sounds/beep.ogg", Reflect.field (AssetType, "sound".toUpperCase ()));
		className.set ("assets/sounds/flixel.ogg", __ASSET__assets_sounds_flixel_ogg);
		type.set ("assets/sounds/flixel.ogg", Reflect.field (AssetType, "sound".toUpperCase ()));
		
		
		#elseif html5
		
		addExternal("assets/music/music-goes-here.txt", "text", "assets/music/music-goes-here.txt");
		addExternal("assets/images/whiteSquare.png", "image", "assets/images/whiteSquare.png");
		addExternal("assets/images/blackSquare.png", "image", "assets/images/blackSquare.png");
		addExternal("assets/images/greenKnight.png", "image", "assets/images/greenKnight.png");
		addExternal("assets/images/whiteRook.png", "image", "assets/images/whiteRook.png");
		addExternal("assets/images/blueQueen.png", "image", "assets/images/blueQueen.png");
		addExternal("assets/images/tealQueen.png", "image", "assets/images/tealQueen.png");
		addExternal("assets/images/yellowPawn.png", "image", "assets/images/yellowPawn.png");
		addExternal("assets/images/darkGrayQueen.png", "image", "assets/images/darkGrayQueen.png");
		addExternal("assets/images/blackPawn.png", "image", "assets/images/blackPawn.png");
		addExternal("assets/images/blackKing.png", "image", "assets/images/blackKing.png");
		addExternal("assets/images/pinkQueen.png", "image", "assets/images/pinkQueen.png");
		addExternal("assets/images/orangeQueen.png", "image", "assets/images/orangeQueen.png");
		addExternal("assets/images/whitePawn.png", "image", "assets/images/whitePawn.png");
		addExternal("assets/images/tealKnight.png", "image", "assets/images/tealKnight.png");
		addExternal("assets/images/purpleRook.png", "image", "assets/images/purpleRook.png");
		addExternal("assets/images/yellowQueen.png", "image", "assets/images/yellowQueen.png");
		addExternal("assets/images/blueKnight.png", "image", "assets/images/blueKnight.png");
		addExternal("assets/images/redMarker.png", "image", "assets/images/redMarker.png");
		addExternal("assets/images/purpleMarker.png", "image", "assets/images/purpleMarker.png");
		addExternal("assets/images/greenKing.png", "image", "assets/images/greenKing.png");
		addExternal("assets/images/bluePawn.png", "image", "assets/images/bluePawn.png");
		addExternal("assets/images/tealPawn.png", "image", "assets/images/tealPawn.png");
		addExternal("assets/images/greenMarker.png", "image", "assets/images/greenMarker.png");
		addExternal("assets/images/orangeKing.png", "image", "assets/images/orangeKing.png");
		addExternal("assets/images/greenPawn.png", "image", "assets/images/greenPawn.png");
		addExternal("assets/images/blackBishop.png", "image", "assets/images/blackBishop.png");
		addExternal("assets/images/darkGrayBishop.png", "image", "assets/images/darkGrayBishop.png");
		addExternal("assets/images/tealBishop.png", "image", "assets/images/tealBishop.png");
		addExternal("assets/images/yellowMarker.png", "image", "assets/images/yellowMarker.png");
		addExternal("assets/images/lightGrayKing.png", "image", "assets/images/lightGrayKing.png");
		addExternal("assets/images/yellowKing.png", "image", "assets/images/yellowKing.png");
		addExternal("assets/images/yellowBishop.png", "image", "assets/images/yellowBishop.png");
		addExternal("assets/images/purpleQueen.png", "image", "assets/images/purpleQueen.png");
		addExternal("assets/images/blackRook.png", "image", "assets/images/blackRook.png");
		addExternal("assets/images/redRook.png", "image", "assets/images/redRook.png");
		addExternal("assets/images/tealRook.png", "image", "assets/images/tealRook.png");
		addExternal("assets/images/lightGrayMarker.png", "image", "assets/images/lightGrayMarker.png");
		addExternal("assets/images/pinkKnight.png", "image", "assets/images/pinkKnight.png");
		addExternal("assets/images/purpleKing.png", "image", "assets/images/purpleKing.png");
		addExternal("assets/images/lightGrayPawn.png", "image", "assets/images/lightGrayPawn.png");
		addExternal("assets/images/blackKnight.png", "image", "assets/images/blackKnight.png");
		addExternal("assets/images/redKnight.png", "image", "assets/images/redKnight.png");
		addExternal("assets/images/whiteBishop.png", "image", "assets/images/whiteBishop.png");
		addExternal("assets/images/purpleKnight.png", "image", "assets/images/purpleKnight.png");
		addExternal("assets/images/blackQueen.png", "image", "assets/images/blackQueen.png");
		addExternal("assets/images/orangeRook.png", "image", "assets/images/orangeRook.png");
		addExternal("assets/images/pinkBishop.png", "image", "assets/images/pinkBishop.png");
		addExternal("assets/images/redQueen.png", "image", "assets/images/redQueen.png");
		addExternal("assets/images/blueMarker.png", "image", "assets/images/blueMarker.png");
		addExternal("assets/images/darkGrayKing.png", "image", "assets/images/darkGrayKing.png");
		addExternal("assets/images/tealMarker.png", "image", "assets/images/tealMarker.png");
		addExternal("assets/images/greenBishop.png", "image", "assets/images/greenBishop.png");
		addExternal("assets/images/whiteQueen.png", "image", "assets/images/whiteQueen.png");
		addExternal("assets/images/lightGrayRook.png", "image", "assets/images/lightGrayRook.png");
		addExternal("assets/images/tealKing.png", "image", "assets/images/tealKing.png");
		addExternal("assets/images/orangeKnight.png", "image", "assets/images/orangeKnight.png");
		addExternal("assets/images/redPawn.png", "image", "assets/images/redPawn.png");
		addExternal("assets/images/redKing.png", "image", "assets/images/redKing.png");
		addExternal("assets/images/whiteKnight.png", "image", "assets/images/whiteKnight.png");
		addExternal("assets/images/darkGrayKnight.png", "image", "assets/images/darkGrayKnight.png");
		addExternal("assets/images/redBishop.png", "image", "assets/images/redBishop.png");
		addExternal("assets/images/yellowKnight.png", "image", "assets/images/yellowKnight.png");
		addExternal("assets/images/orangePawn.png", "image", "assets/images/orangePawn.png");
		addExternal("assets/images/blueKing.png", "image", "assets/images/blueKing.png");
		addExternal("assets/images/pinkPawn.png", "image", "assets/images/pinkPawn.png");
		addExternal("assets/images/greenQueen.png", "image", "assets/images/greenQueen.png");
		addExternal("assets/images/blueRook.png", "image", "assets/images/blueRook.png");
		addExternal("assets/images/orangeMarker.png", "image", "assets/images/orangeMarker.png");
		addExternal("assets/images/whiteKing.png", "image", "assets/images/whiteKing.png");
		addExternal("assets/images/lightGrayBishop.png", "image", "assets/images/lightGrayBishop.png");
		addExternal("assets/images/pinkMarker.png", "image", "assets/images/pinkMarker.png");
		addExternal("assets/images/darkGrayPawn.png", "image", "assets/images/darkGrayPawn.png");
		addExternal("assets/images/darkGrayRook.png", "image", "assets/images/darkGrayRook.png");
		addExternal("assets/images/purplePawn.png", "image", "assets/images/purplePawn.png");
		addExternal("assets/images/lightGrayQueen.png", "image", "assets/images/lightGrayQueen.png");
		addExternal("assets/images/orangeBishop.png", "image", "assets/images/orangeBishop.png");
		addExternal("assets/images/purpleBishop.png", "image", "assets/images/purpleBishop.png");
		addExternal("assets/images/blueBishop.png", "image", "assets/images/blueBishop.png");
		addExternal("assets/images/pinkKing.png", "image", "assets/images/pinkKing.png");
		addExternal("assets/images/pinkRook.png", "image", "assets/images/pinkRook.png");
		addExternal("assets/images/greenRook.png", "image", "assets/images/greenRook.png");
		addExternal("assets/images/yellowRook.png", "image", "assets/images/yellowRook.png");
		addExternal("assets/images/darkGrayMarker.png", "image", "assets/images/darkGrayMarker.png");
		addExternal("assets/images/lightGrayKnight.png", "image", "assets/images/lightGrayKnight.png");
		addExternal("assets/data/data-goes-here.txt", "text", "assets/data/data-goes-here.txt");
		addExternal("assets/sounds/sounds-go-here.txt", "text", "assets/sounds/sounds-go-here.txt");
		addExternal("assets/sounds/flixel.mp3", "music", "assets/sounds/flixel.mp3");
		addExternal("assets/sounds/beep.mp3", "music", "assets/sounds/beep.mp3");
		addExternal("assets/sounds/beep.ogg", "sound", "assets/sounds/beep.ogg");
		addExternal("assets/sounds/flixel.ogg", "sound", "assets/sounds/flixel.ogg");
		
		
		#else
		
		#if (windows || mac || linux)
		
		var loadManifest = false;
		
		className.set ("assets/music/music-goes-here.txt", __ASSET__assets_music_music_goes_here_txt);
		type.set ("assets/music/music-goes-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("assets/images/whiteSquare.png", __ASSET__assets_images_whitesquare_png);
		type.set ("assets/images/whiteSquare.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackSquare.png", __ASSET__assets_images_blacksquare_png);
		type.set ("assets/images/blackSquare.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenKnight.png", __ASSET__assets_images_greenknight_png);
		type.set ("assets/images/greenKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whiteRook.png", __ASSET__assets_images_whiterook_png);
		type.set ("assets/images/whiteRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueQueen.png", __ASSET__assets_images_bluequeen_png);
		type.set ("assets/images/blueQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealQueen.png", __ASSET__assets_images_tealqueen_png);
		type.set ("assets/images/tealQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowPawn.png", __ASSET__assets_images_yellowpawn_png);
		type.set ("assets/images/yellowPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayQueen.png", __ASSET__assets_images_darkgrayqueen_png);
		type.set ("assets/images/darkGrayQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackPawn.png", __ASSET__assets_images_blackpawn_png);
		type.set ("assets/images/blackPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackKing.png", __ASSET__assets_images_blackking_png);
		type.set ("assets/images/blackKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkQueen.png", __ASSET__assets_images_pinkqueen_png);
		type.set ("assets/images/pinkQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeQueen.png", __ASSET__assets_images_orangequeen_png);
		type.set ("assets/images/orangeQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whitePawn.png", __ASSET__assets_images_whitepawn_png);
		type.set ("assets/images/whitePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealKnight.png", __ASSET__assets_images_tealknight_png);
		type.set ("assets/images/tealKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleRook.png", __ASSET__assets_images_purplerook_png);
		type.set ("assets/images/purpleRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowQueen.png", __ASSET__assets_images_yellowqueen_png);
		type.set ("assets/images/yellowQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueKnight.png", __ASSET__assets_images_blueknight_png);
		type.set ("assets/images/blueKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redMarker.png", __ASSET__assets_images_redmarker_png);
		type.set ("assets/images/redMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleMarker.png", __ASSET__assets_images_purplemarker_png);
		type.set ("assets/images/purpleMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenKing.png", __ASSET__assets_images_greenking_png);
		type.set ("assets/images/greenKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/bluePawn.png", __ASSET__assets_images_bluepawn_png);
		type.set ("assets/images/bluePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealPawn.png", __ASSET__assets_images_tealpawn_png);
		type.set ("assets/images/tealPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenMarker.png", __ASSET__assets_images_greenmarker_png);
		type.set ("assets/images/greenMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeKing.png", __ASSET__assets_images_orangeking_png);
		type.set ("assets/images/orangeKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenPawn.png", __ASSET__assets_images_greenpawn_png);
		type.set ("assets/images/greenPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackBishop.png", __ASSET__assets_images_blackbishop_png);
		type.set ("assets/images/blackBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayBishop.png", __ASSET__assets_images_darkgraybishop_png);
		type.set ("assets/images/darkGrayBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealBishop.png", __ASSET__assets_images_tealbishop_png);
		type.set ("assets/images/tealBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowMarker.png", __ASSET__assets_images_yellowmarker_png);
		type.set ("assets/images/yellowMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayKing.png", __ASSET__assets_images_lightgrayking_png);
		type.set ("assets/images/lightGrayKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowKing.png", __ASSET__assets_images_yellowking_png);
		type.set ("assets/images/yellowKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowBishop.png", __ASSET__assets_images_yellowbishop_png);
		type.set ("assets/images/yellowBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleQueen.png", __ASSET__assets_images_purplequeen_png);
		type.set ("assets/images/purpleQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackRook.png", __ASSET__assets_images_blackrook_png);
		type.set ("assets/images/blackRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redRook.png", __ASSET__assets_images_redrook_png);
		type.set ("assets/images/redRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealRook.png", __ASSET__assets_images_tealrook_png);
		type.set ("assets/images/tealRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayMarker.png", __ASSET__assets_images_lightgraymarker_png);
		type.set ("assets/images/lightGrayMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkKnight.png", __ASSET__assets_images_pinkknight_png);
		type.set ("assets/images/pinkKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleKing.png", __ASSET__assets_images_purpleking_png);
		type.set ("assets/images/purpleKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayPawn.png", __ASSET__assets_images_lightgraypawn_png);
		type.set ("assets/images/lightGrayPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackKnight.png", __ASSET__assets_images_blackknight_png);
		type.set ("assets/images/blackKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redKnight.png", __ASSET__assets_images_redknight_png);
		type.set ("assets/images/redKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whiteBishop.png", __ASSET__assets_images_whitebishop_png);
		type.set ("assets/images/whiteBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleKnight.png", __ASSET__assets_images_purpleknight_png);
		type.set ("assets/images/purpleKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blackQueen.png", __ASSET__assets_images_blackqueen_png);
		type.set ("assets/images/blackQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeRook.png", __ASSET__assets_images_orangerook_png);
		type.set ("assets/images/orangeRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkBishop.png", __ASSET__assets_images_pinkbishop_png);
		type.set ("assets/images/pinkBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redQueen.png", __ASSET__assets_images_redqueen_png);
		type.set ("assets/images/redQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueMarker.png", __ASSET__assets_images_bluemarker_png);
		type.set ("assets/images/blueMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayKing.png", __ASSET__assets_images_darkgrayking_png);
		type.set ("assets/images/darkGrayKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealMarker.png", __ASSET__assets_images_tealmarker_png);
		type.set ("assets/images/tealMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenBishop.png", __ASSET__assets_images_greenbishop_png);
		type.set ("assets/images/greenBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whiteQueen.png", __ASSET__assets_images_whitequeen_png);
		type.set ("assets/images/whiteQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayRook.png", __ASSET__assets_images_lightgrayrook_png);
		type.set ("assets/images/lightGrayRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/tealKing.png", __ASSET__assets_images_tealking_png);
		type.set ("assets/images/tealKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeKnight.png", __ASSET__assets_images_orangeknight_png);
		type.set ("assets/images/orangeKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redPawn.png", __ASSET__assets_images_redpawn_png);
		type.set ("assets/images/redPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redKing.png", __ASSET__assets_images_redking_png);
		type.set ("assets/images/redKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whiteKnight.png", __ASSET__assets_images_whiteknight_png);
		type.set ("assets/images/whiteKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayKnight.png", __ASSET__assets_images_darkgrayknight_png);
		type.set ("assets/images/darkGrayKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/redBishop.png", __ASSET__assets_images_redbishop_png);
		type.set ("assets/images/redBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowKnight.png", __ASSET__assets_images_yellowknight_png);
		type.set ("assets/images/yellowKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangePawn.png", __ASSET__assets_images_orangepawn_png);
		type.set ("assets/images/orangePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueKing.png", __ASSET__assets_images_blueking_png);
		type.set ("assets/images/blueKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkPawn.png", __ASSET__assets_images_pinkpawn_png);
		type.set ("assets/images/pinkPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenQueen.png", __ASSET__assets_images_greenqueen_png);
		type.set ("assets/images/greenQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueRook.png", __ASSET__assets_images_bluerook_png);
		type.set ("assets/images/blueRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeMarker.png", __ASSET__assets_images_orangemarker_png);
		type.set ("assets/images/orangeMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/whiteKing.png", __ASSET__assets_images_whiteking_png);
		type.set ("assets/images/whiteKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayBishop.png", __ASSET__assets_images_lightgraybishop_png);
		type.set ("assets/images/lightGrayBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkMarker.png", __ASSET__assets_images_pinkmarker_png);
		type.set ("assets/images/pinkMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayPawn.png", __ASSET__assets_images_darkgraypawn_png);
		type.set ("assets/images/darkGrayPawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayRook.png", __ASSET__assets_images_darkgrayrook_png);
		type.set ("assets/images/darkGrayRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purplePawn.png", __ASSET__assets_images_purplepawn_png);
		type.set ("assets/images/purplePawn.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayQueen.png", __ASSET__assets_images_lightgrayqueen_png);
		type.set ("assets/images/lightGrayQueen.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/orangeBishop.png", __ASSET__assets_images_orangebishop_png);
		type.set ("assets/images/orangeBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/purpleBishop.png", __ASSET__assets_images_purplebishop_png);
		type.set ("assets/images/purpleBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/blueBishop.png", __ASSET__assets_images_bluebishop_png);
		type.set ("assets/images/blueBishop.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkKing.png", __ASSET__assets_images_pinkking_png);
		type.set ("assets/images/pinkKing.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/pinkRook.png", __ASSET__assets_images_pinkrook_png);
		type.set ("assets/images/pinkRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/greenRook.png", __ASSET__assets_images_greenrook_png);
		type.set ("assets/images/greenRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/yellowRook.png", __ASSET__assets_images_yellowrook_png);
		type.set ("assets/images/yellowRook.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/darkGrayMarker.png", __ASSET__assets_images_darkgraymarker_png);
		type.set ("assets/images/darkGrayMarker.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/images/lightGrayKnight.png", __ASSET__assets_images_lightgrayknight_png);
		type.set ("assets/images/lightGrayKnight.png", Reflect.field (AssetType, "image".toUpperCase ()));
		
		className.set ("assets/data/data-goes-here.txt", __ASSET__assets_data_data_goes_here_txt);
		type.set ("assets/data/data-goes-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("assets/sounds/sounds-go-here.txt", __ASSET__assets_sounds_sounds_go_here_txt);
		type.set ("assets/sounds/sounds-go-here.txt", Reflect.field (AssetType, "text".toUpperCase ()));
		
		className.set ("assets/sounds/flixel.mp3", __ASSET__assets_sounds_flixel_mp3);
		type.set ("assets/sounds/flixel.mp3", Reflect.field (AssetType, "music".toUpperCase ()));
		
		className.set ("assets/sounds/beep.mp3", __ASSET__assets_sounds_beep_mp3);
		type.set ("assets/sounds/beep.mp3", Reflect.field (AssetType, "music".toUpperCase ()));
		
		className.set ("assets/sounds/beep.ogg", __ASSET__assets_sounds_beep_ogg);
		type.set ("assets/sounds/beep.ogg", Reflect.field (AssetType, "sound".toUpperCase ()));
		
		className.set ("assets/sounds/flixel.ogg", __ASSET__assets_sounds_flixel_ogg);
		type.set ("assets/sounds/flixel.ogg", Reflect.field (AssetType, "sound".toUpperCase ()));
		
		
		#else
		
		var loadManifest = true;
		
		#end
		
		if (loadManifest) {
			try {
				
				#if blackberry
				var bytes = ByteArray.readFile ("app/native/manifest");
				#elseif tizen
				var bytes = ByteArray.readFile ("../res/manifest");
				#elseif emscripten
				var bytes = ByteArray.readFile ("assets/manifest");
				#else
				var bytes = ByteArray.readFile ("manifest");
				#end
				
				if (bytes != null) {
					
					bytes.position = 0;
					
					if (bytes.length > 0) {
						
						var data = bytes.readUTFBytes (bytes.length);
						
						if (data != null && data.length > 0) {
							
							var manifest:Array<AssetData> = Unserializer.run (data);
							
							for (asset in manifest) {
								
								if (!className.exists(asset.id)) {
									
									path.set (asset.id, asset.path);
									type.set (asset.id, asset.type);
									
								}
							}
						
						}
					
					}
				
				} else {
				
					trace ("Warning: Could not load asset manifest");
				
				}
			
			} catch (e:Dynamic) {
			
				trace ("Warning: Could not load asset manifest");
			
			}
		
		}
		
		#end
		
	}
	
	
	#if html5
	private function addEmbed(id:String, kind:String, value:Dynamic):Void {
		className.set(id, value);
		type.set(id, Reflect.field(AssetType, kind.toUpperCase()));
	}
	
	
	private function addExternal(id:String, kind:String, value:String):Void {
		path.set(id, value);
		type.set(id, Reflect.field(AssetType, kind.toUpperCase()));
	}
	#end
	
	
	public override function exists (id:String, type:AssetType):Bool {
		
		var assetType = DefaultAssetLibrary.type.get (id);
		
		#if pixi
		
		if (assetType == IMAGE) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
		#end
		
		if (assetType != null) {
			
			if (assetType == type || ((type == SOUND || type == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if ((assetType == BINARY || assetType == TEXT) && type == BINARY) {
				
				return true;
				
			} else if (path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (type == BINARY || type == null) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getBitmapData (id:String):BitmapData {
		
		#if pixi
		
		return BitmapData.fromImage (path.get (id));
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), BitmapData);
		
		#elseif openfl_html5
		
		return BitmapData.fromImage (ApplicationMain.images.get (path.get (id)));
		
		#elseif js
		
		return cast (ApplicationMain.loaders.get (path.get (id)).contentLoaderInfo.content, Bitmap).bitmapData;
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), BitmapData);
		else return BitmapData.load (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif openfl_html5
		
		return null;
		
		#elseif js
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}

		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if pixi
		
		return null;
		
		#elseif (flash || js)
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists(id)) {
			var fontClass = className.get(id);
			Font.registerFont(fontClass);
			return cast (Type.createInstance (fontClass, []), Font);
		} else return new Font (path.get (id));
		
		#end
		
	}
	
	
	public override function getMusic (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		var sound = new Sound ();
		sound.__buffer = true;
		sound.load (new URLRequest (path.get (id)));
		return sound; 
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}
	
	
	public override function getPath (id:String):String {
		
		#if ios
		
		return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		#else
		
		return path.get (id);
		
		#end
		
	}
	
	
	public override function getSound (id:String):Sound {
		
		#if pixi
		
		return null;
		
		#elseif (flash)
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif js
		
		return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		else return new Sound (new URLRequest (path.get (id)), null, type.get (id) == MUSIC);
		
		#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if js
		
		var bytes:ByteArray = null;
		var data = ApplicationMain.urlLoaders.get (path.get (id)).data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:AssetType):Bool {
		
		#if flash
		
		if (type != AssetType.MUSIC && type != AssetType.SOUND) {
			
			return className.exists (id);
			
		}
		
		#end
		
		return true;
		
	}
	
	
	public override function loadBitmapData (id:String, handler:BitmapData -> Void):Void {
		
		#if pixi
		
		handler (getBitmapData (id));
		
		#elseif (flash || js)
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBitmapData (id));
			
		}
		
		#else
		
		handler (getBitmapData (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if pixi
		
		handler (getBytes (id));
		
		#elseif (flash || js)
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		handler (getBytes (id));
		
		#end
		
	}
	
	
	public override function loadFont (id:String, handler:Font -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getFont (id));
			
		//}
		
		#else
		
		handler (getFont (id));
		
		#end
		
	}
	
	
	public override function loadMusic (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}
	
	
	public override function loadSound (id:String, handler:Sound -> Void):Void {
		
		#if (flash || js)
		
		/*if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
				handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {*/
			
			handler (getSound (id));
			
		//}
		
		#else
		
		handler (getSound (id));
		
		#end
		
	}
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		#if js
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				handler (event.currentTarget.data);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}
		
		#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		#end
		
	}
	
	
}


#if pixi
#elseif flash

@:keep class __ASSET__assets_music_music_goes_here_txt extends null { }
@:keep class __ASSET__assets_images_whitesquare_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blacksquare_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whiterook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_bluequeen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgrayqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangequeen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whitepawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purplerook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blueknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redmarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purplemarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_bluepawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenmarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangeking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgraybishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowmarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgrayking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purplequeen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgraymarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purpleking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgraypawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whitebishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purpleknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blackqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangerook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_bluemarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgrayking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealmarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whitequeen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgrayrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_tealking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangeknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whiteknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgrayknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_redbishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangepawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_blueking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkpawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_bluerook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangemarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_whiteking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgraybishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkmarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgraypawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgrayrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purplepawn_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgrayqueen_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_orangebishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_purplebishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_bluebishop_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkking_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_pinkrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_greenrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_yellowrook_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_darkgraymarker_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_images_lightgrayknight_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep class __ASSET__assets_data_data_goes_here_txt extends null { }
@:keep class __ASSET__assets_sounds_sounds_go_here_txt extends null { }
@:keep class __ASSET__assets_sounds_flixel_mp3 extends null { }
@:keep class __ASSET__assets_sounds_beep_mp3 extends null { }
@:keep class __ASSET__assets_sounds_beep_ogg extends null { }
@:keep class __ASSET__assets_sounds_flixel_ogg extends null { }


#elseif html5






























































































#elseif (windows || mac || linux)


@:file("assets/music/music-goes-here.txt") class __ASSET__assets_music_music_goes_here_txt extends flash.utils.ByteArray {}
@:bitmap("assets/images/whiteSquare.png") class __ASSET__assets_images_whitesquare_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackSquare.png") class __ASSET__assets_images_blacksquare_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenKnight.png") class __ASSET__assets_images_greenknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whiteRook.png") class __ASSET__assets_images_whiterook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueQueen.png") class __ASSET__assets_images_bluequeen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealQueen.png") class __ASSET__assets_images_tealqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowPawn.png") class __ASSET__assets_images_yellowpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayQueen.png") class __ASSET__assets_images_darkgrayqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackPawn.png") class __ASSET__assets_images_blackpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackKing.png") class __ASSET__assets_images_blackking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkQueen.png") class __ASSET__assets_images_pinkqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeQueen.png") class __ASSET__assets_images_orangequeen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whitePawn.png") class __ASSET__assets_images_whitepawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealKnight.png") class __ASSET__assets_images_tealknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleRook.png") class __ASSET__assets_images_purplerook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowQueen.png") class __ASSET__assets_images_yellowqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueKnight.png") class __ASSET__assets_images_blueknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redMarker.png") class __ASSET__assets_images_redmarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleMarker.png") class __ASSET__assets_images_purplemarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenKing.png") class __ASSET__assets_images_greenking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/bluePawn.png") class __ASSET__assets_images_bluepawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealPawn.png") class __ASSET__assets_images_tealpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenMarker.png") class __ASSET__assets_images_greenmarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeKing.png") class __ASSET__assets_images_orangeking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenPawn.png") class __ASSET__assets_images_greenpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackBishop.png") class __ASSET__assets_images_blackbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayBishop.png") class __ASSET__assets_images_darkgraybishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealBishop.png") class __ASSET__assets_images_tealbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowMarker.png") class __ASSET__assets_images_yellowmarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayKing.png") class __ASSET__assets_images_lightgrayking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowKing.png") class __ASSET__assets_images_yellowking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowBishop.png") class __ASSET__assets_images_yellowbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleQueen.png") class __ASSET__assets_images_purplequeen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackRook.png") class __ASSET__assets_images_blackrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redRook.png") class __ASSET__assets_images_redrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealRook.png") class __ASSET__assets_images_tealrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayMarker.png") class __ASSET__assets_images_lightgraymarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkKnight.png") class __ASSET__assets_images_pinkknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleKing.png") class __ASSET__assets_images_purpleking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayPawn.png") class __ASSET__assets_images_lightgraypawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackKnight.png") class __ASSET__assets_images_blackknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redKnight.png") class __ASSET__assets_images_redknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whiteBishop.png") class __ASSET__assets_images_whitebishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleKnight.png") class __ASSET__assets_images_purpleknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blackQueen.png") class __ASSET__assets_images_blackqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeRook.png") class __ASSET__assets_images_orangerook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkBishop.png") class __ASSET__assets_images_pinkbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redQueen.png") class __ASSET__assets_images_redqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueMarker.png") class __ASSET__assets_images_bluemarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayKing.png") class __ASSET__assets_images_darkgrayking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealMarker.png") class __ASSET__assets_images_tealmarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenBishop.png") class __ASSET__assets_images_greenbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whiteQueen.png") class __ASSET__assets_images_whitequeen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayRook.png") class __ASSET__assets_images_lightgrayrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/tealKing.png") class __ASSET__assets_images_tealking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeKnight.png") class __ASSET__assets_images_orangeknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redPawn.png") class __ASSET__assets_images_redpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redKing.png") class __ASSET__assets_images_redking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whiteKnight.png") class __ASSET__assets_images_whiteknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayKnight.png") class __ASSET__assets_images_darkgrayknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/redBishop.png") class __ASSET__assets_images_redbishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowKnight.png") class __ASSET__assets_images_yellowknight_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangePawn.png") class __ASSET__assets_images_orangepawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueKing.png") class __ASSET__assets_images_blueking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkPawn.png") class __ASSET__assets_images_pinkpawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenQueen.png") class __ASSET__assets_images_greenqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueRook.png") class __ASSET__assets_images_bluerook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeMarker.png") class __ASSET__assets_images_orangemarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/whiteKing.png") class __ASSET__assets_images_whiteking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayBishop.png") class __ASSET__assets_images_lightgraybishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkMarker.png") class __ASSET__assets_images_pinkmarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayPawn.png") class __ASSET__assets_images_darkgraypawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayRook.png") class __ASSET__assets_images_darkgrayrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purplePawn.png") class __ASSET__assets_images_purplepawn_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayQueen.png") class __ASSET__assets_images_lightgrayqueen_png extends flash.display.BitmapData {}
@:bitmap("assets/images/orangeBishop.png") class __ASSET__assets_images_orangebishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/purpleBishop.png") class __ASSET__assets_images_purplebishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/blueBishop.png") class __ASSET__assets_images_bluebishop_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkKing.png") class __ASSET__assets_images_pinkking_png extends flash.display.BitmapData {}
@:bitmap("assets/images/pinkRook.png") class __ASSET__assets_images_pinkrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/greenRook.png") class __ASSET__assets_images_greenrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/yellowRook.png") class __ASSET__assets_images_yellowrook_png extends flash.display.BitmapData {}
@:bitmap("assets/images/darkGrayMarker.png") class __ASSET__assets_images_darkgraymarker_png extends flash.display.BitmapData {}
@:bitmap("assets/images/lightGrayKnight.png") class __ASSET__assets_images_lightgrayknight_png extends flash.display.BitmapData {}
@:file("assets/data/data-goes-here.txt") class __ASSET__assets_data_data_goes_here_txt extends flash.utils.ByteArray {}
@:file("assets/sounds/sounds-go-here.txt") class __ASSET__assets_sounds_sounds_go_here_txt extends flash.utils.ByteArray {}
@:sound("/usr/lib/haxe/lib/flixel/3,3,4/assets/sounds/flixel.mp3") class __ASSET__assets_sounds_flixel_mp3 extends flash.media.Sound {}
@:sound("/usr/lib/haxe/lib/flixel/3,3,4/assets/sounds/beep.mp3") class __ASSET__assets_sounds_beep_mp3 extends flash.media.Sound {}
@:sound("/usr/lib/haxe/lib/flixel/3,3,4/assets/sounds/beep.ogg") class __ASSET__assets_sounds_beep_ogg extends flash.media.Sound {}
@:sound("/usr/lib/haxe/lib/flixel/3,3,4/assets/sounds/flixel.ogg") class __ASSET__assets_sounds_flixel_ogg extends flash.media.Sound {}


#end
