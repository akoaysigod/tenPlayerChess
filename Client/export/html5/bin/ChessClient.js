(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.preloader = null;
ApplicationMain.main = function() {
	var element = window.document.getElementById("openfl-embed");
	flash.Lib.create(640,640,element,0);
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var urlLoader = new flash.net.URLLoader();
	urlLoader.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/music/music-goes-here.txt",urlLoader);
	ApplicationMain.total++;
	var image = new Image();
	id = "assets/images/whiteSquare.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var image1 = new Image();
	id = "assets/images/blackSquare.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var image2 = new Image();
	id = "assets/images/greenKnight.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "assets/images/whiteRook.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "assets/images/blueQueen.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "assets/images/tealQueen.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "assets/images/yellowPawn.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "assets/images/darkGrayQueen.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "assets/images/blackPawn.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "assets/images/blackKing.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "assets/images/pinkQueen.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "assets/images/orangeQueen.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "assets/images/whitePawn.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "assets/images/tealKnight.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "assets/images/purpleRook.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "assets/images/yellowQueen.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "assets/images/blueKnight.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "assets/images/redMarker.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "assets/images/purpleMarker.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "assets/images/greenKing.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "assets/images/bluePawn.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var image21 = new Image();
	id = "assets/images/tealPawn.png";
	ApplicationMain.images.set(id,image21);
	image21.onload = ApplicationMain.image_onLoad;
	image21.src = id;
	ApplicationMain.total++;
	var image22 = new Image();
	id = "assets/images/greenMarker.png";
	ApplicationMain.images.set(id,image22);
	image22.onload = ApplicationMain.image_onLoad;
	image22.src = id;
	ApplicationMain.total++;
	var image23 = new Image();
	id = "assets/images/orangeKing.png";
	ApplicationMain.images.set(id,image23);
	image23.onload = ApplicationMain.image_onLoad;
	image23.src = id;
	ApplicationMain.total++;
	var image24 = new Image();
	id = "assets/images/greenPawn.png";
	ApplicationMain.images.set(id,image24);
	image24.onload = ApplicationMain.image_onLoad;
	image24.src = id;
	ApplicationMain.total++;
	var image25 = new Image();
	id = "assets/images/blackBishop.png";
	ApplicationMain.images.set(id,image25);
	image25.onload = ApplicationMain.image_onLoad;
	image25.src = id;
	ApplicationMain.total++;
	var image26 = new Image();
	id = "assets/images/darkGrayBishop.png";
	ApplicationMain.images.set(id,image26);
	image26.onload = ApplicationMain.image_onLoad;
	image26.src = id;
	ApplicationMain.total++;
	var image27 = new Image();
	id = "assets/images/tealBishop.png";
	ApplicationMain.images.set(id,image27);
	image27.onload = ApplicationMain.image_onLoad;
	image27.src = id;
	ApplicationMain.total++;
	var image28 = new Image();
	id = "assets/images/yellowMarker.png";
	ApplicationMain.images.set(id,image28);
	image28.onload = ApplicationMain.image_onLoad;
	image28.src = id;
	ApplicationMain.total++;
	var image29 = new Image();
	id = "assets/images/lightGrayKing.png";
	ApplicationMain.images.set(id,image29);
	image29.onload = ApplicationMain.image_onLoad;
	image29.src = id;
	ApplicationMain.total++;
	var image30 = new Image();
	id = "assets/images/yellowKing.png";
	ApplicationMain.images.set(id,image30);
	image30.onload = ApplicationMain.image_onLoad;
	image30.src = id;
	ApplicationMain.total++;
	var image31 = new Image();
	id = "assets/images/yellowBishop.png";
	ApplicationMain.images.set(id,image31);
	image31.onload = ApplicationMain.image_onLoad;
	image31.src = id;
	ApplicationMain.total++;
	var image32 = new Image();
	id = "assets/images/purpleQueen.png";
	ApplicationMain.images.set(id,image32);
	image32.onload = ApplicationMain.image_onLoad;
	image32.src = id;
	ApplicationMain.total++;
	var image33 = new Image();
	id = "assets/images/blackRook.png";
	ApplicationMain.images.set(id,image33);
	image33.onload = ApplicationMain.image_onLoad;
	image33.src = id;
	ApplicationMain.total++;
	var image34 = new Image();
	id = "assets/images/redRook.png";
	ApplicationMain.images.set(id,image34);
	image34.onload = ApplicationMain.image_onLoad;
	image34.src = id;
	ApplicationMain.total++;
	var image35 = new Image();
	id = "assets/images/tealRook.png";
	ApplicationMain.images.set(id,image35);
	image35.onload = ApplicationMain.image_onLoad;
	image35.src = id;
	ApplicationMain.total++;
	var image36 = new Image();
	id = "assets/images/lightGrayMarker.png";
	ApplicationMain.images.set(id,image36);
	image36.onload = ApplicationMain.image_onLoad;
	image36.src = id;
	ApplicationMain.total++;
	var image37 = new Image();
	id = "assets/images/pinkKnight.png";
	ApplicationMain.images.set(id,image37);
	image37.onload = ApplicationMain.image_onLoad;
	image37.src = id;
	ApplicationMain.total++;
	var image38 = new Image();
	id = "assets/images/purpleKing.png";
	ApplicationMain.images.set(id,image38);
	image38.onload = ApplicationMain.image_onLoad;
	image38.src = id;
	ApplicationMain.total++;
	var image39 = new Image();
	id = "assets/images/lightGrayPawn.png";
	ApplicationMain.images.set(id,image39);
	image39.onload = ApplicationMain.image_onLoad;
	image39.src = id;
	ApplicationMain.total++;
	var image40 = new Image();
	id = "assets/images/blackKnight.png";
	ApplicationMain.images.set(id,image40);
	image40.onload = ApplicationMain.image_onLoad;
	image40.src = id;
	ApplicationMain.total++;
	var image41 = new Image();
	id = "assets/images/redKnight.png";
	ApplicationMain.images.set(id,image41);
	image41.onload = ApplicationMain.image_onLoad;
	image41.src = id;
	ApplicationMain.total++;
	var image42 = new Image();
	id = "assets/images/whiteBishop.png";
	ApplicationMain.images.set(id,image42);
	image42.onload = ApplicationMain.image_onLoad;
	image42.src = id;
	ApplicationMain.total++;
	var image43 = new Image();
	id = "assets/images/purpleKnight.png";
	ApplicationMain.images.set(id,image43);
	image43.onload = ApplicationMain.image_onLoad;
	image43.src = id;
	ApplicationMain.total++;
	var image44 = new Image();
	id = "assets/images/blackQueen.png";
	ApplicationMain.images.set(id,image44);
	image44.onload = ApplicationMain.image_onLoad;
	image44.src = id;
	ApplicationMain.total++;
	var image45 = new Image();
	id = "assets/images/orangeRook.png";
	ApplicationMain.images.set(id,image45);
	image45.onload = ApplicationMain.image_onLoad;
	image45.src = id;
	ApplicationMain.total++;
	var image46 = new Image();
	id = "assets/images/pinkBishop.png";
	ApplicationMain.images.set(id,image46);
	image46.onload = ApplicationMain.image_onLoad;
	image46.src = id;
	ApplicationMain.total++;
	var image47 = new Image();
	id = "assets/images/redQueen.png";
	ApplicationMain.images.set(id,image47);
	image47.onload = ApplicationMain.image_onLoad;
	image47.src = id;
	ApplicationMain.total++;
	var image48 = new Image();
	id = "assets/images/blueMarker.png";
	ApplicationMain.images.set(id,image48);
	image48.onload = ApplicationMain.image_onLoad;
	image48.src = id;
	ApplicationMain.total++;
	var image49 = new Image();
	id = "assets/images/darkGrayKing.png";
	ApplicationMain.images.set(id,image49);
	image49.onload = ApplicationMain.image_onLoad;
	image49.src = id;
	ApplicationMain.total++;
	var image50 = new Image();
	id = "assets/images/tealMarker.png";
	ApplicationMain.images.set(id,image50);
	image50.onload = ApplicationMain.image_onLoad;
	image50.src = id;
	ApplicationMain.total++;
	var image51 = new Image();
	id = "assets/images/greenBishop.png";
	ApplicationMain.images.set(id,image51);
	image51.onload = ApplicationMain.image_onLoad;
	image51.src = id;
	ApplicationMain.total++;
	var image52 = new Image();
	id = "assets/images/whiteQueen.png";
	ApplicationMain.images.set(id,image52);
	image52.onload = ApplicationMain.image_onLoad;
	image52.src = id;
	ApplicationMain.total++;
	var image53 = new Image();
	id = "assets/images/lightGrayRook.png";
	ApplicationMain.images.set(id,image53);
	image53.onload = ApplicationMain.image_onLoad;
	image53.src = id;
	ApplicationMain.total++;
	var image54 = new Image();
	id = "assets/images/tealKing.png";
	ApplicationMain.images.set(id,image54);
	image54.onload = ApplicationMain.image_onLoad;
	image54.src = id;
	ApplicationMain.total++;
	var image55 = new Image();
	id = "assets/images/orangeKnight.png";
	ApplicationMain.images.set(id,image55);
	image55.onload = ApplicationMain.image_onLoad;
	image55.src = id;
	ApplicationMain.total++;
	var image56 = new Image();
	id = "assets/images/redPawn.png";
	ApplicationMain.images.set(id,image56);
	image56.onload = ApplicationMain.image_onLoad;
	image56.src = id;
	ApplicationMain.total++;
	var image57 = new Image();
	id = "assets/images/redKing.png";
	ApplicationMain.images.set(id,image57);
	image57.onload = ApplicationMain.image_onLoad;
	image57.src = id;
	ApplicationMain.total++;
	var image58 = new Image();
	id = "assets/images/whiteKnight.png";
	ApplicationMain.images.set(id,image58);
	image58.onload = ApplicationMain.image_onLoad;
	image58.src = id;
	ApplicationMain.total++;
	var image59 = new Image();
	id = "assets/images/darkGrayKnight.png";
	ApplicationMain.images.set(id,image59);
	image59.onload = ApplicationMain.image_onLoad;
	image59.src = id;
	ApplicationMain.total++;
	var image60 = new Image();
	id = "assets/images/redBishop.png";
	ApplicationMain.images.set(id,image60);
	image60.onload = ApplicationMain.image_onLoad;
	image60.src = id;
	ApplicationMain.total++;
	var image61 = new Image();
	id = "assets/images/yellowKnight.png";
	ApplicationMain.images.set(id,image61);
	image61.onload = ApplicationMain.image_onLoad;
	image61.src = id;
	ApplicationMain.total++;
	var image62 = new Image();
	id = "assets/images/orangePawn.png";
	ApplicationMain.images.set(id,image62);
	image62.onload = ApplicationMain.image_onLoad;
	image62.src = id;
	ApplicationMain.total++;
	var image63 = new Image();
	id = "assets/images/blueKing.png";
	ApplicationMain.images.set(id,image63);
	image63.onload = ApplicationMain.image_onLoad;
	image63.src = id;
	ApplicationMain.total++;
	var image64 = new Image();
	id = "assets/images/pinkPawn.png";
	ApplicationMain.images.set(id,image64);
	image64.onload = ApplicationMain.image_onLoad;
	image64.src = id;
	ApplicationMain.total++;
	var image65 = new Image();
	id = "assets/images/greenQueen.png";
	ApplicationMain.images.set(id,image65);
	image65.onload = ApplicationMain.image_onLoad;
	image65.src = id;
	ApplicationMain.total++;
	var image66 = new Image();
	id = "assets/images/blueRook.png";
	ApplicationMain.images.set(id,image66);
	image66.onload = ApplicationMain.image_onLoad;
	image66.src = id;
	ApplicationMain.total++;
	var image67 = new Image();
	id = "assets/images/orangeMarker.png";
	ApplicationMain.images.set(id,image67);
	image67.onload = ApplicationMain.image_onLoad;
	image67.src = id;
	ApplicationMain.total++;
	var image68 = new Image();
	id = "assets/images/whiteKing.png";
	ApplicationMain.images.set(id,image68);
	image68.onload = ApplicationMain.image_onLoad;
	image68.src = id;
	ApplicationMain.total++;
	var image69 = new Image();
	id = "assets/images/lightGrayBishop.png";
	ApplicationMain.images.set(id,image69);
	image69.onload = ApplicationMain.image_onLoad;
	image69.src = id;
	ApplicationMain.total++;
	var image70 = new Image();
	id = "assets/images/pinkMarker.png";
	ApplicationMain.images.set(id,image70);
	image70.onload = ApplicationMain.image_onLoad;
	image70.src = id;
	ApplicationMain.total++;
	var image71 = new Image();
	id = "assets/images/darkGrayPawn.png";
	ApplicationMain.images.set(id,image71);
	image71.onload = ApplicationMain.image_onLoad;
	image71.src = id;
	ApplicationMain.total++;
	var image72 = new Image();
	id = "assets/images/darkGrayRook.png";
	ApplicationMain.images.set(id,image72);
	image72.onload = ApplicationMain.image_onLoad;
	image72.src = id;
	ApplicationMain.total++;
	var image73 = new Image();
	id = "assets/images/purplePawn.png";
	ApplicationMain.images.set(id,image73);
	image73.onload = ApplicationMain.image_onLoad;
	image73.src = id;
	ApplicationMain.total++;
	var image74 = new Image();
	id = "assets/images/lightGrayQueen.png";
	ApplicationMain.images.set(id,image74);
	image74.onload = ApplicationMain.image_onLoad;
	image74.src = id;
	ApplicationMain.total++;
	var image75 = new Image();
	id = "assets/images/orangeBishop.png";
	ApplicationMain.images.set(id,image75);
	image75.onload = ApplicationMain.image_onLoad;
	image75.src = id;
	ApplicationMain.total++;
	var image76 = new Image();
	id = "assets/images/purpleBishop.png";
	ApplicationMain.images.set(id,image76);
	image76.onload = ApplicationMain.image_onLoad;
	image76.src = id;
	ApplicationMain.total++;
	var image77 = new Image();
	id = "assets/images/blueBishop.png";
	ApplicationMain.images.set(id,image77);
	image77.onload = ApplicationMain.image_onLoad;
	image77.src = id;
	ApplicationMain.total++;
	var image78 = new Image();
	id = "assets/images/pinkKing.png";
	ApplicationMain.images.set(id,image78);
	image78.onload = ApplicationMain.image_onLoad;
	image78.src = id;
	ApplicationMain.total++;
	var image79 = new Image();
	id = "assets/images/pinkRook.png";
	ApplicationMain.images.set(id,image79);
	image79.onload = ApplicationMain.image_onLoad;
	image79.src = id;
	ApplicationMain.total++;
	var image80 = new Image();
	id = "assets/images/greenRook.png";
	ApplicationMain.images.set(id,image80);
	image80.onload = ApplicationMain.image_onLoad;
	image80.src = id;
	ApplicationMain.total++;
	var image81 = new Image();
	id = "assets/images/yellowRook.png";
	ApplicationMain.images.set(id,image81);
	image81.onload = ApplicationMain.image_onLoad;
	image81.src = id;
	ApplicationMain.total++;
	var image82 = new Image();
	id = "assets/images/darkGrayMarker.png";
	ApplicationMain.images.set(id,image82);
	image82.onload = ApplicationMain.image_onLoad;
	image82.src = id;
	ApplicationMain.total++;
	var image83 = new Image();
	id = "assets/images/lightGrayKnight.png";
	ApplicationMain.images.set(id,image83);
	image83.onload = ApplicationMain.image_onLoad;
	image83.src = id;
	ApplicationMain.total++;
	var urlLoader1 = new flash.net.URLLoader();
	urlLoader1.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/data/data-goes-here.txt",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new flash.net.URLLoader();
	urlLoader2.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/sounds/sounds-go-here.txt",urlLoader2);
	ApplicationMain.total++;
	var sound = haxe.io.Path.withoutExtension("assets/sounds/beep.ogg");
	if(!HxOverrides.remove(sounds,sound)) ApplicationMain.total++;
	sounds.push(sound);
	var sound1 = haxe.io.Path.withoutExtension("assets/sounds/flixel.ogg");
	if(!HxOverrides.remove(sounds,sound1)) ApplicationMain.total++;
	sounds.push(sound1);
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader3 = ApplicationMain.urlLoaders.get(path);
			urlLoader3.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader3.load(new flash.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound2 = new flash.media.Sound();
			sound2.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound2.addEventListener(flash.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound2.load(new flash.net.URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.image_onLoad = function(_) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.current.removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	var hasMain = false;
	var _g = 0;
	var _g1 = Type.getClassFields(Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(Main,Reflect.field(Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(instance,flash.display.DisplayObject)) flash.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 1119, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 1120, className : "ApplicationMain", methodName : "preloader_onComplete"});
		}
	}
};
ApplicationMain.sound_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.sound_onIOError = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
var flash = {};
flash.events = {};
flash.events.IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	addEventListener: null
	,dispatchEvent: null
	,hasEventListener: null
	,removeEventListener: null
	,willTrigger: null
	,__class__: flash.events.IEventDispatcher
};
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
flash.events.EventDispatcher.prototype = {
	__targetDispatcher: null
	,__eventMap: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe.ds.StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new flash.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new flash.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(flash.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var list = this.__eventMap.get(event.type);
		if(list == null) return false;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 0;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) return true;
			}
			if(listener == list[index]) index++;
		}
		return true;
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) this.__eventMap.remove(type);
		if(!this.__eventMap.iterator().hasNext()) this.__eventMap = null;
	}
	,toString: function() {
		var full = Type.getClassName(Type.getClass(this));
		var $short = full.split(".").pop();
		return "[object " + $short + "]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__class__: flash.events.EventDispatcher
};
flash.display = {};
flash.display.IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__worldTransform: null
	,__renderCanvas: null
	,__renderMask: null
	,__updateChildren: null
	,__class__: flash.display.IBitmapDrawable
};
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this);
	this.set_alpha(1);
	this.set_rotation(0);
	this.set_scaleX(1);
	this.set_scaleY(1);
	this.set_visible(true);
	this.set_x(0);
	this.set_y(0);
	this.__worldAlpha = 1;
	this.__worldTransform = new flash.geom.Matrix();
	this.set_name("instance" + ++flash.display.DisplayObject.__instanceCount);
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	blendMode: null
	,cacheAsBitmap: null
	,loaderInfo: null
	,mouseX: null
	,mouseY: null
	,parent: null
	,scale9Grid: null
	,stage: null
	,__worldTransform: null
	,__alpha: null
	,__filters: null
	,__interactive: null
	,__isMask: null
	,__mask: null
	,__name: null
	,__renderable: null
	,__rotation: null
	,__rotationCache: null
	,__rotationCosine: null
	,__rotationSine: null
	,__scaleX: null
	,__scaleY: null
	,__scrollRect: null
	,__transform: null
	,__visible: null
	,__worldAlpha: null
	,__worldAlphaChanged: null
	,__worldClip: null
	,__worldClipChanged: null
	,__worldTransformCache: null
	,__worldTransformChanged: null
	,__worldVisible: null
	,__worldVisibleChanged: null
	,__worldZ: null
	,__x: null
	,__y: null
	,dispatchEvent: function(event) {
		var result = flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = 2;
			this.parent.dispatchEvent(event);
		}
		return result;
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix = this.__getTransform();
		if(targetCoordinateSpace != null) {
			matrix = new flash.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new flash.geom.Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__getTransform().clone().invert().transformPoint(pos);
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,localToGlobal: function(point) {
		return this.__getTransform().transformPoint(point);
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__getBounds: function(rect,matrix) {
	}
	,__getInteractive: function(stack) {
	}
	,__getLocalBounds: function(rect) {
	}
	,__getTransform: function() {
		if(flash.display.DisplayObject.__worldTransformDirty) flash.Lib.current.stage.__update(true);
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderDOM: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__update: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
			this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.tx = this.get_x();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			this.__worldTransform.ty = this.get_y();
		}
		if(!transformOnly) {
			if(this.parent != null) this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha; else this.__worldAlpha = this.get_alpha();
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		flash.display.DisplayObject.__worldTransformDirty = true;
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		flash.display.DisplayObject.__worldDirty = true;
		return this.__alpha = value;
	}
	,get_filters: function() {
		if(this.__filters == null) return new Array(); else return this.__filters.slice();
	}
	,set_filters: function(value) {
		return value;
	}
	,get_height: function() {
		return 0;
	}
	,set_height: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return 0;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		flash.display.DisplayObject.__worldDirty = true;
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.stage.__mouseX,0)).x;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.stage.__mouseY)).y;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return this.__rotation = value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		return this.__scrollRect;
	}
	,set_scrollRect: function(value) {
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new flash.geom.Transform(this);
		return this.__transform;
	}
	,set_transform: function(value) {
		if(value == null) throw new flash.errors.TypeError("Parameter transform must be non-null.");
		if(this.__transform == null) this.__transform = new flash.geom.Transform(this);
		flash.display.DisplayObject.__worldTransformDirty = true;
		this.__transform.set_matrix(value.get_matrix().clone());
		this.__transform.colorTransform = new flash.geom.ColorTransform(value.colorTransform.redMultiplier,value.colorTransform.greenMultiplier,value.colorTransform.blueMultiplier,value.colorTransform.alphaMultiplier,value.colorTransform.redOffset,value.colorTransform.greenOffset,value.colorTransform.blueOffset,value.colorTransform.alphaOffset);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		flash.display.DisplayObject.__worldDirty = true;
		return this.__visible = value;
	}
	,get_width: function() {
		return 0;
	}
	,set_width: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return 0;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		flash.display.DisplayObject.__worldTransformDirty = true;
		return this.__y = value;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_transform:"get_transform",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.mouseEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	doubleClickEnabled: null
	,focusRect: null
	,mouseEnabled: null
	,tabEnabled: null
	,tabIndex: null
	,__getInteractive: function(stack) {
		stack.push(this);
		if(this.parent != null) this.parent.__getInteractive(stack);
	}
	,__class__: flash.display.InteractiveObject
});
flash.display.DisplayObjectContainer = function() {
	flash.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	mouseChildren: null
	,numChildren: null
	,tabChildren: null
	,__children: null
	,__removedChildren: null
	,addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
		}
		return child;
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
		}
		this.__children.splice(index,0,child);
		return child;
	}
	,contains: function(child) {
		return HxOverrides.indexOf(this.__children,child,0) > -1;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) return child;
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		point = this.localToGlobal(point);
		var stack = new Array();
		this.__hitTest(point.x,point.y,false,stack,false);
		stack.shift();
		return stack;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) return;
		}
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new flash.errors.RangeError("The supplied index is out of bounds.");
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			numRemovals--;
		}
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = HxOverrides.indexOf(this.__children,child1,0);
			var index2 = HxOverrides.indexOf(this.__children,child2,0);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
		}
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		if(notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return flash.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			var matrixCache1 = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,null);
		}
		if(matrix != null) this.__worldTransform = matrixCache;
	}
	,__getLocalBounds: function(rect) {
		var matrixCache = this.__worldTransform;
		this.__worldTransform = new flash.geom.Matrix();
		this.__updateChildren(true);
		this.__getBounds(rect,null);
		this.__worldTransform = matrixCache;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length - 1;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) while(i >= 0) {
			if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
			i--;
		} else if(stack != null) {
			var length = stack.length;
			while(i >= 0) {
				if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
					stack.splice(length,0,this);
					return true;
				}
				i--;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		this.__removedChildren = [];
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderDOM: function(renderSession) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderMask: function(renderSession) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function(transformOnly) {
		flash.display.InteractiveObject.prototype.__update.call(this,transformOnly);
		if(!this.__renderable) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly);
		}
	}
	,__updateChildren: function(transformOnly) {
		flash.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly);
		}
	}
	,get_height: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		return bounds.height * this.get_scaleY();
	}
	,set_height: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		if(value != bounds.height) this.set_scaleY(value / bounds.height);
		return value;
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,get_width: function() {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		return bounds.width * this.get_scaleX();
	}
	,set_width: function(value) {
		var bounds = new flash.geom.Rectangle();
		this.__getLocalBounds(bounds);
		if(value != bounds.width) this.set_scaleX(value / bounds.width);
		return value;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	buttonMode: null
	,graphics: null
	,useHandCursor: null
	,__canvas: null
	,__canvasContext: null
	,__graphics: null
	,__style: null
	,__getBounds: function(rect,matrix) {
		flash.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__getTransform());
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(flash.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x,this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		flash.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldClipChanged || this.__worldAlphaChanged) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__style = this.__canvas.style;
						this.__style.setProperty("position","absolute",null);
						this.__style.setProperty("top","0",null);
						this.__style.setProperty("left","0",null);
						this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
						renderSession.element.appendChild(this.__canvas);
						this.__worldTransformChanged = true;
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					if(this.__worldClip == null) this.__canvasContext.drawImage(this.__graphics.__canvas,0,0); else {
						var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
						this.__canvasContext.drawImage(this.__graphics.__canvas,clip.x,clip.y,clip.width,clip.height,this.__graphics.__bounds.x,this.__graphics.__bounds.y,clip.width,clip.height);
					}
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new flash.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				if(this.__worldZ != ++renderSession.z) {
					this.__worldZ = renderSession.z;
					this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
				}
				this.__canvasContext.globalAlpha = this.__worldAlpha;
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
		flash.display.DisplayObjectContainer.prototype.__renderDOM.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else flash.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var Main = function() {
	this.startFullscreen = false;
	this.skipSplash = false;
	this.framerate = 60;
	this.zoom = -1;
	this.initialState = PlayState;
	this.gameHeight = 640;
	this.gameWidth = 640;
	flash.display.Sprite.call(this);
	if(this.stage != null) this.init(); else this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	flash.Lib.current.addChild(new Main());
};
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	gameWidth: null
	,gameHeight: null
	,initialState: null
	,zoom: null
	,framerate: null
	,skipSplash: null
	,startFullscreen: null
	,init: function(E) {
		if(this.hasEventListener(flash.events.Event.ADDED_TO_STAGE)) this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
		this.setupGame();
	}
	,setupGame: function() {
		var stageWidth = flash.Lib.current.stage.stageWidth;
		var stageHeight = flash.Lib.current.stage.stageHeight;
		if(this.zoom == -1) {
			var ratioX = stageWidth / this.gameWidth;
			var ratioY = stageHeight / this.gameHeight;
			this.zoom = Math.min(ratioX,ratioY);
			this.gameWidth = Math.ceil(stageWidth / this.zoom);
			this.gameHeight = Math.ceil(stageHeight / this.zoom);
		}
		this.addChild(new flixel.FlxGame(this.gameWidth,this.gameHeight,this.initialState,this.zoom,this.framerate,this.framerate,this.skipSplash,this.startFullscreen));
	}
	,__class__: Main
});
var DocumentClass = function() {
	this.stage = flash.Lib.current.stage;
	Main.call(this);
	this.dispatchEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var flixel = {};
flixel.interfaces = {};
flixel.interfaces.IFlxDestroyable = function() { };
$hxClasses["flixel.interfaces.IFlxDestroyable"] = flixel.interfaces.IFlxDestroyable;
flixel.interfaces.IFlxDestroyable.__name__ = ["flixel","interfaces","IFlxDestroyable"];
flixel.interfaces.IFlxDestroyable.prototype = {
	destroy: null
	,__class__: flixel.interfaces.IFlxDestroyable
};
flixel.FlxBasic = function() {
	this.collisionType = 0;
	this.exists = true;
	this.alive = true;
	this.visible = true;
	this.active = true;
	this.ID = -1;
};
$hxClasses["flixel.FlxBasic"] = flixel.FlxBasic;
flixel.FlxBasic.__name__ = ["flixel","FlxBasic"];
flixel.FlxBasic.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.FlxBasic.prototype = {
	ID: null
	,active: null
	,visible: null
	,alive: null
	,exists: null
	,collisionType: null
	,destroy: function() {
		this.set_exists(false);
	}
	,kill: function() {
		this.set_alive(false);
		this.set_exists(false);
	}
	,revive: function() {
		this.set_alive(true);
		this.set_exists(true);
	}
	,update: function() {
	}
	,draw: function() {
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,set_active: function(Value) {
		return this.active = Value;
	}
	,set_exists: function(Value) {
		return this.exists = Value;
	}
	,set_alive: function(Value) {
		return this.alive = Value;
	}
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("active",this.active),flixel.util.LabelValuePair._pool.get().create("visible",this.visible),flixel.util.LabelValuePair._pool.get().create("alive",this.alive),flixel.util.LabelValuePair._pool.get().create("exists",this.exists)]);
	}
	,__class__: flixel.FlxBasic
	,__properties__: {set_exists:"set_exists",set_alive:"set_alive",set_visible:"set_visible",set_active:"set_active"}
};
flixel.interfaces.IFlxPooled = function() { };
$hxClasses["flixel.interfaces.IFlxPooled"] = flixel.interfaces.IFlxPooled;
flixel.interfaces.IFlxPooled.__name__ = ["flixel","interfaces","IFlxPooled"];
flixel.interfaces.IFlxPooled.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.interfaces.IFlxPooled.prototype = {
	put: null
	,_inPool: null
	,__class__: flixel.interfaces.IFlxPooled
};
flixel.util = {};
flixel.util.FlxPool_flixel_util_FlxRect = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxRect"] = flixel.util.FlxPool_flixel_util_FlxRect;
flixel.util.FlxPool_flixel_util_FlxRect.__name__ = ["flixel","util","FlxPool_flixel_util_FlxRect"];
flixel.util.FlxPool_flixel_util_FlxRect.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel.util.FlxPool_flixel_util_FlxRect
	,__properties__: {get_length:"get_length"}
};
flixel.util.FlxRect = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._inPool = false;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this;
};
$hxClasses["flixel.util.FlxRect"] = flixel.util.FlxRect;
flixel.util.FlxRect.__name__ = ["flixel","util","FlxRect"];
flixel.util.FlxRect.__interfaces__ = [flixel.interfaces.IFlxPooled];
flixel.util.FlxRect.get = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var rect = flixel.util.FlxRect._pool.get().set(X,Y,Width,Height);
	rect._inPool = false;
	return rect;
};
flixel.util.FlxRect.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,_inPool: null
	,put: function() {
		if(!this._inPool) {
			this._inPool = true;
			flixel.util.FlxRect._pool.putUnsafe(this);
		}
	}
	,setSize: function(Width,Height) {
		this.width = Width;
		this.height = Height;
		return this;
	}
	,set: function(X,Y,Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		return Rect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyToFlash: function(FlashRect) {
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,overlaps: function(Rect) {
		return Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
	}
	,containsFlxPoint: function(Point) {
		return flixel.util.FlxMath.pointInFlxRect(Point.x,Point.y,this);
	}
	,union: function(Rect) {
		var minX = Math.min(this.x,Rect.x);
		var minY = Math.min(this.y,Rect.y);
		var maxX = Math.max(this.x + this.width,Rect.x + Rect.width);
		var maxY = Math.max(this.y + this.height,Rect.y + Rect.height);
		this.x = minX;
		this.y = minY;
		this.width = maxX - minX;
		this.height = maxY - minY;
		return this;
	}
	,destroy: function() {
	}
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("x",this.x),flixel.util.LabelValuePair._pool.get().create("y",this.y),flixel.util.LabelValuePair._pool.get().create("w",this.width),flixel.util.LabelValuePair._pool.get().create("h",this.height)]);
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(Value) {
		this.width -= Value - this.x;
		return this.x = Value;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(Value) {
		this.width = Value - this.x;
		return Value;
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(Value) {
		this.height -= Value - this.y;
		return this.y = Value;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(Value) {
		this.height = Value - this.y;
		return Value;
	}
	,__class__: flixel.util.FlxRect
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_top:"set_top",get_top:"get_top",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left"}
};
flixel.FlxObject = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.collisonXDrag = true;
	this.allowCollisions = 4369;
	this.wasTouching = 0;
	this.touching = 0;
	this.health = 1;
	this.maxAngular = 10000;
	this.angularDrag = 0;
	this.angularAcceleration = 0;
	this.angularVelocity = 0;
	this.elasticity = 0;
	this.mass = 1;
	this.immovable = false;
	this.moves = true;
	this.angle = 0;
	this.pixelPerfectRender = true;
	this.y = 0;
	this.x = 0;
	flixel.FlxBasic.call(this);
	this.set_x(X);
	this.set_y(Y);
	this.set_width(Width);
	this.set_height(Height);
	this.initVars();
};
$hxClasses["flixel.FlxObject"] = flixel.FlxObject;
flixel.FlxObject.__name__ = ["flixel","FlxObject"];
flixel.FlxObject.separate = function(Object1,Object2) {
	var separatedX = flixel.FlxObject.separateX(Object1,Object2);
	var separatedY = flixel.FlxObject.separateY(Object1,Object2);
	return separatedX || separatedY;
};
flixel.FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == 3) return (js.Boot.__cast(Object1 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object2,flixel.FlxObject.separateX);
	if(Object2.collisionType == 3) return (js.Boot.__cast(Object2 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object1,flixel.FlxObject.separateX,true);
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs;
		if(obj1delta > 0) obj1deltaAbs = obj1delta; else obj1deltaAbs = -obj1delta;
		var obj2deltaAbs;
		if(obj2delta > 0) obj2deltaAbs = obj2delta; else obj2deltaAbs = -obj2delta;
		var obj1rect = flixel.FlxObject._firstSeparateFlxRect.set(Object1.x - (obj1delta > 0?obj1delta:0),Object1.last.y,Object1.get_width() + obj1deltaAbs,Object1.get_height());
		var obj2rect = flixel.FlxObject._secondSeparateFlxRect.set(Object2.x - (obj2delta > 0?obj2delta:0),Object2.last.y,Object2.get_width() + obj2deltaAbs,Object2.get_height());
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.get_width() - Object2.x;
				if(overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) overlap = 0; else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.get_width() - Object2.x;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) overlap = 0; else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.x;
		var obj2v = Object2.velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_x(Object1.x - overlap);
			var _g = Object2;
			_g.set_x(_g.x + overlap);
			var obj1velocity;
			obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity;
			obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_x(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_x(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_x(Object1.x - overlap);
			Object1.velocity.set_x(obj2v - obj1v * Object1.elasticity);
		} else if(!obj2immovable) {
			var _g1 = Object2;
			_g1.set_x(_g1.x + overlap);
			Object2.velocity.set_x(obj1v - obj2v * Object2.elasticity);
		}
		return true;
	} else return false;
};
flixel.FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == 3) return (js.Boot.__cast(Object1 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object2,flixel.FlxObject.separateY);
	if(Object2.collisionType == 3) return (js.Boot.__cast(Object2 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object1,flixel.FlxObject.separateY,true);
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs;
		if(obj1delta > 0) obj1deltaAbs = obj1delta; else obj1deltaAbs = -obj1delta;
		var obj2deltaAbs;
		if(obj2delta > 0) obj2deltaAbs = obj2delta; else obj2deltaAbs = -obj2delta;
		var obj1rect = flixel.FlxObject._firstSeparateFlxRect.set(Object1.x,Object1.y - (obj1delta > 0?obj1delta:0),Object1.get_width(),Object1.get_height() + obj1deltaAbs);
		var obj2rect = flixel.FlxObject._secondSeparateFlxRect.set(Object2.x,Object2.y - (obj2delta > 0?obj2delta:0),Object2.get_width(),Object2.get_height() + obj2deltaAbs);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.get_height() - Object2.y;
				if(overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) overlap = 0; else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.get_height() - Object2.y;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) overlap = 0; else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.y;
		var obj2v = Object2.velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_y(Object1.y - overlap);
			var _g = Object2;
			_g.set_y(_g.y + overlap);
			var obj1velocity;
			obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity;
			obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_y(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_y(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_y(Object1.y - overlap);
			Object1.velocity.set_y(obj2v - obj1v * Object1.elasticity);
			if(Object1.collisonXDrag && Object2.active && Object2.moves && obj1delta > obj2delta) {
				var _g1 = Object1;
				_g1.set_x(_g1.x + (Object2.x - Object2.last.x));
			}
		} else if(!obj2immovable) {
			var _g2 = Object2;
			_g2.set_y(_g2.y + overlap);
			Object2.velocity.set_y(obj1v - obj2v * Object2.elasticity);
			if(Object2.collisonXDrag && Object1.active && Object1.moves && obj1delta < obj2delta) {
				var _g3 = Object2;
				_g3.set_x(_g3.x + (Object1.x - Object1.last.x));
			}
		}
		return true;
	} else return false;
};
flixel.FlxObject.__super__ = flixel.FlxBasic;
flixel.FlxObject.prototype = $extend(flixel.FlxBasic.prototype,{
	x: null
	,y: null
	,width: null
	,height: null
	,pixelPerfectRender: null
	,angle: null
	,moves: null
	,immovable: null
	,scrollFactor: null
	,velocity: null
	,acceleration: null
	,drag: null
	,maxVelocity: null
	,last: null
	,mass: null
	,elasticity: null
	,angularVelocity: null
	,angularAcceleration: null
	,angularDrag: null
	,maxAngular: null
	,health: null
	,touching: null
	,wasTouching: null
	,allowCollisions: null
	,collisonXDrag: null
	,_point: null
	,_cameras: null
	,initVars: function() {
		this.collisionType = 1;
		this.last = flixel.util.FlxPoint.get(this.x,this.y);
		this.scrollFactor = flixel.util.FlxPoint.get(1,1);
		this._point = flixel.util.FlxPoint.get(null,null);
		this.velocity = flixel.util.FlxPoint.get(null,null);
		this.acceleration = flixel.util.FlxPoint.get(null,null);
		this.drag = flixel.util.FlxPoint.get(null,null);
		this.maxVelocity = flixel.util.FlxPoint.get(10000,10000);
	}
	,initMotionVars: function() {
		this.velocity = flixel.util.FlxPoint.get(null,null);
		this.acceleration = flixel.util.FlxPoint.get(null,null);
		this.drag = flixel.util.FlxPoint.get(null,null);
		this.maxVelocity = flixel.util.FlxPoint.get(10000,10000);
	}
	,destroy: function() {
		flixel.FlxBasic.prototype.destroy.call(this);
		this.velocity = flixel.util.FlxDestroyUtil.put(this.velocity);
		this.acceleration = flixel.util.FlxDestroyUtil.put(this.acceleration);
		this.drag = flixel.util.FlxDestroyUtil.put(this.drag);
		this.maxVelocity = flixel.util.FlxDestroyUtil.put(this.maxVelocity);
		this.scrollFactor = flixel.util.FlxDestroyUtil.put(this.scrollFactor);
		this.last = flixel.util.FlxDestroyUtil.put(this.last);
		this._point = flixel.util.FlxDestroyUtil.put(this._point);
		this._cameras = null;
	}
	,update: function() {
		this.last.set_x(this.x);
		this.last.set_y(this.y);
		if(this.moves) this.updateMotion();
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,updateMotion: function() {
		var dt = flixel.FlxG.elapsed;
		var velocityDelta = 0.5 * (flixel.util.FlxVelocity.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		var _g = this;
		_g.set_angle(_g.angle + this.angularVelocity * dt);
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (flixel.util.FlxVelocity.computeVelocity(this.velocity.x,this.acceleration.x,this.drag.x,this.maxVelocity.x) - this.velocity.x);
		var _g1 = this.velocity;
		_g1.set_x(_g1.x + velocityDelta);
		var delta = this.velocity.x * dt;
		var _g2 = this.velocity;
		_g2.set_x(_g2.x + velocityDelta);
		var _g3 = this;
		_g3.set_x(_g3.x + delta);
		velocityDelta = 0.5 * (flixel.util.FlxVelocity.computeVelocity(this.velocity.y,this.acceleration.y,this.drag.y,this.maxVelocity.y) - this.velocity.y);
		var _g4 = this.velocity;
		_g4.set_y(_g4.y + velocityDelta);
		delta = this.velocity.y * dt;
		var _g5 = this.velocity;
		_g5.set_y(_g5.y + velocityDelta);
		var _g6 = this;
		_g6.set_y(_g6.y + delta);
	}
	,draw: function() {
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel.group.FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel.group.FlxGroup.overlaps($bind(this,this.overlapsCallback),group,0,0,InScreenSpace,Camera);
		if(ObjectOrGroup.collisionType == 3) return (js.Boot.__cast(ObjectOrGroup , flixel.tile.FlxTilemap)).overlaps(this,InScreenSpace,Camera);
		var object;
		object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.get_width() > this.x && object.x < this.x + this.get_width() && object.y + object.get_height() > this.y && object.y < this.y + this.get_height();
		if(Camera == null) Camera = flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y && objectScreenPos.y < this._point.y + this.get_height();
	}
	,overlapsCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlaps(ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel.group.FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel.group.FlxGroup.overlaps($bind(this,this.overlapsAtCallback),group,X,Y,InScreenSpace,Camera);
		if(ObjectOrGroup.collisionType == 3) {
			var tilemap;
			tilemap = js.Boot.__cast(ObjectOrGroup , flixel.tile.FlxTilemap);
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object;
		object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.get_width() > X && object.x < X + this.get_width() && object.y + object.get_height() > Y && object.y < Y + this.get_height();
		if(Camera == null) Camera = flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y && objectScreenPos.y < this._point.y + this.get_height();
	}
	,overlapsAtCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return point.x > this.x && point.x < this.x + this.get_width() && point.y > this.y && point.y < this.y + this.get_height();
		if(Camera == null) Camera = flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		if(point._weak) flixel.util.FlxPoint._pool.put(point);
		return X > this._point.x && X < this._point.x + this.get_width() && Y > this._point.y && Y < this._point.y + this.get_height();
	}
	,inWorldBounds: function() {
		return this.x + this.get_width() > flixel.FlxG.worldBounds.x && this.x < flixel.FlxG.worldBounds.get_right() && this.y + this.get_height() > flixel.FlxG.worldBounds.y && this.y < flixel.FlxG.worldBounds.get_bottom();
	}
	,getScreenXY: function(point,Camera) {
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		if(Camera == null) Camera = flixel.FlxG.camera;
		return point.set(this.x - Camera.scroll.x * this.scrollFactor.x,this.y - Camera.scroll.y * this.scrollFactor.y);
	}
	,getMidpoint: function(point) {
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		return point.set(this.x + this.get_width() * 0.5,this.y + this.get_height() * 0.5);
	}
	,reset: function(X,Y) {
		this.revive();
		this.touching = 0;
		this.wasTouching = 0;
		this.setPosition(X,Y);
		this.last.set(this.x,this.y);
		this.velocity.set();
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		return this._point.x + this.get_width() > 0 && this._point.x < Camera.width && this._point.y + this.get_height() > 0 && this._point.y < Camera.height;
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,justTouched: function(Direction) {
		return (this.touching & Direction) > 0 && (this.wasTouching & Direction) <= 0;
	}
	,hurt: function(Damage) {
		this.health = this.health - Damage;
		if(this.health <= 0) this.kill();
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("x",this.x),flixel.util.LabelValuePair._pool.get().create("y",this.y),flixel.util.LabelValuePair.weak("w",this.get_width()),flixel.util.LabelValuePair.weak("h",this.get_height()),flixel.util.LabelValuePair._pool.get().create("visible",this.visible),flixel.util.LabelValuePair._pool.get().create("velocity",this.velocity)]);
	}
	,set_x: function(NewX) {
		return this.x = NewX;
	}
	,set_y: function(NewY) {
		return this.y = NewY;
	}
	,set_width: function(Width) {
		this.width = Width;
		return Width;
	}
	,set_height: function(Height) {
		this.height = Height;
		return Height;
	}
	,get_width: function() {
		return this.width;
	}
	,get_height: function() {
		return this.height;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,set_solid: function(Solid) {
		if(Solid) this.allowCollisions = 4369; else this.allowCollisions = 0;
		return Solid;
	}
	,set_angle: function(Value) {
		return this.angle = Value;
	}
	,set_moves: function(Value) {
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		return this.immovable = Value;
	}
	,get_camera: function() {
		if(this._cameras == null || this._cameras.length == 0) return flixel.FlxCamera.defaultCameras[0]; else return this._cameras[0];
	}
	,set_camera: function(Value) {
		if(this._cameras == null) this._cameras = [Value]; else this._cameras[0] = Value;
		return Value;
	}
	,get_cameras: function() {
		if(this._cameras == null) return flixel.FlxCamera.defaultCameras; else return this._cameras;
	}
	,set_cameras: function(Value) {
		return this._cameras = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		return this.pixelPerfectRender = Value;
	}
	,__class__: flixel.FlxObject
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_solid:"set_solid",get_solid:"get_solid",set_immovable:"set_immovable",set_moves:"set_moves",set_angle:"set_angle",set_pixelPerfectRender:"set_pixelPerfectRender",set_cameras:"set_cameras",get_cameras:"get_cameras",set_camera:"set_camera",get_camera:"get_camera",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_y:"set_y",set_x:"set_x"})
});
flixel.FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._facingFlip = new haxe.ds.IntMap();
	this._angleChanged = false;
	this._cosAngle = 1;
	this._sinAngle = 0;
	this.useColorTransform = false;
	this.color = 16777215;
	this.flipY = false;
	this.flipX = false;
	this.facing = 16;
	this.alpha = 1.0;
	this.bakedRotationAngle = 0;
	this.frames = 0;
	this.frameHeight = 0;
	this.frameWidth = 0;
	this.dirty = true;
	this.antialiasing = false;
	flixel.FlxObject.call(this,X,Y);
	if(SimpleGraphic != null) this.loadGraphic(SimpleGraphic);
};
$hxClasses["flixel.FlxSprite"] = flixel.FlxSprite;
flixel.FlxSprite.__name__ = ["flixel","FlxSprite"];
flixel.FlxSprite.__super__ = flixel.FlxObject;
flixel.FlxSprite.prototype = $extend(flixel.FlxObject.prototype,{
	animation: null
	,framePixels: null
	,antialiasing: null
	,dirty: null
	,frame: null
	,frameWidth: null
	,frameHeight: null
	,frames: null
	,region: null
	,framesData: null
	,cachedGraphics: null
	,bakedRotationAngle: null
	,alpha: null
	,facing: null
	,flipX: null
	,flipY: null
	,origin: null
	,offset: null
	,scale: null
	,blend: null
	,color: null
	,colorTransform: null
	,useColorTransform: null
	,_flashPoint: null
	,_flashRect: null
	,_flashRect2: null
	,_flashPointZero: null
	,_matrix: null
	,_halfWidth: null
	,_halfHeight: null
	,_sinAngle: null
	,_cosAngle: null
	,_angleChanged: null
	,_facingFlip: null
	,initVars: function() {
		flixel.FlxObject.prototype.initVars.call(this);
		this.animation = new flixel.animation.FlxAnimationController(this);
		this._flashPoint = new flash.geom.Point();
		this._flashRect = new flash.geom.Rectangle();
		this._flashRect2 = new flash.geom.Rectangle();
		this._flashPointZero = new flash.geom.Point();
		this.offset = flixel.util.FlxPoint.get(null,null);
		this.origin = flixel.util.FlxPoint.get(null,null);
		this.scale = flixel.util.FlxPoint.get(1,1);
		this._matrix = new flash.geom.Matrix();
	}
	,destroy: function() {
		flixel.FlxObject.prototype.destroy.call(this);
		this.animation = flixel.util.FlxDestroyUtil.destroy(this.animation);
		this.offset = flixel.util.FlxDestroyUtil.put(this.offset);
		this.origin = flixel.util.FlxDestroyUtil.put(this.origin);
		this.scale = flixel.util.FlxDestroyUtil.put(this.scale);
		this.framePixels = flixel.util.FlxDestroyUtil.dispose(this.framePixels);
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this._matrix = null;
		this.colorTransform = null;
		this.set_blend(null);
		this.set_frame(null);
		this.framesData = null;
		this.set_cachedGraphics(null);
		this.region = null;
	}
	,clone: function(NewSprite) {
		if(NewSprite == null) NewSprite = new flixel.FlxSprite();
		return NewSprite.loadGraphicFromSprite(this);
	}
	,loadGraphicFromSprite: function(Sprite) {
		if(!this.exists) flixel.FlxG.log.warn("Warning, trying to clone " + Type.getClassName(Type.getClass(this)) + " object that doesn't exist.");
		this.region = Sprite.region.clone();
		this.bakedRotationAngle = Sprite.bakedRotationAngle;
		this.set_cachedGraphics(Sprite.cachedGraphics);
		this.set_width(this.frameWidth = Sprite.frameWidth);
		this.set_height(this.frameHeight = Sprite.frameHeight);
		if(this.bakedRotationAngle > 0) {
			this.set_width(Sprite.get_width());
			this.set_height(Sprite.get_height());
			this.centerOffsets();
		}
		this.updateFrameData();
		this.resetHelpers();
		this.antialiasing = Sprite.antialiasing;
		this.animation.copyFrom(Sprite.animation);
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Animated == null) Animated = false;
		this.bakedRotationAngle = 0;
		this.set_cachedGraphics(flixel.FlxG.bitmap.addWithSpaces(Graphic,0,0,1,1,Unique,Key));
		if(Width == 0) {
			if(Animated == true) Width = this.cachedGraphics.bitmap.height; else Width = this.cachedGraphics.bitmap.width;
			if(Width > this.cachedGraphics.bitmap.width) Width = this.cachedGraphics.bitmap.width; else Width = Width;
		}
		if(Height == 0) {
			if(Animated == true) Height = Width; else Height = this.cachedGraphics.bitmap.height;
			if(Height > this.cachedGraphics.bitmap.height) Height = this.cachedGraphics.bitmap.height; else Height = Height;
		}
		if(!js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion)) {
			this.region = new flixel.system.layer.Region(0,0,Width,Height);
			this.region.width = this.cachedGraphics.bitmap.width;
			this.region.height = this.cachedGraphics.bitmap.height;
		} else {
			this.region = (js.Boot.__cast(Graphic , flixel.util.loaders.TextureRegion)).region.clone();
			if(this.region.tileWidth > 0) Width = this.region.tileWidth; else this.region.tileWidth = this.region.width;
			if(this.region.tileHeight > 0) Height = this.region.tileWidth; else this.region.tileHeight = this.region.height;
		}
		this.set_width(this.frameWidth = Width);
		this.set_height(this.frameHeight = Height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		var rows = Std["int"](Math.sqrt(Rotations));
		var brush = flixel.FlxG.bitmap.addWithSpaces(Graphic,0,0,1,1,false,Key).bitmap;
		var isRegion = js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion);
		var spriteRegion;
		if(isRegion == true) spriteRegion = Graphic; else spriteRegion = null;
		var tempRegion;
		if(isRegion == true) tempRegion = spriteRegion.region; else tempRegion = null;
		if(Frame >= 0 || isRegion) {
			var full = brush;
			if(isRegion) {
				brush = new flash.display.BitmapData(tempRegion.width,tempRegion.height);
				this._flashRect.x = tempRegion.startX;
				this._flashRect.y = tempRegion.startY;
				this._flashRect.width = tempRegion.width;
				this._flashRect.height = tempRegion.height;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			} else {
				brush = new flash.display.BitmapData(full.height,full.height);
				var rx = Frame * brush.width;
				var ry = 0;
				var fw = full.width;
				if(rx >= fw) {
					ry = (rx / fw | 0) * brush.height;
					rx %= fw;
				}
				this._flashRect.x = rx;
				this._flashRect.y = ry;
				this._flashRect.width = brush.width;
				this._flashRect.height = brush.height;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			}
		}
		var max = brush.width;
		if(brush.height > max) max = brush.height;
		if(AutoBuffer) max = max * 1.5 | 0;
		var columns = Math.ceil(Rotations / rows);
		this.set_width(max * columns);
		this.set_height(max * rows);
		var key = "";
		if(typeof(Graphic) == "string") key = Graphic; else if(js.Boot.__instanceof(Graphic,Class)) key = Type.getClassName(Graphic); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData) && Key != null) key = Key; else if(isRegion) {
			key = spriteRegion.data.key;
			key += ":" + tempRegion.startX + ":" + tempRegion.startY + ":" + tempRegion.width + ":" + tempRegion.height + ":" + Rotations;
		} else return null;
		if(!isRegion) key += ":" + Frame + ":" + this.get_width() + "x" + this.get_height() + ":" + Rotations;
		var skipGen = flixel.FlxG.bitmap.checkCache(key);
		this.set_cachedGraphics(flixel.FlxG.bitmap.create(Std["int"](this.get_width()) + columns - 1,Std["int"](this.get_height()) + rows - 1,0,true,key));
		this.bakedRotationAngle = 360 / Rotations;
		if(!skipGen) {
			var row = 0;
			var column;
			var bakedAngle = 0;
			var halfBrushWidth = brush.width * 0.5 | 0;
			var halfBrushHeight = brush.height * 0.5 | 0;
			var midpointX = max * 0.5 | 0;
			var midpointY = max * 0.5 | 0;
			while(row < rows) {
				column = 0;
				while(column < columns) {
					this._matrix.identity();
					this._matrix.translate(-halfBrushWidth,-halfBrushHeight);
					this._matrix.rotate(bakedAngle * (Math.PI / 180));
					this._matrix.translate(max * column + midpointX + column,midpointY + row);
					bakedAngle += this.bakedRotationAngle;
					this.cachedGraphics.bitmap.draw(brush,this._matrix,null,null,null,AntiAliasing);
					column++;
				}
				midpointY += max;
				row++;
			}
		}
		this.frameWidth = this.frameHeight = max;
		this.set_width(this.set_height(max));
		this.region = new flixel.system.layer.Region(0,0,max,max,1,1);
		this.region.width = this.cachedGraphics.bitmap.width;
		this.region.height = this.cachedGraphics.bitmap.height;
		this.updateFrameData();
		if(AutoBuffer) {
			this.set_width(brush.width);
			this.set_height(brush.height);
			this.centerOffsets();
		}
		this.animation.createPrerotated();
		this.resetHelpers();
		return this;
	}
	,loadGraphicFromTexture: function(Data,Unique,FrameName) {
		if(Unique == null) Unique = false;
		this.bakedRotationAngle = 0;
		if(js.Boot.__instanceof(Data,flixel.util.loaders.CachedGraphics)) {
			this.set_cachedGraphics(Data);
			if(this.cachedGraphics.data == null) return null;
		} else if(js.Boot.__instanceof(Data,flixel.util.loaders.TexturePackerData)) {
			this.set_cachedGraphics(flixel.FlxG.bitmap.addWithSpaces(Data.assetName,0,0,1,1,Unique,null));
			this.cachedGraphics.data = Data;
		} else return null;
		this.region = new flixel.system.layer.Region();
		this.region.width = this.cachedGraphics.bitmap.width;
		this.region.height = this.cachedGraphics.bitmap.height;
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		if(FrameName != null) this.animation.set_frameName(FrameName);
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		return this;
	}
	,loadRotatedGraphicFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		var temp = this.loadGraphicFromTexture(Data);
		if(temp == null) return null;
		this.animation.set_frameName(Image);
		var key = Std.string(Data.assetName) + ":" + Image;
		var frameBitmapData = this.getFlxFrameBitmapData();
		if(flixel.FlxG.bitmap.get(key) == null) frameBitmapData = frameBitmapData.clone();
		this.loadRotatedGraphic(frameBitmapData,Rotations,-1,AntiAliasing,AutoBuffer,key);
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		this.bakedRotationAngle = 0;
		this.set_cachedGraphics(flixel.FlxG.bitmap.create(Width,Height,Color,Unique,Key));
		this.region = new flixel.system.layer.Region();
		this.region.width = Width;
		this.region.height = Height;
		this.set_width(this.region.tileWidth = this.frameWidth = this.cachedGraphics.bitmap.width);
		this.set_height(this.region.tileHeight = this.frameHeight = this.cachedGraphics.bitmap.height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,resetSize: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetFrameSize: function() {
		this.frameWidth = this.frame.sourceSize.x | 0;
		this.frameHeight = this.frame.sourceSize.y | 0;
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetSizeFromFrame: function() {
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,setGraphicSize: function(Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Width <= 0 && Height <= 0) return;
		var newScaleX = Width / this.frameWidth;
		var newScaleY = Height / this.frameHeight;
		this.scale.set(newScaleX,newScaleY);
		if(Width <= 0) this.scale.set_x(newScaleY); else if(Height <= 0) this.scale.set_y(newScaleX);
	}
	,updateHitbox: function() {
		var newWidth = this.scale.x * this.frameWidth;
		var newHeight = this.scale.y * this.frameHeight;
		this.set_width(newWidth);
		this.set_height(newHeight);
		this.offset.set(-((newWidth - this.frameWidth) * 0.5),-((newHeight - this.frameHeight) * 0.5));
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,resetHelpers: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		this._flashRect2.width = this.cachedGraphics.bitmap.width;
		this._flashRect2.height = this.cachedGraphics.bitmap.height;
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		this.dirty = true;
		this.getFlxFrameBitmapData();
		this._halfWidth = this.frameWidth * 0.5;
		this._halfHeight = this.frameHeight * 0.5;
	}
	,update: function() {
		flixel.FlxObject.prototype.update.call(this);
		this.animation.update();
	}
	,draw: function() {
		if(this.alpha == 0) return;
		if(this.dirty) this.calcFrame();
		var simpleRender = this.isSimpleRender();
		var _g = 0;
		var _g1 = this.get_cameras();
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(!camera.visible || !camera.exists || !this.isOnScreen(camera)) continue;
			this._point.set_x(this.x - camera.scroll.x * this.scrollFactor.x - this.offset.x);
			this._point.set_y(this.y - camera.scroll.y * this.scrollFactor.y - this.offset.y);
			if(simpleRender) {
				this._flashPoint.x = Math.floor(this._point.x);
				this._flashPoint.y = Math.floor(this._point.y);
				camera.buffer.copyPixels(this.framePixels,this._flashRect,this._flashPoint,null,null,true);
			} else {
				this._matrix.identity();
				this._matrix.translate(-this.origin.x,-this.origin.y);
				this._matrix.scale(this.scale.x,this.scale.y);
				if(this.angle != 0 && this.bakedRotationAngle <= 0) this._matrix.rotate(this.angle * (Math.PI / 180));
				var _g2 = this._point;
				_g2.set_x(_g2.x + this.origin.x);
				var _g21 = this._point;
				_g21.set_y(_g21.y + this.origin.y);
				if(this.pixelPerfectRender) this._point.floor();
				this._matrix.translate(this._point.x,this._point.y);
				camera.buffer.draw(this.framePixels,this._matrix,null,this.blend,null,this.antialiasing || camera.antialiasing);
			}
		}
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(Brush.dirty) {
			Brush.dirty = true;
			Brush.calcFrame();
		}
		var bitmapData = Brush.framePixels;
		if((Brush.angle == 0 || Brush.bakedRotationAngle > 0) && Brush.scale.x == 1 && Brush.scale.y == 1 && Brush.blend == null) {
			this._flashPoint.x = X + this.region.startX;
			this._flashPoint.y = Y + this.region.startY;
			this._flashRect2.width = bitmapData.width;
			this._flashRect2.height = bitmapData.height;
			this.cachedGraphics.bitmap.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this.cachedGraphics.bitmap.width;
			this._flashRect2.height = this.cachedGraphics.bitmap.height;
			this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
			this.dirty = true;
			this.calcFrame();
			return;
		}
		this._matrix.identity();
		this._matrix.translate(-Brush.origin.x,-Brush.origin.y);
		this._matrix.scale(Brush.scale.x,Brush.scale.y);
		if(Brush.angle != 0) this._matrix.rotate(Brush.angle * (Math.PI / 180));
		this._matrix.translate(X + this.region.startX + Brush.origin.x,Y + this.region.startY + Brush.origin.y);
		var brushBlend = Brush.blend;
		this.cachedGraphics.bitmap.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		this.dirty = true;
		this.calcFrame();
	}
	,drawFrame: function(Force) {
		if(Force == null) Force = false;
		if(Force || this.dirty) {
			this.dirty = true;
			this.calcFrame();
		}
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) AdjustPosition = false;
		this.offset.set_x((this.frameWidth - this.get_width()) * 0.5);
		this.offset.set_y((this.frameHeight - this.get_height()) * 0.5);
		if(AdjustPosition) {
			var _g = this;
			_g.set_x(_g.x + this.offset.x);
			var _g1 = this;
			_g1.set_y(_g1.y + this.offset.y);
		}
	}
	,centerOrigin: function() {
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var row = this.region.startY;
		var column;
		var rows = this.region.height;
		var columns = this.region.width;
		this.cachedGraphics.bitmap.lock();
		while(row < rows) {
			column = this.region.startX;
			while(column < columns) {
				if(this.cachedGraphics.bitmap.getPixel32(column,row) == Color) {
					this.cachedGraphics.bitmap.setPixel32(column,row,NewColor);
					if(FetchPositions) positions.push(flixel.util.FlxPoint.get(column,row));
					this.dirty = true;
				}
				column++;
			}
			row++;
		}
		this.cachedGraphics.bitmap.unlock();
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		return positions;
	}
	,setColorTransform: function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
		if(alphaOffset == null) alphaOffset = 0;
		if(blueOffset == null) blueOffset = 0;
		if(greenOffset == null) greenOffset = 0;
		if(redOffset == null) redOffset = 0;
		if(alphaMultiplier == null) alphaMultiplier = 1.0;
		if(blueMultiplier == null) blueMultiplier = 1.0;
		if(greenMultiplier == null) greenMultiplier = 1.0;
		if(redMultiplier == null) redMultiplier = 1.0;
		this.set_color((redMultiplier * 255 | 0) << 16 | (greenMultiplier * 255 | 0) << 8 | (blueMultiplier * 255 | 0));
		this.set_alpha(alphaMultiplier);
		if(this.colorTransform == null) this.colorTransform = new flash.geom.ColorTransform(); else {
			this.colorTransform.redMultiplier = redMultiplier;
			this.colorTransform.greenMultiplier = greenMultiplier;
			this.colorTransform.blueMultiplier = blueMultiplier;
			this.colorTransform.alphaMultiplier = alphaMultiplier;
			this.colorTransform.redOffset = redOffset;
			this.colorTransform.greenOffset = greenOffset;
			this.colorTransform.blueOffset = blueOffset;
			this.colorTransform.alphaOffset = alphaOffset;
		}
		this.useColorTransform = this.alpha != 1 || this.color != 16777215 || redOffset != 0 || greenOffset != 0 || blueOffset != 0 || alphaOffset != 0;
		this.dirty = true;
	}
	,updateColorTransform: function() {
		if(this.alpha != 1 || this.color != 16777215) {
			if(this.colorTransform == null) this.colorTransform = new flash.geom.ColorTransform((this.color >> 16) / 255,(this.color >> 8 & 255) / 255,(this.color & 255) / 255,this.alpha); else {
				this.colorTransform.redMultiplier = (this.color >> 16) / 255;
				this.colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
				this.colorTransform.blueMultiplier = (this.color & 255) / 255;
				this.colorTransform.alphaMultiplier = this.alpha;
			}
			this.useColorTransform = true;
		} else {
			if(this.colorTransform != null) {
				this.colorTransform.redMultiplier = 1;
				this.colorTransform.greenMultiplier = 1;
				this.colorTransform.blueMultiplier = 1;
				this.colorTransform.alphaMultiplier = 1;
			}
			this.useColorTransform = false;
		}
		this.dirty = true;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.set_x(this._point.x - this.offset.x);
		this._point.set_y(this._point.y - this.offset.y);
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(point._weak) flixel.util.FlxPoint._pool.put(point);
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) return false; else {
			var frameData = this.getFlxFrameBitmapData();
			var pixelColor = frameData.getPixel32(this._flashPoint.x | 0,this._flashPoint.y | 0);
			var pixelAlpha = pixelColor >> 24 & 255;
			return pixelAlpha * this.alpha >= Mask;
		}
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
		if(this.cachedGraphics == null) this.loadGraphic(flixel._FlxSprite.GraphicDefault);
		this.getFlxFrameBitmapData();
	}
	,updateFrameData: function() {
		if(this.cachedGraphics == null) return;
		if(this.cachedGraphics.data != null && (this.region.tileWidth == 0 && this.region.tileHeight == 0)) this.framesData = this.cachedGraphics.get_tilesheet().getTexturePackerFrames(this.cachedGraphics.data); else this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,null);
		this.frames = this.framesData.frames.length;
		this.animation.set_frameIndex(0);
		this.set_frame(this.framesData.frames[0]);
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,getFlxFrameBitmapData: function() {
		if(this.frame != null && this.dirty) {
			if(!this.flipX && !this.flipY && this.frame.type == flixel.system.layer.frames.FrameType.REGULAR) this.framePixels = this.frame.paintOnBitmap(this.framePixels); else {
				var frameBmd = null;
				if(this.flipX && this.flipY) frameBmd = this.frame.getHVReversedBitmap(); else if(this.flipX) frameBmd = this.frame.getHReversedBitmap(); else if(this.flipY) frameBmd = this.frame.getVReversedBitmap(); else frameBmd = this.frame.getBitmap();
				if(this.framePixels == null || this.framePixels.width != this.frameWidth || this.framePixels.height != this.frameHeight) {
					if(this.framePixels != null) this.framePixels.dispose();
					this.framePixels = new flash.display.BitmapData(this.frame.sourceSize.x | 0,this.frame.sourceSize.y | 0);
				}
				this.framePixels.copyPixels(frameBmd,this._flashRect,this._flashPointZero);
			}
			if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this.colorTransform);
			this.dirty = false;
		}
		return this.framePixels;
	}
	,getGraphicMidpoint: function(point) {
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		return point.set(this.x + this.frameWidth * 0.5,this.y + this.frameHeight * 0.5);
	}
	,resetFrameBitmapDatas: function() {
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		var minX = this.x - this.offset.x - Camera.scroll.x * this.scrollFactor.x;
		var minY = this.y - this.offset.y - Camera.scroll.y * this.scrollFactor.y;
		var maxX = 0;
		var maxY = 0;
		if((this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1) {
			maxX = minX + this.frameWidth;
			maxY = minY + this.frameHeight;
		} else {
			var radiusX = this._halfWidth;
			var radiusY = this._halfHeight;
			if(this.origin.x == this._halfWidth) radiusX = Math.abs(this._halfWidth * this.scale.x); else {
				var sox = this.scale.x * this.origin.x;
				var sfw = this.scale.x * this.frameWidth;
				var x1 = Math.abs(sox);
				var x2 = Math.abs(sfw - sox);
				radiusX = Math.max(x2,x1);
			}
			if(this.origin.y == this._halfHeight) radiusY = Math.abs(this._halfHeight * this.scale.y); else {
				var soy = this.scale.y * this.origin.y;
				var sfh = this.scale.y * this.frameHeight;
				var y1 = Math.abs(soy);
				var y2 = Math.abs(sfh - soy);
				radiusY = Math.max(y2,y1);
			}
			var radius = Math.max(radiusX,radiusY);
			radius *= 1.41421356237;
			minX += this.origin.x;
			maxX = minX + radius;
			minX -= radius;
			minY += this.origin.y;
			maxY = minY + radius;
			minY -= radius;
		}
		if(maxX < 0 || minX > Camera.width) return false;
		if(maxY < 0 || minY > Camera.height) return false;
		return true;
	}
	,isSimpleRender: function() {
		return (this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1 && this.blend == null && this.pixelPerfectRender;
	}
	,setFacingFlip: function(Direction,FlipX,FlipY) {
		this._facingFlip.set(Direction,{ x : FlipX, y : FlipY});
	}
	,get_pixels: function() {
		return this.cachedGraphics.bitmap;
	}
	,set_pixels: function(Pixels) {
		var key = flixel.FlxG.bitmap.getCacheKeyFor(Pixels);
		if(key == null) {
			key = flixel.FlxG.bitmap.getUniqueKey();
			this.set_cachedGraphics(flixel.FlxG.bitmap.addWithSpaces(Pixels,0,0,1,1,false,key));
			this.cachedGraphics.set_destroyOnNoUse(true);
		} else this.set_cachedGraphics(flixel.FlxG.bitmap.get(key));
		if(this.region == null) this.region = new flixel.system.layer.Region();
		this.region.startX = 0;
		this.region.startY = 0;
		this.region.tileWidth = this.region.width = this.cachedGraphics.bitmap.width;
		this.region.tileHeight = this.region.height = this.cachedGraphics.bitmap.height;
		this.region.spacingX = 0;
		this.region.spacingY = 0;
		this.set_width(this.frameWidth = this.cachedGraphics.bitmap.width);
		this.set_height(this.frameHeight = this.cachedGraphics.bitmap.height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		return Pixels;
	}
	,set_frame: function(Value) {
		this.frame = Value;
		if(this.frame != null) {
			this.frameWidth = this.frame.sourceSize.x | 0;
			this.frameHeight = this.frame.sourceSize.y | 0;
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = this.frameWidth;
			this._flashRect.height = this.frameHeight;
			this.dirty = true;
		} else if(this.framesData != null && this.framesData.frames != null && this.framesData.frames.length > 0) {
			this.frame = this.framesData.frames[0];
			this.dirty = true;
		}
		return this.frame;
	}
	,set_facing: function(Direction) {
		var flip = this._facingFlip.get(Direction);
		if(flip != null) {
			this.set_flipX(flip.x);
			this.set_flipY(flip.y);
		}
		return this.facing = Direction;
	}
	,set_alpha: function(Alpha) {
		if(Alpha > 1) Alpha = 1;
		if(Alpha < 0) Alpha = 0;
		if(Alpha == this.alpha) return this.alpha;
		this.alpha = Alpha;
		this.updateColorTransform();
		return this.alpha;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this.color == Color) return Color;
		this.color = Color;
		this.updateColorTransform();
		return this.color;
	}
	,set_angle: function(Value) {
		this._angleChanged = this.angle != Value || this._angleChanged;
		return flixel.FlxObject.prototype.set_angle.call(this,Value);
	}
	,set_blend: function(Value) {
		return this.blend = Value;
	}
	,set_cachedGraphics: function(Value) {
		var oldCached = this.cachedGraphics;
		if(this.cachedGraphics != Value && Value != null) {
			var _g = Value;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		if(oldCached != null && oldCached != Value) {
			var _g2 = oldCached;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 - 1);
			_g11;
		}
		return this.cachedGraphics = Value;
	}
	,set_flipX: function(Value) {
		if(this.flipX != Value) this.dirty = true;
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(this.flipY != Value) this.dirty = true;
		return this.flipY = Value;
	}
	,__class__: flixel.FlxSprite
	,__properties__: $extend(flixel.FlxObject.prototype.__properties__,{set_color:"set_color",set_blend:"set_blend",set_flipY:"set_flipY",set_flipX:"set_flipX",set_facing:"set_facing",set_alpha:"set_alpha",set_cachedGraphics:"set_cachedGraphics",set_frame:"set_frame",set_pixels:"set_pixels",get_pixels:"get_pixels"})
});
var Piece = function(x,y) {
	flixel.FlxSprite.call(this,x,y);
	this.playerNum = -1;
};
$hxClasses["Piece"] = Piece;
Piece.__name__ = ["Piece"];
Piece.__super__ = flixel.FlxSprite;
Piece.prototype = $extend(flixel.FlxSprite.prototype,{
	pID: null
	,playerNum: null
	,xPos: null
	,yPos: null
	,isWhite: null
	,type: null
	,__class__: Piece
});
var Bishop = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteBishop.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackBishop.png");
		this.isWhite = false;
	}
	this.type = 3;
};
$hxClasses["Bishop"] = Bishop;
Bishop.__name__ = ["Bishop"];
Bishop.__super__ = Piece;
Bishop.prototype = $extend(Piece.prototype,{
	changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayBishop.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayBishop.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueBishop.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeBishop.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealBishop.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redBishop.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleBishop.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkBishop.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowBishop.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenBishop.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whiteBishop.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackBishop.png");
			break;
		}
	}
	,__class__: Bishop
});
var Board = function(x,y,blackWhite) {
	flixel.FlxSprite.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteSquare.png");
		this._isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackSquare.png");
		this._isWhite = false;
	}
};
$hxClasses["Board"] = Board;
Board.__name__ = ["Board"];
Board.__super__ = flixel.FlxSprite;
Board.prototype = $extend(flixel.FlxSprite.prototype,{
	_blackWhite: null
	,playerNum: null
	,_isWhite: null
	,defaultColor: function() {
		if(this._isWhite) this.loadGraphic("assets/images/whiteSquare.png"); else this.loadGraphic("assets/images/blackSquare.png");
	}
	,changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayMarker.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayMarker.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueMarker.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeMarker.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealMarker.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redMarker.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleMarker.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkMarker.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowMarker.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenMarker.png");
			break;
		}
	}
	,__class__: Board
});
var Connect = function(game) {
	this.playerNum = 0;
	this._game = game;
};
$hxClasses["Connect"] = Connect;
Connect.__name__ = ["Connect"];
Connect.socket = null;
Connect.prototype = {
	playerNum: null
	,currentPlayers: null
	,playerPositions: null
	,_game: null
	,connect: function() {
		Connect.socket = new WebSocket(Connect._server);
		Connect.socket.onopen = $bind(this,this.onOpen);
		Connect.socket.onclose = $bind(this,this.onClose);
		Connect.socket.onmessage = $bind(this,this.onMessage);
		Connect.socket.onerror = $bind(this,this.onError);
	}
	,onOpen: function(e) {
		haxe.Log.trace("connected!",{ fileName : "Connect.hx", lineNumber : 48, className : "Connect", methodName : "onOpen"});
		var getName = { msg : "newplayer"};
		this.sendMessage(getName);
	}
	,onClose: function(e) {
		haxe.Log.trace("disconnected!",{ fileName : "Connect.hx", lineNumber : 58, className : "Connect", methodName : "onClose"});
	}
	,sendMessage: function(m) {
		var send = JSON.stringify(m);
		haxe.Log.trace("Sending: ",{ fileName : "Connect.hx", lineNumber : 63, className : "Connect", methodName : "sendMessage", customParams : [send]});
		Connect.socket.send(send);
	}
	,onMessage: function(m) {
		haxe.Log.trace("Received: ",{ fileName : "Connect.hx", lineNumber : 68, className : "Connect", methodName : "onMessage", customParams : [m.data]});
		var o = JSON.parse(m.data);
		if(o.msg == "assignname") {
			this.playerNum = o.name;
			haxe.Log.trace("player assigned name",{ fileName : "Connect.hx", lineNumber : 74, className : "Connect", methodName : "onMessage", customParams : [this.playerNum]});
			this._game.assignPlayerPiece();
		} else if(o.msg == "playerjoined") this.currentPlayers = o.names; else if(o.msg == "playerpositions") {
			var positions = o.positions;
			var _g = 0;
			while(_g < positions.length) {
				var p = positions[_g];
				++_g;
				this._game.updatePositions(p.name,p.pID,js.Boot.__cast(p.xPos , Float),js.Boot.__cast(p.yPos , Float));
				if(p.name == this.playerNum) continue;
				this._game.colorSprite(p.name,p.pID);
			}
			this._game.determineMoves();
		} else if(o.msg == "destroypid") this._game.removePieceByPID(o.pID); else if(o.msg == "playerleft") this._game.playerLeft(o.pID);
	}
	,onError: function(e) {
		haxe.Log.trace(e.data,{ fileName : "Connect.hx", lineNumber : 101, className : "Connect", methodName : "onError"});
	}
	,__class__: Connect
};
var openfl = {};
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: openfl.AssetLibrary
};
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	this.addExternal("assets/music/music-goes-here.txt","text","assets/music/music-goes-here.txt");
	this.addExternal("assets/images/whiteSquare.png","image","assets/images/whiteSquare.png");
	this.addExternal("assets/images/blackSquare.png","image","assets/images/blackSquare.png");
	this.addExternal("assets/images/greenKnight.png","image","assets/images/greenKnight.png");
	this.addExternal("assets/images/whiteRook.png","image","assets/images/whiteRook.png");
	this.addExternal("assets/images/blueQueen.png","image","assets/images/blueQueen.png");
	this.addExternal("assets/images/tealQueen.png","image","assets/images/tealQueen.png");
	this.addExternal("assets/images/yellowPawn.png","image","assets/images/yellowPawn.png");
	this.addExternal("assets/images/darkGrayQueen.png","image","assets/images/darkGrayQueen.png");
	this.addExternal("assets/images/blackPawn.png","image","assets/images/blackPawn.png");
	this.addExternal("assets/images/blackKing.png","image","assets/images/blackKing.png");
	this.addExternal("assets/images/pinkQueen.png","image","assets/images/pinkQueen.png");
	this.addExternal("assets/images/orangeQueen.png","image","assets/images/orangeQueen.png");
	this.addExternal("assets/images/whitePawn.png","image","assets/images/whitePawn.png");
	this.addExternal("assets/images/tealKnight.png","image","assets/images/tealKnight.png");
	this.addExternal("assets/images/purpleRook.png","image","assets/images/purpleRook.png");
	this.addExternal("assets/images/yellowQueen.png","image","assets/images/yellowQueen.png");
	this.addExternal("assets/images/blueKnight.png","image","assets/images/blueKnight.png");
	this.addExternal("assets/images/redMarker.png","image","assets/images/redMarker.png");
	this.addExternal("assets/images/purpleMarker.png","image","assets/images/purpleMarker.png");
	this.addExternal("assets/images/greenKing.png","image","assets/images/greenKing.png");
	this.addExternal("assets/images/bluePawn.png","image","assets/images/bluePawn.png");
	this.addExternal("assets/images/tealPawn.png","image","assets/images/tealPawn.png");
	this.addExternal("assets/images/greenMarker.png","image","assets/images/greenMarker.png");
	this.addExternal("assets/images/orangeKing.png","image","assets/images/orangeKing.png");
	this.addExternal("assets/images/greenPawn.png","image","assets/images/greenPawn.png");
	this.addExternal("assets/images/blackBishop.png","image","assets/images/blackBishop.png");
	this.addExternal("assets/images/darkGrayBishop.png","image","assets/images/darkGrayBishop.png");
	this.addExternal("assets/images/tealBishop.png","image","assets/images/tealBishop.png");
	this.addExternal("assets/images/yellowMarker.png","image","assets/images/yellowMarker.png");
	this.addExternal("assets/images/lightGrayKing.png","image","assets/images/lightGrayKing.png");
	this.addExternal("assets/images/yellowKing.png","image","assets/images/yellowKing.png");
	this.addExternal("assets/images/yellowBishop.png","image","assets/images/yellowBishop.png");
	this.addExternal("assets/images/purpleQueen.png","image","assets/images/purpleQueen.png");
	this.addExternal("assets/images/blackRook.png","image","assets/images/blackRook.png");
	this.addExternal("assets/images/redRook.png","image","assets/images/redRook.png");
	this.addExternal("assets/images/tealRook.png","image","assets/images/tealRook.png");
	this.addExternal("assets/images/lightGrayMarker.png","image","assets/images/lightGrayMarker.png");
	this.addExternal("assets/images/pinkKnight.png","image","assets/images/pinkKnight.png");
	this.addExternal("assets/images/purpleKing.png","image","assets/images/purpleKing.png");
	this.addExternal("assets/images/lightGrayPawn.png","image","assets/images/lightGrayPawn.png");
	this.addExternal("assets/images/blackKnight.png","image","assets/images/blackKnight.png");
	this.addExternal("assets/images/redKnight.png","image","assets/images/redKnight.png");
	this.addExternal("assets/images/whiteBishop.png","image","assets/images/whiteBishop.png");
	this.addExternal("assets/images/purpleKnight.png","image","assets/images/purpleKnight.png");
	this.addExternal("assets/images/blackQueen.png","image","assets/images/blackQueen.png");
	this.addExternal("assets/images/orangeRook.png","image","assets/images/orangeRook.png");
	this.addExternal("assets/images/pinkBishop.png","image","assets/images/pinkBishop.png");
	this.addExternal("assets/images/redQueen.png","image","assets/images/redQueen.png");
	this.addExternal("assets/images/blueMarker.png","image","assets/images/blueMarker.png");
	this.addExternal("assets/images/darkGrayKing.png","image","assets/images/darkGrayKing.png");
	this.addExternal("assets/images/tealMarker.png","image","assets/images/tealMarker.png");
	this.addExternal("assets/images/greenBishop.png","image","assets/images/greenBishop.png");
	this.addExternal("assets/images/whiteQueen.png","image","assets/images/whiteQueen.png");
	this.addExternal("assets/images/lightGrayRook.png","image","assets/images/lightGrayRook.png");
	this.addExternal("assets/images/tealKing.png","image","assets/images/tealKing.png");
	this.addExternal("assets/images/orangeKnight.png","image","assets/images/orangeKnight.png");
	this.addExternal("assets/images/redPawn.png","image","assets/images/redPawn.png");
	this.addExternal("assets/images/redKing.png","image","assets/images/redKing.png");
	this.addExternal("assets/images/whiteKnight.png","image","assets/images/whiteKnight.png");
	this.addExternal("assets/images/darkGrayKnight.png","image","assets/images/darkGrayKnight.png");
	this.addExternal("assets/images/redBishop.png","image","assets/images/redBishop.png");
	this.addExternal("assets/images/yellowKnight.png","image","assets/images/yellowKnight.png");
	this.addExternal("assets/images/orangePawn.png","image","assets/images/orangePawn.png");
	this.addExternal("assets/images/blueKing.png","image","assets/images/blueKing.png");
	this.addExternal("assets/images/pinkPawn.png","image","assets/images/pinkPawn.png");
	this.addExternal("assets/images/greenQueen.png","image","assets/images/greenQueen.png");
	this.addExternal("assets/images/blueRook.png","image","assets/images/blueRook.png");
	this.addExternal("assets/images/orangeMarker.png","image","assets/images/orangeMarker.png");
	this.addExternal("assets/images/whiteKing.png","image","assets/images/whiteKing.png");
	this.addExternal("assets/images/lightGrayBishop.png","image","assets/images/lightGrayBishop.png");
	this.addExternal("assets/images/pinkMarker.png","image","assets/images/pinkMarker.png");
	this.addExternal("assets/images/darkGrayPawn.png","image","assets/images/darkGrayPawn.png");
	this.addExternal("assets/images/darkGrayRook.png","image","assets/images/darkGrayRook.png");
	this.addExternal("assets/images/purplePawn.png","image","assets/images/purplePawn.png");
	this.addExternal("assets/images/lightGrayQueen.png","image","assets/images/lightGrayQueen.png");
	this.addExternal("assets/images/orangeBishop.png","image","assets/images/orangeBishop.png");
	this.addExternal("assets/images/purpleBishop.png","image","assets/images/purpleBishop.png");
	this.addExternal("assets/images/blueBishop.png","image","assets/images/blueBishop.png");
	this.addExternal("assets/images/pinkKing.png","image","assets/images/pinkKing.png");
	this.addExternal("assets/images/pinkRook.png","image","assets/images/pinkRook.png");
	this.addExternal("assets/images/greenRook.png","image","assets/images/greenRook.png");
	this.addExternal("assets/images/yellowRook.png","image","assets/images/yellowRook.png");
	this.addExternal("assets/images/darkGrayMarker.png","image","assets/images/darkGrayMarker.png");
	this.addExternal("assets/images/lightGrayKnight.png","image","assets/images/lightGrayKnight.png");
	this.addExternal("assets/data/data-goes-here.txt","text","assets/data/data-goes-here.txt");
	this.addExternal("assets/sounds/sounds-go-here.txt","text","assets/sounds/sounds-go-here.txt");
	this.addExternal("assets/sounds/flixel.mp3","music","assets/sounds/flixel.mp3");
	this.addExternal("assets/sounds/beep.mp3","music","assets/sounds/beep.mp3");
	this.addExternal("assets/sounds/beep.ogg","sound","assets/sounds/beep.ogg");
	this.addExternal("assets/sounds/flixel.ogg","sound","assets/sounds/flixel.ogg");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	addEmbed: function(id,kind,value) {
		var value1 = value;
		DefaultAssetLibrary.className.set(id,value1);
		var value2 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value2);
	}
	,addExternal: function(id,kind,value) {
		DefaultAssetLibrary.path.set(id,value);
		var value1 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value1);
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return flash.display.BitmapData.fromImage((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getMusic: function(id) {
		var sound = new flash.media.Sound();
		sound.__buffer = true;
		sound.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		return sound;
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler(event.currentTarget.data);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var King = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteKing.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackKing.png");
		this.isWhite = false;
	}
	this.type = 5;
};
$hxClasses["King"] = King;
King.__name__ = ["King"];
King.__super__ = Piece;
King.prototype = $extend(Piece.prototype,{
	changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayKing.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayKing.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueKing.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeKing.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealKing.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redKing.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleKing.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkKing.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowKing.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenKing.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whiteKing.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackKing.png");
			break;
		}
	}
	,__class__: King
});
var Knight = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteKnight.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackKnight.png");
		this.isWhite = false;
	}
	this.type = 2;
};
$hxClasses["Knight"] = Knight;
Knight.__name__ = ["Knight"];
Knight.__super__ = Piece;
Knight.prototype = $extend(Piece.prototype,{
	changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayKnight.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayKnight.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueKnight.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeKnight.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealKnight.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redKnight.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleKnight.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkKnight.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowKnight.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenKnight.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whiteKnight.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackKnight.png");
			break;
		}
	}
	,__class__: Knight
});
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	outline: null
	,progress: null
	,getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 640;
		if(height > 0) return height; else return flash.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 640;
		if(width > 0) return width; else return flash.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Pawn = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whitePawn.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackPawn.png");
		this.isWhite = false;
	}
	if(this.isWhite) {
		this.xStart = x;
		this.yStart = y;
	} else {
		this.xStart = 560 - x;
		this.yStart = 560 - y;
	}
	this.type = 0;
};
$hxClasses["Pawn"] = Pawn;
Pawn.__name__ = ["Pawn"];
Pawn.__super__ = Piece;
Pawn.prototype = $extend(Piece.prototype,{
	xStart: null
	,yStart: null
	,changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayPawn.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayPawn.png");
			break;
		case 3:
			this.loadGraphic("assets/images/bluePawn.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangePawn.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealPawn.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redPawn.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purplePawn.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkPawn.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowPawn.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenPawn.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whitePawn.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackPawn.png");
			break;
		}
	}
	,__class__: Pawn
});
flixel.group = {};
flixel.group.FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	this._marker = 0;
	this.length = 0;
	flixel.FlxBasic.call(this);
	this.members = [];
	this.set_maxSize(Std["int"](Math.abs(MaxSize)));
	this.collisionType = 2;
};
$hxClasses["flixel.group.FlxTypedGroup"] = flixel.group.FlxTypedGroup;
flixel.group.FlxTypedGroup.__name__ = ["flixel","group","FlxTypedGroup"];
flixel.group.FlxTypedGroup.__super__ = flixel.FlxBasic;
flixel.group.FlxTypedGroup.prototype = $extend(flixel.FlxBasic.prototype,{
	members: null
	,maxSize: null
	,length: null
	,_marker: null
	,destroy: function() {
		flixel.FlxBasic.prototype.destroy.call(this);
		if(this.members != null) {
			var i = 0;
			var basic = null;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null) basic.destroy();
			}
			this.members = null;
		}
	}
	,update: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.active) basic.update();
		}
	}
	,draw: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) basic.draw();
		}
	}
	,add: function(Object) {
		if(Object == null) return null;
		if(HxOverrides.indexOf(this.members,Object,0) >= 0) return Object;
		var index = this.getFirstNull();
		if(index != -1) {
			this.members[index] = Object;
			if(index >= this.length) this.length = index + 1;
			return Object;
		}
		if(this.maxSize > 0 && this.length >= this.maxSize) return Object;
		this.members.push(Object);
		this.length++;
		return Object;
	}
	,recycle: function(ObjectClass,ContructorArgs,Force,Revive) {
		if(Revive == null) Revive = true;
		if(Force == null) Force = false;
		if(ContructorArgs == null) ContructorArgs = [];
		var basic = null;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				if(ObjectClass == null) return null;
				return this.add(Type.createInstance(ObjectClass,ContructorArgs));
			} else {
				basic = this.members[this._marker++];
				if(this._marker >= this.maxSize) this._marker = 0;
				if(Revive) basic.revive();
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass,Force);
			if(basic != null) {
				if(Revive) basic.revive();
				return basic;
			}
			if(ObjectClass == null) return null;
			return this.add(Type.createInstance(ObjectClass,ContructorArgs));
		}
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		if(this.members == null) return null;
		var index = HxOverrides.indexOf(this.members,Object,0);
		if(index < 0) return null;
		if(Splice) this.members.splice(index,1); else this.members[index] = null;
		return Object;
	}
	,replace: function(OldObject,NewObject) {
		var index = HxOverrides.indexOf(this.members,OldObject,0);
		if(index < 0) return null;
		this.members[index] = NewObject;
		return NewObject;
	}
	,sort: function(Function,Order) {
		if(Order == null) Order = -1;
		this.members.sort((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(Function,Order));
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == 2) basic.setAll(VariableName,Value,Recurse); else Reflect.setProperty(basic,VariableName,Value);
			}
		}
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		if(Args == null) Args = [];
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == 2) (js.Boot.__cast(basic , flixel.group.FlxTypedGroup)).callAll(FunctionName,Args,Recurse); else Reflect.callMethod(basic,Reflect.getProperty(basic,FunctionName),Args);
			}
		}
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js.Boot.__instanceof(basic,ObjectClass))) {
				if(Force && Type.getClassName(Type.getClass(basic)) != Type.getClassName(ObjectClass)) continue;
				return this.members[i - 1];
			}
		}
		return null;
	}
	,getFirstNull: function() {
		var i = 0;
		while(i < this.length) {
			if(this.members[i] == null) return i;
			i++;
		}
		return -1;
	}
	,getFirstExisting: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) return basic;
		}
		return null;
	}
	,getFirstAlive: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) return basic;
		}
		return null;
	}
	,getFirstDead: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) return basic;
		}
		return null;
	}
	,countLiving: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(basic.exists && basic.alive) count++;
			}
		}
		return count;
	}
	,countDead: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(!basic.alive) count++;
			}
		}
		return count;
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		if(StartIndex < 0) StartIndex = 0;
		if(Length <= 0) Length = this.length;
		return flixel.util.FlxRandom.getObject_getRandom_T(this.members,StartIndex,Length);
	}
	,clear: function() {
		this.length = 0;
		flixel.util.FlxArrayUtil.clearArray_flixel_group_FlxTypedGroup_T(this.members);
	}
	,kill: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) basic.kill();
		}
		flixel.FlxBasic.prototype.kill.call(this);
	}
	,iterator: function(filter) {
		return new flixel.group.FlxTypedGroupIterator(this.members,filter);
	}
	,forEach: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) Function(basic);
		}
	}
	,forEachAlive: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) Function(basic);
		}
	}
	,forEachDead: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) Function(basic);
		}
	}
	,forEachExists: function(Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) Function(basic);
		}
	}
	,forEachOfType: function(ObjectClass,Function) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && js.Boot.__instanceof(basic,ObjectClass)) Function(basic);
		}
	}
	,set_maxSize: function(Size) {
		this.maxSize = Std["int"](Math.abs(Size));
		if(this._marker >= this.maxSize) this._marker = 0;
		if(this.maxSize == 0 || this.members == null || this.maxSize >= this.length) return this.maxSize;
		var i = this.maxSize;
		var l = this.length;
		var basic = null;
		while(i < l) {
			basic = this.members[i++];
			if(basic != null) basic.destroy();
		}
		flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this.members,this.maxSize);
		this.length = this.members.length;
		return this.maxSize;
	}
	,__class__: flixel.group.FlxTypedGroup
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_maxSize:"set_maxSize"})
});
flixel.group.FlxGroup = function(MaxSize) {
	flixel.group.FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["flixel.group.FlxGroup"] = flixel.group.FlxGroup;
flixel.group.FlxGroup.__name__ = ["flixel","group","FlxGroup"];
flixel.group.FlxGroup.overlaps = function(Callback,Group,X,Y,InScreenSpace,Camera) {
	var result = false;
	if(Group != null) {
		var i = 0;
		var l = Group.length;
		var basic;
		while(i < l) {
			basic = Group.members[i++];
			if(basic != null && Callback(basic,X,Y,InScreenSpace,Camera)) {
				result = true;
				break;
			}
		}
	}
	return result;
};
flixel.group.FlxGroup.resolveGroup = function(ObjectOrGroup) {
	var group = null;
	if(ObjectOrGroup.collisionType == 4 || ObjectOrGroup.collisionType == 2) {
		if(ObjectOrGroup.collisionType == 2) group = ObjectOrGroup; else if(ObjectOrGroup.collisionType == 4) group = (js.Boot.__cast(ObjectOrGroup , flixel.group.FlxSpriteGroup)).group;
	}
	return group;
};
flixel.group.FlxGroup.__super__ = flixel.group.FlxTypedGroup;
flixel.group.FlxGroup.prototype = $extend(flixel.group.FlxTypedGroup.prototype,{
	__class__: flixel.group.FlxGroup
});
flixel.FlxState = function(MaxSize) {
	this._requestSubStateReset = false;
	this.destroySubStates = true;
	this.persistentDraw = true;
	this.persistentUpdate = false;
	flixel.group.FlxGroup.call(this,MaxSize);
};
$hxClasses["flixel.FlxState"] = flixel.FlxState;
flixel.FlxState.__name__ = ["flixel","FlxState"];
flixel.FlxState.__super__ = flixel.group.FlxGroup;
flixel.FlxState.prototype = $extend(flixel.group.FlxGroup.prototype,{
	persistentUpdate: null
	,persistentDraw: null
	,destroySubStates: null
	,subState: null
	,_requestedSubState: null
	,_requestSubStateReset: null
	,create: function() {
	}
	,draw: function() {
		if(this.persistentDraw || this.subState == null) flixel.group.FlxGroup.prototype.draw.call(this);
		if(this.subState != null) this.subState.draw();
	}
	,openSubState: function(SubState) {
		this._requestSubStateReset = true;
		this._requestedSubState = SubState;
	}
	,closeSubState: function() {
		this._requestSubStateReset = true;
		this._requestedSubState = null;
	}
	,resetSubState: function() {
		if(this.subState != null) {
			if(this.subState.closeCallback != null) this.subState.closeCallback();
			if(this.destroySubStates) this.subState.destroy();
		}
		this.subState = this._requestedSubState;
		if(this.subState != null) {
			if(!this.persistentUpdate) flixel.FlxG.inputs.reset();
			if(!this.subState._created) {
				this.subState._created = true;
				this.subState._parentState = this;
				this.subState.create();
			}
		}
	}
	,destroy: function() {
		if(this.subState != null) {
			this.subState.destroy();
			this.subState = null;
		}
		flixel.group.FlxGroup.prototype.destroy.call(this);
	}
	,onFocusLost: function() {
	}
	,onFocus: function() {
	}
	,onResize: function(Width,Height) {
	}
	,tryUpdate: function() {
		if(this.persistentUpdate || this.subState == null) this.update();
		if(this._requestSubStateReset) {
			this.resetSubState();
			this._requestSubStateReset = false;
		} else if(this.subState != null) this.subState.tryUpdate();
	}
	,get_bgColor: function() {
		return flixel.FlxG.cameras.get_bgColor();
	}
	,set_bgColor: function(Value) {
		return flixel.FlxG.cameras.set_bgColor(Value);
	}
	,__class__: flixel.FlxState
	,__properties__: $extend(flixel.group.FlxGroup.prototype.__properties__,{set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"})
});
var PlayState = function(MaxSize) {
	flixel.FlxState.call(this,MaxSize);
};
$hxClasses["PlayState"] = PlayState;
PlayState.__name__ = ["PlayState"];
PlayState.__super__ = flixel.FlxState;
PlayState.prototype = $extend(flixel.FlxState.prototype,{
	_playerControlling: null
	,_socket: null
	,_board: null
	,_white: null
	,_black: null
	,_playerNum: null
	,_playerPiece: null
	,_playerMoves: null
	,create: function() {
		flixel.FlxState.prototype.create.call(this);
		this._board = new flixel.group.FlxTypedGroup();
		var block;
		var _g = 0;
		while(_g < 8) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < 8) {
				var k = _g1++;
				if(k % 2 == 0 && i % 2 == 0) block = new Board(k * 80,i * 80,0); else if(k % 2 != 0 && i % 2 != 0) block = new Board(k * 80,i * 80,0); else block = new Board(k * 80,i * 80,1);
				this._board.add(block);
				this.add(block);
			}
		}
		this._white = new flixel.group.FlxTypedGroup();
		this._black = new flixel.group.FlxTypedGroup();
		this.setupBoard();
		this._playerControlling = -1;
		this._socket = new Connect(this);
		this._socket.connect();
	}
	,destroy: function() {
		flixel.FlxState.prototype.destroy.call(this);
	}
	,update: function() {
		if(flixel.FlxG.mouse._leftButton.justReleased()) {
			var _g = 0;
			var _g1 = this._playerMoves;
			while(_g < _g1.length) {
				var move = _g1[_g];
				++_g;
				var x = flixel.FlxG.mouse.x;
				var y = flixel.FlxG.mouse.y;
				if(x > move.x && x < move.x + 80.0) {
					if(y > move.y && y < move.y + 80.0) {
						this.sendPosition(move.x,move.y);
						this._playerMoves = [];
						this.resetBoard();
						break;
					}
				}
			}
		}
		flixel.FlxState.prototype.update.call(this);
	}
	,resetBoard: function() {
		var _g1 = 0;
		var _g = this._board.length;
		while(_g1 < _g) {
			var i = _g1++;
			var box = this._board.members[i];
			box.defaultColor();
		}
	}
	,getPieceFromPID: function(pID) {
		var p = new Piece(0,0);
		var pieces;
		if(pID <= 27) pieces = this._white; else pieces = this._black;
		var _g1 = 0;
		var _g = pieces.length;
		while(_g1 < _g) {
			var i = _g1++;
			p = pieces.members[i];
			if(p.pID == pID) return p;
		}
		return p;
	}
	,getPieceTypeFromPID: function(pID) {
		var p = this.getPieceFromPID(pID);
		if(p.type == 0) return js.Boot.__cast(p , Pawn); else if(p.type == 1) return js.Boot.__cast(p , Rook); else if(p.type == 2) return js.Boot.__cast(p , Knight); else if(p.type == 3) return js.Boot.__cast(p , Bishop); else if(p.type == 4) return js.Boot.__cast(p , Queen); else if(p.type == 5) return js.Boot.__cast(p , King);
		return p;
	}
	,removePieceByPID: function(pID) {
		var pieces;
		if(pID >= 30) pieces = this._black; else pieces = this._white;
		var _g1 = 0;
		var _g = pieces.length;
		while(_g1 < _g) {
			var i = _g1++;
			var p = pieces.members[i];
			if(p.pID == pID) {
				p.destroy();
				break;
			}
		}
	}
	,removePiece: function(playerNum) {
		var pieces;
		if(playerNum % 2 == 0) pieces = this._black; else pieces = this._white;
		var _g1 = 0;
		var _g = pieces.length;
		while(_g1 < _g) {
			var i = _g1++;
			var p = pieces.members[i];
			if(p.playerNum == playerNum) {
				p.destroy();
				break;
			}
		}
	}
	,updatePositions: function(playerNum,pID,xPos,yPos) {
		if(this._playerNum == playerNum && pID == 0) {
			this.assignNewPiece();
			return;
		} else if(pID == 0) {
			this.removePiece(playerNum);
			return;
		}
		var x = xPos * 80.0;
		var y = yPos * 80.0;
		if(this._playerNum % 2 == 0) {
			x = 560.0 - x;
			y = 560.0 - y;
			haxe.Log.trace(xPos,{ fileName : "PlayState.hx", lineNumber : 186, className : "PlayState", methodName : "updatePositions", customParams : [yPos,playerNum]});
		}
		var p = this.getPieceFromPID(pID);
		p.set_x(x);
		p.set_y(y);
	}
	,assignPieceOfType: function(type,pieces) {
		if(type == -1) return;
		var _g1 = 0;
		var _g = pieces.length;
		while(_g1 < _g) {
			var i = _g1++;
			var p = pieces.members[i];
			if(p.playerNum != -1) continue;
			if(p.type == type) {
				this.colorSprite(this._playerNum,p.pID);
				break;
			}
		}
		this.determineMoves();
	}
	,assignNewPiece: function() {
		this.resetBoard();
		var pawnCount = 0;
		var knightCount = 0;
		var bishopCount = 0;
		var rookCount = 0;
		var queenCount = 0;
		var kingCount = 0;
		var pieces;
		if(this._playerNum % 2 == 0) pieces = this._black; else pieces = this._white;
		this._playerPiece.destroy();
		var _g1 = 0;
		var _g = pieces.length;
		while(_g1 < _g) {
			var i = _g1++;
			var p = pieces.members[i];
			if(p.playerNum != -1) continue;
			if(p.type == 0) pawnCount += 1; else if(p.type == 1) rookCount += 1; else if(p.type == 2) knightCount += 1; else if(p.type == 3) bishopCount += 1; else if(p.type == 4) queenCount += 1; else kingCount += 1;
		}
		var getPieceType = -1;
		if(pawnCount >= 8) getPieceType = 0; else if(knightCount > 0) getPieceType = 2; else if(bishopCount > 0) getPieceType = 3; else if(rookCount > 0) getPieceType = 1; else if(queenCount > 0) getPieceType = 4; else if(kingCount > 0) getPieceType = 5;
		this.assignPieceOfType(getPieceType,pieces);
	}
	,assignPlayerPiece: function() {
		this._playerNum = this._socket.playerNum;
		if(this._playerControlling == -1) {
			if(this._playerNum % 2 == 0) this.flipBoard();
			this._playerControlling = this.startPosition(this._playerNum);
			this.colorSprite(this._playerNum,this._playerControlling);
		}
	}
	,colorSprite: function(playerNum,pID) {
		var type = this.getPieceTypeFromPID(pID);
		if(type.playerNum != -1 || pID == 0) return;
		type.playerNum = playerNum;
		type.changeColor();
		if(this._playerNum == playerNum) {
			this._playerPiece = type;
			this._playerControlling = pID;
			this.sendPosition();
		}
	}
	,startPosition: function(n) {
		switch(n) {
		case 1:
			return 13;
		case 2:
			return 34;
		case 3:
			return 14;
		case 4:
			return 33;
		case 5:
			return 15;
		case 6:
			return 32;
		case 7:
			return 12;
		case 8:
			return 35;
		case 9:
			return 11;
		case 10:
			return 36;
		default:
			return -1;
		}
	}
	,setupBoard: function() {
		var bPawn = 30;
		var wPawn = 10;
		var _g = 0;
		while(_g < 8) {
			var i = _g++;
			var b = new Pawn(i * 80,80,1);
			b.pID = bPawn;
			var w = new Pawn(i * 80,480,0);
			w.pID = wPawn;
			this._white.add(w);
			this._black.add(b);
			bPawn += 1;
			wPawn += 1;
		}
		var bRook = new Rook(0,0,1);
		bRook.pID = 40;
		var bRookR = new Rook(560,0,1);
		bRookR.pID = 47;
		this._black.add(bRook);
		this._black.add(bRookR);
		var wRook = new Rook(0,560,0);
		wRook.pID = 20;
		var wRookR = new Rook(560,560,0);
		wRookR.pID = 27;
		this._white.add(wRook);
		this._white.add(wRookR);
		var bKnight = new Knight(80,0,1);
		bKnight.pID = 41;
		var bKnightR = new Knight(480,0,1);
		bKnightR.pID = 46;
		this._black.add(bKnight);
		this._black.add(bKnightR);
		var wKnight = new Knight(80,560,0);
		wKnight.pID = 21;
		var wKnightR = new Knight(480,560,0);
		wKnightR.pID = 26;
		this._white.add(wKnight);
		this._white.add(wKnightR);
		var bBishop = new Bishop(160,0,1);
		bBishop.pID = 42;
		var bBishopR = new Bishop(400,0,1);
		bBishopR.pID = 45;
		this._black.add(bBishop);
		this._black.add(bBishopR);
		var wBishop = new Bishop(160,560,0);
		wBishop.pID = 22;
		var wBishopR = new Bishop(400,560,0);
		wBishopR.pID = 25;
		this._white.add(wBishop);
		this._white.add(wBishopR);
		var bQueen = new Queen(240,0,1);
		bQueen.pID = 43;
		var bKing = new King(320,0,1);
		bKing.pID = 44;
		this._black.add(bQueen);
		this._black.add(bKing);
		var wQueen = new Queen(240,560,0);
		wQueen.pID = 23;
		var wKing = new King(320,560,0);
		wKing.pID = 24;
		this._white.add(wQueen);
		this._white.add(wKing);
		this.add(this._white);
		this.add(this._black);
	}
	,flipBoard: function() {
		var _g1 = 0;
		var _g = this._white.length;
		while(_g1 < _g) {
			var i = _g1++;
			var t = this._white.members[i];
			t.set_x(560 - t.x);
			t.set_y(560 - t.y);
		}
		var _g11 = 0;
		var _g2 = this._black.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var t1 = this._black.members[i1];
			t1.set_x(560 - t1.x);
			t1.set_y(560 - t1.y);
		}
	}
	,displayMoves: function(moves) {
		var _g = 0;
		while(_g < moves.length) {
			var p = moves[_g];
			++_g;
			var _g2 = 0;
			var _g1 = this._board.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var box = this._board.members[i];
				if(p.x == box.x && p.y == box.y) {
					box.playerNum = this._playerNum;
					box.changeColor();
					break;
				}
			}
		}
		this._playerMoves = moves;
	}
	,checkWhite: function(x,y) {
		var _g1 = 0;
		var _g = this._white.length;
		while(_g1 < _g) {
			var i = _g1++;
			var w = this._white.members[i];
			if(w.x == x && w.y == y) return true;
		}
		return false;
	}
	,checkBlack: function(x,y) {
		var _g1 = 0;
		var _g = this._black.length;
		while(_g1 < _g) {
			var i = _g1++;
			var w = this._black.members[i];
			if(w.x == x && w.y == y) return true;
		}
		return false;
	}
	,getRookMoves: function(x,y,isWhite) {
		var moves = new Array();
		var _g = 1;
		while(_g < 8) {
			var i = _g++;
			var tX = i * 80 + x;
			if(tX > 560.0) break;
			if(isWhite) {
				var canAttack = this.checkBlack(tX,y);
				if(canAttack) {
					moves.push(new flixel.util.FlxPoint(tX,y));
					break;
				}
				var blocked = this.checkWhite(tX,y);
				if(blocked) break;
			} else {
				var canAttack1 = this.checkWhite(tX,y);
				if(canAttack1) {
					moves.push(new flixel.util.FlxPoint(tX,y));
					break;
				}
				var blocked1 = this.checkBlack(tX,y);
				if(blocked1) break;
			}
			moves.push(new flixel.util.FlxPoint(tX,y));
		}
		var _g1 = 1;
		while(_g1 < 8) {
			var i1 = _g1++;
			var tX1 = i1 * -80.0 + x;
			if(tX1 < 80.0) break;
			if(isWhite) {
				var canAttack2 = this.checkBlack(tX1,y);
				if(canAttack2) {
					moves.push(new flixel.util.FlxPoint(tX1,y));
					break;
				}
				var blocked2 = this.checkWhite(tX1,y);
				if(blocked2) break;
			} else {
				var canAttack3 = this.checkWhite(tX1,y);
				if(canAttack3) {
					moves.push(new flixel.util.FlxPoint(tX1,y));
					break;
				}
				var blocked3 = this.checkBlack(tX1,y);
				if(blocked3) break;
			}
			moves.push(new flixel.util.FlxPoint(tX1,y));
		}
		var _g2 = 1;
		while(_g2 < 8) {
			var i2 = _g2++;
			var tY = i2 * 80.0 + y;
			if(tY > 560.0) break;
			if(isWhite) {
				var canAttack4 = this.checkBlack(x,tY);
				if(canAttack4) {
					moves.push(new flixel.util.FlxPoint(x,tY));
					break;
				}
				var blocked4 = this.checkWhite(x,tY);
				if(blocked4) break;
			} else {
				var canAttack5 = this.checkWhite(x,tY);
				if(canAttack5) {
					moves.push(new flixel.util.FlxPoint(x,tY));
					break;
				}
				var blocked5 = this.checkBlack(x,tY);
				if(blocked5) break;
			}
			moves.push(new flixel.util.FlxPoint(x,tY));
		}
		var _g3 = 1;
		while(_g3 < 8) {
			var i3 = _g3++;
			var tY1 = i3 * -80.0 + y;
			if(tY1 < 80.0) break;
			if(isWhite) {
				var canAttack6 = this.checkBlack(x,tY1);
				if(canAttack6) {
					moves.push(new flixel.util.FlxPoint(x,tY1));
					break;
				}
				var blocked6 = this.checkWhite(x,tY1);
				if(blocked6) break;
			} else {
				var canAttack7 = this.checkWhite(x,tY1);
				if(canAttack7) {
					moves.push(new flixel.util.FlxPoint(x,tY1));
					break;
				}
				var blocked7 = this.checkBlack(x,tY1);
				if(blocked7) break;
			}
			moves.push(new flixel.util.FlxPoint(x,tY1));
		}
		return moves;
	}
	,getBishopMoves: function(x,y,isWhite) {
		var moves = new Array();
		var _g = 1;
		while(_g < 8) {
			var i = _g++;
			var tX = i * 80 + x;
			var tY = i * -80.0 + y;
			if(tX > 560.0 || tY < 80.0) break;
			if(isWhite) {
				var canAttack = this.checkBlack(tX,tY);
				if(canAttack) {
					moves.push(new flixel.util.FlxPoint(tX,tY));
					break;
				}
				var blocked = this.checkWhite(tX,tY);
				if(blocked) break;
			} else {
				var canAttack1 = this.checkWhite(tX,tY);
				if(canAttack1) {
					moves.push(new flixel.util.FlxPoint(tX,tY));
					break;
				}
				var blocked1 = this.checkBlack(tX,tY);
				if(blocked1) break;
			}
			moves.push(new flixel.util.FlxPoint(tX,tY));
		}
		var _g1 = 1;
		while(_g1 < 8) {
			var i1 = _g1++;
			var tX1 = i1 * -80.0 + x;
			var tY1 = i1 * -80.0 + y;
			if(tX1 < 80.0 || tY1 < 80.0) break;
			if(isWhite) {
				var canAttack2 = this.checkBlack(tX1,tY1);
				if(canAttack2) {
					moves.push(new flixel.util.FlxPoint(tX1,tY1));
					break;
				}
				var blocked2 = this.checkWhite(tX1,tY1);
				if(blocked2) break;
			} else {
				var canAttack3 = this.checkWhite(tX1,tY1);
				if(canAttack3) {
					moves.push(new flixel.util.FlxPoint(tX1,tY1));
					break;
				}
				var blocked3 = this.checkBlack(tX1,tY1);
				if(blocked3) break;
			}
			moves.push(new flixel.util.FlxPoint(tX1,tY1));
		}
		var _g2 = 1;
		while(_g2 < 8) {
			var i2 = _g2++;
			var tX2 = i2 * 80.0 + x;
			var tY2 = i2 * 80.0 + y;
			if(tX2 > 560.0 || tY2 > 560.0) break;
			if(isWhite) {
				var canAttack4 = this.checkBlack(tX2,tY2);
				if(canAttack4) {
					moves.push(new flixel.util.FlxPoint(tX2,tY2));
					break;
				}
				var blocked4 = this.checkWhite(tX2,tY2);
				if(blocked4) break;
			} else {
				var canAttack5 = this.checkWhite(tX2,tY2);
				if(canAttack5) {
					moves.push(new flixel.util.FlxPoint(tX2,tY2));
					break;
				}
				var blocked5 = this.checkBlack(tX2,tY2);
				if(blocked5) break;
			}
			moves.push(new flixel.util.FlxPoint(tX2,tY2));
		}
		var _g3 = 1;
		while(_g3 < 8) {
			var i3 = _g3++;
			var tX3 = i3 * -80.0 + x;
			var tY3 = i3 * 80.0 + y;
			if(tX3 < 80.0 || tY3 > 560.0) break;
			if(isWhite) {
				var canAttack6 = this.checkBlack(tX3,tY3);
				if(canAttack6) {
					moves.push(new flixel.util.FlxPoint(tX3,tY3));
					break;
				}
				var blocked6 = this.checkWhite(tX3,tY3);
				if(blocked6) break;
			} else {
				var canAttack7 = this.checkWhite(tX3,tY3);
				if(canAttack7) {
					moves.push(new flixel.util.FlxPoint(tX3,tY3));
					break;
				}
				var blocked7 = this.checkBlack(tX3,tY3);
				if(blocked7) break;
			}
			moves.push(new flixel.util.FlxPoint(tX3,tY3));
		}
		return moves;
	}
	,getKnightMoves: function(x,y,isWhite) {
		var blockedBy = this._black;
		if(isWhite) blockedBy = this._white;
		var tempMoves = new Array();
		tempMoves.push(new flixel.util.FlxPoint(x - 160.0,y + 80.0));
		tempMoves.push(new flixel.util.FlxPoint(x - 80.0,y + 160.0));
		tempMoves.push(new flixel.util.FlxPoint(x + 80.0,y + 160.0));
		tempMoves.push(new flixel.util.FlxPoint(x + 160.0,y + 80.0));
		tempMoves.push(new flixel.util.FlxPoint(x + 160.0,y - 80.0));
		tempMoves.push(new flixel.util.FlxPoint(x + 80.0,y - 160.0));
		tempMoves.push(new flixel.util.FlxPoint(x - 80.0,y - 160.0));
		tempMoves.push(new flixel.util.FlxPoint(x - 160.0,y - 80.0));
		var retMoves = new Array();
		var _g = 0;
		while(_g < tempMoves.length) {
			var move = tempMoves[_g];
			++_g;
			var isBlocked = false;
			var _g2 = 0;
			var _g1 = blockedBy.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var p = blockedBy.members[i];
				if(p.x == move.x && p.y == move.y) {
					isBlocked = true;
					break;
				}
			}
			if(!isBlocked) retMoves.push(move);
		}
		return retMoves;
	}
	,determineMoves: function() {
		if(this._playerNum == 101) return;
		this.resetBoard();
		var x = this._playerPiece.x;
		var y = this._playerPiece.y;
		var type = this._playerPiece.type;
		var isWhite = this._playerPiece.isWhite;
		var moves = new Array();
		if(type == 0) {
			var blocked = this.checkWhite(x,-80. + y);
			var blockedTwo = this.checkBlack(x,-80. + y);
			if(!blocked && !blockedTwo) moves.push(new flixel.util.FlxPoint(x,y - 80.0));
			if(x == this._playerPiece.xStart && y == this._playerPiece.yStart) {
				blocked = this.checkWhite(x,-160. + y);
				blockedTwo = this.checkBlack(x,-160. + y);
				if(!blocked && !blockedTwo) moves.push(new flixel.util.FlxPoint(x,y - 160.0));
			}
			if(isWhite) {
				var attackRight = this.checkBlack(80.0 + x,-80. + y);
				var attackLeft = this.checkBlack(-80. + x,-80. + y);
				if(attackRight) moves.push(new flixel.util.FlxPoint(x + 80.0,y - 80.0));
				if(attackLeft) moves.push(new flixel.util.FlxPoint(x - 80.0,y - 80.0));
			} else {
				var attackRight1 = this.checkWhite(80.0 + x,-80. + y);
				var attackLeft1 = this.checkWhite(-80. + x,-80. + y);
				if(attackRight1) moves.push(new flixel.util.FlxPoint(x + 80.0,y - 80.0));
				if(attackLeft1) moves.push(new flixel.util.FlxPoint(x - 80.0,y - 80.0));
			}
		} else if(type == 1) moves = this.getRookMoves(x,y,isWhite); else if(type == 2) moves = this.getKnightMoves(x,y,isWhite); else if(type == 3) moves = this.getBishopMoves(x,y,isWhite); else if(type == 4) {
			moves = this.getBishopMoves(x,y,isWhite);
			moves.concat(this.getRookMoves(x,y,isWhite));
		}
		this.displayMoves(moves);
	}
	,playerLeft: function(pID) {
		var p = this.getPieceTypeFromPID(pID);
		if(p.playerNum % 2 == 1) p.playerNum = 20; else p.playerNum = 21;
		p.changeColor();
		p.playerNum = -1;
	}
	,sendPosition: function(xMove,yMove) {
		if(yMove == null) yMove = -1.00;
		if(xMove == null) xMove = -1.0;
		var x = this._playerPiece.x / 80;
		var y = this._playerPiece.y / 80;
		this._playerPiece.xPos = x;
		this._playerPiece.yPos = y;
		var sendMoveX = xMove / 80.0;
		var sendMoveY = yMove / 80.0;
		if(xMove < 0.0) {
			sendMoveX = x;
			sendMoveY = y;
		}
		var m = { msg : "playerposition", name : this._playerNum, xPos : x, yPos : y, xMove : sendMoveX, yMove : sendMoveY, pID : this._playerPiece.pID};
		this._socket.sendMessage(m);
	}
	,__class__: PlayState
});
var Queen = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteQueen.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackQueen.png");
		this.isWhite = false;
	}
	this.type = 4;
};
$hxClasses["Queen"] = Queen;
Queen.__name__ = ["Queen"];
Queen.__super__ = Piece;
Queen.prototype = $extend(Piece.prototype,{
	changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayQueen.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayQueen.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueQueen.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeQueen.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealQueen.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redQueen.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleQueen.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkQueen.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowQueen.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenQueen.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whiteQueen.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackQueen.png");
			break;
		}
	}
	,__class__: Queen
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Rook = function(x,y,blackWhite) {
	Piece.call(this,x,y);
	if(blackWhite == 0) {
		this.loadGraphic("assets/images/whiteRook.png");
		this.isWhite = true;
	} else {
		this.loadGraphic("assets/images/blackRook.png");
		this.isWhite = false;
	}
	this.type = 1;
};
$hxClasses["Rook"] = Rook;
Rook.__name__ = ["Rook"];
Rook.__super__ = Piece;
Rook.prototype = $extend(Piece.prototype,{
	changeColor: function() {
		var _g = this.playerNum;
		switch(_g) {
		case 1:
			this.loadGraphic("assets/images/lightGrayRook.png");
			break;
		case 2:
			this.loadGraphic("assets/images/darkGrayRook.png");
			break;
		case 3:
			this.loadGraphic("assets/images/blueRook.png");
			break;
		case 4:
			this.loadGraphic("assets/images/orangeRook.png");
			break;
		case 5:
			this.loadGraphic("assets/images/tealRook.png");
			break;
		case 6:
			this.loadGraphic("assets/images/redRook.png");
			break;
		case 7:
			this.loadGraphic("assets/images/purpleRook.png");
			break;
		case 8:
			this.loadGraphic("assets/images/pinkRook.png");
			break;
		case 9:
			this.loadGraphic("assets/images/yellowRook.png");
			break;
		case 10:
			this.loadGraphic("assets/images/greenRook.png");
			break;
		case 20:
			this.loadGraphic("assets/images/whiteRook.png");
			break;
		case 21:
			this.loadGraphic("assets/images/blackRook.png");
			break;
		}
	}
	,__class__: Rook
});
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] };
var Xml = function() { };
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
Xml.prototype = {
	nodeType: null
	,_nodeName: null
	,_attributes: null
	,_children: null
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n = this.x[k1];
				k1 += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k1;
					return n;
				}
			}
			return null;
		}};
	}
	,__class__: Xml
	,__properties__: {get_nodeName:"get_nodeName"}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
flash.Lib = function() { };
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.current = null;
flash.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
};
flash.Lib.create = function(width,height,element,backgroundColor) {
	
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
	var stage = new flash.display.Stage(width,height,element,backgroundColor);
	if(flash.Lib.current == null) {
		flash.Lib.current = new flash.display.MovieClip();
		stage.addChild(flash.Lib.current);
	}
};
flash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - flash.Lib.__startTime) * 1000);
};
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
flash.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
flash.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 108, className : "flash.Lib", methodName : "trace"});
};
flash._Vector = {};
flash._Vector.Vector_Impl_ = function() { };
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
};
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
};
flash._Vector.Vector_Impl_.copy = function(this1) {
	var a = this1.slice();
	return a;
};
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
};
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
};
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
};
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
};
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
};
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
};
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
};
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
};
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
};
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
};
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
};
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
};
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
};
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
};
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
};
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
};
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	return value;
};
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
};
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
};
flash.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	flash.display.DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObjectContainer;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	bitmapData: null
	,pixelSnapping: null
	,smoothing: null
	,__canvas: null
	,__canvasContext: null
	,__image: null
	,__style: null
	,__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = new flash.geom.Rectangle(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds = bounds.transform(this.__getTransform());
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.bitmapData == null) return false;
		var point = this.globalToLocal(new flash.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = false;
				context.webkitImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			}
			if(this.get_scrollRect() == null) {
				if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			} else if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,0,0,this.get_scrollRect().width,this.get_scrollRect().height); else context.drawImage(this.bitmapData.__sourceCanvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,0,0,this.get_scrollRect().width,this.get_scrollRect().height);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = true;
				context.webkitImageSmoothingEnabled = true;
				context.imageSmoothingEnabled = true;
			}
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.bitmapData != null && this.bitmapData.__valid) {
			if(this.bitmapData.__sourceImage != null) this.__renderDOMImage(renderSession); else this.__renderDOMCanvas(renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderDOMCanvas: function(renderSession) {
		if(this.__image != null) {
			renderSession.element.removeChild(this.__image);
			this.__image = null;
		}
		if(this.__canvas == null) {
			this.__canvas = window.document.createElement("canvas");
			this.__canvasContext = this.__canvas.getContext("2d");
			if(!this.smoothing) {
				this.__canvasContext.mozImageSmoothingEnabled = false;
				this.__canvasContext.webkitImageSmoothingEnabled = false;
				this.__canvasContext.imageSmoothingEnabled = false;
			}
			this.__style = this.__canvas.style;
			this.__style.setProperty("position","absolute",null);
			this.__style.setProperty("top","0",null);
			this.__style.setProperty("left","0",null);
			this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
			renderSession.element.appendChild(this.__canvas);
			this.__worldAlphaChanged = true;
			this.__worldClipChanged = true;
			this.__worldTransformChanged = true;
			this.__worldZ = -1;
		}
		this.bitmapData.__syncImageData();
		this.__canvas.width = this.bitmapData.width;
		this.__canvas.height = this.bitmapData.height;
		if(this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
		if(this.__worldZ != ++renderSession.z) {
			this.__worldZ = renderSession.z;
			this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
		}
		this.__canvasContext.globalAlpha = this.__worldAlpha;
		if(this.__worldClip == null) this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas,0,0); else {
			var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
			this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas,clip.x,clip.y,clip.width,clip.height,0,0,clip.width,clip.height);
		}
	}
	,__renderDOMImage: function(renderSession) {
		if(this.__image == null) {
			this.__image = window.document.createElement("img");
			this.__image.src = this.bitmapData.__sourceImage.src;
			this.__style = this.__image.style;
			this.__style.setProperty("position","absolute",null);
			this.__style.setProperty("top","0",null);
			this.__style.setProperty("left","0",null);
			this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
			renderSession.element.appendChild(this.__image);
			this.__worldAlphaChanged = true;
			this.__worldClipChanged = true;
			this.__worldTransformChanged = true;
			this.__worldZ = -1;
		}
		if(this.__worldAlphaChanged) {
			if(this.__worldAlpha < 1) this.__style.setProperty("opacity",Std.string(this.__worldAlpha),null); else this.__style.removeProperty("opacity");
		}
		if(this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
		if(this.__worldZ != ++renderSession.z) {
			this.__worldZ = renderSession.z;
			this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
		}
		if(this.__worldClipChanged) {
			if(this.__worldClip == null) this.__style.removeProperty("clip"); else {
				var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
				this.__style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
			}
		}
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) this.set_scaleY(value / this.bitmapData.height);
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) this.set_scaleX(value / this.bitmapData.width);
			return value;
		}
		return 0;
	}
	,__class__: flash.display.Bitmap
});
flash.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new flash.geom.Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new flash.geom.Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.__base64Encoder = null;
flash.display.BitmapData.fromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
flash.display.BitmapData.fromBytes = function(bytes,rawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__loadFromBytes(bytes,rawAlpha,onload);
	return bitmapData;
};
flash.display.BitmapData.fromFile = function(path,onload) {
	var bitmapData = new flash.display.BitmapData(0,0,true);
	bitmapData.__sourceImage = new Image();
	bitmapData.__sourceImage.onload = function(_) {
		bitmapData.width = bitmapData.__sourceImage.width;
		bitmapData.height = bitmapData.__sourceImage.height;
		bitmapData.rect = new flash.geom.Rectangle(0,0,bitmapData.__sourceImage.width,bitmapData.__sourceImage.height);
		bitmapData.__valid = true;
		if(onload != null) onload(bitmapData);
	};
	bitmapData.__sourceImage.src = path;
	if(bitmapData.__sourceImage.complete) {
	}
	return bitmapData;
};
flash.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash.display.BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.rect = new flash.geom.Rectangle(0,0,image.width,image.height);
	bitmapData.__valid = true;
	return bitmapData;
};
flash.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash.display.BitmapData(0,0,transparent);
	bitmapData.width = canvas.width;
	bitmapData.height = canvas.height;
	bitmapData.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
flash.display.BitmapData.__base64Encode = function(bytes) {
	var extension;
	var _g = bytes.length % 3;
	switch(_g) {
	case 1:
		extension = "==";
		break;
	case 2:
		extension = "=";
		break;
	default:
		extension = "";
	}
	if(flash.display.BitmapData.__base64Encoder == null) flash.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(flash.display.BitmapData.__base64Chars));
	return flash.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
flash.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
flash.display.BitmapData.prototype = {
	height: null
	,rect: null
	,transparent: null
	,width: null
	,__worldTransform: null
	,__loading: null
	,__sourceCanvas: null
	,__sourceContext: null
	,__sourceImage: null
	,__sourceImageData: null
	,__sourceImageDataChanged: null
	,__valid: null
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.__valid || sourceBitmapData == null || !sourceBitmapData.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		filter.__applyFilter(this.__sourceImageData,sourceBitmapData.__sourceImageData,sourceRect,destPoint);
		this.__sourceImageDataChanged = true;
	}
	,clone: function() {
		if(!this.__valid) return new flash.display.BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return flash.display.BitmapData.fromImage(this.__sourceImage,this.transparent); else return flash.display.BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
	}
	,colorTransform: function(rect,colorTransform) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var stride = this.width * 4;
		var offset;
		var _g1 = rect.y | 0;
		var _g = rect.height | 0;
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = rect.x | 0;
			var _g2 = rect.width | 0;
			while(_g3 < _g2) {
				var column = _g3++;
				offset = row * stride + column * 4;
				data[offset] = data[offset] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				data[offset + 1] = data[offset + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				data[offset + 2] = data[offset + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				data[offset + 3] = data[offset + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(!this.__valid || sourceRect == null) return;
		if(destChannel == 8 && !this.transparent) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		var destIdx = -1;
		if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
		var srcIdx = -1;
		if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		sourceBitmapData.__convertToCanvas();
		var sourceData = sourceBitmapData.__sourceContext.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height).data;
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * this.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		while(srcIdx < sourceData.length) {
			if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
			data[pos] = sourceData[srcIdx];
			pos += 4;
			srcIdx += 4;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
		if(sourceBitmapData.__sourceImage != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceImage,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0); else if(sourceBitmapData.__sourceCanvas != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	,dispose: function() {
		this.__sourceImage = null;
		this.__sourceCanvas = null;
		this.__sourceContext = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__valid = false;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__syncImageData();
		var renderSession = new flash.display.RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new flash.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		this.__sourceContext.setTransform(1,0,0,1,0,0);
	}
	,fillRect: function(rect,color) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__syncImageData();
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.transparent && (color & -16777216) == 0) {
				this.__sourceCanvas.width = this.width;
				return;
			}
		}
		this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var offset = y * (this.width * 4) + x * 4;
		var hitColorR = data[offset];
		var hitColorG = data[offset + 1];
		var hitColorB = data[offset + 2];
		var hitColorA;
		if(this.transparent) hitColorA = data[offset + 3]; else hitColorA = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		if(hitColorR == r && hitColorG == g && hitColorB == b && hitColorA == a) return;
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		while(queue.length > 0) {
			var curPointY = queue.pop();
			var curPointX = queue.pop();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var nextPointX = curPointX + dx[i];
				var nextPointY = curPointY + dy[i];
				if(nextPointX < 0 || nextPointY < 0 || nextPointX >= this.width || nextPointY >= this.height) continue;
				var nextPointOffset = (nextPointY * this.width + nextPointX) * 4;
				if(data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA) {
					data[nextPointOffset] = r;
					data[nextPointOffset + 1] = g;
					data[nextPointOffset + 2] = b;
					data[nextPointOffset + 3] = a;
					queue.push(nextPointX);
					queue.push(nextPointY);
				}
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,getPixel: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2];
	}
	,getPixel32: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		return this.__getInt32(4 * y * this.width + x * 4,this.__sourceImageData.data);
	}
	,getPixels: function(rect) {
		if(!this.__valid) return null;
		this.__convertToCanvas();
		this.__createImageData();
		var byteArray = new flash.utils.ByteArray();
		byteArray.set_length(this.__sourceImageData.data.length);
		byteArray.byteView.set(this.__sourceImageData.data);
		byteArray.position = 0;
		return byteArray;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		if(!this.__valid) return false;
		return false;
	}
	,lock: function() {
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		if(!this.__valid) return;
	}
	,setPixel: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixel32: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		var len = Math.round(4 * rect.width * rect.height);
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.createImageData(this.width,this.height);
			this.__sourceImageData.data.set(byteArray.byteView);
		} else {
			this.__createImageData();
			var offset = Math.round(4 * this.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var data = this.__sourceImageData.data;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
				data[pos] = byteArray.readByte();
				pos++;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 763, className : "flash.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,unlock: function(changeRect) {
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__convertToCanvas: function() {
		if(this.__loading) return;
		if(this.__sourceImage != null) {
			if(this.__sourceCanvas == null) {
				this.__createCanvas(this.__sourceImage.width,this.__sourceImage.height);
				this.__sourceContext.drawImage(this.__sourceImage,0,0);
			}
			this.__sourceImage = null;
		}
	}
	,__createCanvas: function(width,height) {
		this.__sourceCanvas = window.document.createElement("canvas");
		this.__sourceCanvas.width = width;
		this.__sourceCanvas.height = height;
		if(!this.transparent) {
			if(!this.transparent) this.__sourceCanvas.setAttribute("moz-opaque","true");
			this.__sourceContext = this.__sourceCanvas.getContext ("2d", { alpha: false });
		} else this.__sourceContext = this.__sourceCanvas.getContext("2d");
		this.__sourceContext.mozImageSmoothingEnabled = false;
		this.__sourceContext.webkitImageSmoothingEnabled = false;
		this.__sourceContext.imageSmoothingEnabled = false;
		this.__valid = true;
	}
	,__createImageData: function() {
		if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.getImageData(0,0,this.width,this.height);
	}
	,__fillRect: function(rect,color) {
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		this.__sourceContext.fillRect(rect.x,rect.y,rect.width,rect.height);
	}
	,__getInt32: function(offset,data) {
		return (this.transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		this.__sourceImage = window.document.createElement("img");
		var image_onLoaded = function(event) {
			if(_g.__sourceImage == null) _g.__sourceImage = event.target;
			_g.width = _g.__sourceImage.width;
			_g.height = _g.__sourceImage.height;
			_g.rect = new flash.geom.Rectangle(0,0,_g.width,_g.height);
			_g.__valid = true;
			if(onload != null) onload(_g);
		};
		this.__sourceImage.addEventListener("load",image_onLoaded,false);
		this.__sourceImage.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,rawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(flash.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(rawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			_g.__convertToCanvas();
			var pixels = _g.__sourceContext.getImageData(0,0,_g.width,_g.height);
			var _g2 = 0;
			var _g1 = rawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = rawAlpha.readUnsignedByte();
			}
			_g.__sourceContext.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new flash.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(this.__sourceImage != null) context.drawImage(this.__sourceImage,0,0); else context.drawImage(this.__sourceCanvas,0,0);
	}
	,__renderMask: function(renderSession) {
	}
	,__syncImageData: function() {
		if(this.__sourceImageDataChanged) {
			this.__sourceContext.putImageData(this.__sourceImageData,0,0);
			this.__sourceImageData = null;
			this.__sourceImageDataChanged = false;
		}
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: flash.display.BitmapData
};
flash.display.BitmapDataChannel = function() { };
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : ["flash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display._CapsStyle = {};
flash.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["flash.display._CapsStyle.CapsStyle_Impl_"] = flash.display._CapsStyle.CapsStyle_Impl_;
flash.display._CapsStyle.CapsStyle_Impl_.__name__ = ["flash","display","_CapsStyle","CapsStyle_Impl_"];
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : ["flash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] };
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.prototype = {
	__bounds: null
	,__canvas: null
	,__commands: null
	,__context: null
	,__dirty: null
	,__halfStrokeWidth: null
	,__hasFill: null
	,__hasStroke: null
	,__inPath: null
	,__positionX: null
	,__positionY: null
	,__visible: null
	,beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(flash.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(flash.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) this.__dirty = true;
		this.__bounds = null;
	}
	,curveTo: function(cx,cy,x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__inflateBounds(cx,cy);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.CurveTo(cx,cy,x,y));
		this.__dirty = true;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
	}
	,drawGraphicsData: function(graphicsData) {
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__inflateBounds(0,0);
		this.__inflateBounds(flash.Lib.current.stage.stageWidth,flash.Lib.current.stage.stageHeight);
		this.__commands.push(flash.display.DrawCommand.DrawTiles(sheet,tileData,smooth,flags));
		this.__dirty = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
	}
	,endFill: function() {
		this.__commands.push(flash.display.DrawCommand.EndFill);
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(flash.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(flash.display.DrawCommand.LineTo(x,y));
		this.__dirty = true;
	}
	,moveTo: function(x,y) {
		this.__commands.push(flash.display.DrawCommand.MoveTo(x,y));
		this.__positionX = x;
		this.__positionY = y;
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__context.moveTo(this.__positionX,this.__positionY);
			this.__inPath = true;
		}
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) this.__context.fill();
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = this.__bounds.clone().transform(matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var bounds = this.__bounds.clone().transform(matrix);
		return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom();
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new flash.geom.Rectangle(x,y,0,0);
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__render: function() {
		if(this.__dirty) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__inPath = false;
			this.__positionX = 0;
			this.__positionY = 0;
			this.__visible = false;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 0:
					this.__visible = true;
					break;
				case 1:
					var alpha = command[3];
					if(alpha > 0) this.__visible = true;
					break;
				default:
				}
			}
			if(this.__commands.length == 0 || this.__bounds.width == 0 || this.__bounds.height == 0 || !this.__visible) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				this.__canvas.width = Math.ceil(this.__bounds.width);
				this.__canvas.height = Math.ceil(this.__bounds.height);
				var offsetX = this.__bounds.x;
				var offsetY = this.__bounds.y;
				var bitmapFill = null;
				var bitmapMatrix = null;
				var bitmapRepeat = false;
				var pattern = null;
				var setFill = false;
				var _g2 = 0;
				var _g11 = this.__commands;
				while(_g2 < _g11.length) {
					var command1 = _g11[_g2];
					++_g2;
					switch(command1[1]) {
					case 0:
						var smooth = command1[5];
						var repeat = command1[4];
						var matrix = command1[3];
						var bitmap = command1[2];
						this.__closePath(false);
						if(bitmap != bitmapFill || repeat != bitmapRepeat) {
							bitmapFill = bitmap;
							bitmapRepeat = repeat;
							pattern = null;
							setFill = false;
						}
						bitmapMatrix = matrix;
						this.__hasFill = true;
						break;
					case 1:
						var alpha1 = command1[3];
						var rgb = command1[2];
						this.__closePath(false);
						if(alpha1 == 1) this.__context.fillStyle = "#" + StringTools.hex(rgb,6); else {
							var r = (rgb & 16711680) >>> 16;
							var g = (rgb & 65280) >>> 8;
							var b = rgb & 255;
							this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha1 + ")";
						}
						bitmapFill = null;
						setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command1[5];
						var x = command1[4];
						var cy = command1[3];
						var cx = command1[2];
						this.__beginPath();
						this.__context.quadraticCurveTo(cx,cy,x,y);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command1[4];
						var y1 = command1[3];
						var x1 = command1[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						this.__closePath(false);
						this.__beginPath();
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						this.__closePath(false);
						break;
					case 4:
						var height = command1[5];
						var width = command1[4];
						var y2 = command1[3];
						var x2 = command1[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__closePath(false);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						this.__closePath(false);
						break;
					case 5:
						var height1 = command1[5];
						var width1 = command1[4];
						var y3 = command1[3];
						var x3 = command1[2];
						if(bitmapFill != null && width1 <= bitmapFill.width && height1 <= bitmapFill.height) {
							this.__closePath(false);
							var dx = x3;
							var dy = y3;
							if(bitmapMatrix != null) {
								dx -= bitmapMatrix.tx;
								dy -= bitmapMatrix.ty;
							}
							if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,dx,dy,width1,height1,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,dx,dy,width1,height1,x3,y3,width1,height1);
						} else {
							this.__closePath(false);
							this.__beginPath();
							if(!setFill && bitmapFill != null) {
								if(pattern == null) {
									if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
								}
								this.__context.fillStyle = pattern;
								setFill = true;
							}
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
							this.__closePath(false);
						}
						break;
					case 6:
						var flags = command1[5];
						var smooth1 = command1[4];
						var tileData = command1[3];
						var sheet = command1[2];
						this.__closePath(false);
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						if(sheet.__bitmap.__sourceImage != null) surface = sheet.__bitmap.__sourceImage; else surface = sheet.__bitmap.__sourceCanvas;
						while(index < totalCount) {
							var tileID = tileData[index + 2] | 0;
							if(tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								this.__context.save();
								this.__context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) this.__context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) this.__context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) this.__context.globalAlpha = tileData[index + alphaIndex];
								this.__context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								this.__context.restore();
							}
							index += numValues;
						}
						break;
					case 7:
						if(this.__inPath) {
							if(this.__hasFill) {
								this.__context.fill();
								this.__context.closePath();
							}
							if(this.__hasStroke) this.__context.stroke();
						}
						break;
					case 8:
						var miterLimit = command1[9];
						var joints = command1[8];
						var caps = command1[7];
						var scaleMode = command1[6];
						var pixelHinting = command1[5];
						var alpha2 = command1[4];
						var color = command1[3];
						var thickness = command1[2];
						if(thickness == null) this.__hasStroke = false; else {
							this.__context.lineWidth = thickness;
							this.__context.lineJoin = joints;
							this.__context.lineCap = caps;
							this.__context.miterLimit = miterLimit;
							this.__context.strokeStyle = "#" + StringTools.hex(color,6);
							this.__hasStroke = true;
						}
						break;
					case 9:
						var y4 = command1[3];
						var x4 = command1[2];
						this.__beginPath();
						this.__context.lineTo(x4,y4);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command1[3];
						var x5 = command1[2];
						this.__beginPath();
						this.__context.moveTo(x5,y5);
						this.__positionX = x5;
						this.__positionY = y5;
						break;
					}
				}
			}
			this.__dirty = false;
			if(this.__inPath) {
				if(this.__hasFill) {
					this.__context.fill();
					this.__context.closePath();
				}
				if(this.__hasStroke) this.__context.stroke();
			}
		}
	}
	,__renderMask: function(renderSession) {
		if(this.__commands.length != 0) {
			var __context = renderSession.context;
			var __positionX = 0.0;
			var __positionY = 0.0;
			var offsetX = 0;
			var offsetY = 0;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 2:
					var y = command[5];
					var x = command[4];
					var cy = command[3];
					var cx = command[2];
					__context.quadraticCurveTo(cx,cy,x,y);
					__positionX = x;
					__positionY = y;
					break;
				case 3:
					var radius = command[4];
					var y1 = command[3];
					var x1 = command[2];
					__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
					break;
				case 4:
					var height = command[5];
					var width = command[4];
					var y2 = command[3];
					var x2 = command[2];
					x2 -= offsetX;
					y2 -= offsetY;
					var kappa = .5522848;
					var ox = width / 2 * kappa;
					var oy = height / 2 * kappa;
					var xe = x2 + width;
					var ye = y2 + height;
					var xm = x2 + width / 2;
					var ym = y2 + height / 2;
					__context.moveTo(x2,ym);
					__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
					__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
					__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
					__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
					break;
				case 5:
					var height1 = command[5];
					var width1 = command[4];
					var y3 = command[3];
					var x3 = command[2];
					__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
					break;
				case 9:
					var y4 = command[3];
					var x4 = command[2];
					__context.lineTo(x4,y4);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5,y5);
					__positionX = x5;
					__positionY = y5;
					break;
				default:
				}
			}
		}
	}
	,__class__: flash.display.Graphics
};
flash.display.DrawCommand = $hxClasses["flash.display.DrawCommand"] = { __ename__ : ["flash","display","DrawCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
flash.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.EndFill = ["EndFill",7];
flash.display.DrawCommand.EndFill.toString = $estr;
flash.display.DrawCommand.EndFill.__enum__ = flash.display.DrawCommand;
flash.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = flash.display.DrawCommand; $x.toString = $estr; return $x; };
flash.display.IGraphicsData = function() { };
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__graphicsDataType: null
	,__class__: flash.display.IGraphicsData
};
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : ["flash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] };
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : ["flash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] };
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display._JointStyle = {};
flash.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["flash.display._JointStyle.JointStyle_Impl_"] = flash.display._JointStyle.JointStyle_Impl_;
flash.display._JointStyle.JointStyle_Impl_.__name__ = ["flash","display","_JointStyle","JointStyle_Impl_"];
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	content: null
	,contentLoaderInfo: null
	,mImage: null
	,mShape: null
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		flash.display.BitmapData.fromFile(request.url,$bind(this,this.BitmapData_onLoad));
	}
	,loadBytes: function(buffer) {
		flash.display.BitmapData.fromBytes(buffer,null,$bind(this,this.BitmapData_onLoad));
	}
	,unload: function() {
		if(this.get_numChildren() > 0) {
			while(this.get_numChildren() > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new flash.events.Event(flash.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new flash.display.Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.contentLoaderInfo.content);
		var event = new flash.events.Event(flash.events.Event.COMPLETE);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	applicationDomain: null
	,bytes: null
	,bytesLoaded: null
	,bytesTotal: null
	,childAllowsParent: null
	,content: null
	,contentType: null
	,frameRate: null
	,height: null
	,loader: null
	,loaderURL: null
	,parameters: null
	,parentAllowsChild: null
	,sameDomain: null
	,sharedEvents: null
	,url: null
	,width: null
	,__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	currentFrame: null
	,currentFrameLabel: null
	,currentLabel: null
	,currentLabels: null
	,enabled: null
	,framesLoaded: null
	,totalFrames: null
	,__currentFrame: null
	,__currentFrameLabel: null
	,__currentLabel: null
	,__currentLabels: null
	,__totalFrames: null
	,gotoAndPlay: function(frame,scene) {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,get_currentFrameLabel: function() {
		return this.__currentFrameLabel;
	}
	,get_currentLabel: function() {
		return this.__currentLabel;
	}
	,get_currentLabels: function() {
		return this.__currentLabels;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_totalFrames: function() {
		return this.__totalFrames;
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentLabels:"get_currentLabels",get_currentLabel:"get_currentLabel",get_currentFrameLabel:"get_currentFrameLabel",get_currentFrame:"get_currentFrame"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : ["flash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] };
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	graphics: null
	,__canvas: null
	,__canvasContext: null
	,__graphics: null
	,__style: null
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__getTransform());
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.get_visible() && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x,this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height);
			}
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldClipChanged || this.__worldAlphaChanged) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__style = this.__canvas.style;
						this.__style.setProperty("position","absolute",null);
						this.__style.setProperty("top","0",null);
						this.__style.setProperty("left","0",null);
						this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
						renderSession.element.appendChild(this.__canvas);
						this.__worldTransformChanged = true;
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					if(this.__worldClip == null) this.__canvasContext.drawImage(this.__graphics.__canvas,0,0); else {
						var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
						this.__canvasContext.drawImage(this.__graphics.__canvas,clip.x,clip.y,clip.width,clip.height,this.__graphics.__bounds.x,this.__graphics.__bounds.y,clip.width,clip.height);
					}
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new flash.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				if(this.__worldZ != ++renderSession.z) {
					this.__worldZ = renderSession.z;
					this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
				}
				this.__canvasContext.globalAlpha = this.__worldAlpha;
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
		return this.__graphics;
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : ["flash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] };
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.display.Stage = function(width,height,element,color) {
	if(color == null) color = 16777215;
	this.__mouseY = 0;
	this.__mouseX = 0;
	flash.display.Sprite.call(this);
	this.__element = element;
	this.set_color(color);
	this.set_name(null);
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__canvas = window.document.createElement("canvas");
	this.__canvas.setAttribute("moz-opaque","true");
	this.__context = this.__canvas.getContext ("2d", { alpha: false });
	var style = this.__canvas.style;
	style.setProperty("-webkit-transform","translateZ(0)",null);
	style.setProperty("transform","translateZ(0)",null);
	this.__originalWidth = width;
	this.__originalHeight = height;
	if(width == 0 && height == 0) {
		if(element != null) {
			width = element.clientWidth;
			height = element.clientHeight;
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		this.__fullscreen = true;
	}
	this.stageWidth = width;
	this.stageHeight = height;
	if(this.__canvas != null) {
		this.__canvas.width = width;
		this.__canvas.height = height;
	} else {
		this.__div.style.width = width + "px";
		this.__div.style.height = height + "px";
	}
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	window.addEventListener("focus",$bind(this,this.window_onFocus));
	window.addEventListener("blur",$bind(this,this.window_onBlur));
	if(element != null) {
		if(this.__canvas != null) element.appendChild(this.__canvas); else element.appendChild(this.__div);
	}
	this.stage = this;
	this.parent = this;
	this.quality = "high";
	this.__clearBeforeRender = true;
	this.__stack = [];
	this.__renderSession = new flash.display.RenderSession();
	this.__renderSession.context = this.__context;
	this.__renderSession.roundPixels = true;
	if(this.__div != null) {
		this.__renderSession.element = this.__div;
		var prefix = (function () {
			  var styles = window.getComputedStyle(document.documentElement, ''),
			    pre = (Array.prototype.slice
			      .call(styles)
			      .join('') 
			      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			    )[1],
			    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
			  return {
			    dom: dom,
			    lowercase: pre,
			    css: '-' + pre + '-',
			    js: pre[0].toUpperCase() + pre.substr(1)
			  };
			})();
		this.__renderSession.vendorPrefix = prefix.lowercase;
		if(prefix.lowercase == "webkit") this.__renderSession.transformProperty = "-webkit-transform"; else this.__renderSession.transformProperty = "transform";
		if(prefix.lowercase == "webkit") this.__renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.__renderSession.transformOriginProperty = "transform-origin";
	}
	var keyEvents = ["keydown","keyup"];
	var touchEvents = ["touchstart","touchmove","touchend"];
	var mouseEvents = ["mousedown","mousemove","mouseup","click","dblclick"];
	var focusEvents = ["focus","blur"];
	var element1;
	if(this.__canvas != null) element1 = this.__canvas; else element1 = this.__div;
	var _g = 0;
	while(_g < keyEvents.length) {
		var type = keyEvents[_g];
		++_g;
		window.addEventListener(type,$bind(this,this.window_onKey),false);
	}
	var _g1 = 0;
	while(_g1 < touchEvents.length) {
		var type1 = touchEvents[_g1];
		++_g1;
		element1.addEventListener(type1,$bind(this,this.element_onTouch),true);
	}
	var _g2 = 0;
	while(_g2 < mouseEvents.length) {
		var type2 = mouseEvents[_g2];
		++_g2;
		element1.addEventListener(type2,$bind(this,this.element_onMouse),true);
	}
	var _g3 = 0;
	while(_g3 < focusEvents.length) {
		var type3 = focusEvents[_g3];
		++_g3;
		element1.addEventListener(type3,$bind(this,this.element_onFocus),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.__super__ = flash.display.Sprite;
flash.display.Stage.prototype = $extend(flash.display.Sprite.prototype,{
	align: null
	,displayState: null
	,frameRate: null
	,quality: null
	,stageFocusRect: null
	,scaleMode: null
	,stageHeight: null
	,stageWidth: null
	,__clearBeforeRender: null
	,__color: null
	,__colorString: null
	,__context: null
	,__cursor: null
	,__dirty: null
	,__div: null
	,__element: null
	,__focus: null
	,__fullscreen: null
	,__invalidated: null
	,__mouseX: null
	,__mouseY: null
	,__originalWidth: null
	,__originalHeight: null
	,__renderSession: null
	,__stack: null
	,__transparent: null
	,__wasDirty: null
	,globalToLocal: function(pos) {
		return pos;
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos;
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = 0;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = 2;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		stack.push(this);
	}
	,__render: function() {
		this.__broadcast(new flash.events.Event(flash.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new flash.events.Event(flash.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__update(false);
		if(this.__canvas != null) {
			if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
				this.__canvas.width = this.stageWidth;
				this.__canvas.height = this.stageHeight;
			}
			this.__context.setTransform(1,0,0,1,0,0);
			this.__context.globalAlpha = 1;
			if(!this.__transparent && this.__clearBeforeRender) {
				this.__context.fillStyle = this.__colorString;
				this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
			} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
			this.__renderCanvas(this.__renderSession);
		} else {
			this.__renderSession.z = 1;
			this.__renderDOM(this.__renderSession);
		}
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null && this.__div == null) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				if(this.__canvas != null) {
					this.__canvas.width = this.stageWidth;
					this.__canvas.height = this.stageHeight;
				} else {
					this.__div.style.width = this.stageWidth + "px";
					this.__div.style.height = this.stageHeight + "px";
				}
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.__canvas != null) {
					this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
					this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
					this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
				} else {
					this.__div.style.width = this.__originalWidth * targetRatio + "px";
					this.__div.style.height = this.__originalHeight * targetRatio + "px";
					this.__div.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__div.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) {
			this.__cursor = cursor;
			if(this.__canvas != null) this.__canvas.style.cursor = cursor; else this.__div.style.cursor = cursor;
		}
	}
	,__update: function(transformOnly) {
		if(transformOnly) {
			if(flash.display.DisplayObject.__worldTransformDirty) {
				flash.display.Sprite.prototype.__update.call(this,true);
				flash.display.DisplayObject.__worldTransformDirty = false;
				this.__dirty = true;
			}
		} else if(flash.display.DisplayObject.__worldTransformDirty || this.__dirty || flash.display.DisplayObject.__worldDirty) {
			flash.display.Sprite.prototype.__update.call(this,false);
			flash.display.DisplayObject.__worldTransformDirty = false;
			flash.display.DisplayObject.__worldDirty = false;
			this.__dirty = false;
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,element_onFocus: function(event) {
	}
	,element_onTouch: function(event) {
		event.preventDefault();
		var rect;
		if(this.__canvas != null) rect = this.__canvas.getBoundingClientRect(); else rect = this.__div.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = flash.events.MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = flash.events.MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = flash.events.MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = flash.events.TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			var mouseEvent = flash.events.MouseEvent.__create(mouseType,event,localPoint,target);
			mouseEvent.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(mouseEvent,this.__stack);
		} else {
			var touchEvent1 = flash.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			var mouseEvent1 = flash.events.MouseEvent.__create(mouseType,event,point,this);
			mouseEvent1.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(mouseEvent1,[this]);
		}
	}
	,element_onMouse: function(event) {
		var rect;
		if(this.__canvas != null) {
			rect = this.__canvas.getBoundingClientRect();
			this.__mouseX = (event.clientX - rect.left) * (this.__canvas.width / rect.width);
			this.__mouseY = (event.clientY - rect.top) * (this.__canvas.height / rect.height);
		} else {
			rect = this.__div.getBoundingClientRect();
			this.__mouseX = event.clientX - rect.left;
			this.__mouseY = event.clientY - rect.top;
		}
		this.__stack = [];
		var type;
		var _g = event.type;
		switch(_g) {
		case "mousedown":
			type = flash.events.MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = flash.events.MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = flash.events.MouseEvent.MOUSE_MOVE;
			break;
		case "click":
			type = flash.events.MouseEvent.CLICK;
			break;
		case "dblclick":
			type = flash.events.MouseEvent.DOUBLE_CLICK;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(flash.events.MouseEvent.__create(type,event,target.globalToLocal(new flash.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(flash.events.MouseEvent.__create(type,event,new flash.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
		var location;
		if(event.location != null) location = event.location; else location = event.keyLocation;
		var keyLocation;
		keyLocation = js.Boot.__cast(location , Int);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(new flash.events.KeyboardEvent(event.type == "keydown"?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,keyLocation,event.ctrlKey,event.altKey,event.shiftKey),stack);
		}
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new flash.events.Event(flash.events.Event.RESIZE);
		this.__broadcast(event1,false);
	}
	,window_onFocus: function(event) {
		var event1 = new flash.events.Event(flash.events.Event.ACTIVATE);
		this.__broadcast(event1,true);
	}
	,window_onBlur: function(event) {
		var event1 = new flash.events.Event(flash.events.Event.DEACTIVATE);
		this.__broadcast(event1,true);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			if(this.__focus != null) {
				var event = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,value,false,0);
				this.__stack = [];
				this.__focus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(value != null) {
				var event1 = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,this.__focus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
			this.__focus = value;
		}
		return this.__focus;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_color:"set_color",get_color:"get_color"})
});
flash.display.RenderSession = function() {
	this.maskManager = new flash.display.MaskManager(this);
};
$hxClasses["flash.display.RenderSession"] = flash.display.RenderSession;
flash.display.RenderSession.__name__ = ["flash","display","RenderSession"];
flash.display.RenderSession.prototype = {
	context: null
	,element: null
	,maskManager: null
	,roundPixels: null
	,transformProperty: null
	,transformOriginProperty: null
	,vendorPrefix: null
	,z: null
	,__class__: flash.display.RenderSession
};
flash.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["flash.display.MaskManager"] = flash.display.MaskManager;
flash.display.MaskManager.__name__ = ["flash","display","MaskManager"];
flash.display.MaskManager.prototype = {
	renderSession: null
	,pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new flash.geom.Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: flash.display.MaskManager
};
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : ["flash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : ["flash","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display._StageQuality = {};
flash.display._StageQuality.StageQuality_Impl_ = function() { };
$hxClasses["flash.display._StageQuality.StageQuality_Impl_"] = flash.display._StageQuality.StageQuality_Impl_;
flash.display._StageQuality.StageQuality_Impl_.__name__ = ["flash","display","_StageQuality","StageQuality_Impl_"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : ["flash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.display.TriangleCulling = $hxClasses["flash.display.TriangleCulling"] = { __ename__ : ["flash","display","TriangleCulling"], __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
flash.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
flash.display.TriangleCulling.NEGATIVE.toString = $estr;
flash.display.TriangleCulling.NEGATIVE.__enum__ = flash.display.TriangleCulling;
flash.display.TriangleCulling.NONE = ["NONE",1];
flash.display.TriangleCulling.NONE.toString = $estr;
flash.display.TriangleCulling.NONE.__enum__ = flash.display.TriangleCulling;
flash.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
flash.display.TriangleCulling.POSITIVE.toString = $estr;
flash.display.TriangleCulling.POSITIVE.__enum__ = flash.display.TriangleCulling;
flash.errors = {};
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	errorID: null
	,message: null
	,name: null
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash.errors.Error
};
flash.errors.ArgumentError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage);
};
$hxClasses["flash.errors.ArgumentError"] = flash.errors.ArgumentError;
flash.errors.ArgumentError.__name__ = ["flash","errors","ArgumentError"];
flash.errors.ArgumentError.__super__ = flash.errors.Error;
flash.errors.ArgumentError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.ArgumentError
});
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.RangeError"] = flash.errors.RangeError;
flash.errors.RangeError.__name__ = ["flash","errors","RangeError"];
flash.errors.RangeError.__super__ = flash.errors.Error;
flash.errors.RangeError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.RangeError
});
flash.errors.TypeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.TypeError"] = flash.errors.TypeError;
flash.errors.TypeError.__name__ = ["flash","errors","TypeError"];
flash.errors.TypeError.__super__ = flash.errors.Error;
flash.errors.TypeError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.TypeError
});
flash.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 1;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	bubbles: null
	,cancelable: null
	,currentTarget: null
	,eventPhase: null
	,target: null
	,type: null
	,__isCancelled: null
	,__isCancelledNow: null
	,clone: function() {
		var event = new flash.events.Event(this.type,this.bubbles,this.cancelable);
		event.eventPhase = this.eventPhase;
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		return event;
	}
	,isDefaultPrevented: function() {
		return this.__isCancelled || this.__isCancelledNow;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,__class__: flash.events.Event
};
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	errorID: null
	,__class__: flash.events.ErrorEvent
});
flash.events._EventDispatcher = {};
flash.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["flash.events._EventDispatcher.Listener"] = flash.events._EventDispatcher.Listener;
flash.events._EventDispatcher.Listener.__name__ = ["flash","events","_EventDispatcher","Listener"];
flash.events._EventDispatcher.Listener.prototype = {
	callback: null
	,priority: null
	,useCapture: null
	,match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: flash.events._EventDispatcher.Listener
};
flash.events._EventPhase = {};
flash.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["flash.events._EventPhase.EventPhase_Impl_"] = flash.events._EventPhase.EventPhase_Impl_;
flash.events._EventPhase.EventPhase_Impl_.__name__ = ["flash","events","_EventPhase","EventPhase_Impl_"];
flash.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	if(shiftKey == null) this.shiftKey = false; else this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	keyCode: null
	,relatedObject: null
	,shiftKey: null
	,clone: function() {
		var event = new flash.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	}
	,__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	responseHeaders: null
	,responseURL: null
	,status: null
	,__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	altKey: null
	,charCode: null
	,ctrlKey: null
	,commandKey: null
	,controlKey: null
	,keyCode: null
	,keyLocation: null
	,shiftKey: null
	,__class__: flash.events.KeyboardEvent
});
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN || type == flash.events.MouseEvent.MOUSE_MOVE) if(event.which != null) __mouseDown = event.which == 1; else if(event.button != null) __mouseDown = event.button == 0; else __mouseDown = false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = flash.Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	altKey: null
	,buttonDown: null
	,commandKey: null
	,clickCount: null
	,ctrlKey: null
	,delta: null
	,localX: null
	,localY: null
	,relatedObject: null
	,shiftKey: null
	,stageX: null
	,stageY: null
	,updateAfterEvent: function() {
	}
	,__class__: flash.events.MouseEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.current.stage.get_mouseX();
	evt.stageY = flash.Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	altKey: null
	,buttonDown: null
	,commandKey: null
	,ctrlKey: null
	,delta: null
	,isPrimaryTouchPoint: null
	,localX: null
	,localY: null
	,relatedObject: null
	,shiftKey: null
	,stageX: null
	,stageY: null
	,touchPointID: null
	,__class__: flash.events.TouchEvent
});
flash.filters = {};
flash.filters.BitmapFilter = function() {
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	clone: function() {
		return new flash.filters.BitmapFilter();
	}
	,__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: flash.filters.BitmapFilter
};
flash.geom = {};
flash.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	alphaMultiplier: null
	,alphaOffset: null
	,blueMultiplier: null
	,blueOffset: null
	,greenMultiplier: null
	,greenOffset: null
	,redMultiplier: null
	,redOffset: null
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
flash.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	a: null
	,b: null
	,c: null
	,d: null
	,tx: null
	,ty: null
	,clone: function() {
		return new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(matrix) {
		return matrix != null && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c && this.d == matrix.d;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,mult: function(m) {
		var result = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		result.concat(m);
		return result;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) scale = 1;
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformPoint: function(pos) {
		return new flash.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		var m = new flash.geom.Matrix();
		m.tx = dx;
		m.ty = dy;
		this.concat(m);
	}
	,__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	}
	,__transformX: function(pos) {
		return pos.x * this.a + pos.y * this.c + this.tx;
	}
	,__transformY: function(pos) {
		return pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__translateTransformed: function(pos) {
		this.tx = pos.x * this.a + pos.y * this.c + this.tx;
		this.ty = pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__class__: flash.geom.Matrix
};
flash.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
flash.geom.Point.prototype = {
	length: null
	,x: null
	,y: null
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
};
flash.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	height: null
	,width: null
	,x: null
	,y: null
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		if(this.width == 0 || this.height == 0) return toUnion.clone(); else if(toUnion.width == 0 || toUnion.height == 0) return this.clone();
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x < x) this.x = x;
		if(this.y < y) this.y = y;
		if(cacheRight > x + width) this.width = x + width - this.x;
		if(cacheBottom > y + height) this.height = y + height - this.y;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
flash.geom.Transform = function(displayObject) {
	this.colorTransform = new flash.geom.ColorTransform();
	this.concatenatedColorTransform = new flash.geom.ColorTransform();
	this.concatenatedMatrix = new flash.geom.Matrix();
	this.pixelBounds = new flash.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__matrix = new flash.geom.Matrix();
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	colorTransform: null
	,concatenatedColorTransform: null
	,concatenatedMatrix: null
	,pixelBounds: null
	,__displayObject: null
	,__matrix: null
	,get_matrix: function() {
		if(this.__matrix != null) {
			this.__matrix.identity();
			this.__matrix.scale(this.__displayObject.get_scaleX(),this.__displayObject.get_scaleY());
			this.__matrix.rotate(this.__displayObject.get_rotation() * (Math.PI / 180));
			this.__matrix.translate(this.__displayObject.get_x(),this.__displayObject.get_y());
			return this.__matrix.clone();
		}
		return null;
	}
	,set_matrix: function(value) {
		if(value == null) return this.__matrix = null;
		if(this.__displayObject != null) {
			this.__displayObject.set_x(value.tx);
			this.__displayObject.set_y(value.ty);
			this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b));
			this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d));
			this.__displayObject.set_rotation(Math.atan2(value.b,value.a) * (180 / Math.PI));
		}
		return value;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_matrix:"set_matrix",get_matrix:"get_matrix"}
};
flash.media = {};
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,id3: null
	,isBuffering: null
	,length: null
	,url: null
	,__buffer: null
	,__sound: null
	,__soundID: null
	,close: function() {
		if(flash.media.Sound.__registeredSounds.exists(this.__soundID)) createjs.Sound.removeSound(this.__soundID);
	}
	,load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!flash.media.Sound.__registeredSounds.exists(this.__soundID)) {
			flash.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new flash.media.SoundTransform(1,0);
		var instance = createjs.Sound.play(this.__soundID,"any",0,startTime | 0,loops,sndTransform.volume,sndTransform.pan);
		return new flash.media.SoundChannel(instance);
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
		}
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function(soundInstance) {
	flash.events.EventDispatcher.call(this,this);
	this.__soundInstance = soundInstance;
	this.__soundInstance.addEventListener("complete",$bind(this,this.soundInstance_onComplete));
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	leftPeak: null
	,rightPeak: null
	,__soundInstance: null
	,stop: function() {
		this.__soundInstance.stop();
	}
	,__dispose: function() {
		this.__soundInstance.stop();
		this.__soundInstance = null;
	}
	,get_position: function() {
		return this.__soundInstance.getPosition();
	}
	,set_position: function(value) {
		this.__soundInstance.setPosition(value | 0);
		return this.__soundInstance.getPosition();
	}
	,get_soundTransform: function() {
		return new flash.media.SoundTransform(this.__soundInstance.getVolume(),this.__soundInstance.getPan());
	}
	,set_soundTransform: function(value) {
		this.__soundInstance.setVolume(value.volume);
		this.__soundInstance.setPan(value.pan);
		return value;
	}
	,soundInstance_onComplete: function(_) {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.SOUND_COMPLETE));
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",get_soundTransform:"get_soundTransform",set_position:"set_position",get_position:"get_position"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	bufferTime: null
	,checkPolicyFile: null
	,__class__: flash.media.SoundLoaderContext
};
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	leftToLeft: null
	,leftToRight: null
	,pan: null
	,rightToLeft: null
	,rightToRight: null
	,volume: null
	,__class__: flash.media.SoundTransform
};
flash.net = {};
flash.net.SharedObject = function() {
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.net.SharedObject"] = flash.net.SharedObject;
flash.net.SharedObject.__name__ = ["flash","net","SharedObject"];
flash.net.SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = window.location.href;
	var so = new flash.net.SharedObject();
	so.__key = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = flash.net.SharedObject.__getLocalStorage().getItem(so.__key);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe.Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : flash.net.SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
};
flash.net.SharedObject.__getLocalStorage = function() {
	var res = js.Browser.getLocalStorage();
	if(res == null) throw new flash.errors.Error("SharedObject not supported");
	return res;
};
flash.net.SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
};
flash.net.SharedObject.__super__ = flash.events.EventDispatcher;
flash.net.SharedObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	data: null
	,__key: null
	,clear: function() {
		this.data = { };
		try {
			flash.net.SharedObject.__getLocalStorage().removeItem(this.__key);
		} catch( e ) {
		}
		this.flush();
	}
	,flush: function() {
		var data = haxe.Serializer.run(this.data);
		try {
			flash.net.SharedObject.__getLocalStorage().removeItem(this.__key);
			flash.net.SharedObject.__getLocalStorage().setItem(this.__key,data);
		} catch( e ) {
			return flash.net.SharedObjectFlushStatus.PENDING;
		}
		return flash.net.SharedObjectFlushStatus.FLUSHED;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,get_size: function() {
		var d = haxe.Serializer.run(this.data);
		return haxe.io.Bytes.ofString(d).length;
	}
	,__class__: flash.net.SharedObject
	,__properties__: {get_size:"get_size"}
});
flash.net.SharedObjectFlushStatus = $hxClasses["flash.net.SharedObjectFlushStatus"] = { __ename__ : ["flash","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] };
flash.net.SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
flash.net.SharedObjectFlushStatus.FLUSHED.toString = $estr;
flash.net.SharedObjectFlushStatus.FLUSHED.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.SharedObjectFlushStatus.PENDING = ["PENDING",1];
flash.net.SharedObjectFlushStatus.PENDING.toString = $estr;
flash.net.SharedObjectFlushStatus.PENDING.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,data: null
	,dataFormat: null
	,close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : ["flash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] };
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	contentType: null
	,data: null
	,method: null
	,requestHeaders: null
	,url: null
	,formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
};
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	name: null
	,value: null
	,__class__: flash.net.URLRequestHeader
};
flash.net.URLRequestMethod = function() { };
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: flash.net.URLVariables
};
flash.system = {};
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	parentDomain: null
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: flash.system.ApplicationDomain
};
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	allowCodeImport: null
	,allowLoadBytesCodeExecution: null
	,applicationDomain: null
	,checkPolicyFile: null
	,securityDomain: null
	,__class__: flash.system.LoaderContext
};
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
};
flash.text = {};
flash.text._AntiAliasType = {};
flash.text._AntiAliasType.AntiAliasType_Impl_ = function() { };
$hxClasses["flash.text._AntiAliasType.AntiAliasType_Impl_"] = flash.text._AntiAliasType.AntiAliasType_Impl_;
flash.text._AntiAliasType.AntiAliasType_Impl_.__name__ = ["flash","text","_AntiAliasType","AntiAliasType_Impl_"];
flash.text.Font = function() {
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.registerFont = function(font) {
};
flash.text.Font.prototype = {
	fontName: null
	,fontStyle: null
	,fontType: null
	,__class__: flash.text.Font
};
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : ["flash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : ["flash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] };
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : ["flash","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.__width = 100;
	this.__height = 100;
	this.__text = "";
	this.set_type(flash.text.TextFieldType.DYNAMIC);
	this.set_autoSize(flash.text.TextFieldAutoSize.NONE);
	this.selectable = true;
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
	if(flash.text.TextField.__defaultTextFormat == null) {
		flash.text.TextField.__defaultTextFormat = new flash.text.TextFormat("Times New Roman",12,0,false,false,false,"","",flash.text.TextFormatAlign.LEFT,0,0,0,0);
		flash.text.TextField.__defaultTextFormat.blockIndent = 0;
		flash.text.TextField.__defaultTextFormat.bullet = false;
		flash.text.TextField.__defaultTextFormat.letterSpacing = 0;
		flash.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = flash.text.TextField.__defaultTextFormat.clone();
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__defaultTextFormat = null;
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	antiAliasType: null
	,autoSize: null
	,background: null
	,backgroundColor: null
	,border: null
	,borderColor: null
	,bottomScrollV: null
	,caretIndex: null
	,caretPos: null
	,displayAsPassword: null
	,embedFonts: null
	,gridFitType: null
	,length: null
	,maxChars: null
	,maxScrollH: null
	,maxScrollV: null
	,multiline: null
	,numLines: null
	,restrict: null
	,scrollH: null
	,scrollV: null
	,selectable: null
	,selectionBeginIndex: null
	,selectionEndIndex: null
	,sharpness: null
	,textHeight: null
	,textWidth: null
	,type: null
	,wordWrap: null
	,__canvas: null
	,__context: null
	,__dirty: null
	,__div: null
	,__height: null
	,__isHTML: null
	,__ranges: null
	,__style: null
	,__text: null
	,__textFormat: null
	,__width: null
	,appendText: function(text) {
		var _g = this;
		_g.set_text(_g.get_text() + text);
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,getCharIndexAtPoint: function(x,y) {
		return 0;
	}
	,getLineIndexAtPoint: function(x,y) {
		return 0;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return this.__textFormat.clone();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,setTextFormat: function(format,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(format.font != null) this.__textFormat.font = format.font;
		if(format.size != null) this.__textFormat.size = format.size;
		if(format.color != null) this.__textFormat.color = format.color;
		if(format.bold != null) this.__textFormat.bold = format.bold;
		if(format.italic != null) this.__textFormat.italic = format.italic;
		if(format.underline != null) this.__textFormat.underline = format.underline;
		if(format.url != null) this.__textFormat.url = format.url;
		if(format.target != null) this.__textFormat.target = format.target;
		if(format.align != null) this.__textFormat.align = format.align;
		if(format.leftMargin != null) this.__textFormat.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.__textFormat.rightMargin = format.rightMargin;
		if(format.indent != null) this.__textFormat.indent = format.indent;
		if(format.leading != null) this.__textFormat.leading = format.leading;
		if(format.blockIndent != null) this.__textFormat.blockIndent = format.blockIndent;
		if(format.bullet != null) this.__textFormat.bullet = format.bullet;
		if(format.kerning != null) this.__textFormat.kerning = format.kerning;
		if(format.letterSpacing != null) this.__textFormat.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.__textFormat.tabStops = format.tabStops;
		this.__dirty = true;
	}
	,__getBounds: function(rect,matrix) {
		var bounds = new flash.geom.Rectangle(0,0,this.__width,this.__height);
		bounds.transform(this.__getTransform());
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getFont: function(format) {
		var font;
		if(format.italic) font = "italic "; else font = "normal ";
		font += "normal ";
		if(format.bold) font += "bold "; else font += "normal ";
		font += format.size + "px";
		font += "/" + (format.size + format.leading + 4) + "px ";
		font += "'" + (function($this) {
			var $r;
			var _g = format.font;
			$r = (function($this) {
				var $r;
				switch(_g) {
				case "_sans":
					$r = "sans-serif";
					break;
				case "_serif":
					$r = "serif";
					break;
				case "_typewriter":
					$r = "monospace";
					break;
				default:
					$r = format.font;
				}
				return $r;
			}($this));
			return $r;
		}(this));
		font += "'";
		return font;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var point = this.globalToLocal(new flash.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__measureText: function() {
		if(this.__ranges == null) {
			this.__context.font = this.__getFont(this.__textFormat);
			return [this.__context.measureText(this.__text).width];
		} else {
			var measurements = [];
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				this.__context.font = this.__getFont(range.format);
				measurements.push(this.__context.measureText(this.get_text().substring(range.start,range.end)).width);
			}
			return measurements;
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__dirty) {
			if((this.__text == null || this.__text == "") && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != flash.text.TextFieldAutoSize.LEFT) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				if(this.__text != null && this.__text != "") {
					var measurements = this.__measureText();
					var textWidth = 0.0;
					var _g = 0;
					while(_g < measurements.length) {
						var measurement = measurements[_g];
						++_g;
						textWidth += measurement;
					}
					if(this.autoSize == flash.text.TextFieldAutoSize.LEFT) this.__width = textWidth + 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
					}
					if(this.__ranges == null) this.__renderText(this.get_text(),this.__textFormat,0); else {
						var currentIndex = 0;
						var range;
						var offsetX = 0.0;
						var _g1 = 0;
						var _g2 = this.__ranges.length;
						while(_g1 < _g2) {
							var i = _g1++;
							range = this.__ranges[i];
							this.__renderText(this.get_text().substring(range.start,range.end),range.format,offsetX);
							offsetX += measurements[i];
						}
					}
				} else {
					if(this.autoSize == flash.text.TextFieldAutoSize.LEFT) this.__width = 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
					}
				}
			}
			this.__dirty = false;
		}
		if(this.__canvas != null) {
			var context = renderSession.context;
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(this.get_scrollRect() == null) context.drawImage(this.__canvas,0,0); else context.drawImage(this.__canvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,0,0,this.get_scrollRect().width,this.get_scrollRect().height);
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible) {
			if(this.__dirty) {
				if(this.__text != "") {
					if(this.__div == null) {
						this.__div = window.document.createElement("div");
						this.__style = this.__div.style;
						this.__style.position = "absolute";
						this.__style.setProperty("top","0",null);
						this.__style.setProperty("left","0",null);
						this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
						this.__style.setProperty("cursor","inherit",null);
						renderSession.element.appendChild(this.__div);
						this.__worldTransformChanged = true;
					}
					this.__div.innerHTML = this.__text;
					this.__style.setProperty("font",this.__getFont(this.__textFormat),null);
					this.__style.setProperty("color","#" + StringTools.hex(this.__textFormat.color,6),null);
					if(this.autoSize != flash.text.TextFieldAutoSize.NONE) this.__style.setProperty("width","auto",null); else this.__style.setProperty("width",this.__width + "px",null);
					this.__style.setProperty("height",this.__height + "px",null);
					var _g = this.__textFormat.align;
					switch(_g[1]) {
					case 3:
						this.__style.setProperty("text-align","center",null);
						break;
					case 1:
						this.__style.setProperty("text-align","right",null);
						break;
					default:
						this.__style.setProperty("text-align","left",null);
					}
					this.__dirty = false;
				} else if(this.__div != null) {
					renderSession.element.removeChild(this.__div);
					this.__div = null;
				}
			}
			if(this.__div != null) {
				if(this.__worldAlphaChanged) {
					if(this.__worldAlpha < 1) this.__style.setProperty("opacity",Std.string(this.__worldAlpha),null); else this.__style.removeProperty("opacity");
				}
				if(this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
				if(this.__worldZ != ++renderSession.z) {
					this.__worldZ = renderSession.z;
					this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
				}
				if(this.__worldClipChanged) {
					if(this.__worldClip == null) this.__style.removeProperty("clip"); else {
						var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
						this.__style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
					}
				}
			}
		} else if(this.__div != null) {
			renderSession.element.removeChild(this.__div);
			this.__div = null;
			this.__style = null;
		}
	}
	,__renderText: function(text,format,offsetX) {
		this.__context.font = this.__getFont(format);
		this.__context.textBaseline = "top";
		this.__context.fillStyle = "#" + StringTools.hex(format.color,6);
		var _g = format.align;
		switch(_g[1]) {
		case 3:
			this.__context.textAlign = "center";
			this.__context.fillText(text,this.__width / 2,2,this.__width - 4);
			break;
		case 1:
			this.__context.textAlign = "end";
			this.__context.fillText(text,this.__width - 2,2,this.__width - 4);
			break;
		default:
			this.__context.textAlign = "start";
			this.__context.fillText(text,2 + offsetX,2,this.__width - 4);
		}
	}
	,set_autoSize: function(value) {
		if(value != this.autoSize) this.__dirty = true;
		return this.autoSize = value;
	}
	,set_background: function(value) {
		if(value != this.background) this.__dirty = true;
		return this.background = value;
	}
	,set_backgroundColor: function(value) {
		if(value != this.backgroundColor) this.__dirty = true;
		return this.backgroundColor = value;
	}
	,set_border: function(value) {
		if(value != this.border) this.__dirty = true;
		return this.border = value;
	}
	,set_borderColor: function(value) {
		if(value != this.borderColor) this.__dirty = true;
		return this.borderColor = value;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,get_caretPos: function() {
		return 0;
	}
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat = flash.text.TextField.__defaultTextFormat.clone();
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.get_scaleY();
	}
	,set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__height) this.__dirty = true;
		this.set_scaleY(1);
		return this.__height = value;
	}
	,get_htmlText: function() {
		return this.__text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = true;
		if(this.__div == null) {
			value = new EReg("<br>","g").replace(value,"\n");
			value = new EReg("<br/>","g").replace(value,"\n");
			var segments = value.split("<font");
			if(segments.length == 1) {
				value = new EReg("<.*?>","g").replace(value,"");
				return this.__text = value;
			} else {
				value = "";
				this.__ranges = [];
				var _g = 0;
				while(_g < segments.length) {
					var segment = segments[_g];
					++_g;
					if(segment == "") continue;
					var closeFontIndex = segment.indexOf("</font>");
					if(closeFontIndex > -1) {
						var start = segment.indexOf(">") + 1;
						var end = closeFontIndex;
						var format = this.__textFormat.clone();
						var faceIndex = segment.indexOf("face=");
						var colorIndex = segment.indexOf("color=");
						var sizeIndex = segment.indexOf("size=");
						if(faceIndex > -1 && faceIndex < start) {
							var len = segment.indexOf("\"",faceIndex);
							format.font = HxOverrides.substr(segment,faceIndex + 6,len);
						}
						if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
						if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
							var $r;
							var len1 = segment.indexOf("\"",sizeIndex);
							$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
							return $r;
						}(this)));
						var sub = segment.substring(start,end);
						sub = new EReg("<.*?>","g").replace(sub,"");
						this.__ranges.push(new flash.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__ranges.push(new flash.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__ranges.push(new flash.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
						value += segment;
					}
				}
			}
		}
		return this.__text = value;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_numLines: function() {
		return 0;
	}
	,get_text: function() {
		if(this.__isHTML) {
		}
		return this.__text;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = false;
		return this.__text = value;
	}
	,get_textColor: function() {
		return this.__textFormat.color;
	}
	,set_textColor: function(value) {
		if(value != this.__textFormat.color) this.__dirty = true;
		if(this.__ranges != null) {
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				range.format.color = null;
			}
		}
		return this.__textFormat.color = value;
	}
	,get_textWidth: function() {
		if(this.__canvas != null) {
			var sizes = this.__measureText();
			var total = 0;
			var _g = 0;
			while(_g < sizes.length) {
				var size = sizes[_g];
				++_g;
				total += size;
			}
			return total;
		} else if(this.__div != null) return this.__div.clientWidth; else {
			var div = window.document.createElement("div");
			div.innerHTML = this.__text;
			div.style.setProperty("font",this.__getFont(this.__textFormat),null);
			div.style.position = "absolute";
			div.style.top = "-100%";
			window.document.body.appendChild(div);
			var clientWidth = div.offsetWidth;
			window.document.body.removeChild(div);
			return clientWidth;
		}
	}
	,get_textHeight: function() {
		return this.__textFormat.size * 1.185;
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		return this.__width * this.get_scaleX();
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__width != value) this.__dirty = true;
		this.set_scaleX(1);
		return this.__width = value;
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_wordWrap: function(value) {
		return this.wordWrap = value;
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_type:"set_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_textColor:"set_textColor",get_textColor:"get_textColor",set_text:"set_text",get_text:"get_text",get_numLines:"get_numLines",get_maxScrollV:"get_maxScrollV",get_maxScrollH:"get_maxScrollH",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",get_caretPos:"get_caretPos",get_bottomScrollV:"get_bottomScrollV",set_borderColor:"set_borderColor",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
flash.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["flash.text.TextFormatRange"] = flash.text.TextFormatRange;
flash.text.TextFormatRange.__name__ = ["flash","text","TextFormatRange"];
flash.text.TextFormatRange.prototype = {
	end: null
	,format: null
	,start: null
	,__class__: flash.text.TextFormatRange
};
flash.text.TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : ["flash","text","TextFieldAutoSize"], __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
flash.text.TextFieldAutoSize.CENTER = ["CENTER",0];
flash.text.TextFieldAutoSize.CENTER.toString = $estr;
flash.text.TextFieldAutoSize.CENTER.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.LEFT = ["LEFT",1];
flash.text.TextFieldAutoSize.LEFT.toString = $estr;
flash.text.TextFieldAutoSize.LEFT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.NONE = ["NONE",2];
flash.text.TextFieldAutoSize.NONE.toString = $estr;
flash.text.TextFieldAutoSize.NONE.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
flash.text.TextFieldAutoSize.RIGHT.toString = $estr;
flash.text.TextFieldAutoSize.RIGHT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldType = $hxClasses["flash.text.TextFieldType"] = { __ename__ : ["flash","text","TextFieldType"], __constructs__ : ["DYNAMIC","INPUT"] };
flash.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
flash.text.TextFieldType.DYNAMIC.toString = $estr;
flash.text.TextFieldType.DYNAMIC.__enum__ = flash.text.TextFieldType;
flash.text.TextFieldType.INPUT = ["INPUT",1];
flash.text.TextFieldType.INPUT.toString = $estr;
flash.text.TextFieldType.INPUT.__enum__ = flash.text.TextFieldType;
flash.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	align: null
	,blockIndent: null
	,bold: null
	,bullet: null
	,color: null
	,font: null
	,indent: null
	,italic: null
	,kerning: null
	,leading: null
	,leftMargin: null
	,letterSpacing: null
	,rightMargin: null
	,size: null
	,tabStops: null
	,target: null
	,underline: null
	,url: null
	,clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: flash.text.TextFormat
};
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : ["flash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {};
flash.ui._KeyLocation = {};
flash.ui._KeyLocation.KeyLocation_Impl_ = function() { };
$hxClasses["flash.ui._KeyLocation.KeyLocation_Impl_"] = flash.ui._KeyLocation.KeyLocation_Impl_;
flash.ui._KeyLocation.KeyLocation_Impl_.__name__ = ["flash","ui","_KeyLocation","KeyLocation_Impl_"];
flash.ui.Keyboard = function() { };
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.capsLock = null;
flash.ui.Keyboard.numLock = null;
flash.ui.Keyboard.isAccessible = function() {
	return false;
};
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
};
flash.ui.Mouse = function() {
};
$hxClasses["flash.ui.Mouse"] = flash.ui.Mouse;
flash.ui.Mouse.__name__ = ["flash","ui","Mouse"];
flash.ui.Mouse.hide = function() {
};
flash.ui.Mouse.show = function() {
};
flash.ui.Mouse.prototype = {
	__class__: flash.ui.Mouse
};
flash.ui.Multitouch = function() { };
$hxClasses["flash.ui.Multitouch"] = flash.ui.Multitouch;
flash.ui.Multitouch.__name__ = ["flash","ui","Multitouch"];
flash.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
flash.ui.Multitouch.maxTouchPoints = null;
flash.ui.Multitouch.supportedGestures = null;
flash.ui.Multitouch.supportsGestureEvents = null;
flash.ui.Multitouch.supportsTouchEvents = null;
flash.ui.Multitouch.get_inputMode = function() {
	return flash.ui.MultitouchInputMode.TOUCH_POINT;
};
flash.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == flash.ui.MultitouchInputMode.GESTURE) return flash.ui.Multitouch.get_inputMode();
	return inMode;
};
flash.ui.Multitouch.get_supportsTouchEvents = function() {
	return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
};
flash.ui.MultitouchInputMode = $hxClasses["flash.ui.MultitouchInputMode"] = { __ename__ : ["flash","ui","MultitouchInputMode"], __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] };
flash.ui.MultitouchInputMode.NONE = ["NONE",0];
flash.ui.MultitouchInputMode.NONE.toString = $estr;
flash.ui.MultitouchInputMode.NONE.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
flash.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
flash.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
flash.ui.MultitouchInputMode.GESTURE.toString = $estr;
flash.ui.MultitouchInputMode.GESTURE.__enum__ = flash.ui.MultitouchInputMode;
flash.utils = {};
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
flash.utils.ByteArray.prototype = {
	bytesAvailable: null
	,length: null
	,objectEncoding: null
	,position: null
	,allocated: null
	,byteView: null
	,data: null
	,littleEndian: null
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Std["int"](Math.max(len,this.allocated * 2))); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		if(length == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
flash.utils.Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flixel.FlxCamera = function(X,Y,Width,Height,Zoom) {
	if(Zoom == null) Zoom = 0;
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._fxShakeDirection = 0;
	this._fxShakeComplete = null;
	this._fxShakeDuration = 0;
	this._fxShakeIntensity = 0;
	this._fxFadeAlpha = 0;
	this._fxFadeComplete = null;
	this._fxFadeIn = false;
	this._fxFadeDuration = 0;
	this._fxFadeColor = 0;
	this._fxFlashAlpha = 0;
	this._fxFlashComplete = null;
	this._fxFlashDuration = 0;
	this._fxFlashColor = 0;
	this.antialiasing = false;
	this.color = -1;
	this.angle = 0;
	this.alpha = 1;
	this.useBgAlphaBlending = false;
	this.regen = false;
	this.bounds = null;
	this.deadzone = null;
	this.followLerp = 0;
	this.target = null;
	flixel.FlxBasic.call(this);
	this._scrollTarget = flixel.util.FlxPoint.get(null,null);
	this.x = X;
	this.y = Y;
	this.set_width(Width <= 0?flixel.FlxG.width:Width);
	this.set_height(Height <= 0?flixel.FlxG.height:Height);
	this.scroll = flixel.util.FlxPoint.get(null,null);
	this.followLead = flixel.util.FlxPoint.get(null,null);
	this._point = flixel.util.FlxPoint.get(null,null);
	this._flashOffset = flixel.util.FlxPoint.get(null,null);
	this.screen = new flixel.FlxSprite();
	this.buffer = new flash.display.BitmapData(this.width,this.height,true,0);
	this.screen.set_pixels(this.buffer);
	this.screen.origin.set();
	this._flashBitmap = new flash.display.Bitmap(this.buffer);
	this._flashBitmap.set_x(-this.width * 0.5);
	this._flashBitmap.set_y(-this.height * 0.5);
	this.set_color(16777215);
	this.flashSprite = new flash.display.Sprite();
	this.set_zoom(Zoom);
	this._flashOffset.set(this.width * 0.5 * this.zoom,this.height * 0.5 * this.zoom);
	this.flashSprite.set_x(this.x + this._flashOffset.x);
	this.flashSprite.set_y(this.y + this._flashOffset.y);
	this.flashSprite.addChild(this._flashBitmap);
	this._flashRect = new flash.geom.Rectangle(0,0,this.width,this.height);
	this._flashPoint = new flash.geom.Point();
	this._fxShakeOffset = flixel.util.FlxPoint.get(null,null);
	this._fill = new flash.display.BitmapData(this.width,this.height,true,0);
	this.bgColor = flixel.FlxG.cameras.get_bgColor();
};
$hxClasses["flixel.FlxCamera"] = flixel.FlxCamera;
flixel.FlxCamera.__name__ = ["flixel","FlxCamera"];
flixel.FlxCamera.defaultZoom = null;
flixel.FlxCamera.defaultCameras = null;
flixel.FlxCamera.__super__ = flixel.FlxBasic;
flixel.FlxCamera.prototype = $extend(flixel.FlxBasic.prototype,{
	x: null
	,y: null
	,style: null
	,target: null
	,followLerp: null
	,deadzone: null
	,bounds: null
	,scroll: null
	,buffer: null
	,regen: null
	,bgColor: null
	,screen: null
	,useBgAlphaBlending: null
	,flashSprite: null
	,width: null
	,height: null
	,zoom: null
	,alpha: null
	,angle: null
	,color: null
	,antialiasing: null
	,followLead: null
	,_flashRect: null
	,_flashPoint: null
	,_flashOffset: null
	,_fxFlashColor: null
	,_fxFlashDuration: null
	,_fxFlashComplete: null
	,_fxFlashAlpha: null
	,_fxFadeColor: null
	,_lastTargetPosition: null
	,_scrollTarget: null
	,_fxFadeDuration: null
	,_fxFadeIn: null
	,_fxFadeComplete: null
	,_fxFadeAlpha: null
	,_fxShakeIntensity: null
	,_fxShakeDuration: null
	,_fxShakeComplete: null
	,_fxShakeOffset: null
	,_fxShakeDirection: null
	,_point: null
	,_fill: null
	,_flashBitmap: null
	,destroy: function() {
		this.screen = flixel.util.FlxDestroyUtil.destroy(this.screen);
		this.buffer = null;
		this._flashBitmap = null;
		this._fill = flixel.util.FlxDestroyUtil.dispose(this._fill);
		this.scroll = flixel.util.FlxDestroyUtil.put(this.scroll);
		this.deadzone = flixel.util.FlxDestroyUtil.put(this.deadzone);
		this.bounds = flixel.util.FlxDestroyUtil.put(this.bounds);
		this.target = null;
		this.flashSprite = null;
		this._flashRect = null;
		this._flashPoint = null;
		this._fxFlashComplete = null;
		this._fxFadeComplete = null;
		this._fxShakeComplete = null;
		this._fxShakeOffset = null;
		flixel.FlxBasic.prototype.destroy.call(this);
	}
	,update: function() {
		if(this.target != null) this.updateFollow();
		if(this.bounds != null) {
			this.scroll.set_x(flixel.util.FlxMath.bound(this.scroll.x,this.bounds.x,this.bounds.get_right() - this.width));
			this.scroll.set_y(flixel.util.FlxMath.bound(this.scroll.y,this.bounds.y,this.bounds.get_bottom() - this.height));
		}
		this.updateFlash();
		this.updateFade();
		this.updateShake();
	}
	,updateFollow: function() {
		if(this.deadzone == null) this.focusOn(this.target.getMidpoint(this._point)); else {
			var edge;
			var targetX = this.target.x;
			var targetY = this.target.y;
			if(this.style == 4) {
				if(targetX > this.scroll.x + this.width) {
					var _g = this._scrollTarget;
					_g.set_x(_g.x + this.width);
				} else if(targetX < this.scroll.x) {
					var _g1 = this._scrollTarget;
					_g1.set_x(_g1.x - this.width);
				}
				if(targetY > this.scroll.y + this.height) {
					var _g2 = this._scrollTarget;
					_g2.set_y(_g2.y + this.height);
				} else if(targetY < this.scroll.y) {
					var _g3 = this._scrollTarget;
					_g3.set_y(_g3.y - this.height);
				}
			} else {
				edge = targetX - this.deadzone.x;
				if(this._scrollTarget.x > edge) this._scrollTarget.set_x(edge);
				edge = targetX + this.target.get_width() - this.deadzone.x - this.deadzone.width;
				if(this._scrollTarget.x < edge) this._scrollTarget.set_x(edge);
				edge = targetY - this.deadzone.y;
				if(this._scrollTarget.y > edge) this._scrollTarget.set_y(edge);
				edge = targetY + this.target.get_height() - this.deadzone.y - this.deadzone.height;
				if(this._scrollTarget.y < edge) this._scrollTarget.set_y(edge);
			}
			if(js.Boot.__instanceof(this.target,flixel.FlxSprite)) {
				if(this._lastTargetPosition == null) this._lastTargetPosition = flixel.util.FlxPoint.get(this.target.x,this.target.y);
				var _g4 = this._scrollTarget;
				_g4.set_x(_g4.x + (this.target.x - this._lastTargetPosition.x) * this.followLead.x);
				var _g5 = this._scrollTarget;
				_g5.set_y(_g5.y + (this.target.y - this._lastTargetPosition.y) * this.followLead.y);
				this._lastTargetPosition.set_x(this.target.x);
				this._lastTargetPosition.set_y(this.target.y);
			}
			if(this.followLerp == 0) this.scroll.copyFrom(this._scrollTarget); else {
				var _g6 = this.scroll;
				_g6.set_x(_g6.x + (this._scrollTarget.x - this.scroll.x) * flixel.FlxG.elapsed / (flixel.FlxG.elapsed + this.followLerp * flixel.FlxG.elapsed));
				var _g7 = this.scroll;
				_g7.set_y(_g7.y + (this._scrollTarget.y - this.scroll.y) * flixel.FlxG.elapsed / (flixel.FlxG.elapsed + this.followLerp * flixel.FlxG.elapsed));
			}
		}
	}
	,updateFlash: function() {
		if(this._fxFlashAlpha > 0.0) {
			this._fxFlashAlpha -= flixel.FlxG.elapsed / this._fxFlashDuration;
			if(this._fxFlashAlpha <= 0 && this._fxFlashComplete != null) this._fxFlashComplete();
		}
	}
	,updateFade: function() {
		if(this._fxFadeAlpha > 0.0 && this._fxFadeAlpha < 1.0) {
			if(this._fxFadeIn) {
				this._fxFadeAlpha -= flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha <= 0.0) {
					this._fxFadeAlpha = 0.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			} else {
				this._fxFadeAlpha += flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha >= 1.0) {
					this._fxFadeAlpha = 1.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			}
		}
	}
	,updateShake: function() {
		if(this._fxShakeDuration > 0) {
			this._fxShakeDuration -= flixel.FlxG.elapsed;
			if(this._fxShakeDuration <= 0) {
				this._fxShakeOffset.set();
				if(this._fxShakeComplete != null) this._fxShakeComplete();
			} else {
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 1) this._fxShakeOffset.set_x(((flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this._fxShakeIntensity * this.width * 2 - this._fxShakeIntensity * this.width) * this.zoom);
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 2) this._fxShakeOffset.set_y(((flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * this._fxShakeIntensity * this.height * 2 - this._fxShakeIntensity * this.height) * this.zoom);
			}
			if(this.target != null) {
				this.flashSprite.set_x(this.x + this._flashOffset.x);
				this.flashSprite.set_y(this.y + this._flashOffset.y);
			}
		}
	}
	,follow: function(Target,Style,Offset,Lerp) {
		if(Lerp == null) Lerp = 0;
		if(Style == null) Style = 0;
		this.style = Style;
		this.target = Target;
		this.followLerp = Lerp;
		var helper;
		var w = 0;
		var h = 0;
		this._lastTargetPosition = null;
		switch(Style) {
		case 1:
			var w1;
			w1 = this.width / 8 + (Offset != null?Offset.x:0);
			var h1;
			h1 = this.height / 3 + (Offset != null?Offset.y:0);
			this.deadzone = flixel.util.FlxRect.get((this.width - w1) / 2,(this.height - h1) / 2 - h1 * 0.25,w1,h1);
			break;
		case 2:
			helper = Math.max(this.width,this.height) / 4;
			this.deadzone = flixel.util.FlxRect.get((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 3:
			helper = Math.max(this.width,this.height) / 8;
			this.deadzone = flixel.util.FlxRect.get((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 0:
			if(this.target != null) {
				w = this.target.get_width() + (Offset != null?Offset.x:0);
				h = this.target.get_height() + (Offset != null?Offset.y:0);
			}
			this.deadzone = flixel.util.FlxRect.get((this.width - w) / 2,(this.height - h) / 2 - h * 0.25,w,h);
			break;
		case 4:
			this.deadzone = flixel.util.FlxRect.get(0,0,this.width,this.height);
			break;
		default:
			this.deadzone = null;
		}
	}
	,focusOn: function(point) {
		this.scroll.set(point.x - this.width * 0.5,point.y - this.height * 0.5);
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		if(!Force && this._fxFlashAlpha > 0.0) return;
		this._fxFlashColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFlashDuration = Duration;
		this._fxFlashComplete = OnComplete;
		this._fxFlashAlpha = 1.0;
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		if(!Force && this._fxFadeAlpha > 0.0) return;
		this._fxFadeColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFadeIn = FadeIn;
		this._fxFadeDuration = Duration;
		this._fxFadeComplete = OnComplete;
		if(this._fxFadeIn) this._fxFadeAlpha = 0.999999; else this._fxFadeAlpha = 0.0000000000000001;
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(!Force && (this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0)) return;
		this._fxShakeIntensity = Intensity;
		this._fxShakeDuration = Duration;
		this._fxShakeComplete = OnComplete;
		this._fxShakeDirection = Direction;
		this._fxShakeOffset.set();
	}
	,stopFX: function() {
		this._fxFlashAlpha = 0.0;
		this._fxFadeAlpha = 0.0;
		this._fxShakeDuration = 0;
		this.flashSprite.set_x(this.x + this._flashOffset.x);
		this.flashSprite.set_y(this.y + this._flashOffset.y);
	}
	,copyFrom: function(Camera) {
		if(Camera.bounds == null) this.bounds = null; else {
			if(this.bounds == null) this.bounds = flixel.util.FlxRect.get(null,null,null,null);
			this.bounds.copyFrom(Camera.bounds);
		}
		this.target = Camera.target;
		if(this.target != null) {
			if(Camera.deadzone == null) this.deadzone = null; else {
				if(this.deadzone == null) this.deadzone = flixel.util.FlxRect.get(null,null,null,null);
				this.deadzone.copyFrom(Camera.deadzone);
			}
		}
		return this;
	}
	,fill: function(Color,BlendAlpha,FxAlpha,graphics) {
		if(FxAlpha == null) FxAlpha = 1.0;
		if(BlendAlpha == null) BlendAlpha = true;
		if(BlendAlpha) {
			this._fill.fillRect(this._flashRect,Color);
			this.buffer.copyPixels(this._fill,this._flashRect,this._flashPoint,null,null,BlendAlpha);
		} else this.buffer.fillRect(this._flashRect,Color);
	}
	,drawFX: function() {
		var alphaComponent;
		if(this._fxFlashAlpha > 0.0) {
			alphaComponent = this._fxFlashColor >> 24 & 255;
			this.fill((((alphaComponent <= 0?255:alphaComponent) * this._fxFlashAlpha | 0) << 24) + (this._fxFlashColor & 16777215));
		}
		if(this._fxFadeAlpha > 0.0) {
			alphaComponent = this._fxFadeColor >> 24 & 255;
			this.fill((((alphaComponent <= 0?255:alphaComponent) * this._fxFadeAlpha | 0) << 24) + (this._fxFadeColor & 16777215));
		}
		if(this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0) {
			var _g = this.flashSprite;
			_g.set_x(_g.get_x() + this._fxShakeOffset.x);
			var _g1 = this.flashSprite;
			_g1.set_y(_g1.get_y() + this._fxShakeOffset.y);
		}
	}
	,checkResize: function() {
		if(this.regen) {
			if(this.width != this.buffer.width || this.height != this.buffer.height) {
				flixel.FlxG.bitmap.remove(this.screen.cachedGraphics.key);
				this.buffer = new flash.display.BitmapData(this.width,this.height,true,0);
				this.screen.set_pixels(this.buffer);
				this.screen.origin.set();
				this._flashBitmap.bitmapData = this.buffer;
				this._flashRect.width = this.width;
				this._flashRect.height = this.height;
				this._fill.dispose();
				this._fill = new flash.display.BitmapData(this.width,this.height,true,0);
			}
			this.regen = false;
		}
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
	}
	,setBounds: function(X,Y,Width,Height,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(this.bounds == null) this.bounds = flixel.util.FlxRect.get(null,null,null,null);
		this.bounds.set(X,Y,Width,Height);
		if(UpdateWorld) flixel.FlxG.worldBounds.copyFrom(this.bounds);
		this.update();
	}
	,setScale: function(X,Y) {
		this.flashSprite.set_scaleX(X);
		this.flashSprite.set_scaleY(Y);
		this._flashOffset.set_x(this.width * 0.5 * X);
		this._flashOffset.set_y(this.height * 0.5 * Y);
	}
	,getScale: function() {
		return this._point.set(this.flashSprite.get_scaleX(),this.flashSprite.get_scaleY());
	}
	,set_width: function(Value) {
		if(Value > 0) {
			this.width = Value;
			if(this._flashBitmap != null) {
				this.regen = Value != this.buffer.width;
				this._flashOffset.set_x(this.width * 0.5 * this.zoom);
				this._flashBitmap.set_x(-this.width * 0.5);
			}
		}
		return Value;
	}
	,set_height: function(Value) {
		if(Value > 0) {
			this.height = Value;
			if(this._flashBitmap != null) {
				this.regen = Value != this.buffer.height;
				this._flashOffset.set_y(this.height * 0.5 * this.zoom);
				this._flashBitmap.set_y(-this.height * 0.5);
			}
		}
		return Value;
	}
	,set_zoom: function(Zoom) {
		if(Zoom == 0) this.zoom = flixel.FlxCamera.defaultZoom; else this.zoom = Zoom;
		this.setScale(this.zoom,this.zoom);
		return this.zoom;
	}
	,set_alpha: function(Alpha) {
		this.alpha = flixel.util.FlxMath.bound(Alpha,0,1);
		this._flashBitmap.set_alpha(Alpha);
		return Alpha;
	}
	,set_angle: function(Angle) {
		this.angle = Angle;
		this.flashSprite.set_rotation(Angle);
		return Angle;
	}
	,set_color: function(Color) {
		this.color = Color & 16777215;
		if(this._flashBitmap != null) {
			var colorTransform = this._flashBitmap.get_transform().colorTransform;
			colorTransform.redMultiplier = (this.color >> 16) / 255;
			colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
			colorTransform.blueMultiplier = (this.color & 255) / 255;
			this._flashBitmap.get_transform().colorTransform = colorTransform;
		}
		return Color;
	}
	,set_antialiasing: function(Antialiasing) {
		this.antialiasing = Antialiasing;
		this._flashBitmap.smoothing = Antialiasing;
		return Antialiasing;
	}
	,__class__: flixel.FlxCamera
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_antialiasing:"set_antialiasing",set_color:"set_color",set_angle:"set_angle",set_alpha:"set_alpha",set_zoom:"set_zoom",set_height:"set_height",set_width:"set_width"})
});
flixel.system = {};
flixel.system.FlxVersion = function(Major,Minor,Patch,PatchVersion) {
	if(PatchVersion == null) PatchVersion = "";
	this.major = Major;
	this.minor = Minor;
	this.patch = Patch;
	this.patchVersion = PatchVersion;
};
$hxClasses["flixel.system.FlxVersion"] = flixel.system.FlxVersion;
flixel.system.FlxVersion.__name__ = ["flixel","system","FlxVersion"];
flixel.system.FlxVersion.prototype = {
	major: null
	,minor: null
	,patch: null
	,patchVersion: null
	,toString: function() {
		var patchVer = "";
		if(this.patchVersion != null && this.patchVersion != "") patchVer = "-" + this.patchVersion;
		return "HaxeFlixel " + this.major + "." + this.minor + "." + this.patch + patchVer;
	}
	,__class__: flixel.system.FlxVersion
};
flixel.util.FlxPool_flixel_util_FlxPoint = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxPoint"] = flixel.util.FlxPool_flixel_util_FlxPoint;
flixel.util.FlxPool_flixel_util_FlxPoint.__name__ = ["flixel","util","FlxPool_flixel_util_FlxPoint"];
flixel.util.FlxPool_flixel_util_FlxPoint.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel.util.FlxPool_flixel_util_FlxPoint
	,__properties__: {get_length:"get_length"}
};
flixel.util.FlxPoint = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._inPool = false;
	this._weak = false;
	this.y = 0;
	this.x = 0;
	this.set(X,Y);
};
$hxClasses["flixel.util.FlxPoint"] = flixel.util.FlxPoint;
flixel.util.FlxPoint.__name__ = ["flixel","util","FlxPoint"];
flixel.util.FlxPoint.__interfaces__ = [flixel.interfaces.IFlxPooled];
flixel.util.FlxPoint.get = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var point = flixel.util.FlxPoint._pool.get().set(X,Y);
	point._inPool = false;
	return point;
};
flixel.util.FlxPoint.weak = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	var point = flixel.util.FlxPoint._pool.get().set(X,Y);
	point._weak = true;
	return point;
};
flixel.util.FlxPoint.prototype = {
	x: null
	,y: null
	,_weak: null
	,_inPool: null
	,put: function() {
		if(!this._inPool) {
			this._inPool = true;
			flixel.util.FlxPoint._pool.putUnsafe(this);
		}
	}
	,putWeak: function() {
		if(this._weak) flixel.util.FlxPoint._pool.put(this);
	}
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
		return this;
	}
	,add: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var _g = this;
		_g.set_x(_g.x + X);
		var _g1 = this;
		_g1.set_y(_g1.y + Y);
		return this;
	}
	,addPoint: function(point) {
		var _g = this;
		_g.set_x(_g.x + point.x);
		var _g1 = this;
		_g1.set_y(_g1.y + point.y);
		if(point._weak) flixel.util.FlxPoint._pool.put(point);
		return this;
	}
	,subtract: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var _g = this;
		_g.set_x(_g.x - X);
		var _g1 = this;
		_g1.set_y(_g1.y - Y);
		return this;
	}
	,subtractPoint: function(point) {
		var _g = this;
		_g.set_x(_g.x - point.x);
		var _g1 = this;
		_g1.set_y(_g1.y - point.y);
		if(point._weak) flixel.util.FlxPoint._pool.put(point);
		return this;
	}
	,copyFrom: function(point) {
		this.set_x(point.x);
		this.set_y(point.y);
		return this;
	}
	,copyTo: function(point) {
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		point.set_x(this.x);
		point.set_y(this.y);
		return point;
	}
	,copyFromFlash: function(FlashPoint) {
		this.set_x(FlashPoint.x);
		this.set_y(FlashPoint.y);
		return this;
	}
	,copyToFlash: function(FlashPoint) {
		FlashPoint.x = this.x;
		FlashPoint.y = this.y;
		return FlashPoint;
	}
	,inCoords: function(RectX,RectY,RectWidth,RectHeight) {
		return flixel.util.FlxMath.pointInCoordinates(this.x,this.y,RectX,RectY,RectWidth,RectHeight);
	}
	,inFlxRect: function(Rect) {
		return flixel.util.FlxMath.pointInFlxRect(this.x,this.y,Rect);
	}
	,distanceTo: function(AnotherPoint) {
		return flixel.util.FlxMath.getDistance(this,AnotherPoint);
	}
	,floor: function() {
		this.set_x(Math.floor(this.x));
		this.set_y(Math.floor(this.y));
		return this;
	}
	,ceil: function() {
		this.set_x(Math.ceil(this.x));
		this.set_y(Math.ceil(this.y));
		return this;
	}
	,destroy: function() {
	}
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("x",this.x),flixel.util.LabelValuePair._pool.get().create("y",this.y)]);
	}
	,set_x: function(Value) {
		return this.x = Value;
	}
	,set_y: function(Value) {
		return this.y = Value;
	}
	,__class__: flixel.util.FlxPoint
	,__properties__: {set_y:"set_y",set_x:"set_x"}
};
flixel.system.scaleModes = {};
flixel.system.scaleModes.BaseScaleMode = function() {
	this.deviceSize = flixel.util.FlxPoint.get(null,null);
	this.gameSize = flixel.util.FlxPoint.get(null,null);
	this.scale = flixel.util.FlxPoint.get(null,null);
	this.offset = flixel.util.FlxPoint.get(null,null);
};
$hxClasses["flixel.system.scaleModes.BaseScaleMode"] = flixel.system.scaleModes.BaseScaleMode;
flixel.system.scaleModes.BaseScaleMode.__name__ = ["flixel","system","scaleModes","BaseScaleMode"];
flixel.system.scaleModes.BaseScaleMode.prototype = {
	deviceSize: null
	,gameSize: null
	,scale: null
	,offset: null
	,onMeasure: function(Width,Height) {
		this.updateGameSize(Width,Height);
		this.updateDeviceSize(Width,Height);
		this.updateScaleOffset();
		this.updateGameScale();
		this.updateGamePosition();
	}
	,updateGameSize: function(Width,Height) {
		this.gameSize.set(Width,Height);
	}
	,updateDeviceSize: function(Width,Height) {
		this.deviceSize.set(Width,Height);
	}
	,updateScaleOffset: function() {
		this.scale.set_x(this.gameSize.x / flixel.FlxG.width);
		this.scale.set_y(this.gameSize.y / flixel.FlxG.height);
		flixel.system.scaleModes.BaseScaleMode.zoom.set(flixel.FlxCamera.defaultZoom,flixel.FlxCamera.defaultZoom);
		if(flixel.FlxG.camera != null) {
			flixel.system.scaleModes.BaseScaleMode.zoom.set_x(flixel.FlxG.camera.getScale().x);
			flixel.system.scaleModes.BaseScaleMode.zoom.set_y(flixel.FlxG.camera.getScale().y);
		}
		var _g = this.scale;
		_g.set_x(_g.x / flixel.system.scaleModes.BaseScaleMode.zoom.x);
		var _g1 = this.scale;
		_g1.set_y(_g1.y / flixel.system.scaleModes.BaseScaleMode.zoom.y);
		this.offset.set_x(Math.ceil((this.deviceSize.x - this.gameSize.x) * 0.5));
		this.offset.set_y(Math.ceil((this.deviceSize.y - this.gameSize.y) * 0.5));
	}
	,updateGameScale: function() {
	}
	,updateGamePosition: function() {
		flixel.FlxG.game.set_x(this.offset.x);
		flixel.FlxG.game.set_y(this.offset.y);
	}
	,__class__: flixel.system.scaleModes.BaseScaleMode
};
flixel.system.scaleModes.RatioScaleMode = function() {
	flixel.system.scaleModes.BaseScaleMode.call(this);
};
$hxClasses["flixel.system.scaleModes.RatioScaleMode"] = flixel.system.scaleModes.RatioScaleMode;
flixel.system.scaleModes.RatioScaleMode.__name__ = ["flixel","system","scaleModes","RatioScaleMode"];
flixel.system.scaleModes.RatioScaleMode.__super__ = flixel.system.scaleModes.BaseScaleMode;
flixel.system.scaleModes.RatioScaleMode.prototype = $extend(flixel.system.scaleModes.BaseScaleMode.prototype,{
	updateGameSize: function(Width,Height) {
		var ratio = flixel.FlxG.width / flixel.FlxG.height;
		var realRatio = Width / Height;
		if(realRatio < ratio) {
			this.gameSize.set_x(Width);
			this.gameSize.set_y(Math.floor(this.gameSize.x / ratio));
		} else {
			this.gameSize.set_y(Height);
			this.gameSize.set_x(Math.floor(this.gameSize.y * ratio));
		}
	}
	,__class__: flixel.system.scaleModes.RatioScaleMode
});
flixel.system.frontEnds = {};
flixel.system.frontEnds.BitmapFrontEnd = function() {
	this.clearCache();
};
$hxClasses["flixel.system.frontEnds.BitmapFrontEnd"] = flixel.system.frontEnds.BitmapFrontEnd;
flixel.system.frontEnds.BitmapFrontEnd.__name__ = ["flixel","system","frontEnds","BitmapFrontEnd"];
flixel.system.frontEnds.BitmapFrontEnd.prototype = {
	_cache: null
	,dumpCache: function() {
	}
	,checkCache: function(Key) {
		return this._cache.exists(Key) && this._cache.get(Key) != null;
	}
	,create: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		var key = Key;
		if(key == null) {
			key = Width + "x" + Height + ":" + Color;
			if(Unique && (this._cache.exists(key) && this._cache.get(key) != null)) key = this.getUniqueKey(key);
		}
		if(!(this._cache.exists(key) && this._cache.get(key) != null)) {
			var value = new flixel.util.loaders.CachedGraphics(key,new flash.display.BitmapData(Width,Height,true,Color));
			this._cache.set(key,value);
		}
		return this._cache.get(key);
	}
	,add: function(Graphic,Unique,Key) {
		if(Unique == null) Unique = false;
		return this.addWithSpaces(Graphic,0,0,1,1,Unique,Key);
	}
	,addWithSpaces: function(Graphic,FrameWidth,FrameHeight,SpacingX,SpacingY,Unique,Key) {
		if(Unique == null) Unique = false;
		if(SpacingY == null) SpacingY = 1;
		if(SpacingX == null) SpacingX = 1;
		if(Graphic == null) return null;
		var region = null;
		var graphic = null;
		var isClass = false;
		var isBitmap = false;
		var isRegion = false;
		var isGraphics = false;
		if(js.Boot.__instanceof(Graphic,flixel.util.loaders.CachedGraphics)) {
			isGraphics = true;
			graphic = js.Boot.__cast(Graphic , flixel.util.loaders.CachedGraphics);
			if(!Unique && (FrameWidth <= 0 && FrameHeight <= 0)) return graphic;
		} else if(js.Boot.__instanceof(Graphic,Class)) isClass = true; else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) isBitmap = true; else if(js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion)) {
			isRegion = true;
			region = js.Boot.__cast(Graphic , flixel.util.loaders.TextureRegion);
		} else if(typeof(Graphic) == "string") {
		} else return null;
		var additionalKey = "";
		if(FrameWidth > 0 || FrameHeight > 0) additionalKey = "FrameSize:" + FrameWidth + "_" + FrameHeight + "_Spacing:" + SpacingX + "_" + SpacingY;
		var key = Key;
		if(key == null) {
			if(isClass) key = Type.getClassName(js.Boot.__cast(Graphic , Class)); else if(isBitmap) {
				if(!Unique) {
					key = this.getCacheKeyFor(Graphic);
					if(key == null) key = this.getUniqueKey();
				}
			} else if(isRegion) key = region.data.key; else if(isGraphics) key = graphic.key; else key = Graphic;
			key += additionalKey;
			if(Unique) key = this.getUniqueKey(key == null?"pixels":key);
		}
		if(!(this._cache.exists(key) && this._cache.get(key) != null)) {
			var bd = null;
			if(isClass) bd = Type.createInstance(js.Boot.__cast(Graphic , Class),[0,0]); else if(isBitmap) bd = Graphic; else if(isRegion) bd = region.data.bitmap; else if(isGraphics) bd = graphic.bitmap; else bd = flixel.system.FlxAssets.getBitmapData(Graphic);
			if(FrameWidth > 0 || FrameHeight > 0) {
				var numHorizontalFrames;
				if(FrameWidth == 0) numHorizontalFrames = 1; else numHorizontalFrames = bd.width / FrameWidth | 0;
				var numVerticalFrames;
				if(FrameHeight == 0) numVerticalFrames = 1; else numVerticalFrames = bd.height / FrameHeight | 0;
				if(FrameWidth == 0) FrameWidth = bd.width; else FrameWidth = FrameWidth;
				if(FrameHeight == 0) FrameHeight = bd.height; else FrameHeight = FrameHeight;
				var tempBitmap = new flash.display.BitmapData(bd.width + numHorizontalFrames * SpacingX,bd.height + numVerticalFrames * SpacingY,true,0);
				tempBitmap.lock();
				var tempRect = new flash.geom.Rectangle(0,0,FrameWidth,FrameHeight);
				var tempPoint = new flash.geom.Point();
				var _g = 0;
				while(_g < numHorizontalFrames) {
					var i = _g++;
					tempPoint.x = i * (FrameWidth + SpacingX);
					tempRect.x = i * FrameWidth;
					var _g2 = 0;
					var _g1 = numVerticalFrames;
					while(_g2 < _g1) {
						var j = _g2++;
						tempPoint.y = j * (FrameHeight + SpacingY);
						tempRect.y = j * FrameHeight;
						tempBitmap.copyPixels(bd,tempRect,tempPoint);
					}
				}
				tempBitmap.unlock();
				bd = tempBitmap;
			}
			if(Unique) bd = bd.clone();
			var co = new flixel.util.loaders.CachedGraphics(key,bd);
			if(isClass && !Unique) co.assetsClass = Graphic; else if(!isClass && !isBitmap && !isRegion && !Unique) co.assetsKey = Graphic;
			this._cache.set(key,co);
		}
		return this._cache.get(key);
	}
	,get: function(key) {
		return this._cache.get(key);
	}
	,getCacheKeyFor: function(bmd) {
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var data = this._cache.get(key).bitmap;
			if(data == bmd) return key;
		}
		return null;
	}
	,getUniqueKey: function(baseKey) {
		if(baseKey == null) baseKey = "pixels";
		if(this._cache.exists(baseKey) && this._cache.get(baseKey) != null) {
			var inc = 0;
			var ukey;
			do ukey = baseKey + inc++; while(this._cache.exists(ukey) && this._cache.get(ukey) != null);
			baseKey = ukey;
		}
		return baseKey;
	}
	,remove: function(key) {
		if(key != null && this._cache.exists(key)) {
			var obj = this._cache.get(key);
			openfl.Assets.cache.bitmapData.remove(key);
			this._cache.remove(key);
			obj.destroy();
		}
	}
	,clearCache: function() {
		var obj;
		if(this._cache == null) this._cache = new haxe.ds.StringMap();
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			obj = this._cache.get(key);
			if(obj != null && !obj.persist) {
				openfl.Assets.cache.bitmapData.remove(key);
				this._cache.remove(key);
				obj.destroy();
				obj = null;
			}
		}
	}
	,clearUnused: function() {
		var obj;
		if(this._cache != null) {
			var $it0 = this._cache.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				obj = this._cache.get(key);
				if(obj != null && obj.useCount <= 0 && !obj.persist && obj.destroyOnNoUse) this.remove(obj.key);
			}
		}
	}
	,__class__: flixel.system.frontEnds.BitmapFrontEnd
};
flixel.system.frontEnds.BitmapLogFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.BitmapLogFrontEnd"] = flixel.system.frontEnds.BitmapLogFrontEnd;
flixel.system.frontEnds.BitmapLogFrontEnd.__name__ = ["flixel","system","frontEnds","BitmapLogFrontEnd"];
flixel.system.frontEnds.BitmapLogFrontEnd.prototype = {
	add: function(Data,Name) {
		if(Name == null) Name = "";
	}
	,clear: function() {
	}
	,clearAt: function(Index) {
		if(Index == null) Index = -1;
	}
	,viewCache: function() {
	}
	,__class__: flixel.system.frontEnds.BitmapLogFrontEnd
};
flixel.system.frontEnds.CameraFrontEnd = function() {
	this.useBufferLocking = false;
	this._cameraRect = new flash.geom.Rectangle();
	this.list = new Array();
	flixel.FlxCamera.defaultCameras = this.list;
};
$hxClasses["flixel.system.frontEnds.CameraFrontEnd"] = flixel.system.frontEnds.CameraFrontEnd;
flixel.system.frontEnds.CameraFrontEnd.__name__ = ["flixel","system","frontEnds","CameraFrontEnd"];
flixel.system.frontEnds.CameraFrontEnd.prototype = {
	add_flixel_FlxCamera: function(NewCamera) {
		flixel.FlxG.cameras.list.push(NewCamera);
		NewCamera.ID = flixel.FlxG.cameras.list.length - 1;
		return NewCamera;
	}
	,list: null
	,useBufferLocking: null
	,_cameraRect: null
	,remove: function(Camera,Destroy) {
		if(Destroy == null) Destroy = true;
		var index = HxOverrides.indexOf(this.list,Camera,0);
		if(Camera != null && index != -1) this.list.splice(index,1); else null;
		if(Destroy) Camera.destroy();
	}
	,reset: function(NewCamera) {
		this.list.splice(0,this.list.length);
		if(NewCamera == null) NewCamera = new flixel.FlxCamera(0,0,flixel.FlxG.width,flixel.FlxG.height);
		flixel.FlxG.cameras.list.push(NewCamera);
		NewCamera.ID = flixel.FlxG.cameras.list.length - 1;
		flixel.FlxG.camera = NewCamera;
		NewCamera.ID = 0;
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.flash(Color,Duration,OnComplete,Force);
		}
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.fade(Color,Duration,FadeIn,OnComplete,Force);
		}
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.shake(Intensity,Duration,OnComplete,Force,Direction);
		}
	}
	,lock: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.checkResize();
			if(this.useBufferLocking) camera.buffer.lock();
			camera.fill(camera.bgColor,camera.useBgAlphaBlending);
			camera.screen.dirty = true;
		}
	}
	,unlock: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.drawFX();
			if(this.useBufferLocking) camera.buffer.unlock();
			camera.screen.dirty = true;
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera != null && camera.exists) {
				if(camera.active) camera.update();
				camera.flashSprite.set_x(camera.x + camera._flashOffset.x);
				camera.flashSprite.set_y(camera.y + camera._flashOffset.y);
				camera.flashSprite.set_visible(camera.visible);
			}
		}
	}
	,get_bgColor: function() {
		if(flixel.FlxG.camera == null) return -16777216; else return flixel.FlxG.camera.bgColor;
	}
	,set_bgColor: function(Color) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.bgColor = Color;
		}
		return Color;
	}
	,__class__: flixel.system.frontEnds.CameraFrontEnd
	,__properties__: {set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"}
};
flixel.system.frontEnds.ConsoleFrontEnd = function() {
	this.autoPause = true;
};
$hxClasses["flixel.system.frontEnds.ConsoleFrontEnd"] = flixel.system.frontEnds.ConsoleFrontEnd;
flixel.system.frontEnds.ConsoleFrontEnd.__name__ = ["flixel","system","frontEnds","ConsoleFrontEnd"];
flixel.system.frontEnds.ConsoleFrontEnd.prototype = {
	autoPause: null
	,registerFunction: function(FunctionAlias,Function) {
	}
	,registerObject: function(ObjectAlias,AnyObject) {
	}
	,addCommand: function(Aliases,ProcessFunction,Help,ParamHelp,NumParams,ParamCutoff) {
		if(ParamCutoff == null) ParamCutoff = -1;
		if(NumParams == null) NumParams = 0;
	}
	,__class__: flixel.system.frontEnds.ConsoleFrontEnd
};
flixel.system.frontEnds.DebuggerFrontEnd = function() {
	this.visible = false;
	this.drawDebug = false;
	this.precision = 3;
	this.toggleKeys = ["GRAVEACCENT","BACKSLASH"];
	this.drawDebugChanged = new flixel.util._FlxSignal.FlxSignal0();
};
$hxClasses["flixel.system.frontEnds.DebuggerFrontEnd"] = flixel.system.frontEnds.DebuggerFrontEnd;
flixel.system.frontEnds.DebuggerFrontEnd.__name__ = ["flixel","system","frontEnds","DebuggerFrontEnd"];
flixel.system.frontEnds.DebuggerFrontEnd.prototype = {
	precision: null
	,toggleKeys: null
	,drawDebug: null
	,drawDebugChanged: null
	,visible: null
	,setLayout: function(Layout) {
	}
	,resetLayout: function() {
	}
	,addButton: function(Alignment,Icon,UpHandler,ToggleMode,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = true;
		if(ToggleMode == null) ToggleMode = false;
		return null;
	}
	,track: function(Object,WindowTitle) {
		return null;
	}
	,addTrackerProfile: function(Profile) {
	}
	,removeButton: function(Button,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = true;
	}
	,set_drawDebug: function(Value) {
		return this.drawDebug = Value;
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,__class__: flixel.system.frontEnds.DebuggerFrontEnd
	,__properties__: {set_visible:"set_visible",set_drawDebug:"set_drawDebug"}
};
flixel.util._FlxSignal = {};
flixel.util._FlxSignal.FlxTypedSignal_Impl_ = function() { };
$hxClasses["flixel.util._FlxSignal.FlxTypedSignal_Impl_"] = flixel.util._FlxSignal.FlxTypedSignal_Impl_;
flixel.util._FlxSignal.FlxTypedSignal_Impl_.__name__ = ["flixel","util","_FlxSignal","FlxTypedSignal_Impl_"];
flixel.util._FlxSignal.FlxTypedSignal_Impl_.__properties__ = {get_dispatch:"get_dispatch"}
flixel.util._FlxSignal.FlxTypedSignal_Impl_._new = null;
flixel.util._FlxSignal.FlxTypedSignal_Impl_.add = function(this1,listener) {
	this1.add(listener);
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.addOnce = function(this1,listener) {
	this1.addOnce(listener);
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.remove = function(this1,listener) {
	this1.remove(listener);
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.has = function(this1,listener) {
	return this1.has(listener);
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.removeAll = function(this1) {
	this1.removeAll();
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.get_dispatch = function(this1) {
	return this1.dispatch;
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.toSignal0 = function(signal) {
	return new flixel.util._FlxSignal.FlxSignal0();
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.toSignal1 = function(signal) {
	return new flixel.util._FlxSignal.FlxSignal1();
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.toSignal2 = function(signal) {
	return new flixel.util._FlxSignal.FlxSignal2();
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.toSignal3 = function(signal) {
	return new flixel.util._FlxSignal.FlxSignal3();
};
flixel.util._FlxSignal.FlxTypedSignal_Impl_.toSignal4 = function(signal) {
	return new flixel.util._FlxSignal.FlxSignal4();
};
flixel.system.frontEnds.HTML5FrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.HTML5FrontEnd"] = flixel.system.frontEnds.HTML5FrontEnd;
flixel.system.frontEnds.HTML5FrontEnd.__name__ = ["flixel","system","frontEnds","HTML5FrontEnd"];
flixel.system.frontEnds.HTML5FrontEnd.prototype = {
	browserPosition: null
	,get_browser: function() {
		if(window.navigator.userAgent.indexOf(" OPR/") > -1) return "Opera"; else if(window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) return "Chrome"; else if(window.navigator.appName == "Netscape") return "Firefox"; else if(!(!document.documentMode)) return "Internet Explorer"; else if(Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0) return "Safari";
		return "Unknown";
	}
	,get_browserPosition: function() {
		if(this.browserPosition == null) this.browserPosition = flixel.util.FlxPoint.get(0,0);
		this.browserPosition.set(window.screenX,window.screenY);
		return this.browserPosition;
	}
	,get_browserWidth: function() {
		return window.innerWidth;
	}
	,get_browserHeight: function() {
		return window.innerHeight;
	}
	,__class__: flixel.system.frontEnds.HTML5FrontEnd
	,__properties__: {get_browserPosition:"get_browserPosition",get_browserHeight:"get_browserHeight",get_browserWidth:"get_browserWidth",get_browser:"get_browser"}
};
flixel.system.frontEnds.InputFrontEnd = function() {
	this.list = new Array();
};
$hxClasses["flixel.system.frontEnds.InputFrontEnd"] = flixel.system.frontEnds.InputFrontEnd;
flixel.system.frontEnds.InputFrontEnd.__name__ = ["flixel","system","frontEnds","InputFrontEnd"];
flixel.system.frontEnds.InputFrontEnd.prototype = {
	replace_flixel_input_mouse_FlxMouse: function(Old,New) {
		var i = 0;
		var success = false;
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(input == Old) {
				this.list[i] = New;
				success = true;
				break;
			}
			i++;
		}
		if(success) return New;
		return null;
	}
	,add_flixel_input_gamepad_FlxGamepadManager: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_touch_FlxTouchManager: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_mouse_FlxMouse: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,add_flixel_input_keyboard_FlxKeyboard: function(Input) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Input,input,null)) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,list: null
	,reset: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.reset();
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.update();
		}
	}
	,onFocus: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocus();
		}
	}
	,onFocusLost: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocusLost();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.destroy();
			input = null;
		}
	}
	,__class__: flixel.system.frontEnds.InputFrontEnd
};
flixel.system.frontEnds.LogFrontEnd = function() {
	this.redirectTraces = false;
	this._standardTraceFunction = haxe.Log.trace;
};
$hxClasses["flixel.system.frontEnds.LogFrontEnd"] = flixel.system.frontEnds.LogFrontEnd;
flixel.system.frontEnds.LogFrontEnd.__name__ = ["flixel","system","frontEnds","LogFrontEnd"];
flixel.system.frontEnds.LogFrontEnd.prototype = {
	redirectTraces: null
	,_standardTraceFunction: null
	,add: function(Data) {
	}
	,warn: function(Data) {
	}
	,error: function(Data) {
	}
	,notice: function(Data) {
	}
	,advanced: function(Data,Style,FireOnce) {
		if(FireOnce == null) FireOnce = false;
	}
	,clear: function() {
	}
	,set_redirectTraces: function(Redirect) {
		if(Redirect) haxe.Log.trace = $bind(this,this.processTraceData); else haxe.Log.trace = this._standardTraceFunction;
		return this.redirectTraces = Redirect;
	}
	,processTraceData: function(Data,Info) {
		var paramArray = [Data];
		if(Info.customParams != null) {
			var _g = 0;
			var _g1 = Info.customParams;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				paramArray.push(i);
			}
		}
		this.advanced(paramArray,flixel.system.debug.LogStyle.NORMAL);
	}
	,__class__: flixel.system.frontEnds.LogFrontEnd
	,__properties__: {set_redirectTraces:"set_redirectTraces"}
};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
flixel.system.frontEnds.PluginFrontEnd = function() {
	this.list = [];
	this.add_flixel_plugin_PathManager(flixel.util.FlxPath.manager = new flixel.plugin.PathManager());
	this.add_flixel_plugin_TimerManager(flixel.util.FlxTimer.manager = new flixel.plugin.TimerManager());
	this.add_flixel_plugin_TweenManager(flixel.tweens.FlxTween.manager = new flixel.plugin.TweenManager());
};
$hxClasses["flixel.system.frontEnds.PluginFrontEnd"] = flixel.system.frontEnds.PluginFrontEnd;
flixel.system.frontEnds.PluginFrontEnd.__name__ = ["flixel","system","frontEnds","PluginFrontEnd"];
flixel.system.frontEnds.PluginFrontEnd.prototype = {
	add_flixel_plugin_TweenManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,add_flixel_plugin_TimerManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,add_flixel_plugin_PathManager: function(Plugin) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(flixel.util.FlxStringUtil.sameClassName(Plugin,plugin,null)) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,list: null
	,get: function(ClassType) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(plugin,ClassType)) return plugin;
		}
		return null;
	}
	,remove: function(Plugin) {
		var i = this.list.length - 1;
		while(i >= 0) {
			if(this.list[i] == Plugin) {
				this.list.splice(i,1);
				return Plugin;
			}
			i--;
		}
		return Plugin;
	}
	,removeType: function(ClassType) {
		var results = false;
		var i = this.list.length - 1;
		while(i >= 0) {
			if(js.Boot.__instanceof(this.list[i],ClassType)) {
				this.list.splice(i,1);
				results = true;
			}
			i--;
		}
		return results;
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.active) plugin.update();
		}
	}
	,draw: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.visible) plugin.draw();
		}
	}
	,onStateSwitch: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onStateSwitch();
		}
	}
	,onResize: function(Width,Height) {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onResize(Width,Height);
		}
	}
	,__class__: flixel.system.frontEnds.PluginFrontEnd
};
flixel.util.FlxPath = function(Object,Nodes,Speed,Mode,AutoRotate) {
	if(AutoRotate == null) AutoRotate = false;
	if(Mode == null) Mode = 0;
	if(Speed == null) Speed = 100;
	this._inManager = false;
	this._autoRotate = false;
	this._inc = 1;
	this._nodeIndex = 0;
	this.finished = false;
	this.active = true;
	this.autoCenter = true;
	this.angle = 0;
	this.speed = 0;
	if(Object != null) this.start(Object,Nodes,Speed,Mode,AutoRotate);
};
$hxClasses["flixel.util.FlxPath"] = flixel.util.FlxPath;
flixel.util.FlxPath.__name__ = ["flixel","util","FlxPath"];
flixel.util.FlxPath.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.FlxPath.manager = null;
flixel.util.FlxPath.prototype = {
	nodes: null
	,object: null
	,speed: null
	,angle: null
	,autoCenter: null
	,active: null
	,onComplete: null
	,finished: null
	,_nodeIndex: null
	,_mode: null
	,_inc: null
	,_autoRotate: null
	,_inManager: null
	,reset: function() {
		this.autoCenter = true;
		return this;
	}
	,start: function(Object,Nodes,Speed,Mode,AutoRotate) {
		if(AutoRotate == null) AutoRotate = false;
		if(Mode == null) Mode = 0;
		if(Speed == null) Speed = 100;
		this.object = Object;
		this.nodes = Nodes;
		this.speed = Math.abs(Speed);
		this._mode = Mode;
		this._autoRotate = AutoRotate;
		this.restart();
		return this;
	}
	,restart: function() {
		if(flixel.util.FlxPath.manager != null && !this._inManager) {
			flixel.util.FlxPath.manager.add(this);
			this._inManager = true;
		}
		this.finished = false;
		this.active = true;
		if(this.nodes.length <= 0) this.active = false;
		if(this._mode == 1 || this._mode == 256) {
			this._nodeIndex = this.nodes.length - 1;
			this._inc = -1;
		} else {
			this._nodeIndex = 0;
			this._inc = 1;
		}
		this.object.set_immovable(true);
		return this;
	}
	,setNode: function(NodeIndex) {
		if(NodeIndex < 0) NodeIndex = 0; else if(NodeIndex > this.nodes.length - 1) NodeIndex = this.nodes.length - 1;
		this._nodeIndex = NodeIndex;
		this.advancePath();
	}
	,update: function() {
		flixel.util.FlxPath._point.set_x(this.object.x);
		flixel.util.FlxPath._point.set_y(this.object.y);
		if(this.autoCenter) {
			var _g = flixel.util.FlxPath._point;
			_g.set_x(_g.x + this.object.get_width() * 0.5);
			var _g1 = flixel.util.FlxPath._point;
			_g1.set_y(_g1.y + this.object.get_height() * 0.5);
		}
		var node = this.nodes[this._nodeIndex];
		var deltaX = node.x - flixel.util.FlxPath._point.x;
		var deltaY = node.y - flixel.util.FlxPath._point.y;
		var horizontalOnly = (this._mode & 65536) > 0;
		var verticalOnly = (this._mode & 1048576) > 0;
		if(horizontalOnly) {
			if((deltaX > 0?deltaX:-deltaX) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		} else if(verticalOnly) {
			if((deltaY > 0?deltaY:-deltaY) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		} else if(Math.sqrt(deltaX * deltaX + deltaY * deltaY) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		if(this.speed != 0) {
			flixel.util.FlxPath._point.set_x(this.object.x);
			flixel.util.FlxPath._point.set_y(this.object.y);
			if(this.autoCenter) {
				var _g2 = flixel.util.FlxPath._point;
				_g2.set_x(_g2.x + this.object.get_width() * 0.5);
				var _g3 = flixel.util.FlxPath._point;
				_g3.set_y(_g3.y + this.object.get_height() * 0.5);
			}
			if(horizontalOnly || flixel.util.FlxPath._point.y == node.y) {
				this.object.velocity.set_x(flixel.util.FlxPath._point.x < node.x?this.speed:-this.speed);
				if(this.object.velocity.x < 0) this.angle = -90; else this.angle = 90;
				if(!horizontalOnly) this.object.velocity.set_y(0);
			} else if(verticalOnly || flixel.util.FlxPath._point.x == node.x) {
				this.object.velocity.set_y(flixel.util.FlxPath._point.y < node.y?this.speed:-this.speed);
				if(this.object.velocity.y < 0) this.angle = 0; else this.angle = 180;
				if(!verticalOnly) this.object.velocity.set_x(0);
			} else {
				this.object.velocity.set_x(flixel.util.FlxPath._point.x < node.x?this.speed:-this.speed);
				this.object.velocity.set_y(flixel.util.FlxPath._point.y < node.y?this.speed:-this.speed);
				this.angle = flixel.util.FlxAngle.getAngle(flixel.util.FlxPath._point,node);
				flixel.util.FlxAngle.rotatePoint(0,this.speed,0,0,this.angle,this.object.velocity);
			}
			if(this._autoRotate) {
				this.object.angularVelocity = 0;
				this.object.angularAcceleration = 0;
				this.object.set_angle(this.angle);
			}
			if(this.finished) this.cancel();
		}
	}
	,advancePath: function(Snap) {
		if(Snap == null) Snap = true;
		if(Snap) {
			var oldNode = this.nodes[this._nodeIndex];
			if(oldNode != null) {
				if((this._mode & 1048576) == 0) {
					this.object.set_x(oldNode.x);
					if(this.autoCenter) {
						var _g = this.object;
						_g.set_x(_g.x - this.object.get_width() * 0.5);
					}
				}
				if((this._mode & 65536) == 0) {
					this.object.set_y(oldNode.y);
					if(this.autoCenter) {
						var _g1 = this.object;
						_g1.set_y(_g1.y - this.object.get_height() * 0.5);
					}
				}
			}
		}
		var callComplete = false;
		this._nodeIndex += this._inc;
		if((this._mode & 1) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = 0;
				this.finished = callComplete = true;
			}
		} else if((this._mode & 16) > 0) {
			if(this._nodeIndex >= this.nodes.length) {
				callComplete = true;
				this._nodeIndex = 0;
			}
		} else if((this._mode & 256) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = this.nodes.length - 1;
				callComplete = true;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
			}
		} else if((this._mode & 4096) > 0) {
			if(this._inc > 0) {
				if(this._nodeIndex >= this.nodes.length) {
					this._nodeIndex = this.nodes.length - 2;
					callComplete = true;
					if(this._nodeIndex < 0) this._nodeIndex = 0;
					this._inc = -this._inc;
				}
			} else if(this._nodeIndex < 0) {
				this._nodeIndex = 1;
				callComplete = true;
				if(this._nodeIndex >= this.nodes.length) this._nodeIndex = this.nodes.length - 1;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
				this._inc = -this._inc;
			}
		} else if(this._nodeIndex >= this.nodes.length) {
			this._nodeIndex = this.nodes.length - 1;
			this.finished = callComplete = true;
		}
		if(callComplete && this.onComplete != null) this.onComplete(this);
		return this.nodes[this._nodeIndex];
	}
	,cancel: function() {
		this.finished = true;
		if(this.object != null) this.object.velocity.set(0,0);
		if(flixel.util.FlxPath.manager != null && this._inManager) {
			flixel.util.FlxPath.manager.remove(this);
			this._inManager = false;
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.nodes;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel.util.FlxDestroyUtil.put(point);
		}
		this.nodes = null;
		this.object = null;
		this.onComplete = null;
	}
	,add: function(X,Y) {
		this.nodes.push(flixel.util.FlxPoint.get(X,Y));
		return this;
	}
	,addAt: function(X,Y,Index) {
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		var x = flixel.util.FlxPoint.get(X,Y);
		this.nodes.splice(Index,0,x);
		return this;
	}
	,addPoint: function(Node,AsReference) {
		if(AsReference == null) AsReference = false;
		if(AsReference) this.nodes.push(Node); else this.nodes.push(flixel.util.FlxPoint.get(Node.x,Node.y));
		return this;
	}
	,addPointAt: function(Node,Index,AsReference) {
		if(AsReference == null) AsReference = false;
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		if(AsReference) this.nodes.splice(Index,0,Node); else {
			var x = flixel.util.FlxPoint.get(Node.x,Node.y);
			this.nodes.splice(Index,0,x);
		}
		return this;
	}
	,remove: function(Node) {
		var index = HxOverrides.indexOf(this.nodes,Node,0);
		if(index >= 0) return this.nodes.splice(index,1)[0]; else return null;
	}
	,removeAt: function(Index) {
		if(this.nodes.length <= 0) return null;
		if(Index >= this.nodes.length) Index = this.nodes.length - 1;
		return this.nodes.splice(Index,1)[0];
	}
	,head: function() {
		if(this.nodes.length > 0) return this.nodes[0];
		return null;
	}
	,tail: function() {
		if(this.nodes.length > 0) return this.nodes[this.nodes.length - 1];
		return null;
	}
	,__class__: flixel.util.FlxPath
};
flixel.plugin = {};
flixel.plugin.FlxPlugin = function() {
	flixel.FlxBasic.call(this);
};
$hxClasses["flixel.plugin.FlxPlugin"] = flixel.plugin.FlxPlugin;
flixel.plugin.FlxPlugin.__name__ = ["flixel","plugin","FlxPlugin"];
flixel.plugin.FlxPlugin.__super__ = flixel.FlxBasic;
flixel.plugin.FlxPlugin.prototype = $extend(flixel.FlxBasic.prototype,{
	onStateSwitch: function() {
	}
	,onResize: function(Width,Height) {
	}
	,__class__: flixel.plugin.FlxPlugin
});
flixel.plugin.PathManager = function() {
	this._paths = [];
	flixel.plugin.FlxPlugin.call(this);
};
$hxClasses["flixel.plugin.PathManager"] = flixel.plugin.PathManager;
flixel.plugin.PathManager.__name__ = ["flixel","plugin","PathManager"];
flixel.plugin.PathManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.PathManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	_paths: null
	,destroy: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxPath(this._paths);
		this._paths = null;
		flixel.plugin.FlxPlugin.prototype.destroy.call(this);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._paths;
		while(_g < _g1.length) {
			var path = _g1[_g];
			++_g;
			if(path.active) path.update();
		}
	}
	,add: function(Path) {
		this._paths.push(Path);
	}
	,remove: function(Path,ReturnInPool) {
		if(ReturnInPool == null) ReturnInPool = true;
		flixel.util.FlxArrayUtil.fastSplice_flixel_util_FlxPath(this._paths,Path);
	}
	,clear: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxPath(this._paths);
	}
	,onStateSwitch: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxPath(this._paths);
	}
	,__class__: flixel.plugin.PathManager
});
flixel.util.FlxTimer = function(Time,Callback,Loops) {
	if(Loops == null) Loops = 1;
	this._inManager = false;
	this._loopsCounter = 0;
	this._timeCounter = 0;
	this.finished = false;
	this.active = true;
	this.loops = 0;
	this.time = 0;
	if(Time != null) this.start(Time,Callback,Loops);
};
$hxClasses["flixel.util.FlxTimer"] = flixel.util.FlxTimer;
flixel.util.FlxTimer.__name__ = ["flixel","util","FlxTimer"];
flixel.util.FlxTimer.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.FlxTimer.manager = null;
flixel.util.FlxTimer.prototype = {
	time: null
	,loops: null
	,active: null
	,finished: null
	,complete: null
	,_timeCounter: null
	,_loopsCounter: null
	,_inManager: null
	,destroy: function() {
		this.complete = null;
	}
	,start: function(Time,Callback,Loops) {
		if(Loops == null) Loops = 1;
		if(Time == null) Time = 1;
		if(flixel.util.FlxTimer.manager != null && !this._inManager) {
			flixel.util.FlxTimer.manager.add(this);
			this._inManager = true;
		}
		this.active = true;
		this.finished = false;
		this.time = Math.abs(Time);
		if(Loops < 0) Loops *= -1;
		this.loops = Loops;
		this.complete = Callback;
		this._timeCounter = 0;
		this._loopsCounter = 0;
		return this;
	}
	,reset: function(NewTime) {
		if(NewTime == null) NewTime = -1;
		if(NewTime < 0) NewTime = this.time;
		this.start(NewTime,this.complete,this.loops);
		return this;
	}
	,cancel: function() {
		this.finished = true;
		if(flixel.util.FlxTimer.manager != null && this._inManager) {
			flixel.util.FlxTimer.manager.remove(this);
			this._inManager = false;
		}
	}
	,update: function() {
		this._timeCounter += flixel.FlxG.elapsed;
		while(this._timeCounter >= this.time && this.active && !this.finished) {
			this._timeCounter -= this.time;
			this._loopsCounter++;
			if(this.complete != null) this.complete(this);
			if(this.loops > 0 && this._loopsCounter >= this.loops) this.cancel();
		}
	}
	,get_timeLeft: function() {
		return this.time - this._timeCounter;
	}
	,get_elapsedTime: function() {
		return this._timeCounter;
	}
	,get_loopsLeft: function() {
		return this.loops - this._loopsCounter;
	}
	,get_elapsedLoops: function() {
		return this._loopsCounter;
	}
	,get_progress: function() {
		if(this.time > 0) return this._timeCounter / this.time; else return 0;
	}
	,__class__: flixel.util.FlxTimer
	,__properties__: {get_progress:"get_progress",get_elapsedLoops:"get_elapsedLoops",get_loopsLeft:"get_loopsLeft",get_elapsedTime:"get_elapsedTime",get_timeLeft:"get_timeLeft"}
};
flixel.plugin.TimerManager = function() {
	flixel.plugin.FlxPlugin.call(this);
	this._timers = [];
	this.set_visible(false);
};
$hxClasses["flixel.plugin.TimerManager"] = flixel.plugin.TimerManager;
flixel.plugin.TimerManager.__name__ = ["flixel","plugin","TimerManager"];
flixel.plugin.TimerManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.TimerManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	_timers: null
	,destroy: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxTimer(this._timers);
		this._timers = null;
		flixel.plugin.FlxPlugin.prototype.destroy.call(this);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._timers;
		while(_g < _g1.length) {
			var timer = _g1[_g];
			++_g;
			if(timer.active && !timer.finished && timer.time > 0) timer.update();
		}
	}
	,add: function(Timer) {
		this._timers.push(Timer);
	}
	,remove: function(Timer) {
		flixel.util.FlxArrayUtil.fastSplice_flixel_util_FlxTimer(this._timers,Timer);
	}
	,clear: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxTimer(this._timers);
	}
	,onStateSwitch: function() {
		flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxTimer(this._timers);
	}
	,__class__: flixel.plugin.TimerManager
});
flixel.tweens = {};
flixel.tweens.FlxTween = function(Options) {
	this._delayToUse = 0;
	this._secondsSinceStart = 0;
	this.loopDelay = 0;
	this.startDelay = 0;
	this.executions = 0;
	this.duration = 0;
	this.active = true;
	Options = this.resolveTweenOptions(Options);
	this.set_type(Options.type);
	this.complete = Options.complete;
	this.ease = Options.ease;
	this.setDelays(Options.startDelay,Options.loopDelay);
};
$hxClasses["flixel.tweens.FlxTween"] = flixel.tweens.FlxTween;
flixel.tweens.FlxTween.__name__ = ["flixel","tweens","FlxTween"];
flixel.tweens.FlxTween.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.tweens.FlxTween.manager = null;
flixel.tweens.FlxTween.tween = function(Object,Values,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel.tweens.misc.VarTween(Options);
	tween.tween(Object,Values,Duration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_misc_VarTween(tween);
};
flixel.tweens.FlxTween.num = function(FromValue,ToValue,Duration,Options,TweenFunction) {
	if(Duration == null) Duration = 1;
	var tween = new flixel.tweens.misc.NumTween(Options);
	tween.tween(FromValue,ToValue,Duration,TweenFunction);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_misc_NumTween(tween);
};
flixel.tweens.FlxTween.angle = function(Sprite,FromAngle,ToAngle,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel.tweens.misc.AngleTween(Options);
	tween.tween(FromAngle,ToAngle,Duration,Sprite);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_misc_AngleTween(tween);
};
flixel.tweens.FlxTween.color = function(Sprite,Duration,FromColor,ToColor,FromAlpha,ToAlpha,Options) {
	if(ToAlpha == null) ToAlpha = 1;
	if(FromAlpha == null) FromAlpha = 1;
	if(Duration == null) Duration = 1;
	var tween = new flixel.tweens.misc.ColorTween(Options);
	tween.tween(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Sprite);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_misc_ColorTween(tween);
};
flixel.tweens.FlxTween.linearMotion = function(Object,FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel.tweens.motion.LinearMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_LinearMotion(tween);
};
flixel.tweens.FlxTween.quadMotion = function(Object,FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel.tweens.motion.QuadMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_QuadMotion(tween);
};
flixel.tweens.FlxTween.cubicMotion = function(Object,FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration,Options) {
	if(Duration == null) Duration = 1;
	var tween = new flixel.tweens.motion.CubicMotion(Options);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_CubicMotion(tween);
};
flixel.tweens.FlxTween.circularMotion = function(Object,CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel.tweens.motion.CircularMotion(Options);
	tween.setObject(Object);
	tween.setMotion(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_CircularMotion(tween);
};
flixel.tweens.FlxTween.linearPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel.tweens.motion.LinearPath(Options);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_LinearPath(tween);
};
flixel.tweens.FlxTween.quadPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(DurationOrSpeed == null) DurationOrSpeed = 1;
	var tween = new flixel.tweens.motion.QuadPath(Options);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration);
	return flixel.tweens.FlxTween.manager.add_flixel_tweens_motion_QuadPath(tween);
};
flixel.tweens.FlxTween.prototype = {
	active: null
	,duration: null
	,ease: null
	,complete: null
	,type: null
	,finished: null
	,scale: null
	,backward: null
	,executions: null
	,startDelay: null
	,loopDelay: null
	,_secondsSinceStart: null
	,_delayToUse: null
	,resolveTweenOptions: function(Options) {
		if(Options == null) Options = { type : 8};
		if(Options.type == null) Options.type = 8;
		return Options;
	}
	,destroy: function() {
		this.complete = null;
		this.ease = null;
	}
	,update: function() {
		this._secondsSinceStart += flixel.FlxG.elapsed;
		var delay;
		if(this.executions > 0) delay = this.loopDelay; else delay = this.startDelay;
		this.scale = Math.max(this._secondsSinceStart - delay,0) / this.duration;
		if(this.ease != null) this.scale = this.ease(this.scale);
		if(this.backward) this.scale = 1 - this.scale;
		if(this._secondsSinceStart >= this.duration + delay) {
			if(this.backward) this.scale = 0; else this.scale = 1;
			this.finished = true;
		}
	}
	,start: function() {
		this._secondsSinceStart = 0;
		if(this.executions > 0) this._delayToUse = this.loopDelay; else this._delayToUse = this.startDelay;
		if(this.duration == 0) {
			this.active = false;
			return this;
		}
		this.active = true;
		this.finished = false;
		return this;
	}
	,cancel: function() {
		this.active = false;
		this.finished = true;
		flixel.tweens.FlxTween.manager.remove(this);
	}
	,finish: function() {
		this.executions++;
		if(this.complete != null) this.complete(this);
		var _g = this.type & -17;
		switch(_g) {
		case 1:
			this._secondsSinceStart = this.duration + this.startDelay;
			this.active = false;
			this.finished = true;
			break;
		case 8:
			this.active = false;
			this.finished = true;
			this._secondsSinceStart = this.duration + this.startDelay;
			flixel.tweens.FlxTween.manager.remove(this);
			break;
		case 2:
			this._secondsSinceStart = (this._secondsSinceStart - this._delayToUse) % this.duration + this._delayToUse;
			this.scale = Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
			if(this.ease != null && this.scale > 0 && this.scale < 1) this.scale = this.ease(this.scale);
			this.start();
			break;
		case 4:
			this._secondsSinceStart = (this._secondsSinceStart - this._delayToUse) % this.duration + this._delayToUse;
			this.scale = Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
			if(this.ease != null && this.scale > 0 && this.scale < 1) this.scale = this.ease(this.scale);
			this.backward = !this.backward;
			if(this.backward) this.scale = 1 - this.scale;
			this.start();
			break;
		}
	}
	,setDelays: function(StartDelay,LoopDelay) {
		this.set_startDelay(StartDelay != null?StartDelay:0);
		this.set_loopDelay(LoopDelay != null?LoopDelay:0);
		return this;
	}
	,set_startDelay: function(value) {
		var dly = Math.abs(value);
		if(this.executions == 0) {
			this._secondsSinceStart = this.duration * (Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration) + Math.max(dly - this.startDelay,0);
			this._delayToUse = dly;
		}
		return this.startDelay = dly;
	}
	,set_loopDelay: function(value) {
		var dly = Math.abs(value);
		if(this.executions > 0) {
			this._secondsSinceStart = this.duration * (Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration) + Math.max(dly - this.loopDelay,0);
			this._delayToUse = dly;
		}
		return this.loopDelay = dly;
	}
	,get_percent: function() {
		return Math.max(this._secondsSinceStart - this._delayToUse,0) / this.duration;
	}
	,set_percent: function(value) {
		return this._secondsSinceStart = this.duration * value + this._delayToUse;
	}
	,set_type: function(value) {
		if(value == 0) value = 8; else if(value == 16) value = 17;
		this.backward = (value & 16) > 0;
		return this.type = value;
	}
	,__class__: flixel.tweens.FlxTween
	,__properties__: {set_loopDelay:"set_loopDelay",set_startDelay:"set_startDelay",set_percent:"set_percent",get_percent:"get_percent",set_type:"set_type"}
};
flixel.plugin.TweenManager = function() {
	this._tweens = [];
	flixel.plugin.FlxPlugin.call(this);
	this.set_visible(false);
};
$hxClasses["flixel.plugin.TweenManager"] = flixel.plugin.TweenManager;
flixel.plugin.TweenManager.__name__ = ["flixel","plugin","TweenManager"];
flixel.plugin.TweenManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.TweenManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	add_flixel_tweens_motion_QuadPath: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_LinearPath: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_CircularMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_CubicMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_QuadMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_motion_LinearMotion: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_ColorTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_AngleTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_NumTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,add_flixel_tweens_misc_VarTween: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		this._tweens.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,_tweens: null
	,update: function() {
		var finishedTweens = null;
		var _g = 0;
		var _g1 = this._tweens;
		while(_g < _g1.length) {
			var tween = _g1[_g];
			++_g;
			if(tween.active) {
				tween.update();
				if(tween.finished) {
					if(finishedTweens == null) finishedTweens = new Array();
					finishedTweens.push(tween);
				}
			}
		}
		if(finishedTweens != null) while(finishedTweens.length > 0) finishedTweens.shift().finish();
	}
	,remove: function(Tween) {
		if(Tween == null) return null;
		Tween.active = false;
		Tween.destroy();
		flixel.util.FlxArrayUtil.fastSplice_flixel_tweens_FlxTween(this._tweens,Tween);
		return Tween;
	}
	,clear: function() {
		while(this._tweens.length > 0) this.remove(this._tweens[0]);
	}
	,onStateSwitch: function() {
		this.clear();
	}
	,__class__: flixel.plugin.TweenManager
});
flixel.util.FlxSave = function() {
	this.destroy();
};
$hxClasses["flixel.util.FlxSave"] = flixel.util.FlxSave;
flixel.util.FlxSave.__name__ = ["flixel","util","FlxSave"];
flixel.util.FlxSave.prototype = {
	data: null
	,name: null
	,_sharedObject: null
	,_onComplete: null
	,_closeRequested: null
	,destroy: function() {
		this._sharedObject = null;
		this.name = null;
		this.data = null;
		this._onComplete = null;
		this._closeRequested = false;
	}
	,bind: function(Name) {
		this.destroy();
		this.name = Name;
		try {
			this._sharedObject = flash.net.SharedObject.getLocal(this.name);
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				this.destroy();
				return false;
			} else throw(e);
		}
		this.data = this._sharedObject.data;
		return true;
	}
	,close: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		this._closeRequested = true;
		return this.flush(MinFileSize,OnComplete);
	}
	,flush: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		if(!this.checkBinding()) return false;
		this._onComplete = OnComplete;
		var result;
		try {
			result = this._sharedObject.flush();
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				return this.onDone(flixel.util.FlxSave.ERROR);
			} else throw(e);
		}
		if(result == flash.net.SharedObjectFlushStatus.PENDING) {
		}
		return this.onDone(result == flash.net.SharedObjectFlushStatus.FLUSHED?flixel.util.FlxSave.SUCCESS:flixel.util.FlxSave.PENDING);
	}
	,erase: function() {
		if(!this.checkBinding()) return false;
		this._sharedObject.clear();
		return true;
	}
	,onDone: function(Result) {
		switch(Result) {
		case flixel.util.FlxSave.PENDING:
			null;
			break;
		case flixel.util.FlxSave.ERROR:
			null;
			break;
		}
		if(this._onComplete != null) this._onComplete(Result == flixel.util.FlxSave.SUCCESS);
		if(this._closeRequested) this.destroy();
		return Result == flixel.util.FlxSave.SUCCESS;
	}
	,checkBinding: function() {
		if(this._sharedObject == null) return false;
		return true;
	}
	,__class__: flixel.util.FlxSave
};
flixel.system.frontEnds.SignalFrontEnd = function() {
	this.stateSwitched = new flixel.util._FlxSignal.FlxSignal0();
	this.gameResized = new flixel.util._FlxSignal.FlxSignal2();
	this.gameReset = new flixel.util._FlxSignal.FlxSignal0();
	this.gameStarted = new flixel.util._FlxSignal.FlxSignal0();
	this.preUpdate = new flixel.util._FlxSignal.FlxSignal0();
	this.postUpdate = new flixel.util._FlxSignal.FlxSignal0();
	this.preDraw = new flixel.util._FlxSignal.FlxSignal0();
	this.postDraw = new flixel.util._FlxSignal.FlxSignal0();
	this.focusGained = new flixel.util._FlxSignal.FlxSignal0();
	this.focusLost = new flixel.util._FlxSignal.FlxSignal0();
};
$hxClasses["flixel.system.frontEnds.SignalFrontEnd"] = flixel.system.frontEnds.SignalFrontEnd;
flixel.system.frontEnds.SignalFrontEnd.__name__ = ["flixel","system","frontEnds","SignalFrontEnd"];
flixel.system.frontEnds.SignalFrontEnd.prototype = {
	stateSwitched: null
	,gameResized: null
	,gameReset: null
	,gameStarted: null
	,preUpdate: null
	,postUpdate: null
	,preDraw: null
	,postDraw: null
	,focusGained: null
	,focusLost: null
	,__class__: flixel.system.frontEnds.SignalFrontEnd
};
flixel.system.frontEnds.SoundFrontEnd = function() {
	this.volume = 1;
	this.soundTrayEnabled = true;
	this.muted = false;
	this.volumeUpKeys = ["PLUS","NUMPADPLUS"];
	this.volumeDownKeys = ["MINUS","NUMPADMINUS"];
	this.muteKeys = ["ZERO","NUMPADZERO"];
	this.list = new flixel.group.FlxTypedGroup();
	this._soundCache = new haxe.ds.StringMap();
};
$hxClasses["flixel.system.frontEnds.SoundFrontEnd"] = flixel.system.frontEnds.SoundFrontEnd;
flixel.system.frontEnds.SoundFrontEnd.__name__ = ["flixel","system","frontEnds","SoundFrontEnd"];
flixel.system.frontEnds.SoundFrontEnd.prototype = {
	music: null
	,muted: null
	,volumeHandler: null
	,volumeUpKeys: null
	,volumeDownKeys: null
	,muteKeys: null
	,soundTrayEnabled: null
	,list: null
	,volume: null
	,_soundCache: null
	,playMusic: function(Music,Volume,Looped) {
		if(Looped == null) Looped = true;
		if(Volume == null) Volume = 1;
		if(this.music == null) this.music = new flixel.system.FlxSound(); else if(this.music.active) this.music.stop();
		this.music.loadEmbedded(Music,Looped);
		this.music.set_volume(Volume);
		this.music.persist = true;
		this.music.play();
	}
	,load: function(EmbeddedSound,Volume,Looped,AutoDestroy,AutoPlay,URL,OnComplete) {
		if(AutoPlay == null) AutoPlay = false;
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		if(EmbeddedSound == null && URL == null) return null;
		var sound = this.list.recycle(flixel.system.FlxSound);
		if(EmbeddedSound != null) sound.loadEmbedded(EmbeddedSound,Looped,AutoDestroy,OnComplete); else sound.loadStream(URL,Looped,AutoDestroy,OnComplete);
		sound.set_volume(Volume);
		if(AutoPlay) sound.play();
		return sound;
	}
	,cache: function(EmbeddedSound) {
		if(this._soundCache.exists(EmbeddedSound)) return this._soundCache.get(EmbeddedSound); else {
			var sound = openfl.Assets.getSound(EmbeddedSound);
			this._soundCache.set(EmbeddedSound,sound);
			return sound;
		}
	}
	,play: function(EmbeddedSound,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		var sound = null;
		if(this._soundCache.exists(EmbeddedSound)) sound = this._soundCache.get(EmbeddedSound); else {
			sound = openfl.Assets.getSound(EmbeddedSound);
			this._soundCache.set(EmbeddedSound,sound);
		}
		var flixelSound = this.list.recycle(flixel.system.FlxSound).loadEmbedded(sound,Looped,AutoDestroy,OnComplete);
		flixelSound.set_volume(Volume);
		return flixelSound.play();
	}
	,stream: function(URL,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		return this.load(null,Volume,Looped,AutoDestroy,true,URL,OnComplete);
	}
	,pause: function() {
		if(this.music != null && this.music.exists && this.music.active) this.music.pause();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists && sound.active) sound.pause();
		}
	}
	,resume: function() {
		if(this.music != null && this.music.exists) this.music.resume();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists) sound.resume();
		}
	}
	,destroy: function(ForceDestroy) {
		if(ForceDestroy == null) ForceDestroy = false;
		if(this.music != null && (ForceDestroy || !this.music.persist)) {
			this.music.destroy();
			this.music = null;
		}
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && (ForceDestroy || !sound.persist)) sound.destroy();
		}
	}
	,update: function() {
		if(this.music != null && this.music.active) this.music.update();
		if(this.list != null && this.list.active) this.list.update();
	}
	,onFocusLost: function() {
		if(this.music != null) this.music.onFocusLost();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null) sound.onFocusLost();
		}
	}
	,onFocus: function() {
		if(this.music != null) this.music.onFocus();
		var _g = 0;
		var _g1 = this.list.members;
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null) sound.onFocus();
		}
	}
	,loadSavedPrefs: function() {
		if(flixel.FlxG.save.data.volume != null) this.set_volume(flixel.FlxG.save.data.volume); else this.set_volume(0.5);
		if(flixel.FlxG.save.data.mute != null) this.muted = flixel.FlxG.save.data.mute; else this.muted = false;
	}
	,set_volume: function(Volume) {
		Volume = flixel.util.FlxMath.bound(Volume,0,1);
		if(this.volumeHandler != null) {
			var param;
			if(this.muted) param = 0; else param = Volume;
			this.volumeHandler(param);
		}
		return this.volume = Volume;
	}
	,__class__: flixel.system.frontEnds.SoundFrontEnd
	,__properties__: {set_volume:"set_volume"}
};
flixel.system.frontEnds.VCRFrontEnd = function() {
	this.stepRequested = false;
	this.paused = false;
};
$hxClasses["flixel.system.frontEnds.VCRFrontEnd"] = flixel.system.frontEnds.VCRFrontEnd;
flixel.system.frontEnds.VCRFrontEnd.__name__ = ["flixel","system","frontEnds","VCRFrontEnd"];
flixel.system.frontEnds.VCRFrontEnd.prototype = {
	paused: null
	,stepRequested: null
	,pause: function() {
		if(!this.paused) {
			if(!flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.show();
			this.paused = true;
		}
	}
	,resume: function() {
		if(this.paused) {
			if(!flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.hide();
			this.paused = false;
		}
	}
	,__class__: flixel.system.frontEnds.VCRFrontEnd
};
flixel.system.frontEnds.WatchFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.WatchFrontEnd"] = flixel.system.frontEnds.WatchFrontEnd;
flixel.system.frontEnds.WatchFrontEnd.__name__ = ["flixel","system","frontEnds","WatchFrontEnd"];
flixel.system.frontEnds.WatchFrontEnd.prototype = {
	add: function(AnyObject,VariableName,DisplayName) {
	}
	,remove: function(AnyObject,VariableName) {
	}
	,addQuick: function(Name,NewValue) {
	}
	,removeQuick: function(Name) {
	}
	,addMouse: function() {
	}
	,removeMouse: function() {
	}
	,__class__: flixel.system.frontEnds.WatchFrontEnd
};
flixel.FlxG = function() { };
$hxClasses["flixel.FlxG"] = flixel.FlxG;
flixel.FlxG.__name__ = ["flixel","FlxG"];
flixel.FlxG.__properties__ = {set_mouse:"set_mouse",set_fullscreen:"set_fullscreen",set_scaleMode:"set_scaleMode",set_drawFramerate:"set_drawFramerate",set_updateFramerate:"set_updateFramerate",get_updateFramerate:"get_updateFramerate",get_state:"get_state",get_stage:"get_stage"}
flixel.FlxG.camera = null;
flixel.FlxG.game = null;
flixel.FlxG.drawFramerate = null;
flixel.FlxG.width = null;
flixel.FlxG.height = null;
flixel.FlxG.scaleMode = null;
flixel.FlxG.mouse = null;
flixel.FlxG.touches = null;
flixel.FlxG.keys = null;
flixel.FlxG.gamepads = null;
flixel.FlxG.resizeGame = function(Width,Height) {
	flixel.FlxG._scaleMode.onMeasure(Width,Height);
};
flixel.FlxG.resetGame = function() {
	flixel.FlxG.game._resetGame = true;
};
flixel.FlxG.switchState = function(State) {
	flixel.FlxG.game._requestedState = State;
};
flixel.FlxG.resetState = function() {
	flixel.FlxG.switchState(Type.createInstance(Type.getClass(flixel.FlxG.game._state),[]));
};
flixel.FlxG.overlap = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
	if(ObjectOrGroup1 == null) ObjectOrGroup1 = flixel.FlxG.game._state;
	if(ObjectOrGroup2 == ObjectOrGroup1) ObjectOrGroup2 = null;
	flixel.system.FlxQuadTree.divisions = flixel.FlxG.worldDivisions;
	var quadTree = flixel.system.FlxQuadTree.recycle(flixel.FlxG.worldBounds.x,flixel.FlxG.worldBounds.y,flixel.FlxG.worldBounds.width,flixel.FlxG.worldBounds.height);
	quadTree.load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback);
	var result = quadTree.execute();
	quadTree.destroy();
	return result;
};
flixel.FlxG.pixelPerfectOverlap = function(Sprite1,Sprite2,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 255;
	return flixel.util.FlxCollision.pixelPerfectCheck(Sprite1,Sprite2,AlphaTolerance,Camera);
};
flixel.FlxG.collide = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback) {
	return flixel.FlxG.overlap(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,flixel.FlxObject.separate);
};
flixel.FlxG.openURL = function(URL,Target) {
	if(Target == null) Target = "_blank";
	var prefix = "";
	if(!new EReg("^https?://","").match(URL)) prefix = "http://";
	flash.Lib.getURL(new flash.net.URLRequest(prefix + URL),Target);
};
flixel.FlxG.init = function(Game,Width,Height,Zoom) {
	flixel.FlxG.game = Game;
	flixel.FlxG.width = Std["int"](Math.abs(Width));
	flixel.FlxG.height = Std["int"](Math.abs(Height));
	flixel.FlxCamera.defaultZoom = Zoom;
	flixel.FlxG._scaleMode.onMeasure(flash.Lib.current.stage.stageWidth,flash.Lib.current.stage.stageHeight);
	flixel.FlxG.keys = flixel.FlxG.inputs.add_flixel_input_keyboard_FlxKeyboard(new flixel.input.keyboard.FlxKeyboard());
	flixel.FlxG.set_mouse(flixel.FlxG.inputs.add_flixel_input_mouse_FlxMouse(new flixel.input.mouse.FlxMouse(flixel.FlxG.game._inputContainer)));
	flixel.FlxG.touches = flixel.FlxG.inputs.add_flixel_input_touch_FlxTouchManager(new flixel.input.touch.FlxTouchManager());
	flixel.FlxG.gamepads = flixel.FlxG.inputs.add_flixel_input_gamepad_FlxGamepadManager(new flixel.input.gamepad.FlxGamepadManager());
	flixel.FlxG.save.bind("flixel");
	flixel.FlxG.sound.loadSavedPrefs();
	flixel.system.FlxAssets.init();
};
flixel.FlxG.reset = function() {
	flixel.text.pxText.PxBitmapFont.clearStorage();
	flixel.util.FlxRandom.set_globalSeed(Std["int"](Math.random() * 2147483647));
	flixel.FlxG.bitmap.clearCache();
	flixel.FlxG.inputs.reset();
	flixel.FlxG.sound.destroy(true);
	flixel.FlxG.autoPause = true;
	flixel.FlxG.fixedTimestep = true;
	flixel.FlxG.timeScale = 1.0;
	flixel.FlxG.elapsed = 0;
	flixel.FlxG.maxElapsed = 0.1;
	flixel.FlxG.worldBounds.set(-10,-10,flixel.FlxG.width + 20,flixel.FlxG.height + 20);
	flixel.FlxG.worldDivisions = 6;
};
flixel.FlxG.set_scaleMode = function(ScaleMode) {
	flixel.FlxG._scaleMode = ScaleMode;
	flixel.FlxG.game.onResize(null);
	return ScaleMode;
};
flixel.FlxG.set_mouse = function(NewMouse) {
	if(flixel.FlxG.mouse == null) {
		flixel.FlxG.mouse = flixel.FlxG.inputs.add_flixel_input_mouse_FlxMouse(NewMouse);
		return flixel.FlxG.mouse;
	}
	var oldMouse = flixel.FlxG.mouse;
	var result = flixel.FlxG.inputs.replace_flixel_input_mouse_FlxMouse(oldMouse,NewMouse);
	if(result != null) {
		flixel.FlxG.mouse = result;
		oldMouse.destroy();
		return NewMouse;
	}
	return oldMouse;
};
flixel.FlxG.get_updateFramerate = function() {
	return 1000 / flixel.FlxG.game._stepMS | 0;
};
flixel.FlxG.set_updateFramerate = function(Framerate) {
	if(Framerate < flixel.FlxG.drawFramerate) null;
	flixel.FlxG.game._stepMS = Std["int"](Math.abs(1000 / Framerate));
	flixel.FlxG.game._stepSeconds = flixel.FlxG.game._stepMS / 1000;
	if(flixel.FlxG.game._maxAccumulation < flixel.FlxG.game._stepMS) flixel.FlxG.game._maxAccumulation = flixel.FlxG.game._stepMS;
	return Framerate;
};
flixel.FlxG.set_drawFramerate = function(Framerate) {
	if(Framerate > (1000 / flixel.FlxG.game._stepMS | 0)) null;
	flixel.FlxG.drawFramerate = Std["int"](Math.abs(Framerate));
	if(flixel.FlxG.game.stage != null) flixel.FlxG.game.stage.frameRate = flixel.FlxG.drawFramerate;
	flixel.FlxG.game._maxAccumulation = (2000 / flixel.FlxG.drawFramerate | 0) - 1;
	if(flixel.FlxG.game._maxAccumulation < flixel.FlxG.game._stepMS) flixel.FlxG.game._maxAccumulation = flixel.FlxG.game._stepMS;
	return Framerate;
};
flixel.FlxG.set_fullscreen = function(Value) {
	if(Value) flash.Lib.current.stage.displayState = flash.display.StageDisplayState.FULL_SCREEN; else flash.Lib.current.stage.displayState = flash.display.StageDisplayState.NORMAL;
	return flixel.FlxG.fullscreen = Value;
};
flixel.FlxG.get_stage = function() {
	return flash.Lib.current.stage;
};
flixel.FlxG.get_state = function() {
	return flixel.FlxG.game._state;
};
flixel.FlxGame = function(GameSizeX,GameSizeY,InitialState,Zoom,UpdateFramerate,DrawFramerate,SkipSplash,StartFullscreen) {
	if(StartFullscreen == null) StartFullscreen = false;
	if(SkipSplash == null) SkipSplash = false;
	if(DrawFramerate == null) DrawFramerate = 60;
	if(UpdateFramerate == null) UpdateFramerate = 60;
	if(Zoom == null) Zoom = 1;
	if(GameSizeY == null) GameSizeY = 480;
	if(GameSizeX == null) GameSizeX = 640;
	this._resetGame = false;
	this._skipSplash = false;
	this._customSoundTray = flixel.system.ui.FlxSoundTray;
	this._lostFocus = false;
	this._total = 0;
	this._gameJustStarted = false;
	this.ticks = 0;
	this.focusLostFramerate = 10;
	flash.display.Sprite.call(this);
	this._inputContainer = new flash.display.Sprite();
	flixel.FlxG.init(this,GameSizeX,GameSizeY,Zoom);
	flixel.FlxG.set_updateFramerate(UpdateFramerate);
	flixel.FlxG.set_drawFramerate(DrawFramerate);
	this._accumulator = this._stepMS;
	this._skipSplash = SkipSplash;
	if(InitialState == null) this._initialState = flixel.FlxState; else this._initialState = InitialState;
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
};
$hxClasses["flixel.FlxGame"] = flixel.FlxGame;
flixel.FlxGame.__name__ = ["flixel","FlxGame"];
flixel.FlxGame.__super__ = flash.display.Sprite;
flixel.FlxGame.prototype = $extend(flash.display.Sprite.prototype,{
	focusLostFramerate: null
	,soundTray: null
	,ticks: null
	,_gameJustStarted: null
	,_initialState: null
	,_state: null
	,_total: null
	,_accumulator: null
	,_elapsedMS: null
	,_stepMS: null
	,_stepSeconds: null
	,_maxAccumulation: null
	,_lostFocus: null
	,_inputContainer: null
	,_customSoundTray: null
	,_skipSplash: null
	,_requestedState: null
	,_resetGame: null
	,_display: null
	,_displayMatrix: null
	,_displayColorTransform: null
	,create: function(_) {
		if(this.stage == null) return;
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
		this._total = flash.Lib.getTimer();
		this.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this.stage.align = flash.display.StageAlign.TOP_LEFT;
		this.stage.frameRate = flixel.FlxG.drawFramerate;
		this._display = new flash.display.BitmapData(flash.Lib.current.stage.stageWidth,flash.Lib.current.stage.stageHeight);
		this._displayMatrix = new flash.geom.Matrix();
		this._displayColorTransform = new flash.geom.ColorTransform();
		this.addChild(new flash.display.Bitmap(this._display));
		this.addChild(this._inputContainer);
		this.soundTray = Type.createInstance(this._customSoundTray,[]);
		this.addChild(this.soundTray);
		this.stage.addEventListener(flash.events.Event.DEACTIVATE,$bind(this,this.onFocusLost));
		this.stage.addEventListener(flash.events.Event.ACTIVATE,$bind(this,this.onFocus));
		flixel.FlxG.signals.gameReset.dispatch();
		if(this._skipSplash || flixel.system.FlxSplash.nextState != null) {
			this._requestedState = Type.createInstance(this._initialState,[]);
			if(flixel.system.FlxSplash.nextState == null) this._gameJustStarted = true;
		} else {
			flixel.system.FlxSplash.nextState = this._initialState;
			this._requestedState = new flixel.system.FlxSplash();
			this._skipSplash = true;
		}
		flixel.FlxG.reset();
		this.switchState();
		if((1000 / flixel.FlxG.game._stepMS | 0) < flixel.FlxG.drawFramerate) null;
		this.stage.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		this.stage.addEventListener(flash.events.Event.RESIZE,$bind(this,this.onResize));
		this.resizeGame(flash.Lib.current.stage.stageWidth,flash.Lib.current.stage.stageHeight);
	}
	,onFocus: function(_) {
		this._lostFocus = false;
		flixel.FlxG.signals.focusGained.dispatch();
		if(!flixel.FlxG.autoPause) {
			this._state.onFocus();
			return;
		}
		this.stage.frameRate = flixel.FlxG.drawFramerate;
		flixel.FlxG.sound.onFocus();
		flixel.FlxG.inputs.onFocus();
	}
	,onFocusLost: function(_) {
		this._lostFocus = true;
		flixel.FlxG.signals.focusLost.dispatch();
		if(!flixel.FlxG.autoPause) {
			this._state.onFocusLost();
			return;
		}
		this.stage.frameRate = this.focusLostFramerate;
		flixel.FlxG.sound.onFocusLost();
		flixel.FlxG.inputs.onFocusLost();
	}
	,onResize: function(_) {
		var width = flash.Lib.current.stage.stageWidth;
		var height = flash.Lib.current.stage.stageHeight;
		this._state.onResize(width,height);
		flixel.FlxG.plugins.onResize(width,height);
		flixel.FlxG.signals.gameResized.dispatch(width,height);
		this.resizeGame(width,height);
	}
	,resizeGame: function(width,height) {
		flixel.FlxG._scaleMode.onMeasure(width,height);
		if(this.soundTray != null) this.soundTray.screenCenter();
		this._inputContainer.set_scaleX(1 / flixel.FlxG.game.get_scaleX());
		this._inputContainer.set_scaleY(1 / flixel.FlxG.game.get_scaleY());
	}
	,onEnterFrame: function(_) {
		this.ticks = flash.Lib.getTimer();
		this._elapsedMS = this.ticks - this._total;
		this._total = this.ticks;
		if(this.soundTray != null && this.soundTray.active) this.soundTray.update(this._elapsedMS);
		if(!this._lostFocus || !flixel.FlxG.autoPause) {
			if(flixel.FlxG.vcr.paused) {
				if(flixel.FlxG.vcr.stepRequested) flixel.FlxG.vcr.stepRequested = false; else if(this._state == this._requestedState) return;
			}
			if(flixel.FlxG.fixedTimestep) {
				this._accumulator += this._elapsedMS;
				if(this._accumulator > this._maxAccumulation) this._accumulator = this._maxAccumulation;
				while(this._accumulator > this._stepMS) {
					this.step();
					this._accumulator = this._accumulator - this._stepMS;
				}
			} else this.step();
			this.draw();
		}
	}
	,resetGame: function() {
		flixel.FlxG.signals.gameReset.dispatch();
		if(this._skipSplash || flixel.system.FlxSplash.nextState != null) {
			this._requestedState = Type.createInstance(this._initialState,[]);
			if(flixel.system.FlxSplash.nextState == null) this._gameJustStarted = true;
		} else {
			flixel.system.FlxSplash.nextState = this._initialState;
			this._requestedState = new flixel.system.FlxSplash();
			this._skipSplash = true;
		}
		flixel.FlxG.reset();
	}
	,switchState: function() {
		flixel.text.pxText.PxBitmapFont.clearStorage();
		flixel.FlxG.bitmap.clearCache();
		flixel.FlxG.cameras.reset();
		flixel.FlxG.inputs.reset();
		flixel.FlxG.sound.destroy();
		flixel.FlxG.plugins.onStateSwitch();
		flixel.FlxG.signals.stateSwitched.dispatch();
		if(this._state != null) this._state.destroy();
		this._state = this._requestedState;
		this._state.create();
		if(this._gameJustStarted) this.gameStart();
	}
	,gameStart: function() {
		flixel.FlxG.signals.gameStarted.dispatch();
		this._gameJustStarted = false;
	}
	,step: function() {
		if(this._resetGame) {
			flixel.FlxG.signals.gameReset.dispatch();
			if(this._skipSplash || flixel.system.FlxSplash.nextState != null) {
				this._requestedState = Type.createInstance(this._initialState,[]);
				if(flixel.system.FlxSplash.nextState == null) this._gameJustStarted = true;
			} else {
				flixel.system.FlxSplash.nextState = this._initialState;
				this._requestedState = new flixel.system.FlxSplash();
				this._skipSplash = true;
			}
			flixel.FlxG.reset();
			this._resetGame = false;
		}
		this.update();
	}
	,update: function() {
		if(!this._state.active || !this._state.exists) return;
		if(this._state != this._requestedState) this.switchState();
		flixel.FlxG.signals.preUpdate.dispatch();
		if(flixel.FlxG.fixedTimestep) flixel.FlxG.elapsed = flixel.FlxG.timeScale * this._stepSeconds; else {
			flixel.FlxG.elapsed = flixel.FlxG.timeScale * (this._elapsedMS / 1000);
			var max = flixel.FlxG.maxElapsed * flixel.FlxG.timeScale;
			if(flixel.FlxG.elapsed > max) flixel.FlxG.elapsed = max;
		}
		this.updateInput();
		flixel.FlxG.sound.update();
		flixel.FlxG.plugins.update();
		this._state.tryUpdate();
		flixel.FlxG.cameras.update();
		flixel.FlxG.signals.postUpdate.dispatch();
		var _g = 0;
		var _g1 = flixel.FlxG.swipes;
		while(_g < _g1.length) {
			var swipe = _g1[_g];
			++_g;
			swipe = null;
		}
		flixel.util.FlxArrayUtil.clearArray_flixel_input_FlxSwipe(flixel.FlxG.swipes);
	}
	,updateInput: function() {
		flixel.FlxG.inputs.update();
	}
	,draw: function() {
		if(!this._state.visible || !this._state.exists) return;
		flixel.FlxG.signals.preDraw.dispatch();
		flixel.FlxG.cameras.lock();
		flixel.FlxG.plugins.draw();
		this._state.draw();
		this._display.fillRect(this._display.rect,0);
		var _g = 0;
		var _g1 = flixel.FlxG.cameras.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			this._displayMatrix.identity();
			this._displayMatrix.scale(camera.zoom * flixel.FlxG._scaleMode.scale.x,camera.zoom * flixel.FlxG._scaleMode.scale.y);
			this._displayMatrix.translate(camera.x * flixel.FlxG._scaleMode.scale.x,camera.y * flixel.FlxG._scaleMode.scale.y);
			if(camera.angle != 0) {
				this._displayMatrix.translate(-this._display.width >> 1,-this._display.height >> 1);
				this._displayMatrix.rotate(camera.angle * (Math.PI / 180));
				this._displayMatrix.translate(this._display.width >> 1,this._display.height >> 1);
			}
			this._displayColorTransform.alphaMultiplier = camera.alpha;
			this._display.draw(camera.buffer,this._displayMatrix,this._displayColorTransform,null,null,camera.antialiasing);
		}
		flixel.FlxG.cameras.unlock();
		flixel.FlxG.signals.postDraw.dispatch();
	}
	,__class__: flixel.FlxGame
});
flixel._FlxSprite = {};
flixel._FlxSprite.GraphicDefault = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel._FlxSprite.GraphicDefault.preload != null) {
		this.__sourceImage = flixel._FlxSprite.GraphicDefault.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel._FlxSprite.GraphicDefault.resourceName),flixel._FlxSprite.GraphicDefault.resourceType,function(b) {
		if(flixel._FlxSprite.GraphicDefault.preload == null) flixel._FlxSprite.GraphicDefault.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel._FlxSprite.GraphicDefault"] = flixel._FlxSprite.GraphicDefault;
flixel._FlxSprite.GraphicDefault.__name__ = ["flixel","_FlxSprite","GraphicDefault"];
flixel._FlxSprite.GraphicDefault.preload = null;
flixel._FlxSprite.GraphicDefault.__super__ = flash.display.BitmapData;
flixel._FlxSprite.GraphicDefault.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel._FlxSprite.GraphicDefault
});
flixel.FlxSubState = function(BGColor) {
	if(BGColor == null) BGColor = 0;
	this._created = false;
	flixel.FlxState.call(this);
	this.closeCallback = null;
	this.set_bgColor(BGColor);
};
$hxClasses["flixel.FlxSubState"] = flixel.FlxSubState;
flixel.FlxSubState.__name__ = ["flixel","FlxSubState"];
flixel.FlxSubState.__super__ = flixel.FlxState;
flixel.FlxSubState.prototype = $extend(flixel.FlxState.prototype,{
	closeCallback: null
	,_parentState: null
	,_bgColor: null
	,_created: null
	,draw: function() {
		var _g = 0;
		var _g1 = flixel.FlxG.cameras.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.fill(this._bgColor);
		}
		flixel.FlxState.prototype.draw.call(this);
	}
	,destroy: function() {
		flixel.FlxState.prototype.destroy.call(this);
		this.closeCallback = null;
		this._parentState = null;
	}
	,close: function() {
		if(this._parentState != null) this._parentState.closeSubState();
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,set_bgColor: function(Value) {
		return this._bgColor = Value;
	}
	,__class__: flixel.FlxSubState
});
flixel.animation = {};
flixel.animation.FlxBaseAnimation = function(Parent,Name) {
	this.curIndex = 0;
	this.parent = Parent;
	this.name = Name;
};
$hxClasses["flixel.animation.FlxBaseAnimation"] = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxBaseAnimation.__name__ = ["flixel","animation","FlxBaseAnimation"];
flixel.animation.FlxBaseAnimation.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.animation.FlxBaseAnimation.prototype = {
	parent: null
	,name: null
	,curIndex: null
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null && this.parent._curAnim == this) this.parent.set_frameIndex(Value);
		return Value;
	}
	,destroy: function() {
		this.parent = null;
		this.name = null;
	}
	,update: function() {
	}
	,clone: function(Parent) {
		return null;
	}
	,__class__: flixel.animation.FlxBaseAnimation
	,__properties__: {set_curIndex:"set_curIndex"}
};
flixel.animation.FlxAnimation = function(Parent,Name,Frames,FrameRate,Looped) {
	if(Looped == null) Looped = true;
	if(FrameRate == null) FrameRate = 0;
	this._frameTimer = 0;
	this.looped = true;
	this.paused = true;
	this.finished = true;
	this.delay = 0;
	this.curFrame = 0;
	flixel.animation.FlxBaseAnimation.call(this,Parent,Name);
	this.set_frameRate(FrameRate);
	this._frames = Frames;
	this.looped = Looped;
};
$hxClasses["flixel.animation.FlxAnimation"] = flixel.animation.FlxAnimation;
flixel.animation.FlxAnimation.__name__ = ["flixel","animation","FlxAnimation"];
flixel.animation.FlxAnimation.__super__ = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxAnimation.prototype = $extend(flixel.animation.FlxBaseAnimation.prototype,{
	frameRate: null
	,curFrame: null
	,numFrames: null
	,delay: null
	,finished: null
	,paused: null
	,looped: null
	,_frames: null
	,_frameTimer: null
	,destroy: function() {
		this._frames = null;
		this.name = null;
		flixel.animation.FlxBaseAnimation.prototype.destroy.call(this);
	}
	,play: function(Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(!Force && (this.looped || !this.finished)) {
			this.paused = false;
			this.finished = false;
			this.set_curFrame(this.curFrame);
			return;
		}
		this.paused = false;
		this._frameTimer = 0;
		if(this.delay <= 0 || Frame == this._frames.length - 1) this.finished = true; else this.finished = false;
		if(Frame < 0) this.set_curFrame(flixel.util.FlxRandom.intRanged(0,this._frames.length - 1)); else if(this._frames.length > Frame) this.set_curFrame(Frame); else this.set_curFrame(0);
	}
	,restart: function() {
		this.play(true);
	}
	,stop: function() {
		this.finished = true;
		this.paused = true;
	}
	,update: function() {
		if(this.delay > 0 && (this.looped || !this.finished) && !this.paused) {
			this._frameTimer += flixel.FlxG.elapsed;
			while(this._frameTimer > this.delay) {
				this._frameTimer = this._frameTimer - this.delay;
				if(this.looped && this.curFrame == this._frames.length - 1) this.set_curFrame(0); else {
					var _g = this;
					var _g1 = _g.curFrame;
					_g.set_curFrame(_g1 + 1);
					_g1;
				}
			}
		}
	}
	,clone: function(Parent) {
		return new flixel.animation.FlxAnimation(Parent,this.name,this._frames,this.frameRate,this.looped);
	}
	,set_frameRate: function(value) {
		this.delay = 0;
		this.frameRate = value;
		if(value > 0) this.delay = 1.0 / value;
		return value;
	}
	,set_curFrame: function(Frame) {
		if(Frame >= 0) {
			if(!this.looped && Frame >= this._frames.length) {
				this.finished = true;
				this.curFrame = this._frames.length - 1;
			} else this.curFrame = Frame;
		} else this.curFrame = flixel.util.FlxRandom.intRanged(0,this._frames.length - 1);
		this.set_curIndex(this._frames[this.curFrame]);
		return Frame;
	}
	,get_numFrames: function() {
		return this._frames.length;
	}
	,__class__: flixel.animation.FlxAnimation
	,__properties__: $extend(flixel.animation.FlxBaseAnimation.prototype.__properties__,{get_numFrames:"get_numFrames",set_curFrame:"set_curFrame",set_frameRate:"set_frameRate"})
});
flixel.animation.FlxAnimationController = function(Sprite) {
	this.frameIndex = -1;
	this._sprite = Sprite;
	this._animations = new haxe.ds.StringMap();
};
$hxClasses["flixel.animation.FlxAnimationController"] = flixel.animation.FlxAnimationController;
flixel.animation.FlxAnimationController.__name__ = ["flixel","animation","FlxAnimationController"];
flixel.animation.FlxAnimationController.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.animation.FlxAnimationController.frameSortFunction = function(frame1,frame2) {
	var name1 = frame1.name;
	var name2 = frame2.name;
	var num1 = Std.parseInt(name1.substring(flixel.animation.FlxAnimationController.prefixLength,name1.length - flixel.animation.FlxAnimationController.postfixLength));
	var num2 = Std.parseInt(name2.substring(flixel.animation.FlxAnimationController.prefixLength,name2.length - flixel.animation.FlxAnimationController.postfixLength));
	if(num1 > num2) return 1; else if(num2 > num1) return -1;
	return 0;
};
flixel.animation.FlxAnimationController.prototype = {
	frameIndex: null
	,frames: null
	,callback: null
	,_sprite: null
	,_curAnim: null
	,_animations: null
	,_prerotated: null
	,update: function() {
		if(this._curAnim != null) this._curAnim.update(); else if(this._prerotated != null) this._prerotated.set_angle(this._sprite.angle);
	}
	,copyFrom: function(controller) {
		this.destroyAnimations();
		var $it0 = controller._animations.iterator();
		while( $it0.hasNext() ) {
			var anim = $it0.next();
			this.add(anim.name,anim._frames,anim.frameRate,anim.looped);
		}
		if(controller._prerotated != null) this.createPrerotated();
		if(controller.get_name() != null) this.set_name(controller.get_name());
		this.set_frameIndex(controller.frameIndex);
		return this;
	}
	,createPrerotated: function(Controller) {
		this.destroyAnimations();
		if(Controller != null) Controller = Controller; else Controller = this;
		this._prerotated = new flixel.animation.FlxPrerotatedAnimation(Controller,Controller._sprite.bakedRotationAngle);
	}
	,destroyAnimations: function() {
		this.clearAnimations();
		this.clearPrerotated();
	}
	,destroy: function() {
		this.destroyAnimations();
		this._animations = null;
		this.callback = null;
		this._sprite = null;
	}
	,clearPrerotated: function() {
		if(this._prerotated != null) this._prerotated.destroy();
		this._prerotated = null;
	}
	,clearAnimations: function() {
		if(this._animations != null) {
			var anim;
			var $it0 = this._animations.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				anim = this._animations.get(key);
				if(anim != null) anim.destroy();
				this._animations.remove(key);
			}
		}
		this._curAnim = null;
	}
	,get: function(Name) {
		return this._animations.get(Name);
	}
	,add: function(Name,Frames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[i] >= this._sprite.frames) Frames.splice(i,1);
			i--;
		}
		if(Frames.length > 0) {
			var anim = new flixel.animation.FlxAnimation(this,Name,Frames,FrameRate,Looped);
			this._animations.set(Name,anim);
		}
	}
	,append: function(Name,Frames) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[numFrames - i] < this._sprite.frames) anim._frames.push(Frames[numFrames - i]);
			i--;
		}
	}
	,addByNames: function(Name,FrameNames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var indices = new Array();
			this.byNamesHelper(indices,FrameNames);
			if(indices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,indices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByNames: function(Name,FrameNames) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byNamesHelper(anim._frames,FrameNames);
	}
	,addByStringIndices: function(Name,Prefix,Indices,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = new Array();
			this.byStringIndicesHelper(frameIndices,Prefix,Indices,Postfix);
			if(frameIndices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByStringIndices: function(Name,Prefix,Indices,Postfix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byStringIndicesHelper(anim._frames,Prefix,Indices,Postfix);
	}
	,addByIndices: function(Name,Prefix,Indices,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = new Array();
			this.byIndicesHelper(frameIndices,Prefix,Indices,Postfix);
			if(frameIndices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,appendByIndices: function(Name,Prefix,Indices,Postfix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) this.byIndicesHelper(anim._frames,Prefix,Indices,Postfix);
	}
	,findSpriteFrame: function(Prefix,Index,Postfix) {
		var numFrames = this._sprite.frames;
		var flxFrames = this._sprite.framesData.frames;
		var _g = 0;
		while(_g < numFrames) {
			var i = _g++;
			var name = flxFrames[i].name;
			if(StringTools.startsWith(name,Prefix) && StringTools.endsWith(name,Postfix)) {
				var index = Std.parseInt(name.substring(Prefix.length,name.length - Postfix.length));
				if(index != null && index == Index) return i;
			}
		}
		return -1;
	}
	,addByPrefix: function(Name,Prefix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var animFrames = new Array();
			this.findByPrefix(animFrames,Prefix);
			if(animFrames.length > 0) {
				var frameIndices = new Array();
				this.byPrefixHelper(frameIndices,animFrames,Prefix);
				if(frameIndices.length > 0) {
					var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
					this._animations.set(Name,anim);
				}
			}
		}
	}
	,appendByPrefix: function(Name,Prefix) {
		var anim = this._animations.get(Name);
		if(anim == null) return;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var animFrames = new Array();
			this.findByPrefix(animFrames,Prefix);
			if(animFrames.length > 0) this.byPrefixHelper(anim._frames,animFrames,Prefix);
		}
	}
	,play: function(AnimName,Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(AnimName == null) {
			if(this._curAnim != null) this._curAnim.stop();
			this._curAnim = null;
		}
		if(AnimName == null || this._animations.get(AnimName) == null) return;
		if(this._curAnim != null && AnimName != this._curAnim.name) this._curAnim.stop();
		this._curAnim = this._animations.get(AnimName);
		this._curAnim.play(Force,Frame);
	}
	,pause: function() {
		if(this._curAnim != null) this._curAnim.paused = true;
	}
	,resume: function() {
		if(this._curAnim != null) this._curAnim.paused = false;
	}
	,getByName: function(Name) {
		return this._animations.get(Name);
	}
	,randomFrame: function() {
		if(this._curAnim != null) {
			this._curAnim.stop();
			this._curAnim = null;
		}
		this.set_frameIndex(flixel.util.FlxRandom.intRanged(0,this._sprite.frames - 1));
	}
	,fireCallback: function() {
		if(this.callback != null) {
			var name;
			if(this._curAnim != null) name = this._curAnim.name; else name = null;
			var number;
			if(this._curAnim != null) number = this._curAnim.curFrame; else number = this.frameIndex;
			this.callback(name,number,this.frameIndex);
		}
	}
	,byNamesHelper: function(AddTo,FrameNames) {
		var l = FrameNames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var name = FrameNames[i];
			if(this._sprite.framesData.framesHash.exists(name)) {
				var frameToAdd = this._sprite.framesData.framesHash.get(name);
				AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,frameToAdd,0));
			}
		}
	}
	,byStringIndicesHelper: function(AddTo,Prefix,Indices,Postfix) {
		var l = Indices.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var name = Prefix + Indices[i] + Postfix;
			if(this._sprite.framesData.framesHash.exists(name)) {
				var frameToAdd = this._sprite.framesData.framesHash.get(name);
				AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,frameToAdd,0));
			}
		}
	}
	,byIndicesHelper: function(AddTo,Prefix,Indices,Postfix) {
		var l = Indices.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var indexToAdd = this.findSpriteFrame(Prefix,Indices[i],Postfix);
			if(indexToAdd != -1) AddTo.push(indexToAdd);
		}
	}
	,byPrefixHelper: function(AddTo,AnimFrames,Prefix) {
		var name = AnimFrames[0].name;
		var postIndex = name.indexOf(".",Prefix.length);
		var postFix = name.substring(postIndex == -1?name.length:postIndex,name.length);
		flixel.animation.FlxAnimationController.prefixLength = Prefix.length;
		flixel.animation.FlxAnimationController.postfixLength = postFix.length;
		AnimFrames.sort(flixel.animation.FlxAnimationController.frameSortFunction);
		var l = AnimFrames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			AddTo.push(HxOverrides.indexOf(this._sprite.framesData.frames,AnimFrames[i],0));
		}
	}
	,findByPrefix: function(AnimFrames,Prefix) {
		var l = this._sprite.framesData.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			if(StringTools.startsWith(this._sprite.framesData.frames[i].name,Prefix)) AnimFrames.push(this._sprite.framesData.frames[i]);
		}
	}
	,set_frameIndex: function(Frame) {
		if(this._sprite.framesData != null) {
			Frame = Frame % this._sprite.frames;
			if(Frame != this.frameIndex) {
				this._sprite.set_frame(this._sprite.framesData.frames[Frame]);
				this.fireCallback();
			}
		}
		return this.frameIndex = Frame;
	}
	,get_frameName: function() {
		return this._sprite.frame.name;
	}
	,set_frameName: function(Value) {
		if(this._sprite.framesData != null && this._sprite.framesData.framesHash.exists(Value)) {
			if(this._curAnim != null) {
				this._curAnim.stop();
				this._curAnim = null;
			}
			var frame = this._sprite.framesData.framesHash.get(Value);
			if(frame != null) this.set_frameIndex(HxOverrides.indexOf(this._sprite.framesData.frames,frame,0));
		}
		return Value;
	}
	,get_name: function() {
		var animName = null;
		if(this._curAnim != null) animName = this._curAnim.name;
		return animName;
	}
	,set_name: function(AnimName) {
		this.play(AnimName);
		return AnimName;
	}
	,get_curAnim: function() {
		var anim = null;
		if(this._curAnim != null && this._curAnim.delay > 0 && (this._curAnim.looped || !this._curAnim.finished)) anim = this._curAnim;
		return anim;
	}
	,set_curAnim: function(Anim) {
		if(Anim != null && Anim != this._curAnim) {
			if(this._curAnim != null) this._curAnim.stop();
			Anim.play();
		}
		return this._curAnim = Anim;
	}
	,get_paused: function() {
		var paused = false;
		if(this._curAnim != null) paused = this._curAnim.paused;
		return paused;
	}
	,set_paused: function(Value) {
		if(this._curAnim != null) this._curAnim.paused = Value;
		return Value;
	}
	,get_finished: function() {
		var finished = true;
		if(this._curAnim != null) finished = this._curAnim.finished;
		return finished;
	}
	,set_finished: function(Value) {
		if(Value == true && this._curAnim != null) {
			this._curAnim.finished = true;
			this.set_frameIndex(this._curAnim._frames.length - 1);
		}
		return Value;
	}
	,get_frames: function() {
		return this._sprite.frames;
	}
	,getFrameIndex: function(Frame) {
		return HxOverrides.indexOf(this._sprite.framesData.frames,Frame,0);
	}
	,__class__: flixel.animation.FlxAnimationController
	,__properties__: {get_frames:"get_frames",set_finished:"set_finished",get_finished:"get_finished",set_paused:"set_paused",get_paused:"get_paused",set_name:"set_name",get_name:"get_name",set_frameName:"set_frameName",get_frameName:"get_frameName",set_frameIndex:"set_frameIndex",set_curAnim:"set_curAnim",get_curAnim:"get_curAnim"}
};
flixel.animation.FlxPrerotatedAnimation = function(Parent,Baked) {
	this.angle = 0;
	flixel.animation.FlxBaseAnimation.call(this,Parent,"prerotated_animation");
	this.baked = Baked;
	this.rotations = Math.round(360 / Baked);
};
$hxClasses["flixel.animation.FlxPrerotatedAnimation"] = flixel.animation.FlxPrerotatedAnimation;
flixel.animation.FlxPrerotatedAnimation.__name__ = ["flixel","animation","FlxPrerotatedAnimation"];
flixel.animation.FlxPrerotatedAnimation.__super__ = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxPrerotatedAnimation.prototype = $extend(flixel.animation.FlxBaseAnimation.prototype,{
	rotations: null
	,baked: null
	,angle: null
	,set_angle: function(Value) {
		var oldIndex = this.curIndex;
		var angleHelper = Math.floor(Value % 360);
		while(angleHelper < 0) angleHelper += 360;
		var newIndex = Math.floor(angleHelper / this.baked + 0.5);
		newIndex = newIndex % this.rotations | 0;
		if(oldIndex != newIndex) this.set_curIndex(newIndex);
		return this.angle = Value;
	}
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null) this.parent.set_frameIndex(Value);
		return Value;
	}
	,clone: function(Parent) {
		return new flixel.animation.FlxPrerotatedAnimation(Parent,this.baked);
	}
	,__class__: flixel.animation.FlxPrerotatedAnimation
	,__properties__: $extend(flixel.animation.FlxBaseAnimation.prototype.__properties__,{set_angle:"set_angle"})
});
flixel.util.FlxPool_flixel_effects_FlxFlicker = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_effects_FlxFlicker"] = flixel.util.FlxPool_flixel_effects_FlxFlicker;
flixel.util.FlxPool_flixel_effects_FlxFlicker.__name__ = ["flixel","util","FlxPool_flixel_effects_FlxFlicker"];
flixel.util.FlxPool_flixel_effects_FlxFlicker.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel.util.FlxPool_flixel_effects_FlxFlicker
	,__properties__: {get_length:"get_length"}
};
flixel.effects = {};
flixel.effects.FlxFlicker = function() {
};
$hxClasses["flixel.effects.FlxFlicker"] = flixel.effects.FlxFlicker;
flixel.effects.FlxFlicker.__name__ = ["flixel","effects","FlxFlicker"];
flixel.effects.FlxFlicker.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.effects.FlxFlicker.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	if(flixel.effects.FlxFlicker.isFlickering(Object)) {
		if(ForceRestart) flixel.effects.FlxFlicker.stopFlickering(Object); else return;
	}
	if(Interval <= 0) Interval = flixel.FlxG.elapsed;
	var flicker = flixel.effects.FlxFlicker._pool.get();
	flicker.start(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback);
	flixel.effects.FlxFlicker._boundObjects.set(Object,flicker);
	flicker;
};
flixel.effects.FlxFlicker.isFlickering = function(Object) {
	return flixel.effects.FlxFlicker._boundObjects.h.__keys__[Object.__id__] != null;
};
flixel.effects.FlxFlicker.stopFlickering = function(Object) {
	var boundFlicker = flixel.effects.FlxFlicker._boundObjects.h[Object.__id__];
	if(boundFlicker != null) boundFlicker.stop();
};
flixel.effects.FlxFlicker.prototype = {
	object: null
	,endVisibility: null
	,timer: null
	,completionCallback: null
	,progressCallback: null
	,duration: null
	,interval: null
	,destroy: function() {
		this.object = null;
		this.timer = null;
		this.completionCallback = null;
		this.progressCallback = null;
	}
	,start: function(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback) {
		this.object = Object;
		this.duration = Duration;
		this.interval = Interval;
		this.completionCallback = CompletionCallback;
		this.progressCallback = ProgressCallback;
		this.endVisibility = EndVisibility;
		this.timer = new flixel.util.FlxTimer(this.interval,$bind(this,this.flickerProgress),this.duration / this.interval | 0);
	}
	,stop: function() {
		this.timer.cancel();
		this.object.set_visible(true);
		this.release();
	}
	,release: function() {
		flixel.effects.FlxFlicker._boundObjects.remove(this.object);
		flixel.effects.FlxFlicker._pool.put(this);
	}
	,flickerProgress: function(Timer) {
		this.object.set_visible(!this.object.visible);
		if(this.progressCallback != null) this.progressCallback(this);
		if(Timer.loops > 0 && Timer.loops - Timer._loopsCounter == 0) {
			this.object.set_visible(this.endVisibility);
			if(this.completionCallback != null) this.completionCallback(this);
			this.release();
		}
	}
	,__class__: flixel.effects.FlxFlicker
};
flixel.group.FlxTypedSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._skipTransformChildren = false;
	flixel.FlxSprite.call(this,X,Y);
	this.group = new flixel.group.FlxTypedGroup(MaxSize);
	this._sprites = this.group.members;
};
$hxClasses["flixel.group.FlxTypedSpriteGroup"] = flixel.group.FlxTypedSpriteGroup;
flixel.group.FlxTypedSpriteGroup.__name__ = ["flixel","group","FlxTypedSpriteGroup"];
flixel.group.FlxTypedSpriteGroup.__super__ = flixel.FlxSprite;
flixel.group.FlxTypedSpriteGroup.prototype = $extend(flixel.FlxSprite.prototype,{
	transformChildren_flash_display_BlendMode: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Int: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Float: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Bool: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Array_flixel_FlxCamera: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,multiTransformChildren_Float: function(FunctionArray,ValueArray) {
		if(this.group == null) return;
		var numProps = FunctionArray.length;
		if(numProps > ValueArray.length) return;
		var lambda;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) {
				var _g2 = 0;
				while(_g2 < numProps) {
					var i = _g2++;
					lambda = FunctionArray[i];
					lambda(sprite,ValueArray[i]);
				}
			}
		}
	}
	,transformChildren_flixel_util_FlxPoint: function(Function,Value) {
		if(this.group == null) return;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,group: null
	,members: null
	,length: null
	,_skipTransformChildren: null
	,_sprites: null
	,initVars: function() {
		this.collisionType = 4;
		this.offset = new flixel.util.FlxCallbackPoint($bind(this,this.offsetCallback));
		this.origin = new flixel.util.FlxCallbackPoint($bind(this,this.originCallback));
		this.scale = new flixel.util.FlxCallbackPoint($bind(this,this.scaleCallback));
		this.scrollFactor = new flixel.util.FlxCallbackPoint($bind(this,this.scrollFactorCallback));
		this.scale.set(1,1);
		this.scrollFactor.set(1,1);
		this.velocity = flixel.util.FlxPoint.get(null,null);
		this.acceleration = flixel.util.FlxPoint.get(null,null);
		this.drag = flixel.util.FlxPoint.get(null,null);
		this.maxVelocity = flixel.util.FlxPoint.get(10000,10000);
	}
	,destroy: function() {
		this.offset = flixel.util.FlxDestroyUtil.destroy(this.offset);
		this.origin = flixel.util.FlxDestroyUtil.destroy(this.origin);
		this.scale = flixel.util.FlxDestroyUtil.destroy(this.scale);
		this.scrollFactor = flixel.util.FlxDestroyUtil.destroy(this.scrollFactor);
		this.group = flixel.util.FlxDestroyUtil.destroy(this.group);
		this._sprites = null;
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,clone: function(NewSprite) {
		if(NewSprite == null || !js.Boot.__instanceof(NewSprite,flixel.group.FlxTypedSpriteGroup)) NewSprite = new flixel.group.FlxTypedSpriteGroup(0,0,this.group.maxSize);
		var cloned = NewSprite;
		cloned.group.set_maxSize(this.group.maxSize);
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) cloned.add(sprite.clone());
		}
		return cloned;
	}
	,isOnScreen: function(Camera) {
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.isOnScreen(Camera);
		}
		return result;
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.overlapsPoint(point,InScreenSpace,Camera);
		}
		return result;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.pixelsOverlapPoint(point,Mask,Camera);
		}
		return result;
	}
	,update: function() {
		if(this.moves) this.updateMotion();
		this.group.update();
	}
	,draw: function() {
		this.group.draw();
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var spritePositions;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				spritePositions = sprite.replaceColor(Color,NewColor,FetchPositions);
				if(FetchPositions) positions = positions.concat(spritePositions);
			}
		}
		return positions;
	}
	,add: function(Sprite) {
		var sprite = Sprite;
		var _g = sprite;
		_g.set_x(_g.x + this.x);
		var _g1 = sprite;
		_g1.set_y(_g1.y + this.y);
		var _g2 = sprite;
		_g2.set_alpha(_g2.alpha * this.alpha);
		sprite.scrollFactor.copyFrom(this.scrollFactor);
		sprite.set_cameras(this._cameras);
		return this.group.add(Sprite);
	}
	,recycle: function(ObjectClass,ContructorArgs,Force) {
		if(Force == null) Force = false;
		return this.group.recycle(ObjectClass,ContructorArgs,Force);
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		return this.group.remove(Object,Splice);
	}
	,replace: function(OldObject,NewObject) {
		return this.group.replace(OldObject,NewObject);
	}
	,sort: function(Function,Order) {
		if(Order == null) Order = -1;
		this.group.sort(Function,Order);
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.setAll(VariableName,Value,Recurse);
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.callAll(FunctionName,Args,Recurse);
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		return this.group.getFirstAvailable(ObjectClass,Force);
	}
	,getFirstNull: function() {
		return this.group.getFirstNull();
	}
	,getFirstExisting: function() {
		return this.group.getFirstExisting();
	}
	,getFirstAlive: function() {
		return this.group.getFirstAlive();
	}
	,getFirstDead: function() {
		return this.group.getFirstDead();
	}
	,countLiving: function() {
		return this.group.countLiving();
	}
	,countDead: function() {
		return this.group.countDead();
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		return this.group.getRandom(StartIndex,Length);
	}
	,forEach: function(Function) {
		this.group.forEach(Function);
	}
	,forEachAlive: function(Function) {
		this.group.forEachAlive(Function);
	}
	,forEachDead: function(Function) {
		this.group.forEachDead(Function);
	}
	,forEachExists: function(Function) {
		this.group.forEachExists(Function);
	}
	,forEachOfType: function(ObjectClass,Function) {
		this.group.forEachOfType(ObjectClass,Function);
	}
	,clear: function() {
		this.group.clear();
	}
	,kill: function() {
		flixel.FlxSprite.prototype.kill.call(this);
		this.group.kill();
	}
	,revive: function() {
		flixel.FlxSprite.prototype.revive.call(this);
		this.group.revive();
	}
	,reset: function(X,Y) {
		this.revive();
		this.setPosition(X,Y);
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) sprite.reset(X,Y);
		}
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var dx = X - this.x;
		var dy = Y - this.y;
		this.multiTransformChildren_Float([$bind(this,this.xTransform),$bind(this,this.yTransform)],[dx,dy]);
		this._skipTransformChildren = true;
		this.set_x(X);
		this.set_y(Y);
		this._skipTransformChildren = false;
	}
	,set_cameras: function(Value) {
		if(this.get_cameras() != Value) this.transformChildren_Array_flixel_FlxCamera($bind(this,this.camerasTransform),Value);
		return flixel.FlxSprite.prototype.set_cameras.call(this,Value);
	}
	,set_exists: function(Value) {
		if(this.exists != Value) this.transformChildren_Bool($bind(this,this.existsTransform),Value);
		return flixel.FlxSprite.prototype.set_exists.call(this,Value);
	}
	,set_visible: function(Value) {
		if(this.exists && this.visible != Value) this.transformChildren_Bool($bind(this,this.visibleTransform),Value);
		return flixel.FlxSprite.prototype.set_visible.call(this,Value);
	}
	,set_active: function(Value) {
		if(this.exists && this.active != Value) this.transformChildren_Bool($bind(this,this.activeTransform),Value);
		return flixel.FlxSprite.prototype.set_active.call(this,Value);
	}
	,set_alive: function(Value) {
		if(this.exists && this.alive != Value) this.transformChildren_Bool($bind(this,this.aliveTransform),Value);
		return flixel.FlxSprite.prototype.set_alive.call(this,Value);
	}
	,set_x: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.x != Value) {
			var offset = Value - this.x;
			this.transformChildren_Float($bind(this,this.xTransform),offset);
		}
		return this.x = Value;
	}
	,set_y: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.y != Value) {
			var offset = Value - this.y;
			this.transformChildren_Float($bind(this,this.yTransform),offset);
		}
		return this.y = Value;
	}
	,set_angle: function(Value) {
		if(this.exists && this.angle != Value) {
			var offset = Value - this.angle;
			this.transformChildren_Float($bind(this,this.angleTransform),offset);
		}
		return this.angle = Value;
	}
	,set_alpha: function(Value) {
		if(Value > 1) Value = 1; else if(Value < 0) Value = 0;
		if(this.exists && this.alpha != Value) {
			var factor;
			if(this.alpha > 0) factor = Value / this.alpha; else factor = 0;
			this.transformChildren_Float($bind(this,this.alphaTransform),factor);
		}
		return this.alpha = Value;
	}
	,set_facing: function(Value) {
		if(this.exists && this.facing != Value) this.transformChildren_Int($bind(this,this.facingTransform),Value);
		return this.facing = Value;
	}
	,set_flipX: function(Value) {
		if(this.exists && this.flipX != Value) this.transformChildren_Bool($bind(this,this.flipXTransform),Value);
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(this.exists && this.flipY != Value) this.transformChildren_Bool($bind(this,this.flipYTransform),Value);
		return this.flipY = Value;
	}
	,set_moves: function(Value) {
		if(this.exists && this.moves != Value) this.transformChildren_Bool($bind(this,this.movesTransform),Value);
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		if(this.exists && this.immovable != Value) this.transformChildren_Bool($bind(this,this.immovableTransform),Value);
		return this.immovable = Value;
	}
	,set_solid: function(Value) {
		if(this.exists && (this.allowCollisions & 4369) > 0 != Value) this.transformChildren_Bool($bind(this,this.solidTransform),Value);
		return flixel.FlxSprite.prototype.set_solid.call(this,Value);
	}
	,set_color: function(Value) {
		if(this.exists && this.color != Value) this.transformChildren_Int($bind(this,this.gColorTransform),Value);
		return this.color = Value;
	}
	,set_blend: function(Value) {
		if(this.exists && this.blend != Value) this.transformChildren_flash_display_BlendMode($bind(this,this.blendTransform),Value);
		return this.blend = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		if(this.exists && this.pixelPerfectRender != Value) this.transformChildren_Bool($bind(this,this.pixelPerfectTransform),Value);
		return flixel.FlxSprite.prototype.set_pixelPerfectRender.call(this,Value);
	}
	,set_width: function(Value) {
		return Value;
	}
	,get_width: function() {
		if(this.group.length == 0) return 0;
		var minX = Math.POSITIVE_INFINITY;
		var maxX = Math.NEGATIVE_INFINITY;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			var minMemberX = member.x;
			var maxMemberX = minMemberX + member.get_width();
			if(maxMemberX > maxX) maxX = maxMemberX;
			if(minMemberX < minX) minX = minMemberX;
		}
		return maxX - minX;
	}
	,set_height: function(Value) {
		return Value;
	}
	,get_height: function() {
		if(this.group.length == 0) return 0;
		var minY = Math.POSITIVE_INFINITY;
		var maxY = Math.NEGATIVE_INFINITY;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			var minMemberY = member.y;
			var maxMemberY = minMemberY + member.get_height();
			if(maxMemberY > maxY) maxY = maxMemberY;
			if(minMemberY < minY) minY = minMemberY;
		}
		return maxY - minY;
	}
	,get_length: function() {
		return this.group.length;
	}
	,get_maxSize: function() {
		return this.group.maxSize;
	}
	,set_maxSize: function(Size) {
		return this.group.set_maxSize(Size);
	}
	,get_members: function() {
		return this.group.members;
	}
	,xTransform: function(Sprite,X) {
		var _g = Sprite;
		_g.set_x(_g.x + X);
	}
	,yTransform: function(Sprite,Y) {
		var _g = Sprite;
		_g.set_y(_g.y + Y);
	}
	,angleTransform: function(Sprite,Angle) {
		var _g = Sprite;
		_g.set_angle(_g.angle + Angle);
	}
	,alphaTransform: function(Sprite,Alpha) {
		var _g = Sprite;
		_g.set_alpha(_g.alpha * Alpha);
	}
	,facingTransform: function(Sprite,Facing) {
		Sprite.set_facing(Facing);
	}
	,flipXTransform: function(Sprite,FlipX) {
		Sprite.set_flipX(FlipX);
	}
	,flipYTransform: function(Sprite,FlipY) {
		Sprite.set_flipY(FlipY);
	}
	,movesTransform: function(Sprite,Moves) {
		Sprite.set_moves(Moves);
	}
	,pixelPerfectTransform: function(Sprite,PixelPerfect) {
		Sprite.set_pixelPerfectRender(PixelPerfect);
	}
	,gColorTransform: function(Sprite,Color) {
		Sprite.set_color(Color);
	}
	,blendTransform: function(Sprite,Blend) {
		Sprite.set_blend(Blend);
	}
	,immovableTransform: function(Sprite,Immovable) {
		Sprite.set_immovable(Immovable);
	}
	,visibleTransform: function(Sprite,Visible) {
		Sprite.set_visible(Visible);
	}
	,activeTransform: function(Sprite,Active) {
		Sprite.set_active(Active);
	}
	,solidTransform: function(Sprite,Solid) {
		Sprite.set_solid(Solid);
	}
	,aliveTransform: function(Sprite,Alive) {
		Sprite.set_alive(Alive);
	}
	,existsTransform: function(Sprite,Exists) {
		Sprite.set_exists(Exists);
	}
	,camerasTransform: function(Sprite,Cameras) {
		Sprite.set_cameras(Cameras);
	}
	,offsetTransform: function(Sprite,Offset) {
		Sprite.offset.copyFrom(Offset);
	}
	,originTransform: function(Sprite,Origin) {
		Sprite.origin.copyFrom(Origin);
	}
	,scaleTransform: function(Sprite,Scale) {
		Sprite.scale.copyFrom(Scale);
	}
	,scrollFactorTransform: function(Sprite,ScrollFactor) {
		Sprite.scrollFactor.copyFrom(ScrollFactor);
	}
	,offsetCallback: function(Offset) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.offsetTransform),Offset);
	}
	,originCallback: function(Origin) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.originTransform),Origin);
	}
	,scaleCallback: function(Scale) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.scaleTransform),Scale);
	}
	,scrollFactorCallback: function(ScrollFactor) {
		this.transformChildren_flixel_util_FlxPoint($bind(this,this.scrollFactorTransform),ScrollFactor);
	}
	,loadGraphicFromSprite: function(Sprite) {
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Animated == null) Animated = false;
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		return this;
	}
	,loadGraphicFromTexture: function(Data,Unique,FrameName) {
		if(Unique == null) Unique = false;
		return this;
	}
	,loadRotatedGraphicFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,set_pixels: function(Value) {
		return Value;
	}
	,set_frame: function(Value) {
		return Value;
	}
	,get_pixels: function() {
		return null;
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
	}
	,resetHelpers: function() {
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
	}
	,updateColorTransform: function() {
	}
	,updateFrameData: function() {
	}
	,__class__: flixel.group.FlxTypedSpriteGroup
	,__properties__: $extend(flixel.FlxSprite.prototype.__properties__,{set_maxSize:"set_maxSize",get_maxSize:"get_maxSize",get_length:"get_length",get_members:"get_members"})
});
flixel.group.FlxSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.group.FlxTypedSpriteGroup.call(this,X,Y);
	this.group.set_maxSize(MaxSize);
};
$hxClasses["flixel.group.FlxSpriteGroup"] = flixel.group.FlxSpriteGroup;
flixel.group.FlxSpriteGroup.__name__ = ["flixel","group","FlxSpriteGroup"];
flixel.group.FlxSpriteGroup.__super__ = flixel.group.FlxTypedSpriteGroup;
flixel.group.FlxSpriteGroup.prototype = $extend(flixel.group.FlxTypedSpriteGroup.prototype,{
	__class__: flixel.group.FlxSpriteGroup
});
flixel.group.FlxTypedGroupIterator = function(GroupMembers,filter) {
	this._groupMembers = GroupMembers;
	this._filter = filter;
	this._cursor = 0;
	this._length = this._groupMembers.length;
};
$hxClasses["flixel.group.FlxTypedGroupIterator"] = flixel.group.FlxTypedGroupIterator;
flixel.group.FlxTypedGroupIterator.__name__ = ["flixel","group","FlxTypedGroupIterator"];
flixel.group.FlxTypedGroupIterator.prototype = {
	_groupMembers: null
	,_filter: null
	,_cursor: null
	,_length: null
	,next: function() {
		if(this.hasNext()) return this._groupMembers[this._cursor++]; else return null;
	}
	,hasNext: function() {
		while(this._cursor < this._length && (this._groupMembers[this._cursor] == null || this._filter != null && !this._filter(this._groupMembers[this._cursor]))) this._cursor++;
		return this._cursor < this._length;
	}
	,__class__: flixel.group.FlxTypedGroupIterator
};
flixel.input = {};
flixel.input.FlxSwipe = function(ID,StartPosition,EndPosition,StartTimeInTicks) {
	this.ID = ID;
	this.startPosition = StartPosition;
	this.endPosition = EndPosition;
	this._startTimeInTicks = StartTimeInTicks;
	this._endTimeInTicks = flixel.FlxG.game.ticks;
};
$hxClasses["flixel.input.FlxSwipe"] = flixel.input.FlxSwipe;
flixel.input.FlxSwipe.__name__ = ["flixel","input","FlxSwipe"];
flixel.input.FlxSwipe.prototype = {
	ID: null
	,startPosition: null
	,endPosition: null
	,_startTimeInTicks: null
	,_endTimeInTicks: null
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("ID",this.ID),flixel.util.LabelValuePair._pool.get().create("start",this.startPosition),flixel.util.LabelValuePair._pool.get().create("end",this.endPosition),flixel.util.LabelValuePair.weak("distance",flixel.util.FlxMath.vectorLength(this.startPosition.x - this.endPosition.x,this.startPosition.y - this.endPosition.y)),flixel.util.LabelValuePair.weak("angle",flixel.util.FlxAngle.getAngle(this.startPosition,this.endPosition)),flixel.util.LabelValuePair._pool.get().create("duration",(this._endTimeInTicks - this._startTimeInTicks) / 1000)]);
	}
	,get_distance: function() {
		return flixel.util.FlxMath.vectorLength(this.startPosition.x - this.endPosition.x,this.startPosition.y - this.endPosition.y);
	}
	,get_angle: function() {
		return flixel.util.FlxAngle.getAngle(this.startPosition,this.endPosition);
	}
	,get_duration: function() {
		return this._endTimeInTicks - this._startTimeInTicks;
	}
	,__class__: flixel.input.FlxSwipe
	,__properties__: {get_duration:"get_duration",get_angle:"get_angle",get_distance:"get_distance"}
};
flixel.input.gamepad = {};
flixel.input.gamepad.FlxGamepad = function(ID,GlobalDeadZone) {
	if(GlobalDeadZone == null) GlobalDeadZone = 0;
	this.dpadRight = false;
	this.dpadLeft = false;
	this.dpadDown = false;
	this.dpadUp = false;
	this.deadZone = 0.15;
	this.buttons = [];
	var _g = [];
	var _g1 = 0;
	while(_g1 < 6) {
		var i = _g1++;
		_g.push(0);
	}
	this.axis = _g;
	this.id = ID;
	if(GlobalDeadZone != 0) this.deadZone = GlobalDeadZone;
	this.ball = flixel.util.FlxPoint.get(null,null);
	this.hat = flixel.util.FlxPoint.get(null,null);
};
$hxClasses["flixel.input.gamepad.FlxGamepad"] = flixel.input.gamepad.FlxGamepad;
flixel.input.gamepad.FlxGamepad.__name__ = ["flixel","input","gamepad","FlxGamepad"];
flixel.input.gamepad.FlxGamepad.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.input.gamepad.FlxGamepad.prototype = {
	id: null
	,buttons: null
	,deadZone: null
	,hat: null
	,ball: null
	,dpadUp: null
	,dpadDown: null
	,dpadLeft: null
	,dpadRight: null
	,axis: null
	,getButton: function(ButtonID) {
		var gamepadButton = this.buttons[ButtonID];
		if(gamepadButton == null) {
			gamepadButton = new flixel.input.gamepad.FlxGamepadButton(ButtonID);
			this.buttons[ButtonID] = gamepadButton;
		}
		return gamepadButton;
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button == null) return;
			if(button.last == -1 && button.current == -1) button.current = 0; else if(button.last == 2 && button.current == 2) button.current = 1;
			button.last = button.current;
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null) {
				button.current = 0;
				button.last = 0;
			}
		}
		var numAxis = this.axis.length;
		var _g2 = 0;
		while(_g2 < numAxis) {
			var i = _g2++;
			this.axis[i] = 0;
		}
		this.hat.set();
		this.ball.set();
	}
	,destroy: function() {
		this.buttons = null;
		this.axis = null;
		this.hat = flixel.util.FlxDestroyUtil.put(this.hat);
		this.ball = flixel.util.FlxDestroyUtil.put(this.ball);
		this.hat = null;
		this.ball = null;
	}
	,checkStatus: function(ButtonID,Status) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == Status;
		return false;
	}
	,anyPressed: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current == 1) return true;
			}
		}
		return false;
	}
	,anyJustPressed: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current == 2) return true;
			}
		}
		return false;
	}
	,anyJustReleased: function(ButtonIDArray) {
		var _g = 0;
		while(_g < ButtonIDArray.length) {
			var b = ButtonIDArray[_g];
			++_g;
			if(this.buttons[b] != null) {
				if(this.buttons[b].current == -1) return true;
			}
		}
		return false;
	}
	,pressed: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current > 0;
		return false;
	}
	,justPressed: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == 2;
		return false;
	}
	,justReleased: function(ButtonID) {
		if(this.buttons[ButtonID] != null) return this.buttons[ButtonID].current == -1;
		return false;
	}
	,firstPressedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current > 0) return button.id;
		}
		return -1;
	}
	,firstJustPressedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current == 2) return button.id;
		}
		return -1;
	}
	,firstJustReleasedButtonID: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current == -1) return button.id;
		}
		return -1;
	}
	,getAxis: function(AxisID) {
		return this.getAxisValue(AxisID);
	}
	,getXAxis: function(AxisID) {
		return this.getAxisValue(AxisID);
	}
	,getYAxis: function(AxisID) {
		var axisValue = this.getAxisValue(AxisID);
		return axisValue;
	}
	,anyButton: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			if(button != null && button.current > 0) return true;
		}
		return false;
	}
	,anyInput: function() {
		if(this.anyButton()) return true;
		var numAxis = this.axis.length;
		var _g = 0;
		while(_g < numAxis) {
			var i = _g++;
			if(this.axis[0] != 0) return true;
		}
		if(this.ball.x != 0 || this.ball.y != 0) return true;
		if(this.hat.x != 0 || this.hat.y != 0) return true;
		return false;
	}
	,getAxisValue: function(AxisID) {
		if(AxisID < 0 || AxisID >= this.axis.length) return 0;
		var axisValue = 0;
		axisValue = this.axis[AxisID];
		if(Math.abs(axisValue) > this.deadZone) return axisValue;
		return 0;
	}
	,get_dpadUp: function() {
		return this.hat.y < 0;
	}
	,get_dpadDown: function() {
		return this.hat.y > 0;
	}
	,get_dpadLeft: function() {
		return this.hat.x < 0;
	}
	,get_dpadRight: function() {
		return this.hat.x > 0;
	}
	,__class__: flixel.input.gamepad.FlxGamepad
	,__properties__: {get_dpadRight:"get_dpadRight",get_dpadLeft:"get_dpadLeft",get_dpadDown:"get_dpadDown",get_dpadUp:"get_dpadUp"}
};
flixel.input.gamepad.FlxGamepadButton = function(ID,Current,Last) {
	if(Last == null) Last = 0;
	if(Current == null) Current = 0;
	this.id = ID;
	this.current = Current;
	this.last = Last;
};
$hxClasses["flixel.input.gamepad.FlxGamepadButton"] = flixel.input.gamepad.FlxGamepadButton;
flixel.input.gamepad.FlxGamepadButton.__name__ = ["flixel","input","gamepad","FlxGamepadButton"];
flixel.input.gamepad.FlxGamepadButton.prototype = {
	id: null
	,current: null
	,last: null
	,reset: function() {
		this.current = 0;
		this.last = 0;
	}
	,release: function() {
		this.last = this.current;
		if(this.current > 0) this.current = -1; else this.current = 0;
	}
	,press: function() {
		this.last = this.current;
		if(this.current > 0) this.current = 1; else this.current = 2;
	}
	,__class__: flixel.input.gamepad.FlxGamepadButton
};
flixel.interfaces.IFlxInput = function() { };
$hxClasses["flixel.interfaces.IFlxInput"] = flixel.interfaces.IFlxInput;
flixel.interfaces.IFlxInput.__name__ = ["flixel","interfaces","IFlxInput"];
flixel.interfaces.IFlxInput.prototype = {
	reset: null
	,update: null
	,onFocus: null
	,onFocusLost: null
	,destroy: null
	,__class__: flixel.interfaces.IFlxInput
};
flixel.input.gamepad.FlxGamepadManager = function() {
	this.globalDeadZone = 0;
	this._gamepads = [];
};
$hxClasses["flixel.input.gamepad.FlxGamepadManager"] = flixel.input.gamepad.FlxGamepadManager;
flixel.input.gamepad.FlxGamepadManager.__name__ = ["flixel","input","gamepad","FlxGamepadManager"];
flixel.input.gamepad.FlxGamepadManager.__interfaces__ = [flixel.interfaces.IFlxInput];
flixel.input.gamepad.FlxGamepadManager.prototype = {
	firstActive: null
	,lastActive: null
	,numActiveGamepads: null
	,globalDeadZone: null
	,_gamepads: null
	,getByID: function(GamepadID) {
		var gamepad = this._gamepads[GamepadID];
		if(gamepad == null) {
			gamepad = new flixel.input.gamepad.FlxGamepad(GamepadID,this.globalDeadZone);
			this._gamepads[GamepadID] = gamepad;
			this.lastActive = gamepad;
			if(this.firstActive == null) this.firstActive = gamepad;
		}
		return gamepad;
	}
	,getActiveGamepadIDs: function(IDsArray) {
		if(IDsArray == null) IDsArray = [];
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) IDsArray.push(gamepad.id);
		}
		return IDsArray;
	}
	,getActiveGamepads: function(GamepadArray) {
		if(GamepadArray == null) GamepadArray = [];
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) GamepadArray.push(gamepad);
		}
		return GamepadArray;
	}
	,getFirstActiveGamepadID: function() {
		var firstActive = this.getFirstActiveGamepad();
		if(firstActive == null) return -1; else return firstActive.id;
	}
	,getFirstActiveGamepad: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) return gamepad;
		}
		return null;
	}
	,anyButton: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyButton()) return true;
		}
		return false;
	}
	,anyInput: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.anyInput()) return true;
		}
		return false;
	}
	,anyPressed: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.pressed(ButtonID)) return true;
		}
		return false;
	}
	,anyJustPressed: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.justPressed(ButtonID)) return true;
		}
		return false;
	}
	,anyJustReleased: function(ButtonID) {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null && gamepad.justReleased(ButtonID)) return true;
		}
		return false;
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			gamepad = flixel.util.FlxDestroyUtil.destroy(gamepad);
		}
		this.firstActive = null;
		this.lastActive = null;
		this._gamepads = null;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.reset();
		}
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.update();
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,get_numActiveGamepads: function() {
		var count = 0;
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) count++;
		}
		return count;
	}
	,set_globalDeadZone: function(DeadZone) {
		this.globalDeadZone = DeadZone;
		var _g = 0;
		var _g1 = this._gamepads;
		while(_g < _g1.length) {
			var gamepad = _g1[_g];
			++_g;
			if(gamepad != null) gamepad.deadZone = DeadZone;
		}
		return this.globalDeadZone;
	}
	,__class__: flixel.input.gamepad.FlxGamepadManager
	,__properties__: {set_globalDeadZone:"set_globalDeadZone",get_numActiveGamepads:"get_numActiveGamepads"}
};
flixel.input.keyboard = {};
flixel.input.keyboard.FlxKey = function(Name) {
	this.last = 0;
	this.current = 0;
	this.name = Name;
};
$hxClasses["flixel.input.keyboard.FlxKey"] = flixel.input.keyboard.FlxKey;
flixel.input.keyboard.FlxKey.__name__ = ["flixel","input","keyboard","FlxKey"];
flixel.input.keyboard.FlxKey.prototype = {
	name: null
	,current: null
	,last: null
	,__class__: flixel.input.keyboard.FlxKey
};
flixel.input.keyboard.FlxKeyList = function(CheckStatus) {
	this.checkStatus = CheckStatus;
};
$hxClasses["flixel.input.keyboard.FlxKeyList"] = flixel.input.keyboard.FlxKeyList;
flixel.input.keyboard.FlxKeyList.__name__ = ["flixel","input","keyboard","FlxKeyList"];
flixel.input.keyboard.FlxKeyList.prototype = {
	checkStatus: null
	,get_A: function() {
		return flixel.FlxG.keys.checkStatus(65,this.checkStatus);
	}
	,get_B: function() {
		return flixel.FlxG.keys.checkStatus(66,this.checkStatus);
	}
	,get_C: function() {
		return flixel.FlxG.keys.checkStatus(67,this.checkStatus);
	}
	,get_D: function() {
		return flixel.FlxG.keys.checkStatus(68,this.checkStatus);
	}
	,get_E: function() {
		return flixel.FlxG.keys.checkStatus(69,this.checkStatus);
	}
	,get_F: function() {
		return flixel.FlxG.keys.checkStatus(70,this.checkStatus);
	}
	,get_G: function() {
		return flixel.FlxG.keys.checkStatus(71,this.checkStatus);
	}
	,get_H: function() {
		return flixel.FlxG.keys.checkStatus(72,this.checkStatus);
	}
	,get_I: function() {
		return flixel.FlxG.keys.checkStatus(73,this.checkStatus);
	}
	,get_J: function() {
		return flixel.FlxG.keys.checkStatus(74,this.checkStatus);
	}
	,get_K: function() {
		return flixel.FlxG.keys.checkStatus(75,this.checkStatus);
	}
	,get_L: function() {
		return flixel.FlxG.keys.checkStatus(76,this.checkStatus);
	}
	,get_M: function() {
		return flixel.FlxG.keys.checkStatus(77,this.checkStatus);
	}
	,get_N: function() {
		return flixel.FlxG.keys.checkStatus(78,this.checkStatus);
	}
	,get_O: function() {
		return flixel.FlxG.keys.checkStatus(79,this.checkStatus);
	}
	,get_P: function() {
		return flixel.FlxG.keys.checkStatus(80,this.checkStatus);
	}
	,get_Q: function() {
		return flixel.FlxG.keys.checkStatus(81,this.checkStatus);
	}
	,get_R: function() {
		return flixel.FlxG.keys.checkStatus(82,this.checkStatus);
	}
	,get_S: function() {
		return flixel.FlxG.keys.checkStatus(83,this.checkStatus);
	}
	,get_T: function() {
		return flixel.FlxG.keys.checkStatus(84,this.checkStatus);
	}
	,get_U: function() {
		return flixel.FlxG.keys.checkStatus(85,this.checkStatus);
	}
	,get_V: function() {
		return flixel.FlxG.keys.checkStatus(86,this.checkStatus);
	}
	,get_W: function() {
		return flixel.FlxG.keys.checkStatus(87,this.checkStatus);
	}
	,get_X: function() {
		return flixel.FlxG.keys.checkStatus(88,this.checkStatus);
	}
	,get_Y: function() {
		return flixel.FlxG.keys.checkStatus(89,this.checkStatus);
	}
	,get_Z: function() {
		return flixel.FlxG.keys.checkStatus(90,this.checkStatus);
	}
	,get_ZERO: function() {
		return flixel.FlxG.keys.checkStatus(48,this.checkStatus);
	}
	,get_ONE: function() {
		return flixel.FlxG.keys.checkStatus(49,this.checkStatus);
	}
	,get_TWO: function() {
		return flixel.FlxG.keys.checkStatus(50,this.checkStatus);
	}
	,get_THREE: function() {
		return flixel.FlxG.keys.checkStatus(51,this.checkStatus);
	}
	,get_FOUR: function() {
		return flixel.FlxG.keys.checkStatus(52,this.checkStatus);
	}
	,get_FIVE: function() {
		return flixel.FlxG.keys.checkStatus(53,this.checkStatus);
	}
	,get_SIX: function() {
		return flixel.FlxG.keys.checkStatus(54,this.checkStatus);
	}
	,get_SEVEN: function() {
		return flixel.FlxG.keys.checkStatus(55,this.checkStatus);
	}
	,get_EIGHT: function() {
		return flixel.FlxG.keys.checkStatus(56,this.checkStatus);
	}
	,get_NINE: function() {
		return flixel.FlxG.keys.checkStatus(57,this.checkStatus);
	}
	,get_PAGEUP: function() {
		return flixel.FlxG.keys.checkStatus(33,this.checkStatus);
	}
	,get_PAGEDOWN: function() {
		return flixel.FlxG.keys.checkStatus(34,this.checkStatus);
	}
	,get_HOME: function() {
		return flixel.FlxG.keys.checkStatus(36,this.checkStatus);
	}
	,get_END: function() {
		return flixel.FlxG.keys.checkStatus(35,this.checkStatus);
	}
	,get_INSERT: function() {
		return flixel.FlxG.keys.checkStatus(45,this.checkStatus);
	}
	,get_ESCAPE: function() {
		return flixel.FlxG.keys.checkStatus(27,this.checkStatus);
	}
	,get_MINUS: function() {
		return flixel.FlxG.keys.checkStatus(189,this.checkStatus);
	}
	,get_PLUS: function() {
		return flixel.FlxG.keys.checkStatus(187,this.checkStatus);
	}
	,get_DELETE: function() {
		return flixel.FlxG.keys.checkStatus(46,this.checkStatus);
	}
	,get_BACKSPACE: function() {
		return flixel.FlxG.keys.checkStatus(8,this.checkStatus);
	}
	,get_LBRACKET: function() {
		return flixel.FlxG.keys.checkStatus(219,this.checkStatus);
	}
	,get_RBRACKET: function() {
		return flixel.FlxG.keys.checkStatus(221,this.checkStatus);
	}
	,get_BACKSLASH: function() {
		return flixel.FlxG.keys.checkStatus(220,this.checkStatus);
	}
	,get_CAPSLOCK: function() {
		return flixel.FlxG.keys.checkStatus(20,this.checkStatus);
	}
	,get_SEMICOLON: function() {
		return flixel.FlxG.keys.checkStatus(186,this.checkStatus);
	}
	,get_QUOTE: function() {
		return flixel.FlxG.keys.checkStatus(222,this.checkStatus);
	}
	,get_ENTER: function() {
		return flixel.FlxG.keys.checkStatus(13,this.checkStatus);
	}
	,get_SHIFT: function() {
		return flixel.FlxG.keys.checkStatus(16,this.checkStatus);
	}
	,get_COMMA: function() {
		return flixel.FlxG.keys.checkStatus(188,this.checkStatus);
	}
	,get_PERIOD: function() {
		return flixel.FlxG.keys.checkStatus(190,this.checkStatus);
	}
	,get_SLASH: function() {
		return flixel.FlxG.keys.checkStatus(191,this.checkStatus);
	}
	,get_NUMPADSLASH: function() {
		return flixel.FlxG.keys.checkStatus(191,this.checkStatus);
	}
	,get_GRAVEACCENT: function() {
		return flixel.FlxG.keys.checkStatus(192,this.checkStatus);
	}
	,get_CONTROL: function() {
		return flixel.FlxG.keys.checkStatus(17,this.checkStatus);
	}
	,get_ALT: function() {
		return flixel.FlxG.keys.checkStatus(18,this.checkStatus);
	}
	,get_SPACE: function() {
		return flixel.FlxG.keys.checkStatus(32,this.checkStatus);
	}
	,get_UP: function() {
		return flixel.FlxG.keys.checkStatus(38,this.checkStatus);
	}
	,get_DOWN: function() {
		return flixel.FlxG.keys.checkStatus(40,this.checkStatus);
	}
	,get_LEFT: function() {
		return flixel.FlxG.keys.checkStatus(37,this.checkStatus);
	}
	,get_RIGHT: function() {
		return flixel.FlxG.keys.checkStatus(39,this.checkStatus);
	}
	,get_TAB: function() {
		return flixel.FlxG.keys.checkStatus(9,this.checkStatus);
	}
	,get_PRINTSCREEN: function() {
		return flixel.FlxG.keys.checkStatus(301,this.checkStatus);
	}
	,get_F1: function() {
		return flixel.FlxG.keys.checkStatus(112,this.checkStatus);
	}
	,get_F2: function() {
		return flixel.FlxG.keys.checkStatus(113,this.checkStatus);
	}
	,get_F3: function() {
		return flixel.FlxG.keys.checkStatus(114,this.checkStatus);
	}
	,get_F4: function() {
		return flixel.FlxG.keys.checkStatus(115,this.checkStatus);
	}
	,get_F5: function() {
		return flixel.FlxG.keys.checkStatus(116,this.checkStatus);
	}
	,get_F6: function() {
		return flixel.FlxG.keys.checkStatus(117,this.checkStatus);
	}
	,get_F7: function() {
		return flixel.FlxG.keys.checkStatus(118,this.checkStatus);
	}
	,get_F8: function() {
		return flixel.FlxG.keys.checkStatus(119,this.checkStatus);
	}
	,get_F9: function() {
		return flixel.FlxG.keys.checkStatus(120,this.checkStatus);
	}
	,get_F10: function() {
		return flixel.FlxG.keys.checkStatus(121,this.checkStatus);
	}
	,get_F11: function() {
		return flixel.FlxG.keys.checkStatus(122,this.checkStatus);
	}
	,get_F12: function() {
		return flixel.FlxG.keys.checkStatus(123,this.checkStatus);
	}
	,get_NUMPADONE: function() {
		return flixel.FlxG.keys.checkStatus(97,this.checkStatus);
	}
	,get_NUMPADTWO: function() {
		return flixel.FlxG.keys.checkStatus(98,this.checkStatus);
	}
	,get_NUMPADTHREE: function() {
		return flixel.FlxG.keys.checkStatus(99,this.checkStatus);
	}
	,get_NUMPADFOUR: function() {
		return flixel.FlxG.keys.checkStatus(100,this.checkStatus);
	}
	,get_NUMPADFIVE: function() {
		return flixel.FlxG.keys.checkStatus(101,this.checkStatus);
	}
	,get_NUMPADSIX: function() {
		return flixel.FlxG.keys.checkStatus(102,this.checkStatus);
	}
	,get_NUMPADSEVEN: function() {
		return flixel.FlxG.keys.checkStatus(103,this.checkStatus);
	}
	,get_NUMPADEIGHT: function() {
		return flixel.FlxG.keys.checkStatus(104,this.checkStatus);
	}
	,get_NUMPADNINE: function() {
		return flixel.FlxG.keys.checkStatus(105,this.checkStatus);
	}
	,get_NUMPADZERO: function() {
		return flixel.FlxG.keys.checkStatus(96,this.checkStatus);
	}
	,get_NUMPADMINUS: function() {
		return flixel.FlxG.keys.checkStatus(109,this.checkStatus);
	}
	,get_NUMPADPLUS: function() {
		return flixel.FlxG.keys.checkStatus(107,this.checkStatus);
	}
	,get_NUMPADPERIOD: function() {
		return flixel.FlxG.keys.checkStatus(110,this.checkStatus);
	}
	,get_NUMPADMULTIPLY: function() {
		return flixel.FlxG.keys.checkStatus(106,this.checkStatus);
	}
	,get_ANY: function() {
		var key = null;
		var keyCode = 256;
		while(keyCode-- >= 0) {
			key = flixel.FlxG.keys._keyList[keyCode];
			if(key != null) {
				if(flixel.FlxG.keys.checkStatus(keyCode,this.checkStatus)) return true;
			}
		}
		return false;
	}
	,check: function(keyCode) {
		return flixel.FlxG.keys.checkStatus(keyCode,this.checkStatus);
	}
	,__class__: flixel.input.keyboard.FlxKeyList
	,__properties__: {get_ANY:"get_ANY",get_NUMPADMULTIPLY:"get_NUMPADMULTIPLY",get_NUMPADPERIOD:"get_NUMPADPERIOD",get_NUMPADPLUS:"get_NUMPADPLUS",get_NUMPADMINUS:"get_NUMPADMINUS",get_NUMPADZERO:"get_NUMPADZERO",get_NUMPADNINE:"get_NUMPADNINE",get_NUMPADEIGHT:"get_NUMPADEIGHT",get_NUMPADSEVEN:"get_NUMPADSEVEN",get_NUMPADSIX:"get_NUMPADSIX",get_NUMPADFIVE:"get_NUMPADFIVE",get_NUMPADFOUR:"get_NUMPADFOUR",get_NUMPADTHREE:"get_NUMPADTHREE",get_NUMPADTWO:"get_NUMPADTWO",get_NUMPADONE:"get_NUMPADONE",get_F12:"get_F12",get_F11:"get_F11",get_F10:"get_F10",get_F9:"get_F9",get_F8:"get_F8",get_F7:"get_F7",get_F6:"get_F6",get_F5:"get_F5",get_F4:"get_F4",get_F3:"get_F3",get_F2:"get_F2",get_F1:"get_F1",get_PRINTSCREEN:"get_PRINTSCREEN",get_TAB:"get_TAB",get_RIGHT:"get_RIGHT",get_LEFT:"get_LEFT",get_DOWN:"get_DOWN",get_UP:"get_UP",get_SPACE:"get_SPACE",get_ALT:"get_ALT",get_CONTROL:"get_CONTROL",get_GRAVEACCENT:"get_GRAVEACCENT",get_NUMPADSLASH:"get_NUMPADSLASH",get_SLASH:"get_SLASH",get_PERIOD:"get_PERIOD",get_COMMA:"get_COMMA",get_SHIFT:"get_SHIFT",get_ENTER:"get_ENTER",get_QUOTE:"get_QUOTE",get_SEMICOLON:"get_SEMICOLON",get_CAPSLOCK:"get_CAPSLOCK",get_BACKSLASH:"get_BACKSLASH",get_RBRACKET:"get_RBRACKET",get_LBRACKET:"get_LBRACKET",get_BACKSPACE:"get_BACKSPACE",get_DELETE:"get_DELETE",get_PLUS:"get_PLUS",get_MINUS:"get_MINUS",get_ESCAPE:"get_ESCAPE",get_INSERT:"get_INSERT",get_END:"get_END",get_HOME:"get_HOME",get_PAGEDOWN:"get_PAGEDOWN",get_PAGEUP:"get_PAGEUP",get_NINE:"get_NINE",get_EIGHT:"get_EIGHT",get_SEVEN:"get_SEVEN",get_SIX:"get_SIX",get_FIVE:"get_FIVE",get_FOUR:"get_FOUR",get_THREE:"get_THREE",get_TWO:"get_TWO",get_ONE:"get_ONE",get_ZERO:"get_ZERO",get_Z:"get_Z",get_Y:"get_Y",get_X:"get_X",get_W:"get_W",get_V:"get_V",get_U:"get_U",get_T:"get_T",get_S:"get_S",get_R:"get_R",get_Q:"get_Q",get_P:"get_P",get_O:"get_O",get_N:"get_N",get_M:"get_M",get_L:"get_L",get_K:"get_K",get_J:"get_J",get_I:"get_I",get_H:"get_H",get_G:"get_G",get_F:"get_F",get_E:"get_E",get_D:"get_D",get_C:"get_C",get_B:"get_B",get_A:"get_A"}
};
flixel.input.keyboard.FlxKeyboard = function() {
	this.enabled = true;
	this._keyLookup = new haxe.ds.StringMap();
	this._keyList = new Array();
	flixel.util.FlxArrayUtil.setLength_flixel_input_keyboard_FlxKey(this._keyList,256);
	var i;
	i = 65;
	while(i <= 90) {
		this.addKey(String.fromCharCode(i),i);
		i++;
	}
	i = 48;
	this.addKey("ZERO",i++);
	this.addKey("ONE",i++);
	this.addKey("TWO",i++);
	this.addKey("THREE",i++);
	this.addKey("FOUR",i++);
	this.addKey("FIVE",i++);
	this.addKey("SIX",i++);
	this.addKey("SEVEN",i++);
	this.addKey("EIGHT",i++);
	this.addKey("NINE",i++);
	i = 96;
	this.addKey("NUMPADZERO",i++);
	this.addKey("NUMPADONE",i++);
	this.addKey("NUMPADTWO",i++);
	this.addKey("NUMPADTHREE",i++);
	this.addKey("NUMPADFOUR",i++);
	this.addKey("NUMPADFIVE",i++);
	this.addKey("NUMPADSIX",i++);
	this.addKey("NUMPADSEVEN",i++);
	this.addKey("NUMPADEIGHT",i++);
	this.addKey("NUMPADNINE",i++);
	this.addKey("PAGEUP",33);
	this.addKey("PAGEDOWN",34);
	this.addKey("HOME",36);
	this.addKey("END",35);
	this.addKey("INSERT",45);
	i = 1;
	while(i <= 12) {
		this.addKey("F" + i,111 + i);
		i++;
	}
	this.addKey("ESCAPE",27);
	this.addKey("MINUS",189);
	this.addKey("PLUS",187);
	this.addKey("DELETE",46);
	this.addKey("BACKSPACE",8);
	this.addKey("LBRACKET",219);
	this.addKey("RBRACKET",221);
	this.addKey("BACKSLASH",220);
	this.addKey("CAPSLOCK",20);
	this.addKey("SEMICOLON",186);
	this.addKey("QUOTE",222);
	this.addKey("ENTER",13);
	this.addKey("SHIFT",16);
	this.addKey("COMMA",188);
	this.addKey("PERIOD",190);
	this.addKey("SLASH",191);
	this.addKey("NUMPADSLASH",191);
	this.addKey("GRAVEACCENT",192);
	this.addKey("CONTROL",17);
	this.addKey("ALT",18);
	this.addKey("SPACE",32);
	this.addKey("UP",38);
	this.addKey("DOWN",40);
	this.addKey("LEFT",37);
	this.addKey("RIGHT",39);
	this.addKey("TAB",9);
	this.addKey("PRINTSCREEN",301);
	this.addKey("NUMPADMULTIPLY",106);
	this.addKey("NUMPADMINUS",109);
	this.addKey("NUMPADPLUS",107);
	this.addKey("NUMPADPERIOD",110);
	flash.Lib.current.stage.addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyDown));
	flash.Lib.current.stage.addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
	this.pressed = new flixel.input.keyboard.FlxKeyList(1);
	this.justPressed = new flixel.input.keyboard.FlxKeyList(2);
	this.justReleased = new flixel.input.keyboard.FlxKeyList(-1);
};
$hxClasses["flixel.input.keyboard.FlxKeyboard"] = flixel.input.keyboard.FlxKeyboard;
flixel.input.keyboard.FlxKeyboard.__name__ = ["flixel","input","keyboard","FlxKeyboard"];
flixel.input.keyboard.FlxKeyboard.__interfaces__ = [flixel.interfaces.IFlxInput];
flixel.input.keyboard.FlxKeyboard.prototype = {
	enabled: null
	,pressed: null
	,justPressed: null
	,justReleased: null
	,_keyList: null
	,_keyLookup: null
	,anyPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,1);
	}
	,anyJustPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,2);
	}
	,anyJustReleased: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,-1);
	}
	,firstPressed: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == 1) return key.name;
		}
		return "";
	}
	,firstJustPressed: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == 2) return key.name;
		}
		return "";
	}
	,firstJustReleased: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current == -1) return key.name;
		}
		return "";
	}
	,checkStatus: function(KeyCode,Status) {
		var k = this._keyList[KeyCode];
		if(k != null) {
			if(k.current == Status) return true; else if(Status == 1 && k.current == 2) return true; else if(Status == 0 && k.current == -1) return true;
		}
		return false;
	}
	,getKeyCode: function(KeyName) {
		return this._keyLookup.get(KeyName);
	}
	,getIsDown: function() {
		var keysDown = new Array();
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current > 0) keysDown.push(key);
		}
		return keysDown;
	}
	,destroy: function() {
		this._keyList = null;
		this._keyLookup = null;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null) {
				key.current = 0;
				key.last = 0;
			}
		}
	}
	,addKey: function(KeyName,KeyCode) {
		this._keyLookup.set(KeyName,KeyCode);
		this._keyList[KeyCode] = new flixel.input.keyboard.FlxKey(KeyName);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key == null) continue;
			if(key.last == -1 && key.current == -1) key.current = 0; else if(key.last == 2 && key.current == 2) key.current = 1;
			key.last = key.current;
		}
	}
	,checkKeyStatus: function(KeyArray,Status) {
		if(KeyArray == null) return false;
		var _g = 0;
		while(_g < KeyArray.length) {
			var code = KeyArray[_g];
			++_g;
			var key;
			code = code.toUpperCase();
			key = this._keyList[this._keyLookup.get(code)];
			if(key != null) {
				if(key.current == Status) return true; else if(Status == 1 && key.current == 2) return true; else if(Status == 0 && key.current == -1) return true;
			}
		}
		return false;
	}
	,onKeyUp: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(!this.enabled) return;
		if(this.inKeyArray(flixel.FlxG.sound.muteKeys,c)) {
			flixel.FlxG.sound.muted = !flixel.FlxG.sound.muted;
			if(flixel.FlxG.sound.volumeHandler != null) flixel.FlxG.sound.volumeHandler(flixel.FlxG.sound.muted?0:flixel.FlxG.sound.volume);
			if(flixel.FlxG.game.soundTray != null && flixel.FlxG.sound.soundTrayEnabled) flixel.FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel.FlxG.sound.volumeDownKeys,c)) {
			flixel.FlxG.sound.muted = false;
			var _g = flixel.FlxG.sound;
			_g.set_volume(_g.volume - 0.1);
			if(flixel.FlxG.game.soundTray != null && flixel.FlxG.sound.soundTrayEnabled) flixel.FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel.FlxG.sound.volumeUpKeys,c)) {
			flixel.FlxG.sound.muted = false;
			var _g1 = flixel.FlxG.sound;
			_g1.set_volume(_g1.volume + 0.1);
			if(flixel.FlxG.game.soundTray != null && flixel.FlxG.sound.soundTrayEnabled) flixel.FlxG.game.soundTray.show();
		}
		this.updateKeyStates(c,false);
	}
	,onKeyDown: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(this.enabled) this.updateKeyStates(c,true);
	}
	,inKeyArray: function(KeyArray,KeyCode) {
		if(KeyArray == null) return false; else {
			var _g = 0;
			while(_g < KeyArray.length) {
				var keyString = KeyArray[_g];
				++_g;
				if(keyString == "ANY" || this._keyLookup.get(keyString) == KeyCode) return true;
			}
		}
		return false;
	}
	,resolveKeyCode: function(e) {
		return e.keyCode;
	}
	,updateKeyStates: function(KeyCode,Down) {
		var obj = this._keyList[KeyCode];
		if(obj != null) {
			if(obj.current > 0) {
				if(Down) obj.current = 1; else obj.current = -1;
			} else if(Down) obj.current = 2; else obj.current = 0;
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,record: function() {
		var data = null;
		var i = 0;
		while(i < 256) {
			var key = this._keyList[i++];
			if(key == null || key.current == 0) continue;
			if(data == null) data = new Array();
			data.push(new flixel.system.replay.CodeValuePair(i - 1,key.current));
		}
		return data;
	}
	,playback: function(Record) {
		var i = 0;
		var l = Record.length;
		var o;
		var o2;
		while(i < l) {
			o = Record[i++];
			o2 = this._keyList[o.code];
			o2.current = o.value;
		}
	}
	,__class__: flixel.input.keyboard.FlxKeyboard
};
flixel.input.mouse = {};
flixel.input.mouse._FlxMouse = {};
flixel.input.mouse._FlxMouse.GraphicCursor = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.input.mouse._FlxMouse.GraphicCursor.preload != null) {
		this.__sourceImage = flixel.input.mouse._FlxMouse.GraphicCursor.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.input.mouse._FlxMouse.GraphicCursor.resourceName),flixel.input.mouse._FlxMouse.GraphicCursor.resourceType,function(b) {
		if(flixel.input.mouse._FlxMouse.GraphicCursor.preload == null) flixel.input.mouse._FlxMouse.GraphicCursor.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.input.mouse._FlxMouse.GraphicCursor"] = flixel.input.mouse._FlxMouse.GraphicCursor;
flixel.input.mouse._FlxMouse.GraphicCursor.__name__ = ["flixel","input","mouse","_FlxMouse","GraphicCursor"];
flixel.input.mouse._FlxMouse.GraphicCursor.preload = null;
flixel.input.mouse._FlxMouse.GraphicCursor.__super__ = flash.display.BitmapData;
flixel.input.mouse._FlxMouse.GraphicCursor.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.input.mouse._FlxMouse.GraphicCursor
});
flixel.input.mouse.FlxMouse = function(CursorContainer) {
	this._lastWheel = 0;
	this._lastY = 0;
	this._lastX = 0;
	this._visibleWhenFocusLost = true;
	this._wheelUsed = false;
	this._cursor = null;
	this.useSystemCursor = false;
	this.visible = true;
	this.screenY = 0;
	this.screenX = 0;
	this.wheel = 0;
	flixel.util.FlxPoint.call(this);
	this.cursorContainer = CursorContainer;
	this.cursorContainer.mouseChildren = false;
	this.cursorContainer.mouseEnabled = false;
	this._point = flixel.util.FlxPoint.get(null,null);
	this._globalScreenPosition = flixel.util.FlxPoint.get(null,null);
	this._leftButton = new flixel.input.mouse.FlxMouseButton(-1);
	this._stage = flash.Lib.current.stage;
	this._stage.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,($_=this._leftButton,$bind($_,$_.onDown)));
	this._stage.addEventListener(flash.events.MouseEvent.MOUSE_UP,($_=this._leftButton,$bind($_,$_.onUp)));
	this._middleButton = new flixel.input.mouse.FlxMouseButton(-2);
	this._rightButton = new flixel.input.mouse.FlxMouseButton(-3);
	this._stage.addEventListener(flash.events.MouseEvent.MIDDLE_MOUSE_DOWN,($_=this._middleButton,$bind($_,$_.onDown)));
	this._stage.addEventListener(flash.events.MouseEvent.MIDDLE_MOUSE_UP,($_=this._middleButton,$bind($_,$_.onUp)));
	this._stage.addEventListener(flash.events.MouseEvent.RIGHT_MOUSE_DOWN,($_=this._rightButton,$bind($_,$_.onDown)));
	this._stage.addEventListener(flash.events.MouseEvent.RIGHT_MOUSE_UP,($_=this._rightButton,$bind($_,$_.onUp)));
	this._stage.addEventListener(flash.events.Event.MOUSE_LEAVE,$bind(this,this.onMouseLeave));
	this._stage.addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this.onMouseWheel));
	flixel.FlxG.signals.gameStarted.add($bind(this,this.onGameStart));
	flash.ui.Mouse.hide();
};
$hxClasses["flixel.input.mouse.FlxMouse"] = flixel.input.mouse.FlxMouse;
flixel.input.mouse.FlxMouse.__name__ = ["flixel","input","mouse","FlxMouse"];
flixel.input.mouse.FlxMouse.__interfaces__ = [flixel.interfaces.IFlxInput];
flixel.input.mouse.FlxMouse.__super__ = flixel.util.FlxPoint;
flixel.input.mouse.FlxMouse.prototype = $extend(flixel.util.FlxPoint.prototype,{
	wheel: null
	,screenX: null
	,screenY: null
	,cursorContainer: null
	,visible: null
	,useSystemCursor: null
	,_leftButton: null
	,_middleButton: null
	,_rightButton: null
	,_cursor: null
	,_cursorBitmapData: null
	,_wheelUsed: null
	,_visibleWhenFocusLost: null
	,_lastX: null
	,_lastY: null
	,_lastWheel: null
	,_point: null
	,_globalScreenPosition: null
	,_stage: null
	,load: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		if(this._cursor != null) this.cursorContainer.removeChild(this._cursor);
		if(Graphic == null) Graphic = new flixel.input.mouse._FlxMouse.GraphicCursor(0,0);
		if(js.Boot.__instanceof(Graphic,Class)) this._cursor = Type.createInstance(Graphic,[]); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) this._cursor = new flash.display.Bitmap(js.Boot.__cast(Graphic , flash.display.BitmapData)); else if(typeof(Graphic) == "string") this._cursor = new flash.display.Bitmap(flixel.system.FlxAssets.getBitmapData(Graphic)); else this._cursor = new flash.display.Bitmap(new flixel.input.mouse._FlxMouse.GraphicCursor(0,0));
		this._cursor.set_x(XOffset);
		this._cursor.set_y(YOffset);
		this._cursor.set_scaleX(Scale);
		this._cursor.set_scaleY(Scale);
		this.cursorContainer.addChild(this._cursor);
	}
	,unload: function() {
		if(this._cursor != null) {
			if(this.cursorContainer.get_visible()) this.load(); else {
				this.cursorContainer.removeChild(this._cursor);
				this._cursor = null;
			}
		}
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		this.getScreenPosition(Camera,this._point);
		point.set(this._point.x + Camera.scroll.x,this._point.y + Camera.scroll.y);
		return point;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,destroy: function() {
		if(this._stage != null) {
			this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,($_=this._leftButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_UP,($_=this._leftButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener(flash.events.MouseEvent.MIDDLE_MOUSE_DOWN,($_=this._middleButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener(flash.events.MouseEvent.MIDDLE_MOUSE_UP,($_=this._middleButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener(flash.events.MouseEvent.RIGHT_MOUSE_DOWN,($_=this._rightButton,$bind($_,$_.onDown)));
			this._stage.removeEventListener(flash.events.MouseEvent.RIGHT_MOUSE_UP,($_=this._rightButton,$bind($_,$_.onUp)));
			this._stage.removeEventListener(flash.events.Event.MOUSE_LEAVE,$bind(this,this.onMouseLeave));
			this._stage.removeEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this.onMouseWheel));
		}
		this._point = flixel.util.FlxDestroyUtil.put(this._point);
		this._globalScreenPosition = flixel.util.FlxDestroyUtil.put(this._globalScreenPosition);
		this.cursorContainer = null;
		this._cursor = null;
		this._leftButton = flixel.util.FlxDestroyUtil.destroy(this._leftButton);
		this._middleButton = flixel.util.FlxDestroyUtil.destroy(this._middleButton);
		this._rightButton = flixel.util.FlxDestroyUtil.destroy(this._rightButton);
		this._cursorBitmapData = flixel.util.FlxDestroyUtil.dispose(this._cursorBitmapData);
		flixel.FlxG.signals.gameStarted.remove($bind(this,this.onGameStart));
		flixel.util.FlxPoint.prototype.destroy.call(this);
	}
	,setGlobalScreenPositionUnsafe: function(X,Y) {
		this._globalScreenPosition.set(X,Y);
	}
	,reset: function() {
		this._leftButton.reset();
		this._middleButton.reset();
		this._rightButton.reset();
	}
	,update: function() {
		this._globalScreenPosition.set_x(Math.floor(flixel.FlxG.game.get_mouseX()));
		this._globalScreenPosition.set_y(Math.floor(flixel.FlxG.game.get_mouseY()));
		if(this.visible) {
			this.cursorContainer.set_x(this._globalScreenPosition.x);
			this.cursorContainer.set_y(this._globalScreenPosition.y);
		}
		var scaleMultiplier = flixel.FlxG._scaleMode.scale.x;
		var _g = this._globalScreenPosition;
		_g.set_x(_g.x / scaleMultiplier);
		var _g1 = this._globalScreenPosition;
		_g1.set_y(_g1.y / scaleMultiplier);
		this.updateCursor();
		this._leftButton.update();
		this._middleButton.update();
		this._rightButton.update();
		if(!this._wheelUsed) this.wheel = 0;
		this._wheelUsed = false;
	}
	,onFocus: function() {
		this.reset();
		this.set_useSystemCursor(this.useSystemCursor);
		this.set_visible(this._visibleWhenFocusLost);
	}
	,onFocusLost: function() {
		this._visibleWhenFocusLost = this.visible;
		if(this.visible) this.set_visible(false);
		flash.ui.Mouse.show();
	}
	,onGameStart: function() {
		this.set_visible(this.visible);
	}
	,updateCursor: function() {
		this.getScreenPosition(null,this._point);
		this.screenX = this._point.x | 0;
		this.screenY = this._point.y | 0;
		this.getWorldPosition(null,this);
	}
	,onMouseWheel: function(FlashEvent) {
		this._wheelUsed = true;
		this.wheel = FlashEvent.delta;
	}
	,onMouseLeave: function(E) {
		this._rightButton.onUp();
		this._middleButton.onUp();
	}
	,get_pressed: function() {
		return this._leftButton.current > 0;
	}
	,get_justPressed: function() {
		return this._leftButton.justPressed();
	}
	,get_justReleased: function() {
		return this._leftButton.justReleased();
	}
	,get_pressedRight: function() {
		return this._rightButton.current > 0;
	}
	,get_justPressedRight: function() {
		return this._rightButton.justPressed();
	}
	,get_justReleasedRight: function() {
		return this._rightButton.justReleased();
	}
	,get_pressedMiddle: function() {
		return this._middleButton.current > 0;
	}
	,get_justPressedMiddle: function() {
		return this._middleButton.justPressed();
	}
	,get_justReleasedMiddle: function() {
		return this._middleButton.justReleased();
	}
	,showSystemCursor: function() {
		flash.ui.Mouse.show();
		this.cursorContainer.set_visible(false);
	}
	,hideSystemCursor: function() {
		flash.ui.Mouse.hide();
		if(this.visible) this.cursorContainer.set_visible(true);
	}
	,set_useSystemCursor: function(Value) {
		if(Value) this.showSystemCursor(); else this.hideSystemCursor();
		return this.useSystemCursor = Value;
	}
	,set_visible: function(Value) {
		if(Value) {
			if(this.useSystemCursor) flash.ui.Mouse.show(); else {
				if(this._cursor == null) this.load();
				this.cursorContainer.set_visible(true);
				flash.ui.Mouse.hide();
			}
		} else {
			this.cursorContainer.set_visible(false);
			flash.ui.Mouse.hide();
		}
		return this.visible = Value;
	}
	,record: function() {
		if(this._lastX == this._globalScreenPosition.x && this._lastY == this._globalScreenPosition.y && this._leftButton.current == 0 && this._lastWheel == this.wheel) return null;
		this._lastX = Math.floor(this._globalScreenPosition.x);
		this._lastY = Math.floor(this._globalScreenPosition.y);
		this._lastWheel = this.wheel;
		return new flixel.system.replay.MouseRecord(this._lastX,this._lastY,this._leftButton.current,this._lastWheel);
	}
	,playback: function(Record) {
		this._leftButton.current = Record.button;
		this.wheel = Record.wheel;
		this._globalScreenPosition.copyFrom(Record);
		this.updateCursor();
	}
	,__class__: flixel.input.mouse.FlxMouse
	,__properties__: $extend(flixel.util.FlxPoint.prototype.__properties__,{get_justReleasedMiddle:"get_justReleasedMiddle",get_justPressedMiddle:"get_justPressedMiddle",get_pressedMiddle:"get_pressedMiddle",get_justReleasedRight:"get_justReleasedRight",get_justPressedRight:"get_justPressedRight",get_pressedRight:"get_pressedRight",get_justReleased:"get_justReleased",get_justPressed:"get_justPressed",get_pressed:"get_pressed",set_useSystemCursor:"set_useSystemCursor",set_visible:"set_visible"})
});
flixel.input.mouse.FlxMouseButton = function(ID) {
	this.last = 0;
	this.current = 0;
	this._ID = ID;
	this._justPressedPosition = flixel.util.FlxPoint.get(null,null);
};
$hxClasses["flixel.input.mouse.FlxMouseButton"] = flixel.input.mouse.FlxMouseButton;
flixel.input.mouse.FlxMouseButton.__name__ = ["flixel","input","mouse","FlxMouseButton"];
flixel.input.mouse.FlxMouseButton.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.input.mouse.FlxMouseButton.prototype = {
	current: null
	,last: null
	,_ID: null
	,_justPressedPosition: null
	,_justPressedTimeInTicks: null
	,update: function() {
		if(this.last == -1 && this.current == -1) this.current = 0; else if(this.last == 2 && this.current == 2) this.current = 1; else if(this.last == -2 && this.current == -2) this.current = 0;
		this.last = this.current;
		if(this.current == 2 || this.current == -2) {
			this._justPressedPosition.set(flixel.FlxG.mouse.screenX,flixel.FlxG.mouse.screenY);
			this._justPressedTimeInTicks = flixel.FlxG.game.ticks;
		} else if(this.current == -1 || this.current == -2) flixel.FlxG.swipes.push(new flixel.input.FlxSwipe(this._ID,this._justPressedPosition,flixel.FlxG.mouse.getScreenPosition(),this._justPressedTimeInTicks));
	}
	,destroy: function() {
		this._justPressedPosition = flixel.util.FlxDestroyUtil.put(this._justPressedPosition);
	}
	,onDown: function(FlashEvent) {
		if(this.current > 0) this.current = 1; else this.current = 2;
	}
	,onUp: function(FlashEvent) {
		if(this.current == 2) this.current = -2; else if(this.current > 0) this.current = -1; else this.current = 0;
	}
	,reset: function() {
		this.current = 0;
		this.last = 0;
	}
	,pressed: function() {
		return this.current > 0;
	}
	,justPressed: function() {
		return this.current == 2 || this.current == -2;
	}
	,justReleased: function() {
		return this.current == -1 || this.current == -2;
	}
	,__class__: flixel.input.mouse.FlxMouseButton
};
flixel.input.touch = {};
flixel.input.touch.FlxTouch = function(X,Y,PointID) {
	if(PointID == null) PointID = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._last = 0;
	this._current = 0;
	this.screenY = 0;
	this.screenX = 0;
	flixel.util.FlxPoint.call(this);
	this._point = flixel.util.FlxPoint.get(null,null);
	this._globalScreenPosition = flixel.util.FlxPoint.get(null,null);
	this._justPressedPosition = flixel.util.FlxPoint.get(null,null);
	this._flashPoint = new flash.geom.Point();
	this.updatePosition(X,Y);
	this.touchPointID = PointID;
};
$hxClasses["flixel.input.touch.FlxTouch"] = flixel.input.touch.FlxTouch;
flixel.input.touch.FlxTouch.__name__ = ["flixel","input","touch","FlxTouch"];
flixel.input.touch.FlxTouch.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.input.touch.FlxTouch.__super__ = flixel.util.FlxPoint;
flixel.input.touch.FlxTouch.prototype = $extend(flixel.util.FlxPoint.prototype,{
	screenX: null
	,screenY: null
	,touchPointID: null
	,_current: null
	,_last: null
	,_point: null
	,_globalScreenPosition: null
	,_flashPoint: null
	,_justPressedPosition: null
	,_justPressedTimeInTicks: null
	,destroy: function() {
		this._point = flixel.util.FlxDestroyUtil.put(this._point);
		this._globalScreenPosition = flixel.util.FlxDestroyUtil.put(this._globalScreenPosition);
		this._justPressedPosition = flixel.util.FlxDestroyUtil.put(this._justPressedPosition);
		this._point = null;
		this._globalScreenPosition = null;
		this._flashPoint = null;
		this._justPressedPosition = null;
		flixel.util.FlxPoint.prototype.destroy.call(this);
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		this.getScreenPosition(Camera,this._point);
		point.set_x(this._point.x + Camera.scroll.x);
		point.set_y(this._point.y + Camera.scroll.y);
		return point;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = flixel.util.FlxPoint.get(null,null);
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,overlaps: function(ObjectOrGroup,Camera) {
		if(js.Boot.__instanceof(ObjectOrGroup,flixel.group.FlxTypedGroup)) {
			var i = 0;
			var results = false;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		return (js.Boot.__cast(ObjectOrGroup , flixel.FlxObject)).overlapsPoint(this,true,Camera);
	}
	,reset: function(X,Y,PointID) {
		this.updatePosition(X,Y);
		this.touchPointID = PointID;
		this._current = 0;
		this._last = 0;
	}
	,deactivate: function() {
		this._current = 0;
		this._last = 0;
	}
	,update: function() {
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1;
		this._last = this._current;
		if(this._current == 2) {
			this._justPressedPosition.set(this.screenX,this.screenY);
			this._justPressedTimeInTicks = flixel.FlxG.game.ticks;
		} else if(this._current == -1) flixel.FlxG.swipes.push(new flixel.input.FlxSwipe(this.touchPointID,this._justPressedPosition,this.getScreenPosition(),this._justPressedTimeInTicks));
	}
	,updateCursor: function() {
		var camera = flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.set_x(this.screenX + camera.scroll.x);
		this.set_y(this.screenY + camera.scroll.y);
	}
	,updatePosition: function(X,Y) {
		this._flashPoint.x = X;
		this._flashPoint.y = Y;
		this._flashPoint = flixel.FlxG.game.globalToLocal(this._flashPoint);
		this._globalScreenPosition.set_x(this._flashPoint.x);
		this._globalScreenPosition.set_y(this._flashPoint.y);
		this.updateCursor();
	}
	,get_pressed: function() {
		return this._current > 0;
	}
	,get_justPressed: function() {
		return this._current == 2;
	}
	,get_justReleased: function() {
		return this._current == -1;
	}
	,get_isActive: function() {
		return this._current != 0;
	}
	,__class__: flixel.input.touch.FlxTouch
	,__properties__: $extend(flixel.util.FlxPoint.prototype.__properties__,{get_isActive:"get_isActive",get_justReleased:"get_justReleased",get_justPressed:"get_justPressed",get_pressed:"get_pressed"})
});
flixel.input.touch.FlxTouchManager = function() {
	this.list = new Array();
	this._inactiveTouches = new Array();
	this._touchesCache = new haxe.ds.IntMap();
	flixel.input.touch.FlxTouchManager.maxTouchPoints = flash.ui.Multitouch.maxTouchPoints;
	flash.ui.Multitouch.set_inputMode(flash.ui.MultitouchInputMode.TOUCH_POINT);
	flash.Lib.current.stage.addEventListener("touchBegin",$bind(this,this.handleTouchBegin));
	flash.Lib.current.stage.addEventListener("touchEnd",$bind(this,this.handleTouchEnd));
	flash.Lib.current.stage.addEventListener("touchMove",$bind(this,this.handleTouchMove));
};
$hxClasses["flixel.input.touch.FlxTouchManager"] = flixel.input.touch.FlxTouchManager;
flixel.input.touch.FlxTouchManager.__name__ = ["flixel","input","touch","FlxTouchManager"];
flixel.input.touch.FlxTouchManager.__interfaces__ = [flixel.interfaces.IFlxInput];
flixel.input.touch.FlxTouchManager.prototype = {
	list: null
	,_inactiveTouches: null
	,_touchesCache: null
	,getByID: function(TouchPointID) {
		return this._touchesCache.get(TouchPointID);
	}
	,getFirst: function() {
		if(this.list[0] != null) return this.list[0]; else return null;
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this.list = null;
		var _g2 = 0;
		var _g11 = this._inactiveTouches;
		while(_g2 < _g11.length) {
			var touch1 = _g11[_g2];
			++_g2;
			touch1.destroy();
		}
		this._inactiveTouches = null;
		this._touchesCache = null;
	}
	,justStarted: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == 2) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,justReleased: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == -1) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,reset: function() {
		var $it0 = this._touchesCache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this._touchesCache.remove(key);
		}
		var _g = 0;
		var _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.deactivate();
			this._inactiveTouches.push(touch);
		}
		this.list.splice(0,this.list.length);
	}
	,handleTouchBegin: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			touch.updatePosition(FlashEvent.stageX,FlashEvent.stageY);
			if(touch._current > 0) touch._current = 1; else touch._current = 2;
		} else {
			touch = this.recycle(FlashEvent.stageX,FlashEvent.stageY,FlashEvent.touchPointID);
			touch._current = 2;
		}
	}
	,handleTouchEnd: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = -1; else touch._current = 0;
		}
	}
	,handleTouchMove: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) touch.updatePosition(FlashEvent.stageX,FlashEvent.stageY);
	}
	,add: function(Touch) {
		this.list.push(Touch);
		this._touchesCache.set(Touch.touchPointID,Touch);
		return Touch;
	}
	,recycle: function(X,Y,PointID) {
		if(this._inactiveTouches.length > 0) {
			var touch = this._inactiveTouches.pop();
			touch.reset(X,Y,PointID);
			return this.add(touch);
		}
		return this.add(new flixel.input.touch.FlxTouch(X,Y,PointID));
	}
	,update: function() {
		var i = this.list.length - 1;
		var touch;
		while(i >= 0) {
			touch = this.list[i];
			if(touch._current == 0) {
				touch.deactivate();
				this._touchesCache.remove(touch.touchPointID);
				this.list.splice(i,1);
				this._inactiveTouches.push(touch);
			} else touch.update();
			i--;
		}
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
		this.reset();
	}
	,__class__: flixel.input.touch.FlxTouchManager
};
flixel.interfaces.IFlxSignal = function() { };
$hxClasses["flixel.interfaces.IFlxSignal"] = flixel.interfaces.IFlxSignal;
flixel.interfaces.IFlxSignal.__name__ = ["flixel","interfaces","IFlxSignal"];
flixel.interfaces.IFlxSignal.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.interfaces.IFlxSignal.prototype = {
	dispatch: null
	,add: null
	,addOnce: null
	,remove: null
	,removeAll: null
	,has: null
	,__class__: flixel.interfaces.IFlxSignal
};
flixel.system._FlxAssets = {};
flixel.system._FlxAssets.FontDefault = function() {
	flash.text.Font.call(this);
};
$hxClasses["flixel.system._FlxAssets.FontDefault"] = flixel.system._FlxAssets.FontDefault;
flixel.system._FlxAssets.FontDefault.__name__ = ["flixel","system","_FlxAssets","FontDefault"];
flixel.system._FlxAssets.FontDefault.__super__ = flash.text.Font;
flixel.system._FlxAssets.FontDefault.prototype = $extend(flash.text.Font.prototype,{
	__class__: flixel.system._FlxAssets.FontDefault
});
flixel.system.GraphicLogo = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.system.GraphicLogo.preload != null) {
		this.__sourceImage = flixel.system.GraphicLogo.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.system.GraphicLogo.resourceName),flixel.system.GraphicLogo.resourceType,function(b) {
		if(flixel.system.GraphicLogo.preload == null) flixel.system.GraphicLogo.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.system.GraphicLogo"] = flixel.system.GraphicLogo;
flixel.system.GraphicLogo.__name__ = ["flixel","system","GraphicLogo"];
flixel.system.GraphicLogo.preload = null;
flixel.system.GraphicLogo.__super__ = flash.display.BitmapData;
flixel.system.GraphicLogo.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.system.GraphicLogo
});
flixel.system.FlxAssets = function() { };
$hxClasses["flixel.system.FlxAssets"] = flixel.system.FlxAssets;
flixel.system.FlxAssets.__name__ = ["flixel","system","FlxAssets"];
flixel.system.FlxAssets.init = function() {
	flash.text.Font.registerFont(flixel.system._FlxAssets.FontDefault);
};
flixel.system.FlxAssets.drawLogo = function(graph) {
	graph.beginFill(47394);
	graph.moveTo(50,13);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(87,51);
	graph.lineTo(51,87);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(13,50);
	graph.lineTo(50,13);
	graph.endFill();
	graph.beginFill(16761138);
	graph.moveTo(0,0);
	graph.lineTo(25,0);
	graph.lineTo(50,13);
	graph.lineTo(13,50);
	graph.lineTo(0,25);
	graph.lineTo(0,0);
	graph.endFill();
	graph.beginFill(16066382);
	graph.moveTo(100,0);
	graph.lineTo(75,0);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(100,25);
	graph.lineTo(100,0);
	graph.endFill();
	graph.beginFill(3555839);
	graph.moveTo(0,100);
	graph.lineTo(25,100);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(0,75);
	graph.lineTo(0,100);
	graph.endFill();
	graph.beginFill(314875);
	graph.moveTo(100,100);
	graph.lineTo(75,100);
	graph.lineTo(51,87);
	graph.lineTo(87,51);
	graph.lineTo(100,75);
	graph.lineTo(100,100);
	graph.endFill();
};
flixel.system.FlxAssets.getBitmapData = function(id) {
	return openfl.Assets.getBitmapData(id,false);
};
flixel.system.FlxAssets.getSound = function(id) {
	var extension = "";
	extension = ".ogg";
	return openfl.Assets.getSound(id + extension);
};
flixel.system.FlxAssets.cacheSounds = function() {
	openfl.Assets.initialize();
	var defaultLibrary = openfl.Assets.libraries.get("default");
	if(defaultLibrary == null) return;
	var types = DefaultAssetLibrary.type;
	if(types == null) return;
	var $it0 = types.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(types.get(key) == openfl.AssetType.SOUND) flixel.FlxG.sound.cache(key);
	}
};
flixel.system._FlxCollisionType = {};
flixel.system._FlxCollisionType.FlxCollisionType_Impl_ = function() { };
$hxClasses["flixel.system._FlxCollisionType.FlxCollisionType_Impl_"] = flixel.system._FlxCollisionType.FlxCollisionType_Impl_;
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.__name__ = ["flixel","system","_FlxCollisionType","FlxCollisionType_Impl_"];
flixel.system.FlxList = function() {
	this.exists = true;
};
$hxClasses["flixel.system.FlxList"] = flixel.system.FlxList;
flixel.system.FlxList.__name__ = ["flixel","system","FlxList"];
flixel.system.FlxList.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.FlxList._cachedListsHead = null;
flixel.system.FlxList.recycle = function() {
	if(flixel.system.FlxList._cachedListsHead != null) {
		var cachedList = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = flixel.system.FlxList._cachedListsHead.next;
		flixel.system.FlxList._NUM_CACHED_FLX_LIST--;
		cachedList.exists = true;
		cachedList.next = null;
		return cachedList;
	} else return new flixel.system.FlxList();
};
flixel.system.FlxList.clearCache = function() {
	while(flixel.system.FlxList._cachedListsHead != null) {
		var node = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = flixel.system.FlxList._cachedListsHead.next;
		node.object = null;
		node.next = null;
	}
	flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
};
flixel.system.FlxList.prototype = {
	object: null
	,next: null
	,exists: null
	,destroy: function() {
		if(!this.exists) return;
		this.object = null;
		if(this.next != null) this.next.destroy();
		this.exists = false;
		this.next = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = this;
		flixel.system.FlxList._NUM_CACHED_FLX_LIST++;
	}
	,__class__: flixel.system.FlxList
};
flixel.system.FlxQuadTree = function(X,Y,Width,Height,Parent) {
	flixel.util.FlxRect.call(this);
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this;
	this.reset(X,Y,Width,Height,Parent);
};
$hxClasses["flixel.system.FlxQuadTree"] = flixel.system.FlxQuadTree;
flixel.system.FlxQuadTree.__name__ = ["flixel","system","FlxQuadTree"];
flixel.system.FlxQuadTree.divisions = null;
flixel.system.FlxQuadTree._min = null;
flixel.system.FlxQuadTree._object = null;
flixel.system.FlxQuadTree._objectLeftEdge = null;
flixel.system.FlxQuadTree._objectTopEdge = null;
flixel.system.FlxQuadTree._objectRightEdge = null;
flixel.system.FlxQuadTree._objectBottomEdge = null;
flixel.system.FlxQuadTree._list = null;
flixel.system.FlxQuadTree._useBothLists = null;
flixel.system.FlxQuadTree._processingCallback = null;
flixel.system.FlxQuadTree._notifyCallback = null;
flixel.system.FlxQuadTree._iterator = null;
flixel.system.FlxQuadTree._objectHullX = null;
flixel.system.FlxQuadTree._objectHullY = null;
flixel.system.FlxQuadTree._objectHullWidth = null;
flixel.system.FlxQuadTree._objectHullHeight = null;
flixel.system.FlxQuadTree._checkObjectHullX = null;
flixel.system.FlxQuadTree._checkObjectHullY = null;
flixel.system.FlxQuadTree._checkObjectHullWidth = null;
flixel.system.FlxQuadTree._checkObjectHullHeight = null;
flixel.system.FlxQuadTree._cachedTreesHead = null;
flixel.system.FlxQuadTree.recycle = function(X,Y,Width,Height,Parent) {
	if(flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var cachedTree = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = flixel.system.FlxQuadTree._cachedTreesHead.next;
		flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES--;
		cachedTree.reset(X,Y,Width,Height,Parent);
		return cachedTree;
	} else return new flixel.system.FlxQuadTree(X,Y,Width,Height,Parent);
};
flixel.system.FlxQuadTree.clearCache = function() {
	while(flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var node = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = flixel.system.FlxQuadTree._cachedTreesHead.next;
		node.next = null;
	}
	flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
};
flixel.system.FlxQuadTree.__super__ = flixel.util.FlxRect;
flixel.system.FlxQuadTree.prototype = $extend(flixel.util.FlxRect.prototype,{
	exists: null
	,_canSubdivide: null
	,_headA: null
	,_tailA: null
	,_headB: null
	,_tailB: null
	,_northWestTree: null
	,_northEastTree: null
	,_southEastTree: null
	,_southWestTree: null
	,_leftEdge: null
	,_rightEdge: null
	,_topEdge: null
	,_bottomEdge: null
	,_halfWidth: null
	,_halfHeight: null
	,_midpointX: null
	,_midpointY: null
	,next: null
	,reset: function(X,Y,Width,Height,Parent) {
		this.exists = true;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		this;
		this._headA = this._tailA = flixel.system.FlxList.recycle();
		this._headB = this._tailB = flixel.system.FlxList.recycle();
		if(Parent != null) {
			var iterator;
			var ot;
			if(Parent._headA.object != null) {
				iterator = Parent._headA;
				while(iterator != null) {
					if(this._tailA.object != null) {
						ot = this._tailA;
						this._tailA = flixel.system.FlxList.recycle();
						ot.next = this._tailA;
					}
					this._tailA.object = iterator.object;
					iterator = iterator.next;
				}
			}
			if(Parent._headB.object != null) {
				iterator = Parent._headB;
				while(iterator != null) {
					if(this._tailB.object != null) {
						ot = this._tailB;
						this._tailB = flixel.system.FlxList.recycle();
						ot.next = this._tailB;
					}
					this._tailB.object = iterator.object;
					iterator = iterator.next;
				}
			}
		} else flixel.system.FlxQuadTree._min = Math.floor((this.width + this.height) / (2 * flixel.system.FlxQuadTree.divisions));
		this._canSubdivide = this.width > flixel.system.FlxQuadTree._min || this.height > flixel.system.FlxQuadTree._min;
		this._northWestTree = null;
		this._northEastTree = null;
		this._southEastTree = null;
		this._southWestTree = null;
		this._leftEdge = this.x;
		this._rightEdge = this.x + this.width;
		this._halfWidth = this.width / 2;
		this._midpointX = this._leftEdge + this._halfWidth;
		this._topEdge = this.y;
		this._bottomEdge = this.y + this.height;
		this._halfHeight = this.height / 2;
		this._midpointY = this._topEdge + this._halfHeight;
	}
	,destroy: function() {
		this._headA = flixel.util.FlxDestroyUtil.destroy(this._headA);
		this._headB = flixel.util.FlxDestroyUtil.destroy(this._headB);
		this._tailA = flixel.util.FlxDestroyUtil.destroy(this._tailA);
		this._tailB = flixel.util.FlxDestroyUtil.destroy(this._tailB);
		this._northWestTree = flixel.util.FlxDestroyUtil.destroy(this._northWestTree);
		this._northEastTree = flixel.util.FlxDestroyUtil.destroy(this._northEastTree);
		this._southWestTree = flixel.util.FlxDestroyUtil.destroy(this._southWestTree);
		this._southEastTree = flixel.util.FlxDestroyUtil.destroy(this._southEastTree);
		flixel.system.FlxQuadTree._object = null;
		flixel.system.FlxQuadTree._processingCallback = null;
		flixel.system.FlxQuadTree._notifyCallback = null;
		this.exists = false;
		this.next = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = this;
		flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES++;
		flixel.util.FlxRect.prototype.destroy.call(this);
	}
	,load: function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
		this.add(ObjectOrGroup1,0);
		if(ObjectOrGroup2 != null) {
			this.add(ObjectOrGroup2,1);
			flixel.system.FlxQuadTree._useBothLists = true;
		} else flixel.system.FlxQuadTree._useBothLists = false;
		flixel.system.FlxQuadTree._notifyCallback = NotifyCallback;
		flixel.system.FlxQuadTree._processingCallback = ProcessCallback;
	}
	,add: function(ObjectOrGroup,list) {
		flixel.system.FlxQuadTree._list = list;
		var group = flixel.group.FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) {
			var i = 0;
			var basic;
			var members = group.members;
			var l = group.length;
			while(i < l) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					group = flixel.group.FlxGroup.resolveGroup(basic);
					if(group != null) this.add(group,list); else {
						flixel.system.FlxQuadTree._object = js.Boot.__cast(basic , flixel.FlxObject);
						if(flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions != 0) {
							flixel.system.FlxQuadTree._objectLeftEdge = flixel.system.FlxQuadTree._object.x;
							flixel.system.FlxQuadTree._objectTopEdge = flixel.system.FlxQuadTree._object.y;
							flixel.system.FlxQuadTree._objectRightEdge = flixel.system.FlxQuadTree._object.x + flixel.system.FlxQuadTree._object.get_width();
							flixel.system.FlxQuadTree._objectBottomEdge = flixel.system.FlxQuadTree._object.y + flixel.system.FlxQuadTree._object.get_height();
							this.addObject();
						}
					}
				}
			}
		} else {
			flixel.system.FlxQuadTree._object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
			if(flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions != 0) {
				flixel.system.FlxQuadTree._objectLeftEdge = flixel.system.FlxQuadTree._object.x;
				flixel.system.FlxQuadTree._objectTopEdge = flixel.system.FlxQuadTree._object.y;
				flixel.system.FlxQuadTree._objectRightEdge = flixel.system.FlxQuadTree._object.x + flixel.system.FlxQuadTree._object.get_width();
				flixel.system.FlxQuadTree._objectBottomEdge = flixel.system.FlxQuadTree._object.y + flixel.system.FlxQuadTree._object.get_height();
				this.addObject();
			}
		}
	}
	,addObject: function() {
		if(!this._canSubdivide || this._leftEdge >= flixel.system.FlxQuadTree._objectLeftEdge && this._rightEdge <= flixel.system.FlxQuadTree._objectRightEdge && this._topEdge >= flixel.system.FlxQuadTree._objectTopEdge && this._bottomEdge <= flixel.system.FlxQuadTree._objectBottomEdge) {
			this.addToList();
			return;
		}
		if(flixel.system.FlxQuadTree._objectLeftEdge > this._leftEdge && flixel.system.FlxQuadTree._objectRightEdge < this._midpointX) {
			if(flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northWestTree == null) this._northWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northWestTree.addObject();
				return;
			}
			if(flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southWestTree == null) this._southWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southWestTree.addObject();
				return;
			}
		}
		if(flixel.system.FlxQuadTree._objectLeftEdge > this._midpointX && flixel.system.FlxQuadTree._objectRightEdge < this._rightEdge) {
			if(flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northEastTree == null) this._northEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northEastTree.addObject();
				return;
			}
			if(flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southEastTree == null) this._southEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southEastTree.addObject();
				return;
			}
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northWestTree == null) this._northWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northWestTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northEastTree == null) this._northEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northEastTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southEastTree == null) this._southEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southEastTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southWestTree == null) this._southWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southWestTree.addObject();
		}
	}
	,addToList: function() {
		var ot;
		if(flixel.system.FlxQuadTree._list == 0) {
			if(this._tailA.object != null) {
				ot = this._tailA;
				this._tailA = flixel.system.FlxList.recycle();
				ot.next = this._tailA;
			}
			this._tailA.object = flixel.system.FlxQuadTree._object;
		} else {
			if(this._tailB.object != null) {
				ot = this._tailB;
				this._tailB = flixel.system.FlxList.recycle();
				ot.next = this._tailB;
			}
			this._tailB.object = flixel.system.FlxQuadTree._object;
		}
		if(!this._canSubdivide) return;
		if(this._northWestTree != null) this._northWestTree.addToList();
		if(this._northEastTree != null) this._northEastTree.addToList();
		if(this._southEastTree != null) this._southEastTree.addToList();
		if(this._southWestTree != null) this._southWestTree.addToList();
	}
	,execute: function() {
		var overlapProcessed = false;
		var iterator;
		if(this._headA.object != null) {
			iterator = this._headA;
			while(iterator != null) {
				flixel.system.FlxQuadTree._object = iterator.object;
				if(flixel.system.FlxQuadTree._useBothLists) flixel.system.FlxQuadTree._iterator = this._headB; else flixel.system.FlxQuadTree._iterator = iterator.next;
				if(flixel.system.FlxQuadTree._object != null && flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions > 0 && flixel.system.FlxQuadTree._iterator != null && flixel.system.FlxQuadTree._iterator.object != null && this.overlapNode()) overlapProcessed = true;
				iterator = iterator.next;
			}
		}
		if(this._northWestTree != null && this._northWestTree.execute()) overlapProcessed = true;
		if(this._northEastTree != null && this._northEastTree.execute()) overlapProcessed = true;
		if(this._southEastTree != null && this._southEastTree.execute()) overlapProcessed = true;
		if(this._southWestTree != null && this._southWestTree.execute()) overlapProcessed = true;
		return overlapProcessed;
	}
	,overlapNode: function() {
		if(flixel.system.FlxQuadTree._object.x < flixel.system.FlxQuadTree._object.last.x) flixel.system.FlxQuadTree._objectHullX = flixel.system.FlxQuadTree._object.x; else flixel.system.FlxQuadTree._objectHullX = flixel.system.FlxQuadTree._object.last.x;
		if(flixel.system.FlxQuadTree._object.y < flixel.system.FlxQuadTree._object.last.y) flixel.system.FlxQuadTree._objectHullY = flixel.system.FlxQuadTree._object.y; else flixel.system.FlxQuadTree._objectHullY = flixel.system.FlxQuadTree._object.last.y;
		flixel.system.FlxQuadTree._objectHullWidth = flixel.system.FlxQuadTree._object.x - flixel.system.FlxQuadTree._object.last.x;
		flixel.system.FlxQuadTree._objectHullWidth = flixel.system.FlxQuadTree._object.get_width() + (flixel.system.FlxQuadTree._objectHullWidth > 0?flixel.system.FlxQuadTree._objectHullWidth:-flixel.system.FlxQuadTree._objectHullWidth);
		flixel.system.FlxQuadTree._objectHullHeight = flixel.system.FlxQuadTree._object.y - flixel.system.FlxQuadTree._object.last.y;
		flixel.system.FlxQuadTree._objectHullHeight = flixel.system.FlxQuadTree._object.get_height() + (flixel.system.FlxQuadTree._objectHullHeight > 0?flixel.system.FlxQuadTree._objectHullHeight:-flixel.system.FlxQuadTree._objectHullHeight);
		var overlapProcessed = false;
		var checkObject;
		while(flixel.system.FlxQuadTree._iterator != null) {
			checkObject = flixel.system.FlxQuadTree._iterator.object;
			if(flixel.system.FlxQuadTree._object == checkObject || !checkObject.exists || checkObject.allowCollisions <= 0) {
				flixel.system.FlxQuadTree._iterator = flixel.system.FlxQuadTree._iterator.next;
				continue;
			}
			if(checkObject.x < checkObject.last.x) flixel.system.FlxQuadTree._checkObjectHullX = checkObject.x; else flixel.system.FlxQuadTree._checkObjectHullX = checkObject.last.x;
			if(checkObject.y < checkObject.last.y) flixel.system.FlxQuadTree._checkObjectHullY = checkObject.y; else flixel.system.FlxQuadTree._checkObjectHullY = checkObject.last.y;
			flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.x - checkObject.last.x;
			flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.get_width() + (flixel.system.FlxQuadTree._checkObjectHullWidth > 0?flixel.system.FlxQuadTree._checkObjectHullWidth:-flixel.system.FlxQuadTree._checkObjectHullWidth);
			flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.y - checkObject.last.y;
			flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.get_height() + (flixel.system.FlxQuadTree._checkObjectHullHeight > 0?flixel.system.FlxQuadTree._checkObjectHullHeight:-flixel.system.FlxQuadTree._checkObjectHullHeight);
			if(flixel.system.FlxQuadTree._objectHullX + flixel.system.FlxQuadTree._objectHullWidth > flixel.system.FlxQuadTree._checkObjectHullX && flixel.system.FlxQuadTree._objectHullX < flixel.system.FlxQuadTree._checkObjectHullX + flixel.system.FlxQuadTree._checkObjectHullWidth && flixel.system.FlxQuadTree._objectHullY + flixel.system.FlxQuadTree._objectHullHeight > flixel.system.FlxQuadTree._checkObjectHullY && flixel.system.FlxQuadTree._objectHullY < flixel.system.FlxQuadTree._checkObjectHullY + flixel.system.FlxQuadTree._checkObjectHullHeight) {
				if(flixel.system.FlxQuadTree._processingCallback == null || flixel.system.FlxQuadTree._processingCallback(flixel.system.FlxQuadTree._object,checkObject)) {
					overlapProcessed = true;
					if(flixel.system.FlxQuadTree._notifyCallback != null) flixel.system.FlxQuadTree._notifyCallback(flixel.system.FlxQuadTree._object,checkObject);
				}
			}
			if(flixel.system.FlxQuadTree._iterator != null) flixel.system.FlxQuadTree._iterator = flixel.system.FlxQuadTree._iterator.next;
		}
		return overlapProcessed;
	}
	,__class__: flixel.system.FlxQuadTree
});
flixel.system.FlxSound = function() {
	this._alreadyPaused = false;
	this._volumeAdjust = 1.0;
	flixel.FlxBasic.call(this);
	this.reset();
};
$hxClasses["flixel.system.FlxSound"] = flixel.system.FlxSound;
flixel.system.FlxSound.__name__ = ["flixel","system","FlxSound"];
flixel.system.FlxSound.__super__ = flixel.FlxBasic;
flixel.system.FlxSound.prototype = $extend(flixel.FlxBasic.prototype,{
	x: null
	,y: null
	,persist: null
	,name: null
	,artist: null
	,amplitude: null
	,amplitudeLeft: null
	,amplitudeRight: null
	,autoDestroy: null
	,onComplete: null
	,playing: null
	,time: null
	,_sound: null
	,_channel: null
	,_transform: null
	,_paused: null
	,_volume: null
	,_volumeAdjust: null
	,_looped: null
	,_target: null
	,_radius: null
	,_proximityPan: null
	,_alreadyPaused: null
	,reset: function() {
		this.destroy();
		this.x = 0;
		this.y = 0;
		this.time = 0;
		this._paused = false;
		this._volume = 1.0;
		this._volumeAdjust = 1.0;
		this._looped = false;
		this._target = null;
		this._radius = 0;
		this._proximityPan = false;
		this.set_visible(false);
		this.amplitude = 0;
		this.amplitudeLeft = 0;
		this.amplitudeRight = 0;
		this.autoDestroy = false;
		if(this._transform == null) this._transform = new flash.media.SoundTransform();
		this._transform.pan = 0;
	}
	,destroy: function() {
		this._transform = null;
		this.set_exists(false);
		this.set_active(false);
		this._target = null;
		this.name = null;
		this.artist = null;
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		if(this._sound != null) {
			this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
			this._sound = null;
		}
		this.onComplete = null;
		flixel.FlxBasic.prototype.destroy.call(this);
	}
	,update: function() {
		if(!(this._channel != null)) return;
		this.time = this._channel.get_position();
		var radialMultiplier = 1.0;
		var fadeMultiplier = 1.0;
		if(this._target != null) {
			radialMultiplier = flixel.util.FlxMath.getDistance(flixel.util.FlxPoint.get(this._target.x,this._target.y),flixel.util.FlxPoint.get(this.x,this.y)) / this._radius;
			if(radialMultiplier < 0) radialMultiplier = 0;
			if(radialMultiplier > 1) radialMultiplier = 1;
			radialMultiplier = 1 - radialMultiplier;
			if(this._proximityPan) {
				var d = (this.x - this._target.x) / this._radius;
				if(d < -1) d = -1; else if(d > 1) d = 1;
				this._transform.pan = d;
			}
		}
		this._volumeAdjust = radialMultiplier * fadeMultiplier;
		this.updateTransform();
		if(this._transform.volume > 0) {
			this.amplitudeLeft = this._channel.leftPeak / this._transform.volume;
			this.amplitudeRight = this._channel.rightPeak / this._transform.volume;
			this.amplitude = (this.amplitudeLeft + this.amplitudeRight) * 0.5;
		} else {
			this.amplitudeLeft = 0;
			this.amplitudeRight = 0;
			this.amplitude = 0;
		}
	}
	,kill: function() {
		flixel.FlxBasic.prototype.kill.call(this);
		this.cleanup(false);
	}
	,loadEmbedded: function(EmbeddedSound,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		if(js.Boot.__instanceof(EmbeddedSound,flash.media.Sound)) this._sound = EmbeddedSound; else if(js.Boot.__instanceof(EmbeddedSound,Class)) this._sound = Type.createInstance(EmbeddedSound,[]); else if(typeof(EmbeddedSound) == "string") this._sound = openfl.Assets.getSound(EmbeddedSound);
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,loadStream: function(SoundURL,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this._sound = new flash.media.Sound();
		this._sound.addEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
		this._sound.load(new flash.net.URLRequest(SoundURL));
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,loadByteArray: function(Bytes,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this.onComplete();
		return this;
	}
	,proximity: function(X,Y,TargetObject,Radius,Pan) {
		if(Pan == null) Pan = true;
		this.x = X;
		this.y = Y;
		this._target = TargetObject;
		this._radius = Radius;
		this._proximityPan = Pan;
		return this;
	}
	,play: function(ForceRestart) {
		if(ForceRestart == null) ForceRestart = false;
		if(!this.exists) return this;
		if(ForceRestart) this.cleanup(false,true,true); else if(this._channel != null) return this;
		if(this._paused) this.resume(); else this.startSound(0);
		return this;
	}
	,resume: function() {
		if(this._paused) this.startSound(this.time);
		return this;
	}
	,pause: function() {
		if(!(this._channel != null)) return this;
		this.time = this._channel.get_position();
		this._paused = true;
		this.cleanup(false,false,false);
		return this;
	}
	,stop: function() {
		this.cleanup(this.autoDestroy,true,true);
		return this;
	}
	,fadeOut: function(Duration,To) {
		if(To == null) To = 0;
		if(Duration == null) Duration = 1;
		flixel.tweens.FlxTween.num(this._volume,To,Duration,null,$bind(this,this.volumeTween));
		return this;
	}
	,fadeIn: function(Duration,From,To) {
		if(To == null) To = 1;
		if(From == null) From = 0;
		if(Duration == null) Duration = 1;
		flixel.tweens.FlxTween.num(From,To,Duration,null,$bind(this,this.volumeTween));
		return this;
	}
	,volumeTween: function(f) {
		this.set_volume(f);
	}
	,getActualVolume: function() {
		return this._volume * this._volumeAdjust;
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
	}
	,updateTransform: function() {
		this._transform.volume = (flixel.FlxG.sound.muted?0:1) * flixel.FlxG.sound.volume * this._volume * this._volumeAdjust;
		if(this._channel != null) this._channel.set_soundTransform(this._transform);
	}
	,startSound: function(Position) {
		var numLoops;
		if(this._looped && Position == 0) numLoops = 9999; else numLoops = 0;
		this.time = Position;
		this._paused = false;
		this._channel = this._sound.play(this.time,numLoops,this._transform);
		if(this._channel != null) {
			this._channel.addEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this.set_active(true);
		} else {
			this.set_exists(false);
			this.set_active(false);
		}
	}
	,stopped: function(event) {
		if(this.onComplete != null) this.onComplete();
		if(this._looped) {
			this.cleanup(false);
			this.play();
		} else this.cleanup(this.autoDestroy);
	}
	,cleanup: function(destroySound,resetPosition,resetFading) {
		if(resetFading == null) resetFading = true;
		if(resetPosition == null) resetPosition = true;
		if(destroySound) {
			this.reset();
			return;
		}
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		this.set_active(false);
		if(resetPosition) {
			this.time = 0;
			this._paused = false;
		}
	}
	,gotID3: function(event) {
		this.name = this._sound.id3.songName;
		this.artist = this._sound.id3.artist;
		this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
	}
	,onFocus: function() {
		if(!this._alreadyPaused) this.resume();
	}
	,onFocusLost: function() {
		this._alreadyPaused = this._paused;
		this.pause();
	}
	,get_playing: function() {
		return this._channel != null;
	}
	,get_volume: function() {
		return this._volume;
	}
	,set_volume: function(Volume) {
		this._volume = Volume;
		if(this._volume < 0) this._volume = 0; else if(this._volume > 1) this._volume = 1;
		this.updateTransform();
		return Volume;
	}
	,get_pan: function() {
		return this._transform.pan;
	}
	,set_pan: function(pan) {
		return this._transform.pan = pan;
	}
	,__class__: flixel.system.FlxSound
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_volume:"set_volume",get_volume:"get_volume",get_playing:"get_playing",set_pan:"set_pan",get_pan:"get_pan"})
});
flixel.system.FlxSplash = function(MaxSize) {
	this._curPart = 0;
	flixel.FlxState.call(this,MaxSize);
};
$hxClasses["flixel.system.FlxSplash"] = flixel.system.FlxSplash;
flixel.system.FlxSplash.__name__ = ["flixel","system","FlxSplash"];
flixel.system.FlxSplash.nextState = null;
flixel.system.FlxSplash.__super__ = flixel.FlxState;
flixel.system.FlxSplash.prototype = $extend(flixel.FlxState.prototype,{
	_sprite: null
	,_gfx: null
	,_text: null
	,_times: null
	,_colors: null
	,_functions: null
	,_curPart: null
	,_cachedBgColor: null
	,_cachedTimestep: null
	,_cachedAutoPause: null
	,create: function() {
		this._cachedBgColor = flixel.FlxG.cameras.get_bgColor();
		flixel.FlxG.cameras.set_bgColor(-16777216);
		this._cachedTimestep = flixel.FlxG.fixedTimestep;
		flixel.FlxG.fixedTimestep = false;
		this._cachedAutoPause = flixel.FlxG.autoPause;
		flixel.FlxG.autoPause = false;
		flixel.FlxG.keys.enabled = false;
		this._times = [0.041,0.184,0.334,0.495,0.636];
		this._colors = [47394,16761138,16066382,3555839,314875];
		this._functions = [$bind(this,this.drawGreen),$bind(this,this.drawYellow),$bind(this,this.drawRed),$bind(this,this.drawBlue),$bind(this,this.drawLightBlue)];
		var _g = 0;
		var _g1 = this._times;
		while(_g < _g1.length) {
			var time = _g1[_g];
			++_g;
			new flixel.util.FlxTimer(time,$bind(this,this.timerCallback));
		}
		var stageWidth = flash.Lib.current.stage.stageWidth;
		var stageHeight = flash.Lib.current.stage.stageHeight;
		this._sprite = new flash.display.Sprite();
		flash.Lib.current.stage.addChild(this._sprite);
		this._gfx = this._sprite.get_graphics();
		this._text = new flash.text.TextField();
		this._text.selectable = false;
		this._text.embedFonts = true;
		var dtf = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,16,16777215);
		dtf.align = flash.text.TextFormatAlign.CENTER;
		this._text.set_defaultTextFormat(dtf);
		this._text.set_text("HaxeFlixel");
		flash.Lib.current.stage.addChild(this._text);
		this.onResize(stageWidth,stageHeight);
		flixel.FlxG.sound.load(flixel.system.FlxAssets.getSound("assets/sounds/flixel")).play();
	}
	,destroy: function() {
		this._sprite = null;
		this._gfx = null;
		this._text = null;
		this._times = null;
		this._colors = null;
		this._functions = null;
		flixel.FlxState.prototype.destroy.call(this);
	}
	,onResize: function(Width,Height) {
		flixel.FlxState.prototype.onResize.call(this,Width,Height);
		this._sprite.set_x(Width / 2);
		this._sprite.set_y(Height / 2 - 20 * flixel.FlxG.game.get_scaleY());
		this._text.set_width(Width / flixel.FlxG.game.get_scaleX());
		this._text.set_x(0);
		this._text.set_y(this._sprite.get_y() + 80 * flixel.FlxG.game.get_scaleY());
		this._sprite.set_scaleX(this._text.set_scaleX(flixel.FlxG.game.get_scaleX()));
		this._sprite.set_scaleY(this._text.set_scaleY(flixel.FlxG.game.get_scaleY()));
	}
	,timerCallback: function(Timer) {
		this._functions[this._curPart]();
		this._text.set_textColor(this._colors[this._curPart]);
		this._text.set_text("HaxeFlixel");
		this._curPart++;
		if(this._curPart == 5) {
			flixel.tweens.FlxTween.tween(this._sprite,{ alpha : 0},3.0,{ ease : flixel.tweens.FlxEase.quadOut, complete : $bind(this,this.onComplete)});
			flixel.tweens.FlxTween.tween(this._text,{ alpha : 0},3.0,{ ease : flixel.tweens.FlxEase.quadOut});
		}
	}
	,drawGreen: function() {
		this._gfx.beginFill(47394);
		this._gfx.moveTo(0,-37);
		this._gfx.lineTo(1,-37);
		this._gfx.lineTo(37,0);
		this._gfx.lineTo(37,1);
		this._gfx.lineTo(1,37);
		this._gfx.lineTo(0,37);
		this._gfx.lineTo(-37,1);
		this._gfx.lineTo(-37,0);
		this._gfx.lineTo(0,-37);
		this._gfx.endFill();
	}
	,drawYellow: function() {
		this._gfx.beginFill(16761138);
		this._gfx.moveTo(-50,-50);
		this._gfx.lineTo(-25,-50);
		this._gfx.lineTo(0,-37);
		this._gfx.lineTo(-37,0);
		this._gfx.lineTo(-50,-25);
		this._gfx.lineTo(-50,-50);
		this._gfx.endFill();
	}
	,drawRed: function() {
		this._gfx.beginFill(16066382);
		this._gfx.moveTo(50,-50);
		this._gfx.lineTo(25,-50);
		this._gfx.lineTo(1,-37);
		this._gfx.lineTo(37,0);
		this._gfx.lineTo(50,-25);
		this._gfx.lineTo(50,-50);
		this._gfx.endFill();
	}
	,drawBlue: function() {
		this._gfx.beginFill(3555839);
		this._gfx.moveTo(-50,50);
		this._gfx.lineTo(-25,50);
		this._gfx.lineTo(0,37);
		this._gfx.lineTo(-37,1);
		this._gfx.lineTo(-50,25);
		this._gfx.lineTo(-50,50);
		this._gfx.endFill();
	}
	,drawLightBlue: function() {
		this._gfx.beginFill(314875);
		this._gfx.moveTo(50,50);
		this._gfx.lineTo(25,50);
		this._gfx.lineTo(1,37);
		this._gfx.lineTo(37,1);
		this._gfx.lineTo(50,25);
		this._gfx.lineTo(50,50);
		this._gfx.endFill();
	}
	,onComplete: function(Tween) {
		flixel.FlxG.cameras.set_bgColor(this._cachedBgColor);
		flixel.FlxG.fixedTimestep = this._cachedTimestep;
		flixel.FlxG.autoPause = this._cachedAutoPause;
		flixel.FlxG.keys.enabled = true;
		flash.Lib.current.stage.removeChild(this._sprite);
		flash.Lib.current.stage.removeChild(this._text);
		flixel.FlxG.switchState(Type.createInstance(flixel.system.FlxSplash.nextState,[]));
		flixel.FlxG.game._gameJustStarted = true;
	}
	,__class__: flixel.system.FlxSplash
});
flixel.system.debug = {};
flixel.system.debug.ConsoleUtil = function() { };
$hxClasses["flixel.system.debug.ConsoleUtil"] = flixel.system.debug.ConsoleUtil;
flixel.system.debug.ConsoleUtil.__name__ = ["flixel","system","debug","ConsoleUtil"];
flixel.system.debug.ConsoleUtil.callFunction = function(Function,Args) {
	try {
		Function.apply(null,Args);
		return true;
	} catch( e ) {
		if( js.Boot.__instanceof(e,flash.errors.ArgumentError) ) {
			if(e.errorID == 1063) {
				var expected = Std.parseInt(flixel.util.FlxStringUtil.filterDigits(e.message).charAt(4));
				if(expected < Args.length) {
					var shortenedArgs = Args.slice(0,expected);
					Function.apply(null,shortenedArgs);
				} else return false;
				return true;
			}
			return false;
		} else throw(e);
	}
};
flixel.system.debug.ConsoleUtil.findCommand = function(Alias,Commands) {
	var _g1 = 0;
	var _g = Commands.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(HxOverrides.indexOf(Commands[i].aliases,Alias,0) != -1) return Commands[i];
	}
	return null;
};
flixel.system.debug.ConsoleUtil.resolveObjectAndVariable = function(ObjectAndVariable,Object) {
	var searchArr = ObjectAndVariable.split(".");
	if(searchArr.length == 1) return { object : Object, variableName : ObjectAndVariable};
	var variableName = searchArr.join(".");
	if(!Reflect.isObject(Object)) {
		flixel.FlxG.log.error("'" + (function($this) {
			var $r;
			var cl;
			if(js.Boot.__instanceof(Object,Class)) cl = Object; else cl = Type.getClass(Object);
			var s = Type.getClassName(cl);
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				var pos = s.lastIndexOf(".") + 1;
				s = HxOverrides.substr(s,pos,null);
			}
			$r = s;
			return $r;
		}(this)) + "' is not a valid Object");
		return null;
	}
	var l = searchArr.length;
	var tempObj = Object;
	var tempVarName = "";
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		tempVarName = searchArr[i];
		try {
			if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
		} catch( e ) {
			flixel.FlxG.log.error("'" + (function($this) {
				var $r;
				var cl1;
				if(js.Boot.__instanceof(tempObj,Class)) cl1 = tempObj; else cl1 = Type.getClass(tempObj);
				var s1 = Type.getClassName(cl1);
				if(s1 != null) {
					s1 = StringTools.replace(s1,"::",".");
					var pos1 = s1.lastIndexOf(".") + 1;
					s1 = HxOverrides.substr(s1,pos1,null);
				}
				$r = s1;
				return $r;
			}(this)) + "' does not have a field '" + tempVarName + "'");
			return null;
		}
	}
	return { object : tempObj, variableName : tempVarName};
};
flixel.system.debug.ConsoleUtil.resolveObjectAndVariableFromMap = function(ObjectAndVariable,ObjectMap) {
	var splitString = ObjectAndVariable.split(".");
	var object = ObjectMap.get(splitString[0]);
	splitString.shift();
	ObjectAndVariable = splitString.join(".");
	return flixel.system.debug.ConsoleUtil.resolveObjectAndVariable(ObjectAndVariable,object);
};
flixel.system.debug.ConsoleUtil.getInstanceFieldsAdvanced = function(cl,numSuperClassesToInclude) {
	if(numSuperClassesToInclude == null) numSuperClassesToInclude = 0;
	var fields = Type.getInstanceFields(cl);
	if(numSuperClassesToInclude >= 0) {
		var curClass = Type.getSuperClass(cl);
		var superClasses = [];
		while(curClass != null) {
			superClasses.push(curClass);
			curClass = Type.getSuperClass(curClass);
		}
		superClasses.reverse();
		if(numSuperClassesToInclude > superClasses.length) numSuperClassesToInclude = superClasses.length;
		var _g1 = 0;
		var _g = superClasses.length - numSuperClassesToInclude;
		while(_g1 < _g) {
			var i = _g1++;
			var superFields = Type.getInstanceFields(superClasses[i]);
			var _g2 = 0;
			while(_g2 < superFields.length) {
				var superField = superFields[_g2];
				++_g2;
				if(HxOverrides.indexOf(fields,superField,0) != -1) HxOverrides.remove(fields,superField);
			}
		}
	}
	return fields;
};
flixel.system.debug.ConsoleUtil.parseBool = function(s) {
	if(s == "true") return true; else if(s == "false") return false; else return null;
};
flixel.system.debug.ConsoleUtil.log = function(Text) {
	flixel.FlxG.log.advanced([Text],flixel.system.debug.LogStyle.CONSOLE);
};
flixel.system.debug.ButtonAlignment = $hxClasses["flixel.system.debug.ButtonAlignment"] = { __ename__ : ["flixel","system","debug","ButtonAlignment"], __constructs__ : ["LEFT","MIDDLE","RIGHT"] };
flixel.system.debug.ButtonAlignment.LEFT = ["LEFT",0];
flixel.system.debug.ButtonAlignment.LEFT.toString = $estr;
flixel.system.debug.ButtonAlignment.LEFT.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.ButtonAlignment.MIDDLE = ["MIDDLE",1];
flixel.system.debug.ButtonAlignment.MIDDLE.toString = $estr;
flixel.system.debug.ButtonAlignment.MIDDLE.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.ButtonAlignment.RIGHT = ["RIGHT",2];
flixel.system.debug.ButtonAlignment.RIGHT.toString = $estr;
flixel.system.debug.ButtonAlignment.RIGHT.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.DebuggerLayout = $hxClasses["flixel.system.debug.DebuggerLayout"] = { __ename__ : ["flixel","system","debug","DebuggerLayout"], __constructs__ : ["STANDARD","MICRO","BIG","TOP","LEFT","RIGHT"] };
flixel.system.debug.DebuggerLayout.STANDARD = ["STANDARD",0];
flixel.system.debug.DebuggerLayout.STANDARD.toString = $estr;
flixel.system.debug.DebuggerLayout.STANDARD.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.MICRO = ["MICRO",1];
flixel.system.debug.DebuggerLayout.MICRO.toString = $estr;
flixel.system.debug.DebuggerLayout.MICRO.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.BIG = ["BIG",2];
flixel.system.debug.DebuggerLayout.BIG.toString = $estr;
flixel.system.debug.DebuggerLayout.BIG.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.TOP = ["TOP",3];
flixel.system.debug.DebuggerLayout.TOP.toString = $estr;
flixel.system.debug.DebuggerLayout.TOP.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.LEFT = ["LEFT",4];
flixel.system.debug.DebuggerLayout.LEFT.toString = $estr;
flixel.system.debug.DebuggerLayout.LEFT.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.RIGHT = ["RIGHT",5];
flixel.system.debug.DebuggerLayout.RIGHT.toString = $estr;
flixel.system.debug.DebuggerLayout.RIGHT.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.LogStyle = function(Prefix,Color,Size,Bold,Italic,Underlined,ErrorSound,OpenConsole,CallbackFunction) {
	if(OpenConsole == null) OpenConsole = false;
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Size == null) Size = 12;
	if(Color == null) Color = "FFFFFF";
	if(Prefix == null) Prefix = "";
	this.prefix = Prefix;
	this.color = Color;
	this.size = Size;
	this.bold = Bold;
	this.italic = Italic;
	this.underlined = Underlined;
	this.errorSound = ErrorSound;
	this.openConsole = OpenConsole;
	this.callbackFunction = CallbackFunction;
};
$hxClasses["flixel.system.debug.LogStyle"] = flixel.system.debug.LogStyle;
flixel.system.debug.LogStyle.__name__ = ["flixel","system","debug","LogStyle"];
flixel.system.debug.LogStyle.prototype = {
	prefix: null
	,color: null
	,size: null
	,bold: null
	,italic: null
	,underlined: null
	,errorSound: null
	,openConsole: null
	,callbackFunction: null
	,__class__: flixel.system.debug.LogStyle
};
flixel.system.debug.Window = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	if(Closable == null) Closable = false;
	if(Resizable == null) Resizable = true;
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	flash.display.Sprite.call(this);
	this.minSize = new flash.geom.Point(50,30);
	this._width = Std["int"](Math.abs(Width));
	this._height = Std["int"](Math.abs(Height));
	this.updateBounds(Bounds);
	this._drag = new flash.geom.Point();
	this._resizable = Resizable;
	this._shadow = new flash.display.Bitmap(new flash.display.BitmapData(1,2,true,-16777216));
	this._background = new flash.display.Bitmap(new flash.display.BitmapData(1,1,true,-580952225));
	this._header = new flash.display.Bitmap(new flash.display.BitmapData(1,15,true,-1157627904));
	this._background.set_y(this._header.get_height());
	this._title = new flash.text.TextField();
	this._title.set_x(2);
	this._title.set_y(-1);
	this._title.set_alpha(0.8);
	this._title.set_height(20);
	this._title.selectable = false;
	this._title.multiline = false;
	this._title.embedFonts = true;
	this._title.set_defaultTextFormat(new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,12,16777215));
	this._title.set_text(Title);
	this.addChild(this._shadow);
	this.addChild(this._background);
	this.addChild(this._header);
	this.addChild(this._title);
	if(Icon != null) {
		var _icon = new flash.display.Bitmap(Icon);
		_icon.set_x(5);
		_icon.set_y(2);
		_icon.set_alpha(0.8);
		this._title.set_x(_icon.get_x() + _icon.get_width() + 2);
		this.addChild(_icon);
	}
	if(this._resizable) {
		this._handle = new flash.display.Bitmap(new flixel.system.debug._Window.GraphicWindowHandle(0,0));
		this.addChild(this._handle);
	}
	if(Closable) {
		this._closeButton = new flixel.system.ui.FlxSystemButton(new flixel.system.debug._Window.GraphicCloseButton(0,0),$bind(this,this.close));
		this._closeButton.set_alpha(0.8);
		this.addChild(this._closeButton);
	} else {
		this._id = flixel.system.debug.Window.WINDOW_AMOUNT;
		this.loadSaveData();
		flixel.system.debug.Window.WINDOW_AMOUNT++;
	}
	if(this._width != 0 || this._height != 0) this.updateSize();
	this.bound();
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["flixel.system.debug.Window"] = flixel.system.debug.Window;
flixel.system.debug.Window.__name__ = ["flixel","system","debug","Window"];
flixel.system.debug.Window.__super__ = flash.display.Sprite;
flixel.system.debug.Window.prototype = $extend(flash.display.Sprite.prototype,{
	minSize: null
	,maxSize: null
	,toggleButton: null
	,_width: null
	,_height: null
	,_bounds: null
	,_background: null
	,_header: null
	,_shadow: null
	,_title: null
	,_handle: null
	,_closeButton: null
	,_overHeader: null
	,_overHandle: null
	,_drag: null
	,_dragging: null
	,_resizing: null
	,_resizable: null
	,_id: null
	,destroy: function() {
		this.minSize = null;
		this.maxSize = null;
		this._bounds = null;
		if(this._shadow != null) this.removeChild(this._shadow);
		this._shadow = null;
		if(this._background != null) this.removeChild(this._background);
		this._background = null;
		if(this._header != null) this.removeChild(this._header);
		this._header = null;
		if(this._title != null) this.removeChild(this._title);
		this._title = null;
		if(this._handle != null) this.removeChild(this._handle);
		this._handle = null;
		this._drag = null;
		this._closeButton = flixel.util.FlxDestroyUtil.destroy(this._closeButton);
		var stage = flash.Lib.current.stage;
		if(stage.hasEventListener(flash.events.MouseEvent.MOUSE_MOVE)) stage.removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		if(this.hasEventListener(flash.events.MouseEvent.MOUSE_DOWN)) this.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		if(stage.hasEventListener(flash.events.MouseEvent.MOUSE_UP)) stage.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,resize: function(Width,Height) {
		this._width = Std["int"](Math.abs(Width));
		this._height = Std["int"](Math.abs(Height));
		this.updateSize();
	}
	,reposition: function(X,Y) {
		this.set_x(X);
		this.set_y(Y);
		this.bound();
	}
	,updateBounds: function(Bounds) {
		this._bounds = Bounds;
		if(this._bounds != null) this.maxSize = new flash.geom.Point(this._bounds.width,this._bounds.height); else this.maxSize = new flash.geom.Point(1.79e+308,1.79e+308);
	}
	,setVisible: function(Value) {
		this.set_visible(Value);
		flixel.FlxG.save.data.windowSettings[this._id] = this.get_visible();
		flixel.FlxG.save.flush();
		if(this.toggleButton != null) this.toggleButton.set_toggled(!this.get_visible());
		if(this.get_visible()) this.parent.addChild(this);
	}
	,toggleVisible: function() {
		this.setVisible(!this.get_visible());
	}
	,putOnTop: function() {
		this.parent.addChild(this);
	}
	,loadSaveData: function() {
		if(flixel.FlxG.save.data.windowSettings != null) this.set_visible(flixel.FlxG.save.data.windowSettings[this._id]); else {
			this.initSaveData();
			this.loadSaveData();
		}
	}
	,initSaveData: function() {
		var settings = [];
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			settings[i] = true;
		}
		flixel.FlxG.save.data.windowSettings = settings;
		flixel.FlxG.save.flush();
	}
	,update: function() {
	}
	,init: function(E) {
		if(this.stage == null) return;
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.stage.addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.stage.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
	}
	,onMouseMove: function(E) {
		var mouseX;
		if(this.get_mouseX() < 0) mouseX = 0; else mouseX = this.get_mouseX();
		var mouseY;
		if(this.get_mouseY() < 0) mouseY = 0; else mouseY = this.get_mouseY();
		if(!this.parent.get_visible()) {
			this._overHandle = this._overHeader = false;
			return;
		}
		if(this._dragging) {
			this._overHeader = true;
			this.reposition(this.parent.get_mouseX() - this._drag.x,this.parent.get_mouseY() - this._drag.y);
		} else if(this._resizing) {
			this._overHandle = true;
			this.resize(mouseX - this._drag.x,mouseY - this._drag.y);
		} else if(mouseX >= 0 && mouseX <= this._width && mouseY >= 0 && mouseY <= this._height) {
			this._overHeader = mouseX <= this._header.get_width() && mouseY <= this._header.get_height();
			if(this._resizable) this._overHandle = mouseX >= this._width - this._handle.get_width() && mouseY >= this._height - this._handle.get_height();
		} else this._overHandle = this._overHeader = false;
	}
	,onMouseDown: function(E) {
		if(this._overHeader) {
			this.parent.addChild(this);
			this._dragging = true;
			this._drag.x = this.get_mouseX();
			this._drag.y = this.get_mouseY();
		} else if(this._overHandle) {
			this.parent.addChild(this);
			this._resizing = true;
			this._drag.x = this._width - this.get_mouseX();
			this._drag.y = this._height - this.get_mouseY();
		}
	}
	,onMouseUp: function(E) {
		this._dragging = false;
		this._resizing = false;
	}
	,bound: function() {
		if(this._bounds != null) {
			this.set_x(flixel.util.FlxMath.bound(this.get_x(),this._bounds.get_left(),this._bounds.get_right() - this._width));
			this.set_y(flixel.util.FlxMath.bound(this.get_y(),this._bounds.get_top(),this._bounds.get_bottom() - this._height));
		}
	}
	,updateSize: function() {
		this._width = Std["int"](flixel.util.FlxMath.bound(this._width,this.minSize.x,this.maxSize.x));
		this._height = Std["int"](flixel.util.FlxMath.bound(this._height,this.minSize.y,this.maxSize.y));
		this._header.set_scaleX(this._width);
		this._background.set_scaleX(this._width);
		this._background.set_scaleY(this._height - this._header.get_height());
		this._shadow.set_scaleX(this._width);
		this._shadow.set_y(this._height);
		this._title.set_width(this._width - 4);
		if(this._resizable) {
			this._handle.set_x(this._width - this._handle.get_width());
			this._handle.set_y(this._height - this._handle.get_height());
		}
		if(this._closeButton != null) {
			this._closeButton.set_x(this._width - this._closeButton.get_width() - 3);
			this._closeButton.set_y(3);
		}
	}
	,close: function() {
		this.destroy();
	}
	,__class__: flixel.system.debug.Window
});
flixel.system.debug.Watch = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	flixel.system.debug.Window.call(this,Title,Icon,Width,Height,Resizable,Bounds,Closable);
};
$hxClasses["flixel.system.debug.Watch"] = flixel.system.debug.Watch;
flixel.system.debug.Watch.__name__ = ["flixel","system","debug","Watch"];
flixel.system.debug.Watch.__super__ = flixel.system.debug.Window;
flixel.system.debug.Watch.prototype = $extend(flixel.system.debug.Window.prototype,{
	__class__: flixel.system.debug.Watch
});
flixel.system.debug.Tracker = function(Title,Icon,Width,Height,Resizable,Bounds,Closable) {
	flixel.system.debug.Watch.call(this,Title,Icon,Width,Height,Resizable,Bounds,Closable);
};
$hxClasses["flixel.system.debug.Tracker"] = flixel.system.debug.Tracker;
flixel.system.debug.Tracker.__name__ = ["flixel","system","debug","Tracker"];
flixel.system.debug.Tracker.__super__ = flixel.system.debug.Watch;
flixel.system.debug.Tracker.prototype = $extend(flixel.system.debug.Watch.prototype,{
	__class__: flixel.system.debug.Tracker
});
flixel.system.debug.TrackerProfile = function(ObjectClass,Variables,Extensions) {
	this.objectClass = ObjectClass;
	this.variables = Variables;
	this.extensions = Extensions;
};
$hxClasses["flixel.system.debug.TrackerProfile"] = flixel.system.debug.TrackerProfile;
flixel.system.debug.TrackerProfile.__name__ = ["flixel","system","debug","TrackerProfile"];
flixel.system.debug.TrackerProfile.prototype = {
	objectClass: null
	,variables: null
	,extensions: null
	,toString: function() {
		return flixel.util.FlxStringUtil.getDebugString([flixel.util.LabelValuePair._pool.get().create("variables",this.variables),flixel.util.LabelValuePair._pool.get().create("extensions",this.extensions)]);
	}
	,__class__: flixel.system.debug.TrackerProfile
};
flixel.system.debug._Window = {};
flixel.system.debug._Window.GraphicWindowHandle = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.system.debug._Window.GraphicWindowHandle.preload != null) {
		this.__sourceImage = flixel.system.debug._Window.GraphicWindowHandle.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.system.debug._Window.GraphicWindowHandle.resourceName),flixel.system.debug._Window.GraphicWindowHandle.resourceType,function(b) {
		if(flixel.system.debug._Window.GraphicWindowHandle.preload == null) flixel.system.debug._Window.GraphicWindowHandle.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.system.debug._Window.GraphicWindowHandle"] = flixel.system.debug._Window.GraphicWindowHandle;
flixel.system.debug._Window.GraphicWindowHandle.__name__ = ["flixel","system","debug","_Window","GraphicWindowHandle"];
flixel.system.debug._Window.GraphicWindowHandle.preload = null;
flixel.system.debug._Window.GraphicWindowHandle.__super__ = flash.display.BitmapData;
flixel.system.debug._Window.GraphicWindowHandle.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.system.debug._Window.GraphicWindowHandle
});
flixel.system.debug._Window.GraphicCloseButton = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.system.debug._Window.GraphicCloseButton.preload != null) {
		this.__sourceImage = flixel.system.debug._Window.GraphicCloseButton.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.system.debug._Window.GraphicCloseButton.resourceName),flixel.system.debug._Window.GraphicCloseButton.resourceType,function(b) {
		if(flixel.system.debug._Window.GraphicCloseButton.preload == null) flixel.system.debug._Window.GraphicCloseButton.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.system.debug._Window.GraphicCloseButton"] = flixel.system.debug._Window.GraphicCloseButton;
flixel.system.debug._Window.GraphicCloseButton.__name__ = ["flixel","system","debug","_Window","GraphicCloseButton"];
flixel.system.debug._Window.GraphicCloseButton.preload = null;
flixel.system.debug._Window.GraphicCloseButton.__super__ = flash.display.BitmapData;
flixel.system.debug._Window.GraphicCloseButton.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.system.debug._Window.GraphicCloseButton
});
flixel.system.layer = {};
flixel.system.layer.DrawStackItem = function() {
	this.antialiasing = false;
	this.initialized = false;
	this.blending = 0;
	this.colored = false;
	this.position = 0;
	this.drawData = new Array();
};
$hxClasses["flixel.system.layer.DrawStackItem"] = flixel.system.layer.DrawStackItem;
flixel.system.layer.DrawStackItem.__name__ = ["flixel","system","layer","DrawStackItem"];
flixel.system.layer.DrawStackItem.prototype = {
	graphics: null
	,drawData: null
	,position: null
	,next: null
	,colored: null
	,blending: null
	,initialized: null
	,antialiasing: null
	,reset: function() {
		this.graphics = null;
		this.initialized = false;
		this.antialiasing = false;
		this.position = 0;
	}
	,dispose: function() {
		this.graphics = null;
		this.drawData = null;
		this.next = null;
	}
	,__class__: flixel.system.layer.DrawStackItem
};
flixel.system.layer.Region = function(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.startX = startX;
	this.startY = startY;
	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
	this.spacingX = spacingX;
	this.spacingY = spacingY;
	this.width = width;
	this.height = height;
};
$hxClasses["flixel.system.layer.Region"] = flixel.system.layer.Region;
flixel.system.layer.Region.__name__ = ["flixel","system","layer","Region"];
flixel.system.layer.Region.prototype = {
	startX: null
	,startY: null
	,width: null
	,height: null
	,tileWidth: null
	,tileHeight: null
	,spacingX: null
	,spacingY: null
	,numTiles: null
	,get_numTiles: function() {
		return this.get_numRows() * this.get_numCols();
	}
	,numRows: null
	,get_numRows: function() {
		var num = 1;
		if(this.tileHeight != 0) num = (this.height + this.spacingY) / (this.tileHeight + this.spacingY) | 0;
		return num;
	}
	,numCols: null
	,get_numCols: function() {
		var num = 1;
		if(this.tileWidth != 0) num = (this.width + this.spacingX) / (this.tileWidth + this.spacingX) | 0;
		return num;
	}
	,clone: function() {
		return new flixel.system.layer.Region(this.startX,this.startY,this.tileWidth,this.tileHeight,this.spacingX,this.spacingY,this.width,this.height);
	}
	,__class__: flixel.system.layer.Region
	,__properties__: {get_numCols:"get_numCols",get_numRows:"get_numRows",get_numTiles:"get_numTiles"}
};
flixel.system.layer.TileSheetData = function(Bitmap) {
	this.bitmap = Bitmap;
	this.flxSpriteFrames = new haxe.ds.StringMap();
	this.flxFrames = new haxe.ds.StringMap();
	this.frameNames = new Array();
	this.framesArr = new Array();
};
$hxClasses["flixel.system.layer.TileSheetData"] = flixel.system.layer.TileSheetData;
flixel.system.layer.TileSheetData.__name__ = ["flixel","system","layer","TileSheetData"];
flixel.system.layer.TileSheetData.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.layer.TileSheetData.prototype = {
	flxSpriteFrames: null
	,flxFrames: null
	,frameNames: null
	,framesArr: null
	,bitmap: null
	,getFrame: function(name) {
		return this.flxFrames.get(name);
	}
	,getSpriteSheetFrames: function(region,origin) {
		var bitmapWidth = region.width;
		var bitmapHeight = region.height;
		var startX = region.startX;
		var startY = region.startY;
		var endX = startX + bitmapWidth;
		var endY = startY + bitmapHeight;
		var xSpacing = region.spacingX;
		var ySpacing = region.spacingY;
		var width;
		if(region.tileWidth == 0) width = bitmapWidth; else width = region.tileWidth;
		var height;
		if(region.tileHeight == 0) height = bitmapHeight; else height = region.tileHeight;
		var pointX = 0.5 * width;
		var pointY = 0.5 * height;
		if(origin != null) {
			pointX = origin.x;
			pointY = origin.y;
		}
		var key = width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
		if(this.flxSpriteFrames.exists(key)) return this.flxSpriteFrames.get(key);
		var numRows = region.get_numRows();
		var numCols = region.get_numCols();
		var tempPoint = origin;
		if(origin == null) tempPoint = new flash.geom.Point(pointX,pointY);
		var spriteData = new flixel.system.layer.frames.FlxSpriteFrames(key);
		var frame;
		var tempRect;
		var spacedWidth = width + xSpacing;
		var spacedHeight = height + ySpacing;
		var _g1 = 0;
		var _g = numRows;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0;
			var _g2 = numCols;
			while(_g3 < _g2) {
				var i = _g3++;
				tempRect = new flash.geom.Rectangle(startX + i * spacedWidth,startY + j * spacedHeight,width,height);
				frame = this.addSpriteSheetFrame(tempRect,tempPoint);
				spriteData.addFrame(frame);
			}
		}
		this.flxSpriteFrames.set(key,spriteData);
		return spriteData;
	}
	,getSpriteSheetFrameKey: function(rect,point) {
		return rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_" + point.x + "_" + point.y;
	}
	,getKeyForSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		return width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
	}
	,containsSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var key = width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
		return this.flxSpriteFrames.exists(key);
	}
	,addSpriteSheetFrame: function(rect,point) {
		var key = rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_" + point.x + "_" + point.y;
		if(this.flxFrames.exists(key)) return this.flxFrames.get(key);
		var frame = new flixel.system.layer.frames.FlxFrame(this);
		frame.name = key;
		frame.frame = rect;
		frame.trimmed = false;
		frame.sourceSize.set(rect.width,rect.height);
		frame.offset.set(0,0);
		frame.center.set(0.5 * rect.width,0.5 * rect.height);
		this.flxFrames.set(key,frame);
		this.frameNames.push(key);
		this.framesArr.push(frame);
		return frame;
	}
	,containsFrame: function(key) {
		return this.flxFrames.exists(key);
	}
	,destroy: function() {
		this.bitmap = null;
		var $it0 = this.flxSpriteFrames.iterator();
		while( $it0.hasNext() ) {
			var frames = $it0.next();
			frames.destroy();
		}
		this.flxSpriteFrames = null;
		var _g = 0;
		var _g1 = this.framesArr;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			frame.destroy();
		}
		this.flxFrames = null;
		this.frameNames = null;
		this.framesArr = null;
	}
	,getTexturePackerFrames: function(data,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(this.flxSpriteFrames.exists(data.assetName)) return this.flxSpriteFrames.get(data.assetName);
		data.parseData();
		var frame;
		var packerFrames = new flixel.system.layer.frames.FlxSpriteFrames(data.assetName);
		var l = data.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			frame = this.addTexturePackerFrame(data.frames[i],startX,startY);
			packerFrames.addFrame(frame);
		}
		this.flxSpriteFrames.set(data.assetName,packerFrames);
		return packerFrames;
	}
	,addTexturePackerFrame: function(frameData,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var key = frameData.name;
		if(this.flxFrames.exists(key)) return this.flxFrames.get(key);
		var texFrame = null;
		if(frameData.rotated) texFrame = new flixel.system.layer.frames.FlxRotatedFrame(this); else texFrame = new flixel.system.layer.frames.FlxFrame(this);
		texFrame.trimmed = frameData.trimmed;
		texFrame.name = key;
		texFrame.sourceSize.copyFrom(frameData.sourceSize);
		texFrame.offset.copyFrom(frameData.offset);
		texFrame.center.set(0,0);
		texFrame.frame = frameData.frame.clone();
		if(frameData.rotated) texFrame.center.set(texFrame.frame.height * 0.5 + texFrame.offset.x,texFrame.frame.width * 0.5 + texFrame.offset.y); else texFrame.center.set(texFrame.frame.width * 0.5 + texFrame.offset.x,texFrame.frame.height * 0.5 + texFrame.offset.y);
		texFrame.additionalAngle = frameData.additionalAngle;
		this.flxFrames.set(key,texFrame);
		this.frameNames.push(key);
		this.framesArr.push(texFrame);
		return texFrame;
	}
	,destroyFrameBitmapDatas: function() {
		var numFrames = this.frameNames.length;
		var _g = 0;
		var _g1 = this.framesArr;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			frame.destroyBitmapDatas();
		}
	}
	,__class__: flixel.system.layer.TileSheetData
};
openfl.display = {};
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	__bitmap: null
	,__centerPoints: null
	,__tileRects: null
	,__tileUVs: null
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl.display.Tilesheet
};
flixel.system.layer.TileSheetExt = function(bitmap) {
	this.numTiles = 0;
	openfl.display.Tilesheet.call(this,bitmap);
	this.tileIDs = new haxe.ds.StringMap();
	this.tileOrder = new Array();
};
$hxClasses["flixel.system.layer.TileSheetExt"] = flixel.system.layer.TileSheetExt;
flixel.system.layer.TileSheetExt.__name__ = ["flixel","system","layer","TileSheetExt"];
flixel.system.layer.TileSheetExt.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.layer.TileSheetExt.__super__ = openfl.display.Tilesheet;
flixel.system.layer.TileSheetExt.prototype = $extend(openfl.display.Tilesheet.prototype,{
	numTiles: null
	,tileIDs: null
	,tileOrder: null
	,rebuildFromOld: function(old) {
		var _g1 = 0;
		var _g = old.tileOrder.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tileName = old.tileOrder[i];
			var tileObj = old.tileIDs.get(tileName);
			this.addTileRect(tileObj.rect,tileObj.point);
		}
		this.tileIDs = old.tileIDs;
		this.tileOrder = old.tileOrder;
		this.numTiles = old.numTiles;
		old.tileIDs = null;
		old.tileOrder = null;
		flixel.util.FlxDestroyUtil.destroy(old);
	}
	,getKey: function(rect,point) {
		var key = rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_";
		if(point != null) key = key + point.x + "_" + point.y;
		return key;
	}
	,addTileRectID: function(rect,point) {
		var key = this.getKey(rect,point);
		if(this.tileIDs.exists(key)) return this.tileIDs.get(key).id;
		this.addTileRect(rect,point);
		var tileID = this.numTiles;
		this.numTiles++;
		this.tileOrder[tileID] = key;
		var value = new flixel.system.layer._TileSheetExt.RectPointTileID(tileID,rect,point);
		this.tileIDs.set(key,value);
		return tileID;
	}
	,destroy: function() {
		this.tileOrder = null;
		if(this.tileIDs != null) {
			var $it0 = this.tileIDs.iterator();
			while( $it0.hasNext() ) {
				var tileObj = $it0.next();
				flixel.util.FlxDestroyUtil.destroy(tileObj);
			}
		}
		this.tileIDs = null;
	}
	,__class__: flixel.system.layer.TileSheetExt
});
flixel.system.layer._TileSheetExt = {};
flixel.system.layer._TileSheetExt.RectPointTileID = function(id,rect,point) {
	this.id = id;
	this.rect = rect;
	this.point = point;
};
$hxClasses["flixel.system.layer._TileSheetExt.RectPointTileID"] = flixel.system.layer._TileSheetExt.RectPointTileID;
flixel.system.layer._TileSheetExt.RectPointTileID.__name__ = ["flixel","system","layer","_TileSheetExt","RectPointTileID"];
flixel.system.layer._TileSheetExt.RectPointTileID.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.layer._TileSheetExt.RectPointTileID.prototype = {
	rect: null
	,point: null
	,id: null
	,destroy: function() {
		this.rect = null;
		this.point = null;
	}
	,__class__: flixel.system.layer._TileSheetExt.RectPointTileID
};
flixel.system.layer.frames = {};
flixel.system.layer.frames.FlxFrame = function(tileSheet) {
	this.additionalAngle = 0;
	this.tileID = -1;
	this.trimmed = false;
	this._tileSheet = tileSheet;
	this.additionalAngle = 0;
	this.sourceSize = flixel.util.FlxPoint.get(null,null);
	this.offset = flixel.util.FlxPoint.get(null,null);
	this.center = flixel.util.FlxPoint.get(null,null);
	this.type = flixel.system.layer.frames.FrameType.REGULAR;
};
$hxClasses["flixel.system.layer.frames.FlxFrame"] = flixel.system.layer.frames.FlxFrame;
flixel.system.layer.frames.FlxFrame.__name__ = ["flixel","system","layer","frames","FlxFrame"];
flixel.system.layer.frames.FlxFrame.prototype = {
	name: null
	,frame: null
	,trimmed: null
	,tileID: null
	,additionalAngle: null
	,sourceSize: null
	,offset: null
	,center: null
	,type: null
	,_bitmapData: null
	,_hReversedBitmapData: null
	,_vReversedBitmapData: null
	,_hvReversedBitmapData: null
	,_tileSheet: null
	,paintOnBitmap: function(bmd) {
		var result = null;
		if(bmd != null && (bmd.width == this.sourceSize.x && bmd.height == this.sourceSize.y)) {
			result = bmd;
			var w = bmd.width;
			var h = bmd.height;
			if(w > this.frame.width || h > this.frame.height) {
				flixel.system.layer.frames.FlxFrame.RECT.x = flixel.system.layer.frames.FlxFrame.RECT.y = 0;
				flixel.system.layer.frames.FlxFrame.RECT.width = w;
				flixel.system.layer.frames.FlxFrame.RECT.height = h;
				bmd.fillRect(flixel.system.layer.frames.FlxFrame.RECT,0);
			}
		} else if(bmd != null) bmd.dispose();
		if(result == null) result = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		flixel.system.layer.frames.FlxFrame.POINT.x = this.offset.x;
		flixel.system.layer.frames.FlxFrame.POINT.y = this.offset.y;
		result.copyPixels(this._tileSheet.bitmap,this.frame,flixel.system.layer.frames.FlxFrame.POINT);
		return result;
	}
	,getBitmap: function() {
		if(this._bitmapData != null) return this._bitmapData;
		this._bitmapData = this.paintOnBitmap();
		return this._bitmapData;
	}
	,getHReversedBitmap: function() {
		if(this._hReversedBitmapData != null) return this._hReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(-1,1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.sourceSize.x | 0,0);
		this._hReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._hReversedBitmapData;
	}
	,getVReversedBitmap: function() {
		if(this._vReversedBitmapData != null) return this._vReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(1,-1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(0,this.sourceSize.y | 0);
		this._vReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._vReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._vReversedBitmapData;
	}
	,getHVReversedBitmap: function() {
		if(this._hvReversedBitmapData != null) return this._hvReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(-1,-1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.sourceSize.x | 0,this.sourceSize.y | 0);
		this._hvReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hvReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._hvReversedBitmapData;
	}
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this._tileSheet = null;
		this.sourceSize = flixel.util.FlxDestroyUtil.put(this.sourceSize);
		this.offset = flixel.util.FlxDestroyUtil.put(this.offset);
		this.center = flixel.util.FlxDestroyUtil.put(this.center);
		this.destroyBitmapDatas();
	}
	,destroyBitmapDatas: function() {
		this._bitmapData = flixel.util.FlxDestroyUtil.dispose(this._bitmapData);
		this._hReversedBitmapData = flixel.util.FlxDestroyUtil.dispose(this._hReversedBitmapData);
		this._vReversedBitmapData = flixel.util.FlxDestroyUtil.dispose(this._vReversedBitmapData);
		this._hvReversedBitmapData = flixel.util.FlxDestroyUtil.dispose(this._hvReversedBitmapData);
	}
	,__class__: flixel.system.layer.frames.FlxFrame
};
flixel.system.layer.frames.FlxRotatedFrame = function(tileSheet) {
	flixel.system.layer.frames.FlxFrame.call(this,tileSheet);
	this.type = flixel.system.layer.frames.FrameType.ROTATED;
};
$hxClasses["flixel.system.layer.frames.FlxRotatedFrame"] = flixel.system.layer.frames.FlxRotatedFrame;
flixel.system.layer.frames.FlxRotatedFrame.__name__ = ["flixel","system","layer","frames","FlxRotatedFrame"];
flixel.system.layer.frames.FlxRotatedFrame.__super__ = flixel.system.layer.frames.FlxFrame;
flixel.system.layer.frames.FlxRotatedFrame.prototype = $extend(flixel.system.layer.frames.FlxFrame.prototype,{
	paintOnBitmap: function(bmd) {
		var result = null;
		if(bmd != null && (bmd.width == this.sourceSize.x && bmd.height == this.sourceSize.y)) result = bmd; else if(bmd != null) bmd.dispose();
		if(result == null) result = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		var temp = new flash.display.BitmapData(this.frame.width | 0,this.frame.height | 0,true,0);
		flixel.system.layer.frames.FlxFrame.POINT.x = flixel.system.layer.frames.FlxFrame.POINT.y = 0;
		temp.copyPixels(this._tileSheet.bitmap,this.frame,flixel.system.layer.frames.FlxFrame.POINT);
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(-0.5 * this.frame.width,-0.5 * this.frame.height);
		flixel.system.layer.frames.FlxFrame.MATRIX.rotate(-90. * (Math.PI / 180));
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.offset.x + 0.5 * this.frame.height,this.offset.y + 0.5 * this.frame.width);
		result = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		result.draw(temp,flixel.system.layer.frames.FlxFrame.MATRIX);
		temp.dispose();
		return result;
	}
	,__class__: flixel.system.layer.frames.FlxRotatedFrame
});
flixel.system.layer.frames.FlxSpriteFrames = function(name) {
	this.name = name;
	this.frames = [];
	this.framesHash = new haxe.ds.StringMap();
};
$hxClasses["flixel.system.layer.frames.FlxSpriteFrames"] = flixel.system.layer.frames.FlxSpriteFrames;
flixel.system.layer.frames.FlxSpriteFrames.__name__ = ["flixel","system","layer","frames","FlxSpriteFrames"];
flixel.system.layer.frames.FlxSpriteFrames.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.layer.frames.FlxSpriteFrames.prototype = {
	frames: null
	,framesHash: null
	,name: null
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.framesHash.set(frame.name,frame);
	}
	,destroy: function() {
		this.frames = null;
		this.framesHash = null;
		this.name = null;
	}
	,__class__: flixel.system.layer.frames.FlxSpriteFrames
};
flixel.system.layer.frames.FrameType = $hxClasses["flixel.system.layer.frames.FrameType"] = { __ename__ : ["flixel","system","layer","frames","FrameType"], __constructs__ : ["REGULAR","ROTATED"] };
flixel.system.layer.frames.FrameType.REGULAR = ["REGULAR",0];
flixel.system.layer.frames.FrameType.REGULAR.toString = $estr;
flixel.system.layer.frames.FrameType.REGULAR.__enum__ = flixel.system.layer.frames.FrameType;
flixel.system.layer.frames.FrameType.ROTATED = ["ROTATED",1];
flixel.system.layer.frames.FrameType.ROTATED.toString = $estr;
flixel.system.layer.frames.FrameType.ROTATED.__enum__ = flixel.system.layer.frames.FrameType;
flixel.system.replay = {};
flixel.system.replay.CodeValuePair = function(Code,Value) {
	if(Value == null) Value = 0;
	if(Code == null) Code = 0;
	this.code = Code;
	this.value = Value;
};
$hxClasses["flixel.system.replay.CodeValuePair"] = flixel.system.replay.CodeValuePair;
flixel.system.replay.CodeValuePair.__name__ = ["flixel","system","replay","CodeValuePair"];
flixel.system.replay.CodeValuePair.prototype = {
	code: null
	,value: null
	,__class__: flixel.system.replay.CodeValuePair
};
flixel.system.replay.FlxReplay = function() {
	this.seed = 0;
	this.frame = 0;
	this.frameCount = 0;
	this.finished = false;
	this._frames = null;
	this._capacity = 0;
	this._marker = 0;
};
$hxClasses["flixel.system.replay.FlxReplay"] = flixel.system.replay.FlxReplay;
flixel.system.replay.FlxReplay.__name__ = ["flixel","system","replay","FlxReplay"];
flixel.system.replay.FlxReplay.prototype = {
	seed: null
	,frame: null
	,frameCount: null
	,finished: null
	,_frames: null
	,_capacity: null
	,_marker: null
	,destroy: function() {
		if(this._frames == null) return;
		var i = this.frameCount - 1;
		while(i >= 0) this._frames[i--].destroy();
		this._frames = null;
	}
	,create: function(Seed) {
		this.destroy();
		this.init();
		this.seed = Seed;
		this.rewind();
	}
	,load: function(FileContents) {
		this.init();
		var lines = FileContents.split("\n");
		this.seed = Std.parseInt(lines[0]);
		var line;
		var i = 1;
		var l = lines.length;
		while(i < l) {
			line = lines[i++];
			if(line.length > 3) {
				this._frames[this.frameCount++] = new flixel.system.replay.FrameRecord().load(line);
				if(this.frameCount >= this._capacity) {
					this._capacity *= 2;
					flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
				}
			}
		}
		this.rewind();
	}
	,save: function() {
		if(this.frameCount <= 0) return null;
		var output = this.seed + "\n";
		var i = 0;
		while(i < this.frameCount) output += this._frames[i++].save() + "\n";
		return output;
	}
	,recordFrame: function() {
		var continueFrame = true;
		var keysRecord = flixel.FlxG.keys.record();
		if(keysRecord == null) continueFrame = false;
		var mouseRecord = flixel.FlxG.mouse.record();
		if(mouseRecord == null) continueFrame = false;
		if(continueFrame) {
			this.frame++;
			return;
		}
		var frameRecorded = new flixel.system.replay.FrameRecord().create(this.frame++);
		frameRecorded.mouse = mouseRecord;
		frameRecorded.keys = keysRecord;
		this._frames[this.frameCount++] = frameRecorded;
		if(this.frameCount >= this._capacity) {
			this._capacity *= 2;
			flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		}
	}
	,playNextFrame: function() {
		flixel.FlxG.inputs.reset();
		if(this._marker >= this.frameCount) {
			this.finished = true;
			return;
		}
		if(this._frames[this._marker].frame != this.frame++) return;
		var fr = this._frames[this._marker++];
		if(fr.keys != null) flixel.FlxG.keys.playback(fr.keys);
		if(fr.mouse != null) flixel.FlxG.mouse.playback(fr.mouse);
	}
	,rewind: function() {
		this._marker = 0;
		this.frame = 0;
		this.finished = false;
	}
	,init: function() {
		this._capacity = 100;
		this._frames = new Array();
		flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		this.frameCount = 0;
	}
	,__class__: flixel.system.replay.FlxReplay
};
flixel.system.replay.FrameRecord = function() {
	this.frame = 0;
	this.keys = null;
	this.mouse = null;
};
$hxClasses["flixel.system.replay.FrameRecord"] = flixel.system.replay.FrameRecord;
flixel.system.replay.FrameRecord.__name__ = ["flixel","system","replay","FrameRecord"];
flixel.system.replay.FrameRecord.prototype = {
	frame: null
	,keys: null
	,mouse: null
	,create: function(Frame,Keys,Mouse) {
		this.frame = Math.floor(Frame);
		this.keys = Keys;
		this.mouse = Mouse;
		return this;
	}
	,destroy: function() {
		this.keys = null;
		this.mouse = null;
	}
	,save: function() {
		var output = this.frame + "k";
		if(this.keys != null) {
			var object;
			var i = 0;
			var l = this.keys.length;
			while(i < l) {
				if(i > 0) output += ",";
				object = this.keys[i++];
				output += object.code + ":" + object.value;
			}
		}
		output += "m";
		if(this.mouse != null) output += this.mouse.x + "," + this.mouse.y + "," + this.mouse.button + "," + this.mouse.wheel;
		return output;
	}
	,load: function(Data) {
		var i;
		var l;
		var array = Data.split("k");
		this.frame = Std.parseInt(array[0]);
		array = array[1].split("m");
		var keyData = array[0];
		var mouseData = array[1];
		if(keyData.length > 0) {
			array = keyData.split(",");
			var keyPair;
			i = 0;
			l = array.length;
			while(i < l) {
				keyPair = array[i++].split(":");
				if(keyPair.length == 2) {
					if(this.keys == null) this.keys = new Array();
					this.keys.push(new flixel.system.replay.CodeValuePair(Std.parseInt(keyPair[0]),Std.parseInt(keyPair[1])));
				}
			}
		}
		if(mouseData.length > 0) {
			array = mouseData.split(",");
			if(array.length >= 4) this.mouse = new flixel.system.replay.MouseRecord(Std.parseInt(array[0]),Std.parseInt(array[1]),Std.parseInt(array[2]),Std.parseInt(array[3]));
		}
		return this;
	}
	,__class__: flixel.system.replay.FrameRecord
};
flixel.system.replay.MouseRecord = function(X,Y,Button,Wheel) {
	flixel.util.FlxPoint.call(this);
	this.set(X,Y);
	this.button = Button;
	this.wheel = Wheel;
};
$hxClasses["flixel.system.replay.MouseRecord"] = flixel.system.replay.MouseRecord;
flixel.system.replay.MouseRecord.__name__ = ["flixel","system","replay","MouseRecord"];
flixel.system.replay.MouseRecord.__super__ = flixel.util.FlxPoint;
flixel.system.replay.MouseRecord.prototype = $extend(flixel.util.FlxPoint.prototype,{
	button: null
	,wheel: null
	,__class__: flixel.system.replay.MouseRecord
});
flixel.system.ui = {};
flixel.system.ui.FlxSoundTray = function() {
	this._defaultScale = 2.0;
	this._width = 80;
	flash.display.Sprite.call(this);
	this.set_visible(false);
	this.set_scaleX(this._defaultScale);
	this.set_scaleY(this._defaultScale);
	var tmp = new flash.display.Bitmap(new flash.display.BitmapData(this._width,30,true,2130706432));
	this.screenCenter();
	this.addChild(tmp);
	var text = new flash.text.TextField();
	text.set_width(tmp.get_width());
	text.set_height(tmp.get_height());
	text.multiline = true;
	text.set_wordWrap(true);
	text.selectable = false;
	var dtf = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,8,16777215);
	dtf.align = flash.text.TextFormatAlign.CENTER;
	text.set_defaultTextFormat(dtf);
	this.addChild(text);
	text.set_text("VOLUME");
	text.set_y(16);
	var bx = 10;
	var by = 14;
	this._bars = new Array();
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		tmp = new flash.display.Bitmap(new flash.display.BitmapData(4,i + 1,false,-1));
		tmp.set_x(bx);
		tmp.set_y(by);
		this.addChild(tmp);
		this._bars.push(tmp);
		bx += 6;
		by--;
	}
	this.set_y(-this.get_height());
	this.set_visible(false);
};
$hxClasses["flixel.system.ui.FlxSoundTray"] = flixel.system.ui.FlxSoundTray;
flixel.system.ui.FlxSoundTray.__name__ = ["flixel","system","ui","FlxSoundTray"];
flixel.system.ui.FlxSoundTray.__super__ = flash.display.Sprite;
flixel.system.ui.FlxSoundTray.prototype = $extend(flash.display.Sprite.prototype,{
	active: null
	,_timer: null
	,_bars: null
	,_width: null
	,_defaultScale: null
	,update: function(MS) {
		if(this._timer > 0) this._timer -= MS / 1000; else if(this.get_y() > -this.get_height()) {
			var _g = this;
			_g.set_y(_g.get_y() - MS / 1000 * flixel.FlxG.height * 2);
			if(this.get_y() <= -this.get_height()) {
				this.set_visible(false);
				this.active = false;
				flixel.FlxG.save.data.mute = flixel.FlxG.sound.muted;
				flixel.FlxG.save.data.volume = flixel.FlxG.sound.volume;
				flixel.FlxG.save.flush();
			}
		}
	}
	,show: function(Silent) {
		if(Silent == null) Silent = false;
		if(!Silent) flixel.FlxG.sound.load(flixel.system.FlxAssets.getSound("assets/sounds/beep")).play();
		this._timer = 1;
		this.set_y(0);
		this.set_visible(true);
		this.active = true;
		var globalVolume = Math.round(flixel.FlxG.sound.volume * 10);
		if(flixel.FlxG.sound.muted) globalVolume = 0;
		var _g1 = 0;
		var _g = this._bars.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < globalVolume) this._bars[i].set_alpha(1); else this._bars[i].set_alpha(0.5);
		}
	}
	,screenCenter: function() {
		this.set_scaleX(this._defaultScale / flixel.FlxG.game.get_scaleX());
		this.set_scaleY(this._defaultScale / flixel.FlxG.game.get_scaleY());
		this.set_x((0.5 * (flash.Lib.current.stage.stageWidth - this._width * this._defaultScale) - flixel.FlxG.game.get_x()) / flixel.FlxG.game.get_scaleX());
	}
	,__class__: flixel.system.ui.FlxSoundTray
});
flixel.system.ui.FlxSystemButton = function(Icon,UpHandler,ToggleMode) {
	if(ToggleMode == null) ToggleMode = false;
	this._mouseDown = false;
	this.toggled = false;
	this.toggleMode = false;
	this.enabled = true;
	flash.display.Sprite.call(this);
	if(Icon != null) {
		this._icon = new flash.display.Bitmap(Icon);
		this.addChild(this._icon);
	}
	this.upHandler = UpHandler;
	this.toggleMode = ToggleMode;
	this.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
};
$hxClasses["flixel.system.ui.FlxSystemButton"] = flixel.system.ui.FlxSystemButton;
flixel.system.ui.FlxSystemButton.__name__ = ["flixel","system","ui","FlxSystemButton"];
flixel.system.ui.FlxSystemButton.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.system.ui.FlxSystemButton.__super__ = flash.display.Sprite;
flixel.system.ui.FlxSystemButton.prototype = $extend(flash.display.Sprite.prototype,{
	upHandler: null
	,enabled: null
	,toggleMode: null
	,toggled: null
	,_icon: null
	,_mouseDown: null
	,changeIcon: function(Icon) {
		if(this._icon != null) this.removeChild(this._icon);
		this._icon = new flash.display.Bitmap(Icon);
		this.addChild(this._icon);
	}
	,destroy: function() {
		this.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
		this._icon = null;
		this.upHandler = null;
	}
	,onMouseUp: function(E) {
		if(this.enabled && this._mouseDown) {
			this.set_toggled(!this.toggled);
			this._mouseDown = false;
			if(this.upHandler != null) this.upHandler();
		}
	}
	,onMouseDown: function(E) {
		this._mouseDown = true;
	}
	,onMouseOver: function(E) {
		var _g = this;
		_g.set_alpha(_g.get_alpha() - 0.2);
	}
	,onMouseOut: function(E) {
		var _g = this;
		_g.set_alpha(_g.get_alpha() + 0.2);
	}
	,set_toggled: function(Value) {
		if(this.toggleMode) this.set_alpha(Value?0.3:1);
		return this.toggled = Value;
	}
	,__class__: flixel.system.ui.FlxSystemButton
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_toggled:"set_toggled"})
});
flixel.text = {};
flixel.text.FlxText = function(X,Y,FieldWidth,Text,Size,EmbeddedFont) {
	if(EmbeddedFont == null) EmbeddedFont = true;
	if(Size == null) Size = 8;
	if(FieldWidth == null) FieldWidth = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._heightInc = 0;
	this._widthInc = 0;
	this.borderQuality = 1;
	this.borderSize = 1;
	this.borderColor = 0;
	this.borderStyle = 0;
	flixel.FlxSprite.call(this,X,Y);
	this._filters = [];
	var setTextEmpty = false;
	if(Text == null || Text == "") {
		Text = "";
		setTextEmpty = true;
	}
	this._textField = new flash.text.TextField();
	this._textField.selectable = false;
	this._textField.multiline = true;
	this._textField.set_wordWrap(true);
	this._defaultFormat = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,Size,16777215);
	this._formatAdjusted = new flash.text.TextFormat();
	this._textField.set_defaultTextFormat(this._defaultFormat);
	this._textField.set_text(Text);
	this.set_fieldWidth(FieldWidth);
	this._textField.embedFonts = EmbeddedFont;
	this._formats = new Array();
	this._textField.set_height(Text.length <= 0?1:10);
	this.allowCollisions = 0;
	this.set_moves(false);
	var key = flixel.FlxG.bitmap.getUniqueKey("text");
	var graphicWidth;
	if(FieldWidth <= 0) graphicWidth = 1; else graphicWidth = FieldWidth | 0;
	this.makeGraphic(graphicWidth,1,0,false,key);
	this.calcFrame();
	if(setTextEmpty) this.set_text("");
	this.shadowOffset = flixel.util.FlxPoint.get(1,1);
};
$hxClasses["flixel.text.FlxText"] = flixel.text.FlxText;
flixel.text.FlxText.__name__ = ["flixel","text","FlxText"];
flixel.text.FlxText.__super__ = flixel.FlxSprite;
flixel.text.FlxText.prototype = $extend(flixel.FlxSprite.prototype,{
	borderStyle: null
	,borderColor: null
	,borderSize: null
	,borderQuality: null
	,shadowOffset: null
	,_textField: null
	,_defaultFormat: null
	,_formatAdjusted: null
	,_formats: null
	,_filters: null
	,_widthInc: null
	,_heightInc: null
	,destroy: function() {
		this._textField = null;
		this._defaultFormat = null;
		this._formatAdjusted = null;
		this._filters = null;
		if(this._formats != null) {
			var _g = 0;
			var _g1 = this._formats;
			while(_g < _g1.length) {
				var format = _g1[_g];
				++_g;
				if(format != null) {
					format.destroy();
					format = null;
				}
			}
		}
		this._formats = null;
		this.shadowOffset = flixel.util.FlxDestroyUtil.put(this.shadowOffset);
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,addFormat: function(Format,Start,End) {
		if(End == null) End = -1;
		if(Start == null) Start = -1;
		if(Start > -1) Format.start = Start; else Format.start = Format.start;
		if(End > -1) Format.end = End; else Format.end = Format.end;
		this._formats.push(Format);
		this._formats.sort(function(left,right) {
			if(left.start < right.start) return -1; else return 1;
		});
		this.dirty = true;
	}
	,removeFormat: function(Format) {
		flixel.util.FlxArrayUtil.fastSplice_flixel_text_FlxTextFormat(this._formats,Format);
		this.dirty = true;
	}
	,clearFormats: function() {
		var _g = 0;
		var _g1 = this._formats;
		while(_g < _g1.length) {
			var format = _g1[_g];
			++_g;
			format.destroy();
			format = null;
		}
		this._formats = [];
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
	}
	,setFormat: function(Font,Size,Color,Alignment,BorderStyle,BorderColor,Embedded) {
		if(Embedded == null) Embedded = true;
		if(BorderColor == null) BorderColor = 0;
		if(BorderStyle == null) BorderStyle = 0;
		if(Color == null) Color = 16777215;
		if(Size == null) Size = 8;
		if(Embedded) {
			if(Font == null) this._defaultFormat.font = flixel.system.FlxAssets.FONT_DEFAULT; else this._defaultFormat.font = openfl.Assets.getFont(Font).fontName;
		} else if(Font != null) this._defaultFormat.font = Font;
		this._textField.embedFonts = Embedded;
		this._defaultFormat.size = Size;
		Color &= 16777215;
		this._defaultFormat.color = Color;
		this._defaultFormat.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this.set_borderStyle(BorderStyle);
		this.set_borderColor(BorderColor);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return this;
	}
	,setBorderStyle: function(Style,Color,Size,Quality) {
		if(Quality == null) Quality = 1;
		if(Size == null) Size = 1;
		if(Color == null) Color = 0;
		this.set_borderStyle(Style);
		this.set_borderColor(Color);
		this.set_borderSize(Size);
		this.set_borderQuality(Quality);
	}
	,addFilter: function(filter,widthInc,heightInc) {
		if(heightInc == null) heightInc = 0;
		if(widthInc == null) widthInc = 0;
		this._filters.push(filter);
		this._widthInc = widthInc;
		this._heightInc = heightInc;
		this.dirty = true;
	}
	,removeFilter: function(filter) {
		var removed = HxOverrides.remove(this._filters,filter);
		if(removed) this.dirty = true;
	}
	,clearFilters: function() {
		if(this._filters.length > 0) this.dirty = true;
		this._filters = [];
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region);
			this.set_frame(this.framesData.frames[0]);
			this.frames = 1;
		}
	}
	,applyFormats: function(FormatAdjusted,UseBorderColor) {
		if(UseBorderColor == null) UseBorderColor = false;
		if(UseBorderColor) FormatAdjusted.color = this.borderColor; else FormatAdjusted.color = this._defaultFormat.color;
		this._textField.setTextFormat(FormatAdjusted,0,this._textField.get_text().length);
		var _g = 0;
		var _g1 = this._formats;
		while(_g < _g1.length) {
			var format = _g1[_g];
			++_g;
			if(this._textField.get_text().length - 1 < format.start) break; else {
				FormatAdjusted.font = format.format.font;
				FormatAdjusted.bold = format.format.bold;
				FormatAdjusted.italic = format.format.italic;
				FormatAdjusted.size = format.format.size;
				if(UseBorderColor) FormatAdjusted.color = format.borderColor; else FormatAdjusted.color = format.format.color;
			}
			this._textField.setTextFormat(FormatAdjusted,format.start,Std["int"](Math.min(format.end,this._textField.get_text().length)));
		}
	}
	,set_fieldWidth: function(value) {
		if(this._textField != null) {
			if(value <= 0) {
				this.set_wordWrap(false);
				this.set_autoSize(true);
			} else this._textField.set_width(value);
			this.dirty = true;
		}
		return value;
	}
	,get_fieldWidth: function() {
		if(this._textField != null) return this._textField.get_width(); else return 0;
	}
	,set_autoSize: function(value) {
		if(this._textField != null) {
			if(value) this._textField.set_autoSize(flash.text.TextFieldAutoSize.LEFT); else this._textField.set_autoSize(flash.text.TextFieldAutoSize.NONE);
			this.dirty = true;
		}
		return value;
	}
	,get_autoSize: function() {
		if(this._textField != null) return this._textField.autoSize != flash.text.TextFieldAutoSize.NONE; else return false;
	}
	,get_text: function() {
		return this._textField.get_text();
	}
	,set_text: function(Text) {
		var ot = this._textField.get_text();
		this._textField.set_text(Text);
		if(this._textField.get_text() != ot) this.dirty = true;
		return this._textField.get_text();
	}
	,get_size: function() {
		return this._defaultFormat.size;
	}
	,set_size: function(Size) {
		this._defaultFormat.size = Size;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Size;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this._defaultFormat.color == Color) return Color;
		this._defaultFormat.color = Color;
		this.color = Color;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Color;
	}
	,get_font: function() {
		return this._defaultFormat.font;
	}
	,set_font: function(Font) {
		this._textField.embedFonts = true;
		this._defaultFormat.font = openfl.Assets.getFont(Font).fontName;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Font;
	}
	,get_embedded: function() {
		return this._textField.embedFonts = true;
	}
	,get_systemFont: function() {
		return this._defaultFormat.font;
	}
	,set_systemFont: function(Font) {
		this._textField.embedFonts = false;
		this._defaultFormat.font = Font;
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Font;
	}
	,get_bold: function() {
		return this._defaultFormat.bold;
	}
	,set_bold: function(value) {
		if(this._defaultFormat.bold != value) {
			this._defaultFormat.bold = value;
			this._textField.set_defaultTextFormat(this._defaultFormat);
			this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
			this.dirty = true;
		}
		return value;
	}
	,get_italic: function() {
		return this._defaultFormat.italic;
	}
	,set_italic: function(value) {
		if(this._defaultFormat.italic != value) {
			this._defaultFormat.italic = value;
			this._textField.set_defaultTextFormat(this._defaultFormat);
			this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
			this.dirty = true;
		}
		return value;
	}
	,get_wordWrap: function() {
		return this._textField.get_wordWrap();
	}
	,set_wordWrap: function(value) {
		if(this._textField.get_wordWrap() != value) {
			this._textField.set_wordWrap(value);
			this.dirty = true;
		}
		return value;
	}
	,get_alignment: function() {
		return js.Boot.__cast(this._defaultFormat.align , String);
	}
	,set_alignment: function(Alignment) {
		this._defaultFormat.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._defaultFormat);
		this._textField.setTextFormat(this._defaultFormat,0,this._textField.get_text().length);
		this.dirty = true;
		return Alignment;
	}
	,set_borderStyle: function(style) {
		if(style != this.borderStyle) {
			this.borderStyle = style;
			this.dirty = true;
		}
		return this.borderStyle;
	}
	,set_borderColor: function(Color) {
		Color &= 16777215;
		if(this.borderColor != Color && this.borderStyle != 0) this.dirty = true;
		this.borderColor = Color;
		return Color;
	}
	,set_borderSize: function(Value) {
		if(Value != this.borderSize && this.borderStyle != 0) this.dirty = true;
		this.borderSize = Value;
		return Value;
	}
	,set_borderQuality: function(Value) {
		if(Value < 0) Value = 0; else if(Value > 1) Value = 1;
		if(Value != this.borderQuality && this.borderStyle != 0) this.dirty = true;
		this.borderQuality = Value;
		return Value;
	}
	,get_textField: function() {
		return this._textField;
	}
	,set_cachedGraphics: function(Value) {
		var cached = flixel.FlxSprite.prototype.set_cachedGraphics.call(this,Value);
		if(Value != null) Value.set_destroyOnNoUse(true);
		return cached;
	}
	,updateColorTransform: function() {
		if(this.alpha != 1) {
			if(this.colorTransform == null) this.colorTransform = new flash.geom.ColorTransform(1,1,1,this.alpha); else this.colorTransform.alphaMultiplier = this.alpha;
			this.useColorTransform = true;
		} else {
			if(this.colorTransform != null) this.colorTransform.alphaMultiplier = 1;
			this.useColorTransform = false;
		}
		this.dirty = true;
	}
	,regenGraphics: function() {
		var oldWidth = this.cachedGraphics.bitmap.width;
		var oldHeight = this.cachedGraphics.bitmap.height;
		var newWidth = this._textField.get_width() + this._widthInc;
		var newHeight = this._textField.get_textHeight() + this._heightInc + 4;
		if(this._textField.get_textHeight() == 0) newHeight = oldHeight;
		if(oldWidth != newWidth || oldHeight != newHeight) {
			this.set_height(newHeight - this._heightInc);
			var key = this.cachedGraphics.key;
			flixel.FlxG.bitmap.remove(key);
			this.makeGraphic(newWidth | 0,newHeight | 0,0,false,key);
			this.frameHeight = Std["int"](this.get_height());
			this._textField.set_height(this.get_height() * 1.2);
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = newWidth;
			this._flashRect.height = newHeight;
		} else this.cachedGraphics.bitmap.fillRect(this._flashRect,0);
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) RunOnCpp = false;
		if(this._textField == null) return;
		if(this._filters != null) this._textField.set_filters(this._filters);
		this.regenGraphics();
		if(this._textField != null && this._textField.get_text() != null && this._textField.get_text().length > 0) {
			this._formatAdjusted.font = this._defaultFormat.font;
			this._formatAdjusted.size = this._defaultFormat.size;
			this._formatAdjusted.bold = this._defaultFormat.bold;
			this._formatAdjusted.italic = this._defaultFormat.italic;
			this._formatAdjusted.color = this._defaultFormat.color;
			this._formatAdjusted.align = this._defaultFormat.align;
			this._matrix.identity();
			this._matrix.translate(0.5 * this._widthInc | 0,0.5 * this._heightInc | 0);
			if(this._defaultFormat.align == flash.text.TextFormatAlign.CENTER && this._textField.get_numLines() == 1) {
				this._formatAdjusted.align = flash.text.TextFormatAlign.LEFT;
				this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
				this._matrix.translate(Math.floor((this.get_width() - this._textField.get_textWidth()) / 2),0);
			}
			if(this.borderStyle != 0) {
				var iterations = this.borderSize * this.borderQuality | 0;
				if(iterations <= 0) iterations = 1;
				var delta = this.borderSize / iterations;
				if(this.borderStyle == 1) {
					this.applyFormats(this._formatAdjusted,true);
					var _g = 0;
					while(_g < iterations) {
						var iter = _g++;
						this._matrix.translate(delta,delta);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
					}
					this._matrix.translate(-this.shadowOffset.x * this.borderSize,-this.shadowOffset.y * this.borderSize);
					this.applyFormats(this._formatAdjusted,false);
				} else if(this.borderStyle == 2) {
					this.applyFormats(this._formatAdjusted,true);
					var itd = delta;
					var _g1 = 0;
					while(_g1 < iterations) {
						var iter1 = _g1++;
						this._matrix.translate(-itd,-itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,-itd);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd,0);
						itd += delta;
					}
					this.applyFormats(this._formatAdjusted,false);
				} else if(this.borderStyle == 3) {
					this.applyFormats(this._formatAdjusted,true);
					var itd1 = delta;
					var _g2 = 0;
					while(_g2 < iterations) {
						var iter2 = _g2++;
						this._matrix.translate(-itd1,-itd1);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd1 * 2,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(0,itd1 * 2);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(-itd1 * 2,0);
						this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
						this._matrix.translate(itd1,-itd1);
						itd1 += delta;
					}
					this.applyFormats(this._formatAdjusted,false);
				}
			} else this.applyFormats(this._formatAdjusted,false);
			this.cachedGraphics.bitmap.draw(this._textField,this._matrix);
		}
		this.dirty = false;
		if(this.framePixels == null || this.framePixels.width != this.cachedGraphics.bitmap.width || this.framePixels.height != this.cachedGraphics.bitmap.height) {
			this.framePixels = flixel.util.FlxDestroyUtil.dispose(this.framePixels);
			this.framePixels = new flash.display.BitmapData(this.cachedGraphics.bitmap.width,this.cachedGraphics.bitmap.height,true,0);
		}
		this.framePixels.copyPixels(this.cachedGraphics.bitmap,this._flashRect,this._flashPointZero);
		if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this.colorTransform);
	}
	,dtfCopy: function() {
		var defaultTextFormat = this._textField.get_defaultTextFormat();
		return new flash.text.TextFormat(defaultTextFormat.font,defaultTextFormat.size,defaultTextFormat.color,defaultTextFormat.bold,defaultTextFormat.italic,defaultTextFormat.underline,defaultTextFormat.url,defaultTextFormat.target,defaultTextFormat.align);
	}
	,convertTextAlignmentFromString: function(StrAlign) {
		if(StrAlign == "right") return flash.text.TextFormatAlign.RIGHT; else if(StrAlign == "center") return flash.text.TextFormatAlign.CENTER; else if(StrAlign == "justify") return flash.text.TextFormatAlign.JUSTIFY; else return flash.text.TextFormatAlign.LEFT;
	}
	,updateFormat: function(Format) {
		this._textField.setTextFormat(Format,0,this._textField.get_text().length);
	}
	,__class__: flixel.text.FlxText
	,__properties__: $extend(flixel.FlxSprite.prototype.__properties__,{set_autoSize:"set_autoSize",get_autoSize:"get_autoSize",set_fieldWidth:"set_fieldWidth",get_fieldWidth:"get_fieldWidth",get_textField:"get_textField",set_borderQuality:"set_borderQuality",set_borderSize:"set_borderSize",set_borderColor:"set_borderColor",set_borderStyle:"set_borderStyle",set_alignment:"set_alignment",get_alignment:"get_alignment",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_italic:"set_italic",get_italic:"get_italic",set_bold:"set_bold",get_bold:"get_bold",set_systemFont:"set_systemFont",get_systemFont:"get_systemFont",get_embedded:"get_embedded",set_font:"set_font",get_font:"get_font",set_size:"set_size",get_size:"get_size",set_text:"set_text",get_text:"get_text"})
});
flixel.text.FlxTextFormat = function(FontColor,Bold,Italic,BorderColor,Start,End) {
	if(End == null) End = -1;
	if(Start == null) Start = -1;
	this.end = -1;
	this.start = -1;
	if(FontColor != null) FontColor &= 16777215;
	if(BorderColor != null) BorderColor &= 16777215;
	this.format = new flash.text.TextFormat(null,null,FontColor,Bold,Italic);
	if(Start > -1) this.start = Start;
	if(End > -1) this.end = End;
	if(BorderColor == null) this.borderColor = 0; else this.borderColor = BorderColor;
};
$hxClasses["flixel.text.FlxTextFormat"] = flixel.text.FlxTextFormat;
flixel.text.FlxTextFormat.__name__ = ["flixel","text","FlxTextFormat"];
flixel.text.FlxTextFormat.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.text.FlxTextFormat.prototype = {
	borderColor: null
	,start: null
	,end: null
	,format: null
	,destroy: function() {
		this.format = null;
	}
	,__class__: flixel.text.FlxTextFormat
};
flixel.text.pxText = {};
flixel.text.pxText.PxBitmapFont = function() {
	this._maxHeight = 0;
	this._point = new flash.geom.Point();
	this._matrix = new flash.geom.Matrix();
	this._colorTransform = new flash.geom.ColorTransform();
	this._glyphs = [];
};
$hxClasses["flixel.text.pxText.PxBitmapFont"] = flixel.text.pxText.PxBitmapFont;
flixel.text.pxText.PxBitmapFont.__name__ = ["flixel","text","pxText","PxBitmapFont"];
flixel.text.pxText.PxBitmapFont.store = function(PxHandle,PxFont) {
	flixel.text.pxText.PxBitmapFont._storedFonts.set(PxHandle,PxFont);
};
flixel.text.pxText.PxBitmapFont.fetch = function(PxHandle) {
	var f = flixel.text.pxText.PxBitmapFont._storedFonts.get(PxHandle);
	return f;
};
flixel.text.pxText.PxBitmapFont.clearStorage = function() {
	var $it0 = flixel.text.pxText.PxBitmapFont._storedFonts.iterator();
	while( $it0.hasNext() ) {
		var font = $it0.next();
		font.dispose();
	}
	flixel.text.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
};
flixel.text.pxText.PxBitmapFont.prototype = {
	_glyphs: null
	,_glyphString: null
	,_maxHeight: null
	,_matrix: null
	,_colorTransform: null
	,_point: null
	,_tileRects: null
	,_symbols: null
	,_region: null
	,cachedGraphics: null
	,loadPixelizer: function(PxBitmapData,PxLetters) {
		this.reset();
		this._glyphString = PxLetters;
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			this._glyphs.push(null);
		}
		if(PxBitmapData != null) {
			this._tileRects = [];
			var result = this.preparePixelizerBitmapData(PxBitmapData,this._tileRects);
			var key = flixel.FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel.FlxG.bitmap.addWithSpaces(result,0,0,1,1,false,key));
			this._region = new flixel.system.layer.Region();
			this._region.width = this.cachedGraphics.bitmap.width;
			this._region.height = this.cachedGraphics.bitmap.height;
			var currRect;
			this.updateGlyphData();
		}
		return this;
	}
	,loadAngelCode: function(pBitmapData,pXMLData) {
		this.reset();
		if(pBitmapData != null && pXMLData != null) {
			this._symbols = new Array();
			var result = this.prepareAngelCodeBitmapData(pBitmapData,pXMLData,this._symbols);
			var key = flixel.FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel.FlxG.bitmap.addWithSpaces(result,0,0,1,1,false,key));
			this.updateGlyphData();
		}
		return this;
	}
	,updateGlyphData: function(Tiles) {
		var rect;
		if(this._symbols != null) {
			this._glyphString = "";
			var point = new flash.geom.Point();
			var bd;
			var charString;
			var _g = 0;
			var _g1 = this._symbols;
			while(_g < _g1.length) {
				var symbol = _g1[_g];
				++_g;
				rect = new flash.geom.Rectangle();
				rect.x = symbol.x;
				rect.y = symbol.y;
				rect.width = symbol.width;
				rect.height = symbol.height;
				point.x = symbol.xoffset;
				point.y = symbol.yoffset;
				charString = String.fromCharCode(symbol.charCode);
				this._glyphString += charString;
				var xadvance = symbol.xadvance;
				var charWidth = xadvance;
				if(rect.width > xadvance) {
					charWidth = symbol.width;
					point.x = 0;
				}
				bd = null;
				if(charString != " " && charString != "") bd = new flash.display.BitmapData(charWidth,symbol.height + symbol.yoffset,true,0); else bd = new flash.display.BitmapData(charWidth,1,true,0);
				bd.copyPixels(this.cachedGraphics.bitmap,rect,point,null,null,true);
				this.setGlyph(symbol.charCode,bd);
			}
		} else if(this._tileRects != null) {
			var _g11 = 0;
			var _g2 = this._tileRects.length;
			while(_g11 < _g2) {
				var letterID = _g11++;
				rect = this._tileRects[letterID];
				var bd1 = new flash.display.BitmapData(rect.width | 0,rect.height | 0,true,0);
				bd1.copyPixels(this.cachedGraphics.bitmap,rect,flixel.text.pxText.PxBitmapFont.ZERO_POINT,null,null,true);
				this.setGlyph(HxOverrides.cca(this._glyphString,letterID),bd1);
			}
		}
	}
	,reset: function() {
		this.dispose();
		this._maxHeight = 0;
		this._glyphs = [];
		this._symbols = null;
		this._tileRects = null;
		this._glyphString = "";
	}
	,preparePixelizerBitmapData: function(PxBitmapData,PxRects) {
		var bgColor = PxBitmapData.getPixel(0,0);
		var cy = 0;
		var cx;
		while(cy < PxBitmapData.height) {
			var rowHeight = 0;
			cx = 0;
			while(cx < PxBitmapData.width) {
				if(Std["int"](PxBitmapData.getPixel(cx,cy)) != bgColor) {
					var gx = cx;
					var gy = cy;
					while(Std["int"](PxBitmapData.getPixel(gx,cy)) != bgColor) gx++;
					while(Std["int"](PxBitmapData.getPixel(cx,gy)) != bgColor) gy++;
					var gw = gx - cx;
					var gh = gy - cy;
					PxRects.push(new flash.geom.Rectangle(cx,cy,gw,gh));
					if(gh > rowHeight) rowHeight = gh;
					if(gh > this._maxHeight) this._maxHeight = gh;
					cx += gw;
				}
				cx++;
			}
			cy += rowHeight + 1;
		}
		PxBitmapData.floodFill(0,0,0);
		return PxBitmapData;
	}
	,prepareAngelCodeBitmapData: function(PxBitmapData,PxXMLData,PxSymbols) {
		var chars = null;
		var $it0 = PxXMLData.elements();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.get_nodeName() == "font") {
				var $it1 = node.elements();
				while( $it1.hasNext() ) {
					var nodeChild = $it1.next();
					if(nodeChild.get_nodeName() == "chars") {
						chars = nodeChild;
						break;
					}
				}
			}
		}
		var symbol;
		var maxX = 0;
		var maxY = 0;
		if(chars != null) {
			var $it2 = chars.elements();
			while( $it2.hasNext() ) {
				var node1 = $it2.next();
				if(node1.get_nodeName() == "char") {
					symbol = new flixel.text.pxText._PxBitmapFont.HelperSymbol();
					symbol.x = Std.parseInt(node1.get("x"));
					symbol.y = Std.parseInt(node1.get("y"));
					symbol.width = Std.parseInt(node1.get("width"));
					symbol.height = Std.parseInt(node1.get("height"));
					symbol.xoffset = Std.parseInt(node1.get("xoffset"));
					symbol.yoffset = Std.parseInt(node1.get("yoffset"));
					symbol.xadvance = Std.parseInt(node1.get("xadvance"));
					symbol.charCode = Std.parseInt(node1.get("id"));
					PxSymbols.push(symbol);
					maxX = symbol.x + symbol.width;
					maxY = symbol.y + symbol.height;
				}
			}
		}
		return PxBitmapData;
	}
	,getPreparedGlyphs: function(PxScale,PxColor,PxUseColorTransform) {
		if(PxUseColorTransform == null) PxUseColorTransform = true;
		var result = [];
		this._matrix.identity();
		this._matrix.scale(PxScale,PxScale);
		var colorMultiplier = 0.00392156862745098;
		this._colorTransform.redOffset = 0;
		this._colorTransform.greenOffset = 0;
		this._colorTransform.blueOffset = 0;
		this._colorTransform.redMultiplier = (PxColor >> 16) * colorMultiplier;
		this._colorTransform.greenMultiplier = (PxColor >> 8 & 255) * colorMultiplier;
		this._colorTransform.blueMultiplier = (PxColor & 255) * colorMultiplier;
		var glyph;
		var preparedGlyph;
		var _g1 = 0;
		var _g = this._glyphs.length;
		while(_g1 < _g) {
			var i = _g1++;
			glyph = this._glyphs[i];
			var bdWidth;
			var bdHeight;
			if(glyph != null) {
				if(PxScale > 0) {
					bdWidth = Math.ceil(glyph.width * PxScale);
					bdHeight = Math.ceil(glyph.height * PxScale);
				} else {
					bdWidth = 1;
					bdHeight = 1;
				}
				preparedGlyph = new flash.display.BitmapData(bdWidth,bdHeight,true,0);
				if(PxUseColorTransform) preparedGlyph.draw(glyph,this._matrix,this._colorTransform); else preparedGlyph.draw(glyph,this._matrix);
				result[i] = preparedGlyph;
			}
		}
		return result;
	}
	,dispose: function() {
		var bd;
		var _g1 = 0;
		var _g = this._glyphs.length;
		while(_g1 < _g) {
			var i = _g1++;
			bd = this._glyphs[i];
			if(bd != null) this._glyphs[i].dispose();
		}
		this._symbols = null;
		this._tileRects = null;
		this.setCachedGraphics(null);
		this._region = null;
		this._glyphs = null;
	}
	,getFontData: function() {
		var output = "";
		var _g1 = 0;
		var _g = this._glyphString.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(this._glyphString,i);
			var glyph = this._glyphs[charCode];
			output += HxOverrides.substr(this._glyphString,i,1);
			output += glyph.width;
			output += glyph.height;
			var _g3 = 0;
			var _g2 = glyph.height;
			while(_g3 < _g2) {
				var py = _g3++;
				var _g5 = 0;
				var _g4 = glyph.width;
				while(_g5 < _g4) {
					var px = _g5++;
					if(glyph.getPixel32(px,py) != 0) output += "1"; else output += "0";
				}
			}
		}
		return output;
	}
	,setGlyph: function(PxCharID,PxBitmapData) {
		if(this._glyphs[PxCharID] != null) this._glyphs[PxCharID].dispose();
		this._glyphs[PxCharID] = PxBitmapData;
		if(PxBitmapData.height > this._maxHeight) this._maxHeight = PxBitmapData.height;
	}
	,render: function(PxBitmapData,PxFontData,PxText,PxColor,PxOffsetX,PxOffsetY,PxLetterSpacing) {
		this._point.x = PxOffsetX;
		this._point.y = PxOffsetY;
		var glyph;
		var _g1 = 0;
		var _g = PxText.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			glyph = PxFontData[charCode];
			if(glyph != null) {
				PxBitmapData.copyPixels(glyph,glyph.rect,this._point,null,null,true);
				this._point.x += glyph.width + PxLetterSpacing;
			}
		}
	}
	,getTextWidth: function(PxText,PxLetterSpacing,PxFontScale) {
		if(PxFontScale == null) PxFontScale = 1;
		if(PxLetterSpacing == null) PxLetterSpacing = 0;
		var w = 0;
		var textLength = PxText.length;
		var _g1 = 0;
		var _g = textLength;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			var glyph = this._glyphs[charCode];
			if(glyph != null) w += glyph.width;
		}
		w = Math.round(w * PxFontScale);
		if(textLength > 1) w += (textLength - 1) * PxLetterSpacing;
		return w;
	}
	,getFontHeight: function() {
		return this._maxHeight;
	}
	,get_numLetters: function() {
		return this._glyphs.length;
	}
	,setCachedGraphics: function(value) {
		if(this.cachedGraphics != null && this.cachedGraphics != value) {
			var _g = this.cachedGraphics;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 - 1);
			_g1;
		}
		if(this.cachedGraphics != value && value != null) {
			var _g2 = value;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 + 1);
			_g11;
		}
		this.cachedGraphics = value;
	}
	,__class__: flixel.text.pxText.PxBitmapFont
	,__properties__: {get_numLetters:"get_numLetters"}
};
flixel.text.pxText._PxBitmapFont = {};
flixel.text.pxText._PxBitmapFont.HelperSymbol = function() {
};
$hxClasses["flixel.text.pxText._PxBitmapFont.HelperSymbol"] = flixel.text.pxText._PxBitmapFont.HelperSymbol;
flixel.text.pxText._PxBitmapFont.HelperSymbol.__name__ = ["flixel","text","pxText","_PxBitmapFont","HelperSymbol"];
flixel.text.pxText._PxBitmapFont.HelperSymbol.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,xoffset: null
	,yoffset: null
	,xadvance: null
	,charCode: null
	,__class__: flixel.text.pxText._PxBitmapFont.HelperSymbol
};
flixel.tile = {};
flixel.tile.FlxTile = function(Tilemap,Index,Width,Height,Visible,AllowCollisions) {
	this.mapIndex = 0;
	this.callbackFunction = null;
	flixel.FlxObject.call(this,0,0,Width,Height);
	this.set_immovable(true);
	this.set_moves(false);
	this.filter = null;
	this.tilemap = Tilemap;
	this.index = Index;
	this.set_visible(Visible);
	this.allowCollisions = AllowCollisions;
};
$hxClasses["flixel.tile.FlxTile"] = flixel.tile.FlxTile;
flixel.tile.FlxTile.__name__ = ["flixel","tile","FlxTile"];
flixel.tile.FlxTile.__super__ = flixel.FlxObject;
flixel.tile.FlxTile.prototype = $extend(flixel.FlxObject.prototype,{
	callbackFunction: null
	,filter: null
	,tilemap: null
	,index: null
	,mapIndex: null
	,destroy: function() {
		this.callbackFunction = null;
		this.tilemap = null;
		flixel.FlxObject.prototype.destroy.call(this);
	}
	,__class__: flixel.tile.FlxTile
});
flixel.tile.FlxTileblock = function(X,Y,Width,Height) {
	flixel.FlxSprite.call(this,X,Y);
	this.makeGraphic(Width,Height,0,true);
	this.set_active(false);
	this.set_immovable(true);
	this.set_moves(false);
};
$hxClasses["flixel.tile.FlxTileblock"] = flixel.tile.FlxTileblock;
flixel.tile.FlxTileblock.__name__ = ["flixel","tile","FlxTileblock"];
flixel.tile.FlxTileblock.__super__ = flixel.FlxSprite;
flixel.tile.FlxTileblock.prototype = $extend(flixel.FlxSprite.prototype,{
	loadTiles: function(TileGraphic,TileWidth,TileHeight,Empties) {
		if(Empties == null) Empties = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		if(TileGraphic == null) return this;
		var sprite = new flixel.FlxSprite().loadGraphic(TileGraphic,true,TileWidth,TileHeight);
		var spriteWidth = Std["int"](sprite.get_width());
		var spriteHeight = Std["int"](sprite.get_height());
		var total = sprite.frames + Empties;
		var regen = false;
		if(this.get_width() % sprite.get_width() != 0) {
			this.set_width(Std["int"](this.get_width() / spriteWidth + 1) * spriteWidth);
			regen = true;
		}
		if(this.get_height() % sprite.get_height() != 0) {
			this.set_height(Std["int"](this.get_height() / spriteHeight + 1) * spriteHeight);
			regen = true;
		}
		if(regen) this.makeGraphic(Std["int"](this.get_width()),Std["int"](this.get_height()),0,true); else flixel.util.FlxSpriteUtil.fill(this,0);
		var row = 0;
		var column;
		var destinationX;
		var destinationY = 0;
		var widthInTiles = Std["int"](this.get_width() / spriteWidth);
		var heightInTiles = Std["int"](this.get_height() / spriteHeight);
		while(row < heightInTiles) {
			destinationX = 0;
			column = 0;
			while(column < widthInTiles) {
				if((flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * total > Empties) {
					sprite.animation.randomFrame();
					if(sprite.dirty) {
						sprite.dirty = true;
						sprite.calcFrame();
					}
					this.stamp(sprite,destinationX,destinationY);
				}
				destinationX += spriteWidth;
				column++;
			}
			destinationY += spriteHeight;
			row++;
		}
		sprite.destroy();
		this.dirty = true;
		return this;
	}
	,__class__: flixel.tile.FlxTileblock
});
flixel.tile.GraphicAuto = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.tile.GraphicAuto.preload != null) {
		this.__sourceImage = flixel.tile.GraphicAuto.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.tile.GraphicAuto.resourceName),flixel.tile.GraphicAuto.resourceType,function(b) {
		if(flixel.tile.GraphicAuto.preload == null) flixel.tile.GraphicAuto.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.tile.GraphicAuto"] = flixel.tile.GraphicAuto;
flixel.tile.GraphicAuto.__name__ = ["flixel","tile","GraphicAuto"];
flixel.tile.GraphicAuto.preload = null;
flixel.tile.GraphicAuto.__super__ = flash.display.BitmapData;
flixel.tile.GraphicAuto.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.tile.GraphicAuto
});
flixel.tile.GraphicAutoAlt = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.tile.GraphicAutoAlt.preload != null) {
		this.__sourceImage = flixel.tile.GraphicAutoAlt.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.tile.GraphicAutoAlt.resourceName),flixel.tile.GraphicAutoAlt.resourceType,function(b) {
		if(flixel.tile.GraphicAutoAlt.preload == null) flixel.tile.GraphicAutoAlt.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.tile.GraphicAutoAlt"] = flixel.tile.GraphicAutoAlt;
flixel.tile.GraphicAutoAlt.__name__ = ["flixel","tile","GraphicAutoAlt"];
flixel.tile.GraphicAutoAlt.preload = null;
flixel.tile.GraphicAutoAlt.__super__ = flash.display.BitmapData;
flixel.tile.GraphicAutoAlt.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.tile.GraphicAutoAlt
});
flixel.tile.FlxTilemapBuffer = function(TileWidth,TileHeight,WidthInTiles,HeightInTiles,Camera,ScaleX,ScaleY) {
	if(ScaleY == null) ScaleY = 1.0;
	if(ScaleX == null) ScaleX = 1.0;
	this.pixelPerfectRender = true;
	this.columns = 0;
	this.rows = 0;
	this.dirty = false;
	this.height = 0;
	this.width = 0;
	this.y = 0;
	this.x = 0;
	this.updateColumns(TileWidth,WidthInTiles,ScaleX,Camera);
	this.updateRows(TileHeight,HeightInTiles,ScaleY,Camera);
	this.pixels = new flash.display.BitmapData(this.columns * TileWidth | 0,this.rows * TileHeight | 0,true,0);
	this._flashRect = new flash.geom.Rectangle(0,0,this.pixels.width,this.pixels.height);
	this._matrix = new flash.geom.Matrix();
	this.dirty = true;
};
$hxClasses["flixel.tile.FlxTilemapBuffer"] = flixel.tile.FlxTilemapBuffer;
flixel.tile.FlxTilemapBuffer.__name__ = ["flixel","tile","FlxTilemapBuffer"];
flixel.tile.FlxTilemapBuffer.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,dirty: null
	,rows: null
	,columns: null
	,pixelPerfectRender: null
	,pixels: null
	,_flashRect: null
	,_matrix: null
	,destroy: function() {
		this.pixels = null;
		this._matrix = null;
	}
	,fill: function(Color) {
		if(Color == null) Color = 0;
		this.pixels.fillRect(this._flashRect,Color);
	}
	,draw: function(Camera,FlashPoint,ScaleX,ScaleY) {
		if(ScaleY == null) ScaleY = 1.0;
		if(ScaleX == null) ScaleX = 1.0;
		if(this.pixelPerfectRender) {
			FlashPoint.x = Math.floor(FlashPoint.x);
			FlashPoint.y = Math.floor(FlashPoint.y);
		}
		if(this.pixelPerfectRender && (ScaleX == 1.0 && ScaleY == 1.0)) Camera.buffer.copyPixels(this.pixels,this._flashRect,FlashPoint,null,null,true); else {
			this._matrix.identity();
			this._matrix.scale(ScaleX,ScaleY);
			this._matrix.translate(FlashPoint.x,FlashPoint.y);
			Camera.buffer.draw(this.pixels,this._matrix);
		}
	}
	,updateColumns: function(TileWidth,WidthInTiles,ScaleX,Camera) {
		if(ScaleX == null) ScaleX = 1.0;
		if(WidthInTiles < 0) WidthInTiles = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.columns = Math.ceil(Camera.width / (TileWidth * ScaleX)) + 1;
		if(this.columns > WidthInTiles) this.columns = WidthInTiles;
		this.width = this.columns * TileWidth * ScaleX | 0;
	}
	,updateRows: function(TileHeight,HeightInTiles,ScaleY,Camera) {
		if(ScaleY == null) ScaleY = 1.0;
		if(HeightInTiles < 0) HeightInTiles = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.rows = Math.ceil(Camera.height / (TileHeight * ScaleY)) + 1;
		if(this.rows > HeightInTiles) this.rows = HeightInTiles;
		this.height = this.rows * TileHeight * ScaleY | 0;
	}
	,__class__: flixel.tile.FlxTilemapBuffer
};
flixel.tile.FlxTilemap = function() {
	this._startingIndex = 0;
	this._scaledTileHeight = 0;
	this._scaledTileWidth = 0;
	this._tileHeight = 0;
	this._tileWidth = 0;
	this.tileScaleHack = 1.01;
	this.totalTiles = 0;
	this.heightInTiles = 0;
	this.widthInTiles = 0;
	this.auto = 0;
	flixel.FlxObject.call(this);
	this.collisionType = 3;
	this._buffers = new Array();
	this._flashPoint = new flash.geom.Point();
	this.set_immovable(true);
	this.set_moves(false);
	this.scale = new flixel.util.FlxCallbackPoint($bind(this,this.setScaleXCallback),$bind(this,this.setScaleYCallback),$bind(this,this.setScaleXYCallback));
	this.scale.set(1,1);
	flixel.FlxG.signals.gameResized.add($bind(this,this.onGameResize));
};
$hxClasses["flixel.tile.FlxTilemap"] = flixel.tile.FlxTilemap;
flixel.tile.FlxTilemap.__name__ = ["flixel","tile","FlxTilemap"];
flixel.tile.FlxTilemap.__super__ = flixel.FlxObject;
flixel.tile.FlxTilemap.prototype = $extend(flixel.FlxObject.prototype,{
	auto: null
	,widthInTiles: null
	,heightInTiles: null
	,totalTiles: null
	,tileScaleHack: null
	,customTileRemap: null
	,scale: null
	,region: null
	,framesData: null
	,cachedGraphics: null
	,_randomIndices: null
	,_randomChoices: null
	,_randomLambda: null
	,_flashPoint: null
	,_flashRect: null
	,_buffers: null
	,_data: null
	,_rects: null
	,_tileWidth: null
	,_tileHeight: null
	,_scaledTileWidth: null
	,_scaledTileHeight: null
	,_tileObjects: null
	,_startingIndex: null
	,destroy: function() {
		this._flashPoint = null;
		this._flashRect = null;
		var i = 0;
		var l;
		if(this._tileObjects != null) {
			l = this._tileObjects.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._tileObjects[i1].destroy();
			}
			this._tileObjects = null;
		}
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g1 = 0;
			while(_g1 < l) {
				var i2 = _g1++;
				this._buffers[i2].destroy();
			}
			this._buffers = null;
		}
		this._data = null;
		this._rects = null;
		this.framesData = null;
		this.set_cachedGraphics(null);
		this.region = null;
		this.scale = flixel.util.FlxDestroyUtil.destroy(this.scale);
		flixel.FlxG.signals.gameResized.remove($bind(this,this.onGameResize));
		flixel.FlxObject.prototype.destroy.call(this);
	}
	,loadMap: function(MapData,TileGraphic,TileWidth,TileHeight,AutoTile,StartingIndex,DrawIndex,CollideIndex) {
		if(CollideIndex == null) CollideIndex = 1;
		if(DrawIndex == null) DrawIndex = 1;
		if(StartingIndex == null) StartingIndex = 0;
		if(AutoTile == null) AutoTile = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		this.auto = AutoTile;
		if(StartingIndex <= 0) this._startingIndex = 0; else this._startingIndex = StartingIndex;
		if(typeof(MapData) == "string") {
			this._data = new Array();
			var columns;
			var rows = MapData.split("\n");
			this.heightInTiles = rows.length;
			this.widthInTiles = 0;
			var row = 0;
			var column;
			while(row < this.heightInTiles) {
				columns = rows[row++].split(",");
				if(columns.length <= 1) {
					this.heightInTiles = this.heightInTiles - 1;
					continue;
				}
				if(this.widthInTiles == 0) this.widthInTiles = columns.length;
				column = 0;
				while(column < this.widthInTiles) {
					var curTile = Std.parseInt(columns[column]);
					this._data.push(curTile);
					column++;
				}
			}
		} else if((MapData instanceof Array) && MapData.__enum__ == null) {
			this._data = MapData;
			this._data = this._data.slice();
		} else throw "Unexpected MapData format '" + Std.string(Type["typeof"](MapData)) + "' passed into loadMap. Map data must be CSV string or Array<Int>.";
		var i;
		this.totalTiles = this._data.length;
		if(this.auto > 0) {
			this._startingIndex = 1;
			DrawIndex = 1;
			CollideIndex = 1;
			i = 0;
			while(i < this.totalTiles) this.autoTile(i++);
		}
		if(this.customTileRemap != null) {
			i = 0;
			while(i < this.totalTiles) {
				var old_index = this._data[i];
				var new_index = old_index;
				if(old_index < this.customTileRemap.length) new_index = this.customTileRemap[old_index];
				this._data[i] = new_index;
				i++;
			}
		}
		if(this._randomIndices != null) {
			var randLambda;
			if(this._randomLambda != null) randLambda = this._randomLambda; else randLambda = flixel.util.FlxRandom["float"];
			i = 0;
			while(i < this.totalTiles) {
				var old_index1 = this._data[i];
				var j = 0;
				var new_index1 = old_index1;
				var _g = 0;
				var _g1 = this._randomIndices;
				while(_g < _g1.length) {
					var rand = _g1[_g];
					++_g;
					if(old_index1 == rand) {
						var k = Std["int"](randLambda() * this._randomChoices[j].length);
						new_index1 = this._randomChoices[j][k];
					}
					j++;
				}
				this._data[i] = new_index1;
				i++;
			}
		}
		this.set_cachedGraphics(flixel.FlxG.bitmap.addWithSpaces(TileGraphic,0,0,1,1,false,null));
		this._tileWidth = TileWidth;
		if(this._tileWidth <= 0) this._tileWidth = this.cachedGraphics.bitmap.height;
		this._tileHeight = TileHeight;
		if(this._tileHeight <= 0) this._tileHeight = this._tileWidth;
		if(!js.Boot.__instanceof(TileGraphic,flixel.util.loaders.TextureRegion)) {
			this.region = new flixel.system.layer.Region(0,0,this._tileWidth,this._tileHeight);
			this.region.width = (this.cachedGraphics.bitmap.width / this._tileWidth | 0) * this._tileWidth;
			this.region.height = (this.cachedGraphics.bitmap.height / this._tileHeight | 0) * this._tileHeight;
		} else {
			var spriteRegion = TileGraphic;
			this.region = spriteRegion.region.clone();
			if(this.region.tileWidth > 0) this._tileWidth = this.region.tileWidth; else this.region.tileWidth = this._tileWidth;
			if(this.region.tileHeight > 0) this._tileHeight = this.region.tileWidth; else this.region.tileHeight = this._tileHeight;
		}
		this._tileObjects = new Array();
		var length = this.region.get_numTiles();
		length += this._startingIndex;
		var _g2 = 0;
		while(_g2 < length) {
			var i1 = _g2++;
			this._tileObjects[i1] = new flixel.tile.FlxTile(this,i1,this._tileWidth,this._tileHeight,i1 >= DrawIndex,i1 >= CollideIndex?this.allowCollisions:0);
		}
		this._scaledTileWidth = this._tileWidth * this.scale.x;
		this._scaledTileHeight = this._tileHeight * this.scale.y;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		this._rects = new Array();
		flixel.util.FlxArrayUtil.setLength_flash_geom_Rectangle(this._rects,this.totalTiles);
		i = 0;
		while(i < this.totalTiles) this.updateTile(i++);
		return this;
	}
	,setCustomTileMappings: function(mappings,randomIndices,randomChoices,randomLambda) {
		this.customTileRemap = mappings;
		this._randomIndices = randomIndices;
		this._randomChoices = randomChoices;
		this._randomLambda = randomLambda;
		if(this._randomIndices != null && (this._randomChoices == null || this._randomChoices.length == 0)) throw "You must provide valid 'randomChoices' if you wish to randomize tilemap indicies, please read documentation of 'setCustomTileMappings' function.";
	}
	,draw: function() {
		var cameras = this.get_cameras();
		var camera;
		var buffer;
		var i = 0;
		var l = cameras.length;
		while(i < l) {
			camera = cameras[i];
			if(!camera.visible || !camera.exists) continue;
			if(this._buffers[i] == null) this._buffers[i] = this.createBuffer(camera);
			buffer = this._buffers[i++];
			buffer.dirty = true;
			if(!buffer.dirty) {
				this._point.set_x(this.x - camera.scroll.x * this.scrollFactor.x + buffer.x);
				this._point.set_y(this.y - camera.scroll.y * this.scrollFactor.y + buffer.y);
				buffer.dirty = this._point.x > 0 || this._point.y > 0 || this._point.x + buffer.width < camera.width || this._point.y + buffer.height < camera.height;
			}
			if(buffer.dirty) {
				this.drawTilemap(buffer,camera);
				buffer.dirty = false;
			}
			this._flashPoint.x = this.x - camera.scroll.x * this.scrollFactor.x + buffer.x;
			this._flashPoint.y = this.y - camera.scroll.y * this.scrollFactor.y + buffer.y;
			buffer.draw(camera,this._flashPoint,this.scale.x,this.scale.y);
		}
	}
	,getData: function(Simple) {
		if(Simple == null) Simple = false;
		if(!Simple) return this._data;
		var i = 0;
		var l = this._data.length;
		var data = new Array();
		flixel.util.FlxArrayUtil.setLength_Int(data,l);
		while(i < l) {
			if(this._tileObjects[this._data[i]].allowCollisions > 0) data[i] = 1; else data[i] = 0;
			i++;
		}
		return data;
	}
	,setDirty: function(Dirty) {
		if(Dirty == null) Dirty = true;
		var _g = 0;
		var _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer = _g1[_g];
			++_g;
			buffer.dirty = true;
		}
	}
	,findPath: function(Start,End,Simplify,RaySimplify,WideDiagonal) {
		if(WideDiagonal == null) WideDiagonal = true;
		if(RaySimplify == null) RaySimplify = false;
		if(Simplify == null) Simplify = true;
		var startIndex = ((Start.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((Start.x - this.x) / this._scaledTileWidth | 0);
		var endIndex = ((End.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((End.x - this.x) / this._scaledTileWidth | 0);
		if(this._tileObjects[this._data[startIndex]].allowCollisions > 0 || this._tileObjects[this._data[endIndex]].allowCollisions > 0) return null;
		var distances = this.computePathDistance(startIndex,endIndex,WideDiagonal);
		if(distances == null) return null;
		var points = new Array();
		this.walkPath(distances,endIndex,points);
		var node;
		node = points[points.length - 1];
		node.set_x(Start.x);
		node.set_y(Start.y);
		node = points[0];
		node.set_x(End.x);
		node.set_y(End.y);
		if(Simplify) this.simplifyPath(points);
		if(RaySimplify) this.raySimplifyPath(points);
		var path = [];
		var i = points.length - 1;
		while(i >= 0) {
			node = points[i--];
			if(node != null) path.push(node);
		}
		return path;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel.group.FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel.group.FlxGroup.overlaps($bind(this,this.tilemapOverlapsCallback),group,0,0,InScreenSpace,Camera); else if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3?this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject)):this.overlaps(ObjectOrGroup,false,null)) return true;
		return false;
	}
	,tilemapOverlapsCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3) return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject)); else return this.overlaps(ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var group = flixel.group.FlxGroup.resolveGroup(ObjectOrGroup);
		if(group != null) return flixel.group.FlxGroup.overlaps($bind(this,this.tilemapOverlapsAtCallback),group,X,Y,InScreenSpace,Camera); else if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3?this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject),null,false,this._point.set(X,Y)):this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera)) return true;
		return false;
	}
	,tilemapOverlapsAtCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		if(ObjectOrGroup.collisionType == 1 || ObjectOrGroup.collisionType == 3) return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject),null,false,this._point.set(X,Y)); else return this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsWithCallback: function(Object,Callback,FlipCallbackParams,Position) {
		if(FlipCallbackParams == null) FlipCallbackParams = false;
		var results = false;
		var X = this.x;
		var Y = this.y;
		if(Position != null) {
			X = Position.x;
			Y = Position.y;
		}
		var selectionX = Math.floor((Object.x - X) / this._scaledTileWidth);
		var selectionY = Math.floor((Object.y - Y) / this._scaledTileHeight);
		var selectionWidth = selectionX + Math.ceil(Object.get_width() / this._scaledTileWidth) + 1;
		var selectionHeight = selectionY + Math.ceil(Object.get_height() / this._scaledTileHeight) + 1;
		selectionWidth = Std["int"](flixel.util.FlxMath.bound(selectionWidth,0,this.widthInTiles));
		selectionHeight = Std["int"](flixel.util.FlxMath.bound(selectionHeight,0,this.heightInTiles));
		var rowStart = selectionY * this.widthInTiles;
		var row = selectionY;
		var column;
		var tile;
		var overlapFound;
		var deltaX = X - this.last.x;
		var deltaY = Y - this.last.y;
		while(row < selectionHeight) {
			column = selectionX;
			while(column < selectionWidth) {
				var index = rowStart + column;
				if(index < 0 || index > this._data.length - 1) {
					column++;
					continue;
				}
				var dataIndex = this._data[index];
				if(dataIndex < 0) {
					column++;
					continue;
				}
				tile = this._tileObjects[dataIndex];
				tile.set_width(this._scaledTileWidth);
				tile.set_height(this._scaledTileHeight);
				tile.set_x(X + column * tile.get_width());
				tile.set_y(Y + row * tile.get_height());
				tile.last.set_x(tile.x - deltaX);
				tile.last.set_y(tile.y - deltaY);
				overlapFound = Object.x + Object.get_width() > tile.x && Object.x < tile.x + tile.get_width() && Object.y + Object.get_height() > tile.y && Object.y < tile.y + tile.get_height();
				if(tile.allowCollisions != 0) {
					if(Callback != null) {
						if(FlipCallbackParams) overlapFound = Callback(Object,tile); else overlapFound = Callback(tile,Object);
					}
				}
				if(overlapFound) {
					if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
						tile.mapIndex = rowStart + column;
						tile.callbackFunction(tile,Object);
					}
					if(tile.allowCollisions != 0) results = true;
				}
				column++;
			}
			rowStart += this.widthInTiles;
			row++;
		}
		return results;
	}
	,overlapsPoint: function(WorldPoint,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return this._tileObjects[this._data[Math.floor(Math.floor((WorldPoint.y - this.y) / this._scaledTileHeight) * this.widthInTiles + (WorldPoint.x - this.x) / this._scaledTileWidth)]].allowCollisions > 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		WorldPoint.set_x(WorldPoint.x - Camera.scroll.x);
		WorldPoint.set_y(WorldPoint.y - Camera.scroll.y);
		this.getScreenXY(this._point,Camera);
		var result = this._tileObjects[this._data[((WorldPoint.y - WorldPoint.y) / this._scaledTileHeight | 0) * this.widthInTiles + (WorldPoint.x - WorldPoint.x) / this._scaledTileWidth | 0]].allowCollisions > 0;
		if(WorldPoint._weak) flixel.util.FlxPoint._pool.put(WorldPoint);
		return result;
	}
	,getTile: function(X,Y) {
		return this._data[Y * this.widthInTiles + X];
	}
	,getTileByIndex: function(Index) {
		return this._data[Index];
	}
	,getTileCollisions: function(Index) {
		return this._tileObjects[Index].allowCollisions;
	}
	,getTileInstances: function(Index) {
		var array = null;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				if(array == null) array = [];
				array.push(i);
			}
			i++;
		}
		return array;
	}
	,getTileCoords: function(Index,Midpoint) {
		if(Midpoint == null) Midpoint = true;
		var array = null;
		var point;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				point = flixel.util.FlxPoint.get(this.x + (i % this.widthInTiles | 0) * this._scaledTileWidth,this.y + (i / this.widthInTiles | 0) * this._scaledTileHeight);
				if(Midpoint) {
					var _g = point;
					_g.set_x(_g.x + this._scaledTileWidth * 0.5);
					var _g1 = point;
					_g1.set_y(_g1.y + this._scaledTileHeight * 0.5);
				}
				if(array == null) array = new Array();
				array.push(point);
			}
			i++;
		}
		return array;
	}
	,setTile: function(X,Y,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(X >= this.widthInTiles || Y >= this.heightInTiles) return false;
		return this.setTileByIndex(Y * this.widthInTiles + X,Tile,UpdateGraphics);
	}
	,setTileByIndex: function(Index,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(Index >= this._data.length) return false;
		var ok = true;
		this._data[Index] = Tile;
		if(!UpdateGraphics) return ok;
		this.setDirty();
		if(this.auto == 0) {
			this.updateTile(Index);
			return ok;
		}
		var i;
		var row = (Index / this.widthInTiles | 0) - 1;
		var rowLength = row + 3;
		var column = Index % this.widthInTiles - 1;
		var columnHeight = column + 3;
		while(row < rowLength) {
			column = columnHeight - 3;
			while(column < columnHeight) {
				if(row >= 0 && row < this.heightInTiles && column >= 0 && column < this.widthInTiles) {
					i = row * this.widthInTiles + column;
					this.autoTile(i);
					this.updateTile(i);
				}
				column++;
			}
			row++;
		}
		return ok;
	}
	,setTileProperties: function(Tile,AllowCollisions,Callback,CallbackFilter,Range) {
		if(Range == null) Range = 1;
		if(AllowCollisions == null) AllowCollisions = 4369;
		if(Range <= 0) Range = 1;
		var tile;
		var i = Tile;
		var l = Tile + Range;
		while(i < l) {
			tile = this._tileObjects[i++];
			tile.allowCollisions = AllowCollisions;
			tile.callbackFunction = Callback;
			tile.filter = CallbackFilter;
		}
	}
	,follow: function(Camera,Border,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = true;
		if(Border == null) Border = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		Camera.setBounds(this.x + Border * this._scaledTileWidth,this.y + Border * this._scaledTileHeight,this.get_width() - Border * this._scaledTileWidth * 2,this.get_height() - Border * this._scaledTileHeight * 2,UpdateWorld);
	}
	,getBounds: function(Bounds) {
		if(Bounds == null) Bounds = flixel.util.FlxRect.get(null,null,null,null);
		return Bounds.set(this.x,this.y,this.get_width(),this.get_height());
	}
	,ray: function(Start,End,Result,Resolution) {
		if(Resolution == null) Resolution = 1;
		var step = this._scaledTileWidth;
		if(this._scaledTileHeight < this._scaledTileWidth) step = this._scaledTileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		if(Start._weak) flixel.util.FlxPoint._pool.put(Start);
		if(End._weak) flixel.util.FlxPoint._pool.put(End);
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.get_width() || curY < 0 || curY > this.get_height()) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._scaledTileWidth);
			tileY = Math.floor(curY / this._scaledTileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._scaledTileWidth | 0;
				tileY *= this._scaledTileHeight | 0;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._scaledTileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._scaledTileHeight) {
					if(Result == null) Result = flixel.util.FlxPoint.get(null,null);
					Result.set_x(rx);
					Result.set_y(ry);
					return false;
				}
				q = tileY;
				if(deltaY < 0) q += this._scaledTileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._scaledTileWidth) {
					if(Result == null) Result = flixel.util.FlxPoint.get(null,null);
					Result.set_x(rx);
					Result.set_y(ry);
					return false;
				}
				return true;
			}
			i++;
		}
		return true;
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null && this._tileWidth >= 1 && this._tileHeight >= 1) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,new flash.geom.Point(0,0));
			var i = 0;
			while(i < this.totalTiles) this.updateTile(i++);
		}
	}
	,tileToFlxSprite: function(X,Y,NewTile) {
		if(NewTile == null) NewTile = 0;
		var rowIndex = X + Y * this.widthInTiles;
		var rect = null;
		rect = this._rects[rowIndex];
		var pt = new flash.geom.Point(0,0);
		var tileSprite = new flixel.FlxSprite();
		tileSprite.makeGraphic(this._tileWidth,this._tileHeight,0,true);
		tileSprite.set_x(X * this._tileWidth + this.x);
		tileSprite.set_y(Y * this._tileHeight + this.y);
		tileSprite.scale.set_x(this.scale.x);
		tileSprite.scale.set_y(this.scale.y);
		if(rect != null) tileSprite.get_pixels().copyPixels(this.cachedGraphics.bitmap,rect,pt);
		tileSprite.dirty = true;
		tileSprite.updateFrameData();
		if(NewTile >= 0) this.setTile(X,Y,NewTile);
		return tileSprite;
	}
	,updateBuffers: function() {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._buffers = new Array();
	}
	,drawTilemap: function(Buffer,Camera) {
		Buffer.fill();
		this._point.set_x(Camera.scroll.x * this.scrollFactor.x - this.x);
		this._point.set_y(Camera.scroll.y * this.scrollFactor.y - this.y);
		var screenXInTiles = Math.floor(this._point.x / this._scaledTileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._scaledTileHeight);
		var screenRows = Buffer.rows;
		var screenColumns = Buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				this._flashRect = this._rects[columnIndex];
				if(this._flashRect != null) Buffer.pixels.copyPixels(this.cachedGraphics.bitmap,this._flashRect,this._flashPoint,null,null,true);
				this._flashPoint.x += this._tileWidth;
				column++;
				columnIndex++;
			}
			this._flashPoint.y += this._tileHeight;
			rowIndex += this.widthInTiles;
			row++;
		}
		Buffer.x = screenXInTiles * this._scaledTileWidth;
		Buffer.y = screenYInTiles * this._scaledTileHeight;
	}
	,simplifyPath: function(Points) {
		var deltaPrevious;
		var deltaNext;
		var last = Points[0];
		var node;
		var i = 1;
		var l = Points.length - 1;
		while(i < l) {
			node = Points[i];
			deltaPrevious = (node.x - last.x) / (node.y - last.y);
			deltaNext = (node.x - Points[i + 1].x) / (node.y - Points[i + 1].y);
			if(last.x == Points[i + 1].x || last.y == Points[i + 1].y || deltaPrevious == deltaNext) Points[i] = null; else last = node;
			i++;
		}
	}
	,raySimplifyPath: function(Points) {
		var source = Points[0];
		var lastIndex = -1;
		var node;
		var i = 1;
		var l = Points.length;
		while(i < l) {
			node = Points[i++];
			if(node == null) continue;
			if(this.ray(source,node,this._point)) {
				if(lastIndex >= 0) Points[lastIndex] = null;
			} else source = Points[lastIndex];
			lastIndex = i - 1;
		}
	}
	,computePathDistance: function(StartIndex,EndIndex,WideDiagonal,StopOnEnd) {
		if(StopOnEnd == null) StopOnEnd = true;
		var mapSize = this.widthInTiles * this.heightInTiles;
		var distances = new Array();
		flixel.util.FlxArrayUtil.setLength_Int(distances,mapSize);
		var i = 0;
		while(i < mapSize) {
			if(this._tileObjects[this._data[i]].allowCollisions != 0) distances[i] = -2; else distances[i] = -1;
			i++;
		}
		distances[StartIndex] = 0;
		var distance = 1;
		var neighbors = [StartIndex];
		var current;
		var currentIndex;
		var left;
		var right;
		var up;
		var down;
		var currentLength;
		var foundEnd = false;
		while(neighbors.length > 0) {
			current = neighbors;
			neighbors = new Array();
			i = 0;
			currentLength = current.length;
			while(i < currentLength) {
				currentIndex = current[i++];
				if(currentIndex == (EndIndex | 0)) {
					foundEnd = true;
					if(StopOnEnd) {
						neighbors = [];
						break;
					}
				}
				left = currentIndex % this.widthInTiles > 0;
				right = currentIndex % this.widthInTiles < this.widthInTiles - 1;
				up = currentIndex / this.widthInTiles > 0;
				down = currentIndex / this.widthInTiles < this.heightInTiles - 1;
				var index;
				if(up) {
					index = currentIndex - this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right) {
					index = currentIndex + 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(down) {
					index = currentIndex + this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left) {
					index = currentIndex - 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && right) {
					index = currentIndex - this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right && down) {
					index = currentIndex + this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left && down) {
					index = currentIndex + this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && left) {
					index = currentIndex - this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
			}
			distance++;
		}
		if(!foundEnd) distances = null;
		return distances;
	}
	,walkPath: function(Data,Start,Points) {
		Points.push(flixel.util.FlxPoint.get(this.x + Math.floor(Start % this.widthInTiles) * this._scaledTileWidth + this._scaledTileWidth * 0.5,this.y + Math.floor(Start / this.widthInTiles) * this._scaledTileHeight + this._scaledTileHeight * 0.5));
		if(Data[Start] == 0) return;
		var left = Start % this.widthInTiles > 0;
		var right = Start % this.widthInTiles < this.widthInTiles - 1;
		var up = Start / this.widthInTiles > 0;
		var down = Start / this.widthInTiles < this.heightInTiles - 1;
		var current = Data[Start];
		var i;
		if(up) {
			i = Start - this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right) {
			i = Start + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(down) {
			i = Start + this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left) {
			i = Start - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && right) {
			i = Start - this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right && down) {
			i = Start + this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left && down) {
			i = Start + this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && left) {
			i = Start - this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		return;
	}
	,updateTile: function(Index) {
		var tile = this._tileObjects[this._data[Index]];
		if(tile == null || !tile.visible) {
			this._rects[Index] = null;
			return;
		}
		var rx = (this._data[Index] - this._startingIndex) * (this._tileWidth + this.region.spacingX);
		var ry = 0;
		if(rx >= this.region.width) {
			ry = (rx / this.region.width | 0) * (this._tileHeight + this.region.spacingY);
			rx %= this.region.width;
		}
		this._rects[Index] = new flash.geom.Rectangle(rx + this.region.startX,ry + this.region.startY,this._tileWidth,this._tileHeight);
	}
	,autoTile: function(Index) {
		if(this._data[Index] == 0) return;
		this._data[Index] = 0;
		if(Index - this.widthInTiles < 0 || this._data[Index - this.widthInTiles] > 0) this._data[Index] += 1;
		if(Index % this.widthInTiles >= this.widthInTiles - 1 || this._data[Index + 1] > 0) this._data[Index] += 2;
		if((Index + this.widthInTiles | 0) >= this.totalTiles || this._data[Index + this.widthInTiles] > 0) this._data[Index] += 4;
		if(Index % this.widthInTiles <= 0 || this._data[Index - 1] > 0) this._data[Index] += 8;
		if(this.auto == 2 && this._data[Index] == 15) {
			if(Index % this.widthInTiles > 0 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles - 1] <= 0) this._data[Index] = 1;
			if(Index % this.widthInTiles > 0 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles - 1] <= 0) this._data[Index] = 2;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles + 1] <= 0) this._data[Index] = 4;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles + 1] <= 0) this._data[Index] = 8;
		}
		this._data[Index] += 1;
	}
	,createBuffer: function(camera) {
		var buffer = new flixel.tile.FlxTilemapBuffer(this._tileWidth,this._tileHeight,this.widthInTiles,this.heightInTiles,camera,this.scale.x,this.scale.y);
		buffer.pixelPerfectRender = this.pixelPerfectRender;
		return buffer;
	}
	,onGameResize: function(_,_1) {
		var _g1 = 0;
		var _g = this.get_cameras().length;
		while(_g1 < _g) {
			var i = _g1++;
			var camera = this.get_cameras()[i];
			var buffer = this._buffers[i];
			flixel.tile.FlxTilemap._helperBuffer.updateColumns(this._tileWidth,this.widthInTiles,this.scale.x,camera);
			flixel.tile.FlxTilemap._helperBuffer.updateRows(this._tileHeight,this.heightInTiles,this.scale.y,camera);
			if(buffer == null || flixel.tile.FlxTilemap._helperBuffer.columns != buffer.columns || flixel.tile.FlxTilemap._helperBuffer.rows != buffer.rows) {
				if(buffer != null) buffer.destroy();
				this._buffers[i] = this.createBuffer(camera);
			}
		}
	}
	,set_cachedGraphics: function(Value) {
		var oldCached = this.cachedGraphics;
		if(this.cachedGraphics != Value && Value != null) {
			var _g = Value;
			var _g1 = _g.useCount;
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		if(oldCached != null && oldCached != Value) {
			var _g2 = oldCached;
			var _g11 = _g2.useCount;
			_g2.set_useCount(_g11 - 1);
			_g11;
		}
		return this.cachedGraphics = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		if(this._buffers != null) {
			var _g = 0;
			var _g1 = this._buffers;
			while(_g < _g1.length) {
				var buffer = _g1[_g];
				++_g;
				buffer.pixelPerfectRender = Value;
			}
		}
		return this.pixelPerfectRender = Value;
	}
	,setScaleXYCallback: function(Scale) {
		this.setScaleXCallback(Scale);
		this.setScaleYCallback(Scale);
	}
	,setScaleXCallback: function(Scale) {
		this._scaledTileWidth = this._tileWidth * this.scale.x;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		if(this.get_cameras() != null) {
			var _g1 = 0;
			var _g = this.get_cameras().length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._buffers[i] != null) this._buffers[i].updateColumns(this._tileWidth,this.widthInTiles,this.scale.x,this.get_cameras()[i]);
			}
		}
	}
	,setScaleYCallback: function(Scale) {
		this._scaledTileHeight = this._tileHeight * this.scale.y;
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		if(this.get_cameras() != null) {
			var _g1 = 0;
			var _g = this.get_cameras().length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._buffers[i] != null) this._buffers[i].updateRows(this._tileHeight,this.heightInTiles,this.scale.y,this.get_cameras()[i]);
			}
		}
	}
	,__class__: flixel.tile.FlxTilemap
	,__properties__: $extend(flixel.FlxObject.prototype.__properties__,{set_cachedGraphics:"set_cachedGraphics"})
});
flixel.tweens.FlxEase = function() { };
$hxClasses["flixel.tweens.FlxEase"] = flixel.tweens.FlxEase;
flixel.tweens.FlxEase.__name__ = ["flixel","tweens","FlxEase"];
flixel.tweens.FlxEase.quadIn = function(t) {
	return t * t;
};
flixel.tweens.FlxEase.quadOut = function(t) {
	return -t * (t - 2);
};
flixel.tweens.FlxEase.quadInOut = function(t) {
	if(t <= .5) return t * t * 2; else return 1 - --t * t * 2;
};
flixel.tweens.FlxEase.cubeIn = function(t) {
	return t * t * t;
};
flixel.tweens.FlxEase.cubeOut = function(t) {
	return 1 + --t * t * t;
};
flixel.tweens.FlxEase.cubeInOut = function(t) {
	if(t <= .5) return t * t * t * 4; else return 1 + --t * t * t * 4;
};
flixel.tweens.FlxEase.quartIn = function(t) {
	return t * t * t * t;
};
flixel.tweens.FlxEase.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
};
flixel.tweens.FlxEase.quartInOut = function(t) {
	if(t <= .5) return t * t * t * t * 8; else return (1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
};
flixel.tweens.FlxEase.quintIn = function(t) {
	return t * t * t * t * t;
};
flixel.tweens.FlxEase.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
};
flixel.tweens.FlxEase.quintInOut = function(t) {
	if((t *= 2) < 1) return t * t * t * t * t / 2; else return ((t -= 2) * t * t * t * t + 2) / 2;
};
flixel.tweens.FlxEase.sineIn = function(t) {
	return -Math.cos(flixel.tweens.FlxEase.PI2 * t) + 1;
};
flixel.tweens.FlxEase.sineOut = function(t) {
	return Math.sin(flixel.tweens.FlxEase.PI2 * t);
};
flixel.tweens.FlxEase.sineInOut = function(t) {
	return -Math.cos(Math.PI * t) / 2 + .5;
};
flixel.tweens.FlxEase.bounceIn = function(t) {
	t = 1 - t;
	if(t < flixel.tweens.FlxEase.B1) return 1 - 7.5625 * t * t;
	if(t < flixel.tweens.FlxEase.B2) return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75);
	if(t < flixel.tweens.FlxEase.B4) return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375);
	return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375);
};
flixel.tweens.FlxEase.bounceOut = function(t) {
	if(t < flixel.tweens.FlxEase.B1) return 7.5625 * t * t;
	if(t < flixel.tweens.FlxEase.B2) return 7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75;
	if(t < flixel.tweens.FlxEase.B4) return 7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375;
	return 7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375;
};
flixel.tweens.FlxEase.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < flixel.tweens.FlxEase.B1) return (1 - 7.5625 * t * t) / 2;
		if(t < flixel.tweens.FlxEase.B2) return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75)) / 2;
		if(t < flixel.tweens.FlxEase.B4) return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375)) / 2;
		return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < flixel.tweens.FlxEase.B1) return 7.5625 * t * t / 2 + .5;
	if(t < flixel.tweens.FlxEase.B2) return (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75) / 2 + .5;
	if(t < flixel.tweens.FlxEase.B4) return (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375) / 2 + .5;
	return (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375) / 2 + .5;
};
flixel.tweens.FlxEase.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
};
flixel.tweens.FlxEase.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
};
flixel.tweens.FlxEase.circInOut = function(t) {
	if(t <= .5) return (Math.sqrt(1 - t * t * 4) - 1) / -2; else return (Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
};
flixel.tweens.FlxEase.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
};
flixel.tweens.FlxEase.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
};
flixel.tweens.FlxEase.expoInOut = function(t) {
	if(t < .5) return Math.pow(2,10 * (t * 2 - 1)) / 2; else return (-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
};
flixel.tweens.FlxEase.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
};
flixel.tweens.FlxEase.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
};
flixel.tweens.FlxEase.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
};
flixel.tweens.FlxEase.elasticIn = function(t) {
	return -(flixel.tweens.FlxEase.ELASTIC_AMPLITUDE * Math.pow(2,10 * (t -= 1)) * Math.sin((t - flixel.tweens.FlxEase.ELASTIC_PERIOD / (2 * Math.PI) * Math.asin(1 / flixel.tweens.FlxEase.ELASTIC_AMPLITUDE)) * (2 * Math.PI) / flixel.tweens.FlxEase.ELASTIC_PERIOD));
};
flixel.tweens.FlxEase.elasticOut = function(t) {
	return flixel.tweens.FlxEase.ELASTIC_AMPLITUDE * Math.pow(2,-10 * t) * Math.sin((t - flixel.tweens.FlxEase.ELASTIC_PERIOD / (2 * Math.PI) * Math.asin(1 / flixel.tweens.FlxEase.ELASTIC_AMPLITUDE)) * (2 * Math.PI) / flixel.tweens.FlxEase.ELASTIC_PERIOD) + 1;
};
flixel.tweens.FlxEase.elasticInOut = function(t) {
	if(t < 0.5) return -0.5 * (Math.pow(2,10 * (t -= 0.5)) * Math.sin((t - flixel.tweens.FlxEase.ELASTIC_PERIOD / 4) * (2 * Math.PI) / flixel.tweens.FlxEase.ELASTIC_PERIOD));
	return Math.pow(2,-10 * (t -= 0.5)) * Math.sin((t - flixel.tweens.FlxEase.ELASTIC_PERIOD / 4) * (2 * Math.PI) / flixel.tweens.FlxEase.ELASTIC_PERIOD) * 0.5 + 1;
};
flixel.tweens.misc = {};
flixel.tweens.misc.AngleTween = function(Options) {
	flixel.tweens.FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.AngleTween"] = flixel.tweens.misc.AngleTween;
flixel.tweens.misc.AngleTween.__name__ = ["flixel","tweens","misc","AngleTween"];
flixel.tweens.misc.AngleTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.AngleTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	angle: null
	,sprite: null
	,_start: null
	,_range: null
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this.sprite = null;
	}
	,tween: function(FromAngle,ToAngle,Duration,Sprite) {
		this._start = this.angle = FromAngle;
		var d = ToAngle - this.angle;
		var a = Math.abs(d);
		if(a > 181) this._range = (360 - a) * (d > 0?-1:1); else if(a < 179) this._range = d; else this._range = flixel.util.FlxRandom.floatRanged(180,-180);
		this.duration = Duration;
		this.sprite = Sprite;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.angle = (this._start + this._range * this.scale) % 360;
		if(this.angle < 0) this.angle += 360;
		if(this.sprite != null) this.sprite.set_angle(this.angle);
	}
	,__class__: flixel.tweens.misc.AngleTween
});
flixel.tweens.misc.ColorTween = function(Options) {
	this.alpha = 1;
	flixel.tweens.FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.ColorTween"] = flixel.tweens.misc.ColorTween;
flixel.tweens.misc.ColorTween.__name__ = ["flixel","tweens","misc","ColorTween"];
flixel.tweens.misc.ColorTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.ColorTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	color: null
	,alpha: null
	,sprite: null
	,red: null
	,green: null
	,blue: null
	,_startA: null
	,_startR: null
	,_startG: null
	,_startB: null
	,_rangeA: null
	,_rangeR: null
	,_rangeG: null
	,_rangeB: null
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this.sprite = null;
	}
	,tween: function(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Sprite) {
		if(ToAlpha == null) ToAlpha = 1;
		if(FromAlpha == null) FromAlpha = 1;
		FromColor &= 16777215;
		ToColor &= 16777215;
		this.color = FromColor;
		this.red = FromColor >> 16 & 255;
		this.green = FromColor >> 8 & 255;
		this.blue = FromColor & 255;
		this._startR = this.red / 255;
		this._startG = this.green / 255;
		this._startB = this.blue / 255;
		this._rangeR = (ToColor >> 16 & 255) / 255 - this._startR;
		this._rangeG = (ToColor >> 8 & 255) / 255 - this._startG;
		this._rangeB = (ToColor & 255) / 255 - this._startB;
		this._startA = this.alpha = FromAlpha;
		this._rangeA = ToAlpha - this.alpha;
		this.duration = Duration;
		this.sprite = Sprite;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.alpha = this._startA + this._rangeA * this.scale;
		this.red = (this._startR + this._rangeR * this.scale) * 255 | 0;
		this.green = (this._startG + this._rangeG * this.scale) * 255 | 0;
		this.blue = (this._startB + this._rangeB * this.scale) * 255 | 0;
		this.color = this.red << 16 | this.green << 8 | this.blue;
		if(this.sprite != null) {
			this.sprite.set_color(this.color);
			this.sprite.set_alpha(this.alpha);
		}
	}
	,__class__: flixel.tweens.misc.ColorTween
});
flixel.tweens.misc.NumTween = function(Options) {
	flixel.tweens.FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.misc.NumTween"] = flixel.tweens.misc.NumTween;
flixel.tweens.misc.NumTween.__name__ = ["flixel","tweens","misc","NumTween"];
flixel.tweens.misc.NumTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.NumTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	value: null
	,_tweenFunction: null
	,_start: null
	,_range: null
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._tweenFunction = null;
	}
	,tween: function(fromValue,toValue,duration,tweenFunction) {
		this._tweenFunction = tweenFunction;
		this._start = this.value = fromValue;
		this._range = toValue - this.value;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.value = this._start + this._range * this.scale;
		if(this._tweenFunction != null) this._tweenFunction(this.value);
	}
	,__class__: flixel.tweens.misc.NumTween
});
flixel.tweens.misc.VarTween = function(Options) {
	flixel.tweens.FlxTween.call(this,Options);
	this._vars = [];
	this._startValues = [];
	this._range = [];
};
$hxClasses["flixel.tweens.misc.VarTween"] = flixel.tweens.misc.VarTween;
flixel.tweens.misc.VarTween.__name__ = ["flixel","tweens","misc","VarTween"];
flixel.tweens.misc.VarTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.VarTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	_object: null
	,_properties: null
	,_vars: null
	,_startValues: null
	,_range: null
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
		this._properties = null;
	}
	,tween: function(object,properties,duration) {
		this._object = object;
		this._properties = properties;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		if(this._vars.length < 1) this.initializeVars();
		flixel.tweens.FlxTween.prototype.update.call(this);
		var i = this._vars.length;
		while(i-- > 0) Reflect.setProperty(this._object,this._vars[i],this._startValues[i] + this._range[i] * this.scale);
	}
	,initializeVars: function() {
		var p;
		var fields;
		if(Reflect.isObject(this._properties)) fields = Reflect.fields(this._properties); else throw "Unsupported properties container - use an object containing key/value pairs.";
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			if(Reflect.getProperty(this._object,p1) == null) throw "The Object does not have the property \"" + p1 + "\", or it is not accessible.";
			var a = Reflect.getProperty(this._object,p1);
			if(Math.isNaN(a)) throw "The property \"" + p1 + "\" is not numeric.";
			this._vars.push(p1);
			this._startValues.push(a);
			this._range.push(Reflect.getProperty(this._properties,p1) - a);
		}
	}
	,__class__: flixel.tweens.misc.VarTween
});
flixel.tweens.motion = {};
flixel.tweens.motion.Motion = function(Options) {
	this.y = 0;
	this.x = 0;
	flixel.tweens.FlxTween.call(this,Options);
};
$hxClasses["flixel.tweens.motion.Motion"] = flixel.tweens.motion.Motion;
flixel.tweens.motion.Motion.__name__ = ["flixel","tweens","motion","Motion"];
flixel.tweens.motion.Motion.__super__ = flixel.tweens.FlxTween;
flixel.tweens.motion.Motion.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	x: null
	,y: null
	,_object: null
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,setObject: function(object) {
		this._object = object;
		this._object.set_immovable(true);
		return this;
	}
	,update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.postUpdate();
	}
	,postUpdate: function() {
		if(this._object != null) this._object.setPosition(this.x,this.y);
	}
	,__class__: flixel.tweens.motion.Motion
});
flixel.tweens.motion.CircularMotion = function(Options) {
	this._angleFinish = 0;
	this._angleStart = 0;
	this._radius = 0;
	this._centerY = 0;
	this._centerX = 0;
	this.angle = 0;
	flixel.tweens.motion.Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.CircularMotion"] = flixel.tweens.motion.CircularMotion;
flixel.tweens.motion.CircularMotion.__name__ = ["flixel","tweens","motion","CircularMotion"];
flixel.tweens.motion.CircularMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.CircularMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	angle: null
	,_centerX: null
	,_centerY: null
	,_radius: null
	,_angleStart: null
	,_angleFinish: null
	,setMotion: function(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._centerX = CenterX;
		this._centerY = CenterY;
		this._radius = Radius;
		this.angle = this._angleStart = Angle * Math.PI / -180;
		this._angleFinish = Math.PI * 2 * (Clockwise?1:-1);
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this._radius * (Math.PI * 2) / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.angle = this._angleStart + this._angleFinish * this.scale;
		this.x = this._centerX + Math.cos(this.angle) * this._radius;
		this.y = this._centerY + Math.sin(this.angle) * this._radius;
		if(this.finished) this.postUpdate();
	}
	,get_circumference: function() {
		return this._radius * (Math.PI * 2);
	}
	,__class__: flixel.tweens.motion.CircularMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_circumference:"get_circumference"})
});
flixel.tweens.motion.CubicMotion = function(Options) {
	this._tt = 0;
	this._ttt = 0;
	this._bY = 0;
	this._bX = 0;
	this._aY = 0;
	this._aX = 0;
	this._toY = 0;
	this._toX = 0;
	this._fromY = 0;
	this._fromX = 0;
	flixel.tweens.motion.Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.CubicMotion"] = flixel.tweens.motion.CubicMotion;
flixel.tweens.motion.CubicMotion.__name__ = ["flixel","tweens","motion","CubicMotion"];
flixel.tweens.motion.CubicMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.CubicMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	_fromX: null
	,_fromY: null
	,_toX: null
	,_toY: null
	,_aX: null
	,_aY: null
	,_bX: null
	,_bY: null
	,_ttt: null
	,_tt: null
	,setMotion: function(fromX,fromY,aX,aY,bX,bY,toX,toY,duration) {
		this.x = this._fromX = fromX;
		this.y = this._fromY = fromY;
		this._aX = aX;
		this._aY = aY;
		this._bX = bX;
		this._bY = bY;
		this._toX = toX;
		this._toY = toY;
		this.duration = duration;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this.scale * this.scale * this.scale * (this._toX + 3 * (this._aX - this._bX) - this._fromX) + 3 * this.scale * this.scale * (this._fromX - 2 * this._aX + this._bX) + 3 * this.scale * (this._aX - this._fromX) + this._fromX;
		this.y = this.scale * this.scale * this.scale * (this._toY + 3 * (this._aY - this._bY) - this._fromY) + 3 * this.scale * this.scale * (this._fromY - 2 * this._aY + this._bY) + 3 * this.scale * (this._aY - this._fromY) + this._fromY;
		if(this.finished) this.postUpdate();
	}
	,__class__: flixel.tweens.motion.CubicMotion
});
flixel.tweens.motion.LinearMotion = function(Options) {
	this._distance = -1;
	this._moveY = 0;
	this._moveX = 0;
	this._fromY = 0;
	this._fromX = 0;
	flixel.tweens.motion.Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.LinearMotion"] = flixel.tweens.motion.LinearMotion;
flixel.tweens.motion.LinearMotion.__name__ = ["flixel","tweens","motion","LinearMotion"];
flixel.tweens.motion.LinearMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.LinearMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	_fromX: null
	,_fromY: null
	,_moveX: null
	,_moveY: null
	,_distance: null
	,setMotion: function(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._moveX = ToX - FromX;
		this._moveY = ToY - FromY;
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this.get_distance() / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this._fromX + this._moveX * this.scale;
		this.y = this._fromY + this._moveY * this.scale;
		if(this.x == this._fromX + this._moveX && this.y == this._fromY + this._moveY && this.active && this._secondsSinceStart >= this.duration) this.finished = true;
		if(this.finished) this.postUpdate();
	}
	,get_distance: function() {
		if(this._distance >= 0) return this._distance;
		return this._distance = Math.sqrt(this._moveX * this._moveX + this._moveY * this._moveY);
	}
	,__class__: flixel.tweens.motion.LinearMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_distance:"get_distance"})
});
flixel.tweens.motion.LinearPath = function(Options) {
	this._index = 0;
	this._speed = 0;
	this.distance = 0;
	flixel.tweens.motion.Motion.call(this,Options);
	this.points = [];
	this._pointD = [0];
	this._pointT = [0];
};
$hxClasses["flixel.tweens.motion.LinearPath"] = flixel.tweens.motion.LinearPath;
flixel.tweens.motion.LinearPath.__name__ = ["flixel","tweens","motion","LinearPath"];
flixel.tweens.motion.LinearPath.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.LinearPath.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	distance: null
	,points: null
	,_pointD: null
	,_pointT: null
	,_speed: null
	,_index: null
	,_last: null
	,_prevPoint: null
	,_nextPoint: null
	,destroy: function() {
		flixel.tweens.motion.Motion.prototype.destroy.call(this);
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel.util.FlxDestroyUtil.put(point);
		}
		this._last = flixel.util.FlxDestroyUtil.put(this._last);
		this._prevPoint = flixel.util.FlxDestroyUtil.put(this._prevPoint);
		this._nextPoint = flixel.util.FlxDestroyUtil.put(this._nextPoint);
	}
	,setMotion: function(DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this.duration = DurationOrSpeed;
			this._speed = this.distance / DurationOrSpeed;
		} else {
			this.duration = this.distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this.start();
		return this;
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		if(this._last != null) {
			this.distance += Math.sqrt((x - this._last.x) * (x - this._last.x) + (y - this._last.y) * (y - this._last.y));
			this._pointD[this.points.length] = this.distance;
		}
		this.points[this.points.length] = this._last = flixel.util.FlxPoint.get(x,y);
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this.points.length == 0) throw "No points have been added to the path yet.";
		return this.points[index % this.points.length];
	}
	,start: function() {
		if(this.backward) this._index = this.points.length - 1; else this._index = 0;
		flixel.tweens.motion.Motion.prototype.start.call(this);
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		var td;
		var tt;
		if(this.points == null) return;
		if(!this.backward) {
			if(this._index < this.points.length - 1) while(this.scale > this._pointT[this._index + 1]) {
				this._index++;
				if(this._index == this.points.length - 1) {
					this._index -= 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index + 1] - td;
			td = (this.scale - td) / tt;
			this._prevPoint = this.points[this._index];
			this._nextPoint = this.points[this._index + 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		} else {
			if(this._index > 0) while(this.scale < this._pointT[this._index - 1]) {
				this._index -= 1;
				if(this._index == 0) {
					this._index += 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index - 1] - td;
			td = (this.scale - td) / tt;
			this._prevPoint = this.points[this._index];
			this._nextPoint = this.points[this._index - 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		}
		flixel.tweens.motion.Motion.prototype.postUpdate.call(this);
	}
	,updatePath: function() {
		if(this.points.length < 2) throw "A LinearPath must have at least 2 points to operate.";
		if(this._pointD.length == this._pointT.length) return;
		var i = 0;
		while(i < this.points.length) this._pointT[i] = this._pointD[i++] / this.distance;
	}
	,__class__: flixel.tweens.motion.LinearPath
});
flixel.tweens.motion.QuadMotion = function(Options) {
	this._controlY = 0;
	this._controlX = 0;
	this._toY = 0;
	this._toX = 0;
	this._fromY = 0;
	this._fromX = 0;
	this._distance = -1;
	flixel.tweens.motion.Motion.call(this,Options);
};
$hxClasses["flixel.tweens.motion.QuadMotion"] = flixel.tweens.motion.QuadMotion;
flixel.tweens.motion.QuadMotion.__name__ = ["flixel","tweens","motion","QuadMotion"];
flixel.tweens.motion.QuadMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.QuadMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	_distance: null
	,_fromX: null
	,_fromY: null
	,_toX: null
	,_toY: null
	,_controlX: null
	,_controlY: null
	,setMotion: function(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._controlX = ControlX;
		this._controlY = ControlY;
		this._toX = ToX;
		this._toY = ToY;
		if(UseDuration) this.duration = DurationOrSpeed; else this.duration = this.get_distance() / DurationOrSpeed;
		this.start();
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this._fromX * (1 - this.scale) * (1 - this.scale) + this._controlX * 2 * (1 - this.scale) * this.scale + this._toX * this.scale * this.scale;
		this.y = this._fromY * (1 - this.scale) * (1 - this.scale) + this._controlY * 2 * (1 - this.scale) * this.scale + this._toY * this.scale * this.scale;
		if(this.finished) this.postUpdate();
	}
	,get_distance: function() {
		if(this._distance >= 0) return this._distance;
		var a = flixel.util.FlxPoint.get(null,null);
		var b = flixel.util.FlxPoint.get(null,null);
		a.set_x(this.x - 2 * this._controlX + this._toX);
		a.set_y(this.y - 2 * this._controlY + this._toY);
		b.set_x(2 * this._controlX - 2 * this.x);
		b.set_y(2 * this._controlY - 2 * this.y);
		var A = 4 * (a.x * a.x + a.y * a.y);
		var B = 4 * (a.x * b.x + a.y * b.y);
		var C = b.x * b.x + b.y * b.y;
		var ABC = 2 * Math.sqrt(A + B + C);
		var A2 = Math.sqrt(A);
		var A32 = 2 * A * A2;
		var C2 = 2 * Math.sqrt(C);
		var BA = B / A2;
		a.put();
		b.put();
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,__class__: flixel.tweens.motion.QuadMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_distance:"get_distance"})
});
flixel.tweens.motion.QuadPath = function(Options) {
	this._updateCurve = true;
	this._numSegs = 0;
	this._index = 0;
	this._speed = 0;
	this._distance = 0;
	flixel.tweens.motion.Motion.call(this,Options);
	this._points = [];
	this._curveT = [];
	this._curveD = [];
};
$hxClasses["flixel.tweens.motion.QuadPath"] = flixel.tweens.motion.QuadPath;
flixel.tweens.motion.QuadPath.__name__ = ["flixel","tweens","motion","QuadPath"];
flixel.tweens.motion.QuadPath.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.QuadPath.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	_points: null
	,_distance: null
	,_speed: null
	,_index: null
	,_numSegs: null
	,_updateCurve: null
	,_curveT: null
	,_curveD: null
	,_a: null
	,_b: null
	,_c: null
	,destroy: function() {
		flixel.tweens.motion.Motion.prototype.destroy.call(this);
		var _g = 0;
		var _g1 = this._points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			point = flixel.util.FlxDestroyUtil.put(point);
		}
		this._a = flixel.util.FlxDestroyUtil.put(this._a);
		this._b = flixel.util.FlxDestroyUtil.put(this._b);
		this._c = flixel.util.FlxDestroyUtil.put(this._c);
	}
	,setMotion: function(DurationOrSpeed,UseDuration) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this.duration = DurationOrSpeed;
			this._speed = this._distance / DurationOrSpeed;
		} else {
			this.duration = this._distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this.start();
		return this;
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this._updateCurve = true;
		this._points.push(flixel.util.FlxPoint.get(x,y));
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this._points.length == 0) throw "No points have been added to the path yet.";
		return this._points[index % this._points.length];
	}
	,start: function() {
		if(this.backward) this._index = this._numSegs - 1; else this._index = 0;
		flixel.tweens.motion.Motion.prototype.start.call(this);
		return this;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		var td;
		var tt;
		if(!this.backward && this._points != null) {
			if(this._index < this._numSegs - 1) while(this.scale > this._curveT[this._index + 1]) {
				this._index++;
				if(this._index == this._numSegs - 1) break;
			}
			td = this._curveT[this._index];
			tt = this._curveT[this._index + 1] - td;
			td = (this.scale - td) / tt;
			this._a = this._points[this._index * 2];
			this._b = this._points[this._index * 2 + 1];
			this._c = this._points[this._index * 2 + 2];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		} else if(this._points != null) {
			if(this._index > 0) while(this.scale < this._curveT[this._index]) {
				this._index--;
				if(this._index == 0) break;
			}
			td = this._curveT[this._index + 1];
			tt = this._curveT[this._index] - td;
			td = (this.scale - td) / tt;
			this._a = this._points[this._index * 2 + 2];
			this._b = this._points[this._index * 2 + 1];
			this._c = this._points[this._index * 2];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		}
		flixel.tweens.motion.Motion.prototype.postUpdate.call(this);
	}
	,updatePath: function() {
		if((this._points.length - 1) % 2 != 0 || this._points.length < 3) throw "A QuadPath must have at least 3 points to operate and number of points must be a odd.";
		if(!this._updateCurve) return;
		this._updateCurve = false;
		var i = 0;
		var j = 0;
		this._distance = 0;
		this._numSegs = (this._points.length - 1) / 2 | 0;
		while(i < this._numSegs) {
			j = i * 2;
			this._curveD[i] = this.getCurveLength(this._points[j],this._points[j + 1],this._points[j + 2]);
			this._distance += this._curveD[i++];
		}
		i = 0;
		var d = 0;
		while(i < this._numSegs) {
			d += this._curveD[i];
			this._curveT[i++] = d / this._distance;
		}
		this._curveT[this._numSegs - 1] = 1;
		this._curveT.unshift(0);
	}
	,getCurveLength: function(start,control,finish) {
		var a = flixel.util.FlxPoint.get(null,null);
		var b = flixel.util.FlxPoint.get(null,null);
		a.set_x(start.x - 2 * control.x + finish.x);
		a.set_y(start.y - 2 * control.y + finish.y);
		b.set_x(2 * control.x - 2 * start.x);
		b.set_y(2 * control.y - 2 * start.y);
		var A = 4 * (a.x * a.x + a.y * a.y);
		var B = 4 * (a.x * b.x + a.y * b.y);
		var C = b.x * b.x + b.y * b.y;
		var ABC = 2 * Math.sqrt(A + B + C);
		var A2 = Math.sqrt(A);
		var A32 = 2 * A * A2;
		var C2 = 2 * Math.sqrt(C);
		var BA = B / A2;
		a.put();
		b.put();
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,__class__: flixel.tweens.motion.QuadPath
});
flixel.ui = {};
flixel.ui.FlxTypedButton = function(X,Y,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._pressedMouse = false;
	this.allowHighlightOnMobile = false;
	this.allowSwiping = true;
	flixel.FlxSprite.call(this,X,Y);
	this.loadGraphic(flixel.ui._FlxTypedButton.GraphicButton,true,80,20);
	this.onUp = new flixel.ui._FlxTypedButton.FlxButtonEvent(OnClick);
	this.onDown = new flixel.ui._FlxTypedButton.FlxButtonEvent();
	this.onOver = new flixel.ui._FlxTypedButton.FlxButtonEvent();
	this.onOut = new flixel.ui._FlxTypedButton.FlxButtonEvent();
	this.labelAlphas = [0.8,1.0,0.5];
	this.labelOffsets = [flixel.util.FlxPoint.get(null,null),flixel.util.FlxPoint.get(null,null),flixel.util.FlxPoint.get(0,1)];
	this.set_status(0);
	this.scrollFactor.set();
	flash.Lib.current.stage.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onUpEventListener));
};
$hxClasses["flixel.ui.FlxTypedButton"] = flixel.ui.FlxTypedButton;
flixel.ui.FlxTypedButton.__name__ = ["flixel","ui","FlxTypedButton"];
flixel.ui.FlxTypedButton.__super__ = flixel.FlxSprite;
flixel.ui.FlxTypedButton.prototype = $extend(flixel.FlxSprite.prototype,{
	label: null
	,labelOffsets: null
	,labelAlphas: null
	,allowSwiping: null
	,allowHighlightOnMobile: null
	,status: null
	,onUp: null
	,onDown: null
	,onOver: null
	,onOut: null
	,_pressedTouch: null
	,_pressedMouse: null
	,destroy: function() {
		this.set_label(flixel.util.FlxDestroyUtil.destroy(this.label));
		this.onUp = flixel.util.FlxDestroyUtil.destroy(this.onUp);
		this.onDown = flixel.util.FlxDestroyUtil.destroy(this.onDown);
		this.onOver = flixel.util.FlxDestroyUtil.destroy(this.onOver);
		this.onOut = flixel.util.FlxDestroyUtil.destroy(this.onOut);
		this.labelOffsets = flixel.util.FlxDestroyUtil.putArray(this.labelOffsets);
		this.labelAlphas = null;
		this._pressedTouch = null;
		flash.Lib.current.stage.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onUpEventListener));
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,update: function() {
		flixel.FlxSprite.prototype.update.call(this);
		if(!this.visible) return;
		this.updateButton();
		var nextFrame = this.status;
		this.animation.set_frameIndex(nextFrame);
	}
	,draw: function() {
		flixel.FlxSprite.prototype.draw.call(this);
		if(this.label != null && this.label.visible) {
			this.label.set_cameras(this.get_cameras());
			this.label.draw();
		}
	}
	,updateButton: function() {
		var overlapFound = false;
		var _g = 0;
		var _g1 = this.get_cameras();
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			flixel.FlxG.mouse.getWorldPosition(camera,this._point);
			if(this.overlapsPoint(this._point,true,camera)) {
				overlapFound = true;
				this.updateStatus(true,flixel.FlxG.mouse._leftButton.justPressed(),flixel.FlxG.mouse._leftButton.current > 0);
				break;
			}
			var _g2 = 0;
			var _g3 = flixel.FlxG.touches.list;
			while(_g2 < _g3.length) {
				var touch = _g3[_g2];
				++_g2;
				touch.getWorldPosition(camera,this._point);
				if(this.overlapsPoint(this._point,true,camera)) {
					overlapFound = true;
					this.updateStatus(true,touch._current == 2,touch._current > 0,touch);
					break;
				}
			}
		}
		if(!overlapFound) this.updateStatus(false,false,false);
	}
	,updateStatus: function(Overlap,JustPressed,Pressed,Touch) {
		if(Overlap) {
			if(JustPressed) {
				this._pressedTouch = Touch;
				if(Touch == null) this._pressedMouse = true;
				this.onDownHandler();
			} else if(this.status == 0) {
				if(this.allowSwiping && Pressed) this.onDownHandler(); else this.onOverHandler();
			}
		} else if(this.status != 0) this.onOutHandler();
		if(this._pressedTouch != null && this._pressedTouch._current == -1) this.onUpHandler();
	}
	,onUpEventListener: function(E) {
		if(this.visible && this.exists && this.active && this.status == 2) this.onUpHandler();
	}
	,onUpHandler: function() {
		this.set_status(0);
		this._pressedMouse = false;
		this._pressedTouch = null;
		this.onUp.fire();
	}
	,onDownHandler: function() {
		this.set_status(2);
		this.onDown.fire();
	}
	,onOverHandler: function() {
		this.set_status(1);
		this.onOver.fire();
	}
	,onOutHandler: function() {
		this.set_status(0);
		this.onOut.fire();
	}
	,set_label: function(Value) {
		if(Value != null) {
			Value.scrollFactor.put();
			Value.scrollFactor = this.scrollFactor;
		}
		return this.label = Value;
	}
	,set_status: function(Value) {
		if(this.labelAlphas.length > Value && this.label != null) this.label.set_alpha(this.alpha * this.labelAlphas[Value]);
		return this.status = Value;
	}
	,set_x: function(Value) {
		flixel.FlxSprite.prototype.set_x.call(this,Value);
		if(this.label != null) this.label.set_x(this.x + this.labelOffsets[this.status].x);
		return this.x;
	}
	,set_y: function(Value) {
		flixel.FlxSprite.prototype.set_y.call(this,Value);
		if(this.label != null) this.label.set_y(this.y + this.labelOffsets[this.status].y);
		return this.y;
	}
	,__class__: flixel.ui.FlxTypedButton
	,__properties__: $extend(flixel.FlxSprite.prototype.__properties__,{set_status:"set_status",set_label:"set_label"})
});
flixel.ui.FlxButton = function(X,Y,Text,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.ui.FlxTypedButton.call(this,X,Y,OnClick);
	var _g = 0;
	var _g1 = this.labelOffsets;
	while(_g < _g1.length) {
		var point = _g1[_g];
		++_g;
		point.set(point.x - 1,point.y + 3);
	}
	this.set_label(new flixel.text.FlxText(this.x + this.labelOffsets[0].x,this.y + this.labelOffsets[0].y,80,Text));
	this.label.setFormat(null,8,3355443,"center");
	this.label.set_alpha(this.labelAlphas[this.status]);
};
$hxClasses["flixel.ui.FlxButton"] = flixel.ui.FlxButton;
flixel.ui.FlxButton.__name__ = ["flixel","ui","FlxButton"];
flixel.ui.FlxButton.__super__ = flixel.ui.FlxTypedButton;
flixel.ui.FlxButton.prototype = $extend(flixel.ui.FlxTypedButton.prototype,{
	resetHelpers: function() {
		flixel.ui.FlxTypedButton.prototype.resetHelpers.call(this);
		if(this.label != null) {
			this.label.set_fieldWidth(this.label.frameWidth = Std["int"](this.get_width()));
			this.label.set_size(this.label.get_size());
		}
	}
	,initLabel: function(Text) {
		this.set_label(new flixel.text.FlxText(this.x + this.labelOffsets[0].x,this.y + this.labelOffsets[0].y,80,Text));
		this.label.setFormat(null,8,3355443,"center");
		this.label.set_alpha(this.labelAlphas[this.status]);
	}
	,get_text: function() {
		return this.label.get_text();
	}
	,set_text: function(Text) {
		return this.label.set_text(Text);
	}
	,__class__: flixel.ui.FlxButton
	,__properties__: $extend(flixel.ui.FlxTypedButton.prototype.__properties__,{set_text:"set_text",get_text:"get_text"})
});
flixel.ui._FlxTypedButton = {};
flixel.ui._FlxTypedButton.GraphicButton = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(flixel.ui._FlxTypedButton.GraphicButton.preload != null) {
		this.__sourceImage = flixel.ui._FlxTypedButton.GraphicButton.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(flixel.ui._FlxTypedButton.GraphicButton.resourceName),flixel.ui._FlxTypedButton.GraphicButton.resourceType,function(b) {
		if(flixel.ui._FlxTypedButton.GraphicButton.preload == null) flixel.ui._FlxTypedButton.GraphicButton.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["flixel.ui._FlxTypedButton.GraphicButton"] = flixel.ui._FlxTypedButton.GraphicButton;
flixel.ui._FlxTypedButton.GraphicButton.__name__ = ["flixel","ui","_FlxTypedButton","GraphicButton"];
flixel.ui._FlxTypedButton.GraphicButton.preload = null;
flixel.ui._FlxTypedButton.GraphicButton.__super__ = flash.display.BitmapData;
flixel.ui._FlxTypedButton.GraphicButton.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: flixel.ui._FlxTypedButton.GraphicButton
});
flixel.ui._FlxTypedButton.FlxButtonEvent = function(Callback,sound) {
	this.callback = Callback;
	this.sound = sound;
};
$hxClasses["flixel.ui._FlxTypedButton.FlxButtonEvent"] = flixel.ui._FlxTypedButton.FlxButtonEvent;
flixel.ui._FlxTypedButton.FlxButtonEvent.__name__ = ["flixel","ui","_FlxTypedButton","FlxButtonEvent"];
flixel.ui._FlxTypedButton.FlxButtonEvent.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.ui._FlxTypedButton.FlxButtonEvent.prototype = {
	callback: null
	,sound: null
	,destroy: function() {
		this.callback = null;
		this.sound = flixel.util.FlxDestroyUtil.destroy(this.sound);
	}
	,fire: function() {
		if(this.callback != null) this.callback();
		if(this.sound != null) this.sound.play(true);
	}
	,__class__: flixel.ui._FlxTypedButton.FlxButtonEvent
};
flixel.util.FlxAngle = function() { };
$hxClasses["flixel.util.FlxAngle"] = flixel.util.FlxAngle;
flixel.util.FlxAngle.__name__ = ["flixel","util","FlxAngle"];
flixel.util.FlxAngle.__properties__ = {get_TO_RAD:"get_TO_RAD",get_TO_DEG:"get_TO_DEG"}
flixel.util.FlxAngle.rotatePoint = function(X,Y,PivotX,PivotY,Angle,point) {
	var sin = 0;
	var cos = 0;
	var radians = Angle * -(Math.PI / 180);
	while(radians < -Math.PI) radians += Math.PI * 2;
	while(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		sin = 1.27323954 * radians + .405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	} else {
		sin = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	}
	radians += Math.PI / 2;
	if(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		cos = 1.27323954 * radians + 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	} else {
		cos = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	}
	var dx = X - PivotX;
	var dy = Y - PivotY;
	if(point == null) point = flixel.util.FlxPoint.get(null,null);
	point.set_x(PivotX + cos * dx - sin * dy);
	point.set_y(PivotY - sin * dx - cos * dy);
	return point;
};
flixel.util.FlxAngle.getAngle = function(Point1,Point2) {
	var x = Point2.x - Point1.x;
	var y = Point2.y - Point1.y;
	var angle = 0;
	if(x != 0 || y != 0) {
		var c1 = Math.PI * 0.25;
		var c2 = 3 * c1;
		var ay;
		if(y < 0) ay = -y; else ay = y;
		if(x >= 0) angle = c1 - c1 * ((x - ay) / (x + ay)); else angle = c2 - c1 * ((x + ay) / (ay - x));
		angle = (y < 0?-angle:angle) * (180 / Math.PI);
		if(angle > 90) angle = angle - 270; else angle += 90;
	}
	if(Point1._weak) flixel.util.FlxPoint._pool.put(Point1);
	if(Point2._weak) flixel.util.FlxPoint._pool.put(Point2);
	return angle;
};
flixel.util.FlxAngle.sinCosGenerator = function(length,sinAmplitude,cosAmplitude,frequency) {
	if(frequency == null) frequency = 1.0;
	if(cosAmplitude == null) cosAmplitude = 1.0;
	if(sinAmplitude == null) sinAmplitude = 1.0;
	var sin = sinAmplitude;
	var cos = cosAmplitude;
	var frq = frequency * Math.PI / length;
	flixel.util.FlxAngle.cosTable = new Array();
	flixel.util.FlxAngle.sinTable = new Array();
	var _g = 0;
	while(_g < length) {
		var c = _g++;
		cos -= sin * frq;
		sin += cos * frq;
		flixel.util.FlxAngle.cosTable[c] = cos;
		flixel.util.FlxAngle.sinTable[c] = sin;
	}
};
flixel.util.FlxAngle.wrapAngle = function(angle) {
	if(angle > 180) angle = -180; else if(angle < -180) angle = 180;
	return angle;
};
flixel.util.FlxAngle.angleLimit = function(angle,min,max) {
	if(angle > max) angle = max; else if(angle < min) angle = min;
	return angle;
};
flixel.util.FlxAngle.asDegrees = function(radians) {
	return radians * (180 / Math.PI);
};
flixel.util.FlxAngle.asRadians = function(degrees) {
	return degrees * (Math.PI / 180);
};
flixel.util.FlxAngle.angleBetween = function(SpriteA,SpriteB,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = SpriteB.x + SpriteB.origin.x - (SpriteA.x + SpriteA.origin.x);
	var dy = SpriteB.y + SpriteB.origin.y - (SpriteA.y + SpriteA.origin.y);
	if(AsDegrees) return flixel.util.FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel.util.FlxAngle.angleBetweenPoint = function(Sprite,Target,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = Target.x - (Sprite.x + Sprite.origin.x);
	var dy = Target.y - (Sprite.y + Sprite.origin.y);
	if(AsDegrees) return flixel.util.FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel.util.FlxAngle.angleBetweenMouse = function(Object,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	if(Object == null) return 0;
	var p = Object.getScreenXY();
	var dx = flixel.FlxG.mouse.screenX - p.x;
	var dy = flixel.FlxG.mouse.screenY - p.y;
	if(AsDegrees) return flixel.util.FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel.util.FlxAngle.angleBetweenTouch = function(Object,Touch,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var p = Object.getScreenXY();
	var dx = Touch.screenX - p.x;
	var dy = Touch.screenY - p.y;
	if(AsDegrees) return flixel.util.FlxAngle.asDegrees(Math.atan2(dy,dx)); else return Math.atan2(dy,dx);
};
flixel.util.FlxAngle.getCartesianCoords = function(Radius,Angle,point) {
	var p = point;
	if(p == null) p = flixel.util.FlxPoint.get(null,null);
	p.set_x(Radius * Math.cos(Angle * (Math.PI / 180)));
	p.set_y(Radius * Math.sin(Angle * (Math.PI / 180)));
	return p;
};
flixel.util.FlxAngle.getPolarCoords = function(X,Y,point) {
	var p = point;
	if(p == null) p = flixel.util.FlxPoint.get(null,null);
	p.set_x(Math.sqrt(X * X + Y * Y));
	p.set_y(Math.atan2(Y,X) * (180 / Math.PI));
	return p;
};
flixel.util.FlxAngle.get_TO_DEG = function() {
	return 180 / Math.PI;
};
flixel.util.FlxAngle.get_TO_RAD = function() {
	return Math.PI / 180;
};
flixel.util.FlxArrayUtil = function() { };
$hxClasses["flixel.util.FlxArrayUtil"] = flixel.util.FlxArrayUtil;
flixel.util.FlxArrayUtil.__name__ = ["flixel","util","FlxArrayUtil"];
flixel.util.FlxArrayUtil.fastSplice_flixel_text_FlxTextFormat = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel.util.FlxArrayUtil.clearArray_flixel_input_FlxSwipe = function(array,recursive) {
	if(recursive == null) recursive = false;
	if(array != null) {
		if(!recursive) while(array.length > 0) array.pop(); else while(array.length > 0) {
			var thing = array.pop();
			if((thing instanceof Array) && thing.__enum__ == null) flixel.util.FlxArrayUtil.clearArray_clearArray_T(array,recursive);
		}
	}
};
flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel.util.FlxArrayUtil.setLength_flixel_input_keyboard_FlxKey = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel.util.FlxArrayUtil.clearArray_flixel_group_FlxTypedGroup_T = function(array,recursive) {
	if(recursive == null) recursive = false;
	if(array != null) {
		if(!recursive) while(array.length > 0) array.pop(); else while(array.length > 0) {
			var thing = array.pop();
			if((thing instanceof Array) && thing.__enum__ == null) flixel.util.FlxArrayUtil.clearArray_clearArray_T(array,recursive);
		}
	}
};
flixel.util.FlxArrayUtil.getRandom_flixel_group_FlxTypedGroup_T = function(Objects,StartIndex,EndIndex) {
	if(EndIndex == null) EndIndex = 0;
	if(StartIndex == null) StartIndex = 0;
	return flixel.util.FlxRandom.getObject_getRandom_T(Objects,StartIndex,EndIndex);
};
flixel.util.FlxArrayUtil.setLength_Int = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel.util.FlxArrayUtil.setLength_flash_geom_Rectangle = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
};
flixel.util.FlxArrayUtil.fastSplice_flixel_tweens_FlxTween = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxTimer = function(array,recursive) {
	if(recursive == null) recursive = false;
	if(array != null) {
		if(!recursive) while(array.length > 0) array.pop(); else while(array.length > 0) {
			var thing = array.pop();
			if((thing instanceof Array) && thing.__enum__ == null) flixel.util.FlxArrayUtil.clearArray_clearArray_T(array,recursive);
		}
	}
};
flixel.util.FlxArrayUtil.fastSplice_flixel_util_FlxTimer = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel.util.FlxArrayUtil.clearArray_flixel_util_FlxPath = function(array,recursive) {
	if(recursive == null) recursive = false;
	if(array != null) {
		if(!recursive) while(array.length > 0) array.pop(); else while(array.length > 0) {
			var thing = array.pop();
			if((thing instanceof Array) && thing.__enum__ == null) flixel.util.FlxArrayUtil.clearArray_clearArray_T(array,recursive);
		}
	}
};
flixel.util.FlxArrayUtil.fastSplice_flixel_util_FlxPath = function(array,element) {
	var index = HxOverrides.indexOf(array,element,0);
	if(index != -1) {
		array[index] = array[array.length - 1];
		array.pop();
		return array;
	}
	return array;
};
flixel.util.FlxArrayUtil.clearArray_clearArray_T = null;
flixel.util.FlxArrayUtil.swapAndPop_fastSplice_T = function(array,index) {
	array[index] = array[array.length - 1];
	array.pop();
	return array;
};
flixel.util.FlxBitmapDataPool = function() { };
$hxClasses["flixel.util.FlxBitmapDataPool"] = flixel.util.FlxBitmapDataPool;
flixel.util.FlxBitmapDataPool.__name__ = ["flixel","util","FlxBitmapDataPool"];
flixel.util.FlxBitmapDataPool.__properties__ = {set_maxLength:"set_maxLength"}
flixel.util.FlxBitmapDataPool.get = function(w,h,transparent,fillColor,exactSize) {
	if(exactSize == null) exactSize = false;
	if(transparent == null) transparent = true;
	var res = null;
	var node = flixel.util.FlxBitmapDataPool._head;
	while(node != null) {
		var bmd = node.bmd;
		if(bmd.transparent == transparent && bmd.width >= w && bmd.height >= h && (!exactSize || exactSize && bmd.width == w && bmd.height == h)) {
			res = bmd;
			if(node.prev != null) node.prev.next = node.next;
			if(node.next != null) node.next.prev = node.prev;
			if(node == flixel.util.FlxBitmapDataPool._head) flixel.util.FlxBitmapDataPool._head = node.next;
			if(node == flixel.util.FlxBitmapDataPool._tail) flixel.util.FlxBitmapDataPool._tail = node.prev;
			node = null;
			flixel.util.FlxBitmapDataPool.$length--;
			break;
		}
		node = node.next;
	}
	if(res != null) {
		if(fillColor != null) {
			flixel.util.FlxBitmapDataPool._rect.x = 0;
			flixel.util.FlxBitmapDataPool._rect.y = 0;
			flixel.util.FlxBitmapDataPool._rect.width = w;
			flixel.util.FlxBitmapDataPool._rect.height = h;
			res.fillRect(flixel.util.FlxBitmapDataPool._rect,fillColor);
		}
	} else res = new flash.display.BitmapData(w,h,transparent,fillColor != null?fillColor:-1);
	return res;
};
flixel.util.FlxBitmapDataPool.put = function(bmd) {
	if(flixel.util.FlxBitmapDataPool.$length >= flixel.util.FlxBitmapDataPool.maxLength) {
		var last = flixel.util.FlxBitmapDataPool._tail;
		last.bmd.dispose();
		if(last.prev != null) {
			last.prev.next = null;
			flixel.util.FlxBitmapDataPool._tail = last.prev;
		}
		last = null;
		flixel.util.FlxBitmapDataPool.$length--;
	}
	var node = new flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode(bmd);
	node.next = flixel.util.FlxBitmapDataPool._head;
	if(flixel.util.FlxBitmapDataPool._head == null) flixel.util.FlxBitmapDataPool._head = flixel.util.FlxBitmapDataPool._tail = node; else {
		flixel.util.FlxBitmapDataPool._head = node;
		node.next.prev = node;
	}
	flixel.util.FlxBitmapDataPool.$length++;
};
flixel.util.FlxBitmapDataPool.clear = function() {
	var node = flixel.util.FlxBitmapDataPool._head;
	while(node != null) {
		var bmd = node.bmd;
		bmd.dispose();
		bmd = null;
		node = node.next;
	}
	flixel.util.FlxBitmapDataPool.$length = 0;
	flixel.util.FlxBitmapDataPool._head = flixel.util.FlxBitmapDataPool._tail = null;
};
flixel.util.FlxBitmapDataPool.set_maxLength = function(value) {
	if(flixel.util.FlxBitmapDataPool.maxLength != value) {
		var node = flixel.util.FlxBitmapDataPool._tail;
		while(node != null && flixel.util.FlxBitmapDataPool.$length > value) {
			var bmd = node.bmd;
			bmd.dispose();
			bmd = null;
			node = node.prev;
			flixel.util.FlxBitmapDataPool.$length--;
		}
	}
	return flixel.util.FlxBitmapDataPool.maxLength = value;
};
flixel.util._FlxBitmapDataPool = {};
flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode = function(bmd,prev,next) {
	this.bmd = bmd;
	this.prev = prev;
	this.next = next;
};
$hxClasses["flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode"] = flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode;
flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode.__name__ = ["flixel","util","_FlxBitmapDataPool","FlxBitmapDataPoolNode"];
flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode.prototype = {
	bmd: null
	,prev: null
	,next: null
	,__class__: flixel.util._FlxBitmapDataPool.FlxBitmapDataPoolNode
};
flixel.util.FlxCollision = function() { };
$hxClasses["flixel.util.FlxCollision"] = flixel.util.FlxCollision;
flixel.util.FlxCollision.__name__ = ["flixel","util","FlxCollision"];
flixel.util.FlxCollision.pixelPerfectCheck = function(Contact,Target,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 1;
	var considerRotation = Contact.angle != 0 || Target.angle != 0;
	if(Camera != null) Camera = Camera; else Camera = flixel.FlxG.camera;
	flixel.util.FlxCollision.pointA.x = Contact.x - (Camera.scroll.x * Contact.scrollFactor.x | 0) - Contact.offset.x;
	flixel.util.FlxCollision.pointA.y = Contact.y - (Camera.scroll.y * Contact.scrollFactor.y | 0) - Contact.offset.y;
	flixel.util.FlxCollision.pointB.x = Target.x - (Camera.scroll.x * Target.scrollFactor.x | 0) - Target.offset.x;
	flixel.util.FlxCollision.pointB.y = Target.y - (Camera.scroll.y * Target.scrollFactor.y | 0) - Target.offset.y;
	if(considerRotation) {
		flixel.util.FlxCollision.centerA.setTo(Contact.origin.x,Contact.origin.y);
		flixel.util.FlxCollision.centerB.setTo(Target.origin.x,Target.origin.y);
		flixel.util.FlxCollision.boundsA.x = flixel.util.FlxCollision.pointA.x + flixel.util.FlxCollision.centerA.x - flixel.util.FlxCollision.centerA.get_length();
		flixel.util.FlxCollision.boundsA.y = flixel.util.FlxCollision.pointA.y + flixel.util.FlxCollision.centerA.y - flixel.util.FlxCollision.centerA.get_length();
		flixel.util.FlxCollision.boundsA.width = flixel.util.FlxCollision.centerA.get_length() * 2;
		flixel.util.FlxCollision.boundsA.height = flixel.util.FlxCollision.boundsA.width;
		flixel.util.FlxCollision.boundsB.x = flixel.util.FlxCollision.pointB.x + flixel.util.FlxCollision.centerB.x - flixel.util.FlxCollision.centerB.get_length();
		flixel.util.FlxCollision.boundsB.y = flixel.util.FlxCollision.pointB.y + flixel.util.FlxCollision.centerB.y - flixel.util.FlxCollision.centerB.get_length();
		flixel.util.FlxCollision.boundsB.width = flixel.util.FlxCollision.centerB.get_length() * 2;
		flixel.util.FlxCollision.boundsB.height = flixel.util.FlxCollision.boundsB.width;
	} else {
		flixel.util.FlxCollision.boundsA.x = flixel.util.FlxCollision.pointA.x;
		flixel.util.FlxCollision.boundsA.y = flixel.util.FlxCollision.pointA.y;
		flixel.util.FlxCollision.boundsA.width = Contact.frameWidth;
		flixel.util.FlxCollision.boundsA.height = Contact.frameHeight;
		flixel.util.FlxCollision.boundsB.x = flixel.util.FlxCollision.pointB.x;
		flixel.util.FlxCollision.boundsB.y = flixel.util.FlxCollision.pointB.y;
		flixel.util.FlxCollision.boundsB.width = Target.frameWidth;
		flixel.util.FlxCollision.boundsB.height = Target.frameHeight;
	}
	var intersect = flixel.util.FlxCollision.boundsA.intersection(flixel.util.FlxCollision.boundsB);
	if(intersect.isEmpty() || intersect.width < 1 || intersect.height < 1) return false;
	flixel.util.FlxCollision.matrixA.identity();
	flixel.util.FlxCollision.matrixA.translate(-(intersect.x - flixel.util.FlxCollision.boundsA.x),-(intersect.y - flixel.util.FlxCollision.boundsA.y));
	flixel.util.FlxCollision.matrixB.identity();
	flixel.util.FlxCollision.matrixB.translate(-(intersect.x - flixel.util.FlxCollision.boundsB.x),-(intersect.y - flixel.util.FlxCollision.boundsB.y));
	var testA = Contact.framePixels;
	var testB = Target.framePixels;
	var overlapWidth = intersect.width | 0;
	var overlapHeight = intersect.height | 0;
	if(considerRotation) {
		flixel.util.FlxCollision.testMatrix.identity();
		flixel.util.FlxCollision.testMatrix.translate(-Contact.origin.x,-Contact.origin.y);
		flixel.util.FlxCollision.testMatrix.rotate(Contact.angle * (Math.PI / 180));
		flixel.util.FlxCollision.testMatrix.translate(flixel.util.FlxCollision.boundsA.width / 2,flixel.util.FlxCollision.boundsA.height / 2);
		var testA2 = flixel.util.FlxBitmapDataPool.get(Math.floor(flixel.util.FlxCollision.boundsA.width),Math.floor(flixel.util.FlxCollision.boundsA.height),true,0,false);
		testA2.draw(testA,flixel.util.FlxCollision.testMatrix,null,null,null,false);
		testA = testA2;
		flixel.util.FlxCollision.testMatrix.identity();
		flixel.util.FlxCollision.testMatrix.translate(-Target.origin.x,-Target.origin.y);
		flixel.util.FlxCollision.testMatrix.rotate(Target.angle * (Math.PI / 180));
		flixel.util.FlxCollision.testMatrix.translate(flixel.util.FlxCollision.boundsB.width / 2,flixel.util.FlxCollision.boundsB.height / 2);
		var testB2 = flixel.util.FlxBitmapDataPool.get(Math.floor(flixel.util.FlxCollision.boundsB.width),Math.floor(flixel.util.FlxCollision.boundsB.height),true,0,false);
		testB2.draw(testB,flixel.util.FlxCollision.testMatrix,null,null,null,false);
		testB = testB2;
	}
	flixel.util.FlxCollision.boundsA.x = -flixel.util.FlxCollision.matrixA.tx | 0;
	flixel.util.FlxCollision.boundsA.y = -flixel.util.FlxCollision.matrixA.ty | 0;
	flixel.util.FlxCollision.boundsA.width = overlapWidth;
	flixel.util.FlxCollision.boundsA.height = overlapHeight;
	flixel.util.FlxCollision.boundsB.x = -flixel.util.FlxCollision.matrixB.tx | 0;
	flixel.util.FlxCollision.boundsB.y = -flixel.util.FlxCollision.matrixB.ty | 0;
	flixel.util.FlxCollision.boundsB.width = overlapWidth;
	flixel.util.FlxCollision.boundsB.height = overlapHeight;
	var pixelsA = testA.getPixels(flixel.util.FlxCollision.boundsA);
	var pixelsB = testB.getPixels(flixel.util.FlxCollision.boundsB);
	var hit = false;
	var alphaA = 0;
	var alphaB = 0;
	var overlapPixels = overlapWidth * overlapHeight;
	var alphaIdx = 0;
	var _g1 = 0;
	var _g = Math.ceil(overlapPixels / 2);
	while(_g1 < _g) {
		var i = _g1++;
		alphaIdx = i << 3;
		pixelsA.position = pixelsB.position = alphaIdx;
		alphaA = pixelsA.readUnsignedByte();
		alphaB = pixelsB.readUnsignedByte();
		if(alphaA >= AlphaTolerance && alphaB >= AlphaTolerance) {
			hit = true;
			break;
		}
	}
	if(!hit) {
		var _g11 = 0;
		var _g2 = overlapPixels >> 1;
		while(_g11 < _g2) {
			var i1 = _g11++;
			alphaIdx = (i1 << 3) + 4;
			pixelsA.position = pixelsB.position = alphaIdx;
			alphaA = pixelsA.readUnsignedByte();
			alphaB = pixelsB.readUnsignedByte();
			if(alphaA >= AlphaTolerance && alphaB >= AlphaTolerance) {
				hit = true;
				break;
			}
		}
	}
	if(considerRotation) {
		flixel.util.FlxBitmapDataPool.put(testA);
		flixel.util.FlxBitmapDataPool.put(testB);
	}
	return hit;
};
flixel.util.FlxCollision.pixelPerfectPointCheck = function(PointX,PointY,Target,AlphaTolerance) {
	if(AlphaTolerance == null) AlphaTolerance = 1;
	if(flixel.util.FlxMath.pointInCoordinates(PointX,PointY,Math.floor(Target.x),Math.floor(Target.y),Std["int"](Target.get_width()),Std["int"](Target.get_height())) == false) return false;
	var test = Target.framePixels;
	var pixelAlpha = 0;
	pixelAlpha = flixel.util.FlxColorUtil.getAlpha(test.getPixel32(Math.floor(PointX - Target.x),Math.floor(PointY - Target.y)));
	if(pixelAlpha >= AlphaTolerance) return true; else return false;
};
flixel.util.FlxCollision.createCameraWall = function(Camera,Placement,Thickness,AdjustWorldBounds) {
	if(AdjustWorldBounds == null) AdjustWorldBounds = false;
	var left = null;
	var right = null;
	var top = null;
	var bottom = null;
	switch(Placement) {
	case 0:
		left = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel.tile.FlxTileblock(Math.floor(Camera.x + Camera.width),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y - Thickness),Camera.width + Thickness * 2,Thickness);
		bottom = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Camera.height,Camera.width + Thickness * 2,Thickness);
		if(AdjustWorldBounds) flixel.FlxG.worldBounds.set(Camera.x - Thickness,Camera.y - Thickness,Camera.width + Thickness * 2,Camera.height + Thickness * 2);
		break;
	case 1:
		left = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel.tile.FlxTileblock(Math.floor(Camera.x + Camera.width - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y),Camera.width,Thickness);
		bottom = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Camera.height - Thickness,Camera.width,Thickness);
		if(AdjustWorldBounds) flixel.FlxG.worldBounds.set(Camera.x,Camera.y,Camera.width,Camera.height);
		break;
	}
	var result = new flixel.group.FlxGroup(4);
	result.add(left);
	result.add(right);
	result.add(top);
	result.add(bottom);
	return result;
};
flixel.util.FlxColor = function() { };
$hxClasses["flixel.util.FlxColor"] = flixel.util.FlxColor;
flixel.util.FlxColor.__name__ = ["flixel","util","FlxColor"];
flixel.util.FlxColorUtil = function() { };
$hxClasses["flixel.util.FlxColorUtil"] = flixel.util.FlxColorUtil;
flixel.util.FlxColorUtil.__name__ = ["flixel","util","FlxColorUtil"];
flixel.util.FlxColorUtil.makeFromARGB = function(Alpha,Red,Green,Blue) {
	if(Alpha == null) Alpha = 1.0;
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (Red & 255) << 16 | (Green & 255) << 8 | Blue & 255;
};
flixel.util.FlxColorUtil.makeFromHSBA = function(Hue,Saturation,Brightness,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	var red;
	var green;
	var blue;
	if(Saturation == 0.0) {
		red = Brightness;
		green = Brightness;
		blue = Brightness;
	} else {
		if(Hue == 360) Hue = 0;
		var slice = Hue / 60 | 0;
		var hf = Hue / 60 - slice;
		var aa = Brightness * (1 - Saturation);
		var bb = Brightness * (1 - Saturation * hf);
		var cc = Brightness * (1 - Saturation * (1.0 - hf));
		switch(slice) {
		case 0:
			red = Brightness;
			green = cc;
			blue = aa;
			break;
		case 1:
			red = bb;
			green = Brightness;
			blue = aa;
			break;
		case 2:
			red = aa;
			green = Brightness;
			blue = cc;
			break;
		case 3:
			red = aa;
			green = bb;
			blue = Brightness;
			break;
		case 4:
			red = cc;
			green = aa;
			blue = Brightness;
			break;
		case 5:
			red = Brightness;
			green = aa;
			blue = bb;
			break;
		default:
			red = 0;
			green = 0;
			blue = 0;
		}
	}
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (red * 255 | 0) << 16 | (green * 255 | 0) << 8 | (blue * 255 | 0);
};
flixel.util.FlxColorUtil.getARGB = function(Color,Results) {
	var red = Color >> 16 & 255;
	var green = Color >> 8 & 255;
	var blue = Color & 255;
	var alpha = flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { red : red, green : green, blue : blue, alpha : alpha};
	return { red : red, green : green, blue : blue, alpha : alpha};
};
flixel.util.FlxColorUtil.getHSBA = function(Color,Results) {
	var hue;
	var saturation;
	var brightness;
	var alpha;
	var red = (Color >> 16 & 255) / 255;
	var green = (Color >> 8 & 255) / 255;
	var blue = (Color & 255) / 255;
	var m;
	if(red > green) m = red; else m = green;
	var dmax;
	if(m > blue) dmax = m; else dmax = blue;
	if(red > green) m = green; else m = red;
	var dmin;
	if(m > blue) dmin = blue; else dmin = m;
	var range = dmax - dmin;
	brightness = flixel.util.FlxMath.roundDecimal(dmax,4);
	saturation = 0;
	hue = 0;
	if(dmax != 0) saturation = flixel.util.FlxMath.roundDecimal(range / dmax,4);
	if(saturation != 0) {
		if(red == dmax) hue = (green - blue) / range; else if(green == dmax) hue = 2 + (blue - red) / range; else if(blue == dmax) hue = 4 + (red - green) / range;
		hue *= 60;
		if(hue < 0) hue += 360;
	}
	alpha = flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
	return { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
};
flixel.util.FlxColorUtil.getAlpha = function(Color) {
	return Color >> 24 & 255;
};
flixel.util.FlxColorUtil.getAlphaFloat = function(Color) {
	var f = Color >> 24 & 255;
	return f / 255;
};
flixel.util.FlxColorUtil.getRed = function(Color) {
	return Color >> 16 & 255;
};
flixel.util.FlxColorUtil.getGreen = function(Color) {
	return Color >> 8 & 255;
};
flixel.util.FlxColorUtil.getBlue = function(Color) {
	return Color & 255;
};
flixel.util.FlxColorUtil.getRandomColor = function(Min,Max,Alpha) {
	if(Alpha == null) Alpha = 255;
	if(Max == null) Max = 255;
	if(Min == null) Min = 0;
	return flixel.util.FlxRandom.color(Min,Max,Alpha);
};
flixel.util.FlxColorUtil.getColor32 = function(Alpha,Red,Green,Blue) {
	return Alpha << 24 | Red << 16 | Green << 8 | Blue;
};
flixel.util.FlxColorUtil.getColor24 = function(Red,Green,Blue) {
	return Red << 16 | Green << 8 | Blue;
};
flixel.util.FlxColorUtil.getHSVColorWheel = function(Alpha) {
	if(Alpha == null) Alpha = 255;
	var colors = new Array();
	var _g = 0;
	while(_g < 360) {
		var c = _g++;
		colors[c] = flixel.util.FlxColorUtil.HSVtoARGB(c,1.0,1.0,Alpha);
	}
	return colors;
};
flixel.util.FlxColorUtil.getComplementHarmony = function(Color) {
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var opposite = flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	return flixel.util.FlxColorUtil.HSVtoARGB(opposite,1.0,1.0);
};
flixel.util.FlxColorUtil.getAnalogousHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	if(Threshold > 359 || Threshold < 0) null;
	var warmer = flixel.util.FlxMath.wrapValue(hsv.hue | 0,359 - Threshold,359);
	var colder = flixel.util.FlxMath.wrapValue(hsv.hue | 0,Threshold,359);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoARGB(warmer,1.0,1.0), color3 : flixel.util.FlxColorUtil.HSVtoARGB(colder,1.0,1.0), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
};
flixel.util.FlxColorUtil.getSplitComplementHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	if(Threshold >= 359 || Threshold <= 0) null;
	var opposite = flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	var warmer = flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite - Threshold,359);
	var colder = flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite + Threshold,359);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoARGB(warmer,hsv.saturation,hsv.value), color3 : flixel.util.FlxColorUtil.HSVtoARGB(colder,hsv.saturation,hsv.value), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
};
flixel.util.FlxColorUtil.getTriadicHarmony = function(Color) {
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var triadic1 = flixel.util.FlxMath.wrapValue(hsv.hue | 0,120,359);
	var triadic2 = flixel.util.FlxMath.wrapValue(triadic1,120,359);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoARGB(triadic1,1.0,1.0), color3 : flixel.util.FlxColorUtil.HSVtoARGB(triadic2,1.0,1.0)};
};
flixel.util.FlxColorUtil.getColorInfo = function(Color) {
	var argb = flixel.util.FlxColorUtil.getARGB(Color,null);
	var hsl = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var result = flixel.util.FlxColorUtil.ARGBtoHexString(Color) + "\n";
	result += "Alpha: " + argb.alpha + " Red: " + argb.red + " Green: " + argb.green + " Blue: " + argb.blue + "\n";
	result += "Hue: " + hsl.hue + " Saturation: " + hsl.saturation + " Lightnes: " + hsl.lightness;
	return result;
};
flixel.util.FlxColorUtil.ARGBtoHexString = function(Color) {
	var argb = flixel.util.FlxColorUtil.getARGB(Color,null);
	return "0x" + flixel.util.FlxColorUtil.colorToHexString(argb.alpha | 0) + flixel.util.FlxColorUtil.colorToHexString(argb.red) + flixel.util.FlxColorUtil.colorToHexString(argb.green) + flixel.util.FlxColorUtil.colorToHexString(argb.blue);
};
flixel.util.FlxColorUtil.ARGBtoWebString = function(Color) {
	var argb = flixel.util.FlxColorUtil.getARGB(Color,null);
	return "#" + flixel.util.FlxColorUtil.colorToHexString(argb.red) + flixel.util.FlxColorUtil.colorToHexString(argb.green) + flixel.util.FlxColorUtil.colorToHexString(argb.blue);
};
flixel.util.FlxColorUtil.colorToHexString = function(Color) {
	var digits = "0123456789ABCDEF";
	var lsd = Color % 16;
	var msd = (Color - lsd) / 16;
	return digits.charAt(msd | 0) + digits.charAt(lsd | 0);
};
flixel.util.FlxColorUtil.HSVtoARGB = function(H,S,V,Alpha) {
	if(Alpha == null) Alpha = 255;
	var result = 0;
	if(S == 0.0) result = Alpha << 24 | (V * 255 | 0) << 16 | (V * 255 | 0) << 8 | (V * 255 | 0); else {
		H = H / 60.0;
		var f = H - (H | 0);
		var p = V * (1.0 - S);
		var q = V * (1.0 - S * f);
		var t = V * (1.0 - S * (1.0 - f));
		var _g = H | 0;
		switch(_g) {
		case 0:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (t * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 1:
			result = Alpha << 24 | (q * 255 | 0) << 16 | (V * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 2:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (V * 255 | 0) << 8 | (t * 255 | 0);
			break;
		case 3:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (q * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 4:
			result = Alpha << 24 | (t * 255 | 0) << 16 | (p * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 5:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (p * 255 | 0) << 8 | (q * 255 | 0);
			break;
		default:
			null;
		}
	}
	return result;
};
flixel.util.FlxColorUtil.RGBtoHSV = function(Color) {
	var rgb = flixel.util.FlxColorUtil.getARGB(Color,null);
	var red = rgb.red / 255;
	var green = rgb.green / 255;
	var blue = rgb.blue / 255;
	var min = Math.min(red,Math.min(green,blue));
	var max = Math.max(red,Math.max(green,blue));
	var delta = max - min;
	var lightness = (max + min) / 2;
	var hue = 0;
	var saturation;
	if(delta == 0) {
		hue = 0;
		saturation = 0;
	} else {
		if(lightness < 0.5) saturation = delta / (max + min); else saturation = delta / (2 - max - min);
		var delta_r = ((max - red) / 6 + delta / 2) / delta;
		var delta_g = ((max - green) / 6 + delta / 2) / delta;
		var delta_b = ((max - blue) / 6 + delta / 2) / delta;
		if(red == max) hue = delta_b - delta_g; else if(green == max) hue = 0.333333333333333315 + delta_r - delta_b; else if(blue == max) hue = 0.66666666666666663 + delta_g - delta_r;
		if(hue < 0) hue += 1;
		if(hue > 1) hue -= 1;
	}
	hue *= 360;
	hue = Math.round(hue);
	return { hue : hue, saturation : saturation, lightness : lightness, value : lightness};
};
flixel.util.FlxColorUtil.ARGBtoRGB = function(Color) {
	return (Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255;
};
flixel.util.FlxColorUtil.interpolateColor = function(Color1,Color2,Steps,CurrentStep,Alpha) {
	if(Alpha == null) Alpha = 255;
	var src1 = flixel.util.FlxColorUtil.getARGB(Color1,null);
	var src2 = flixel.util.FlxColorUtil.getARGB(Color2,null);
	var r = (src2.red - src1.red) * CurrentStep / Steps + src1.red | 0;
	var g = (src2.green - src1.green) * CurrentStep / Steps + src1.green | 0;
	var b = (src2.blue - src1.blue) * CurrentStep / Steps + src1.blue | 0;
	return Alpha << 24 | r << 16 | g << 8 | b;
};
flixel.util.FlxColorUtil.interpolateColorWithRGB = function(Color,R2,G2,B2,Steps,CurrentStep) {
	var src = flixel.util.FlxColorUtil.getARGB(Color,null);
	var r = (R2 - src.red) * CurrentStep / Steps + src.red | 0;
	var g = (G2 - src.green) * CurrentStep / Steps + src.green | 0;
	var b = (B2 - src.blue) * CurrentStep / Steps + src.blue | 0;
	return r << 16 | g << 8 | b;
};
flixel.util.FlxColorUtil.interpolateRGB = function(R1,G1,B1,R2,G2,B2,Steps,CurrentStep) {
	var r = (R2 - R1) * CurrentStep / Steps + R1 | 0;
	var g = (G2 - G1) * CurrentStep / Steps + G1 | 0;
	var b = (B2 - B1) * CurrentStep / Steps + B1 | 0;
	return r << 16 | g << 8 | b;
};
flixel.util.FlxColorUtil.darken = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel.util.FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel.util.FlxColorUtil.getAlphaFloat(Color);
	Factor = 1 - Factor;
	r = r * Factor | 0;
	g = g * Factor | 0;
	b = b * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
};
flixel.util.FlxColorUtil.brighten = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel.util.FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel.util.FlxColorUtil.getAlphaFloat(Color);
	r += (255 - r) * Factor | 0;
	g += (255 - g) * Factor | 0;
	b += (255 - b) * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
};
flixel.util.FlxDestroyUtil = function() { };
$hxClasses["flixel.util.FlxDestroyUtil"] = flixel.util.FlxDestroyUtil;
flixel.util.FlxDestroyUtil.__name__ = ["flixel","util","FlxDestroyUtil"];
flixel.util.FlxDestroyUtil.destroy = function(object) {
	if(object != null) object.destroy();
	return null;
};
flixel.util.FlxDestroyUtil.destroyArray = function(array) {
	if(array != null) while(array.length > 0) flixel.util.FlxDestroyUtil.destroy(array.pop());
	return null;
};
flixel.util.FlxDestroyUtil.put = function(object) {
	if(object != null) object.put();
	return null;
};
flixel.util.FlxDestroyUtil.putArray = function(array) {
	if(array != null) while(array.length > 0) flixel.util.FlxDestroyUtil.put(array.pop());
	return null;
};
flixel.util.FlxDestroyUtil.dispose = function(Bitmap) {
	if(Bitmap != null) Bitmap.dispose();
	return null;
};
flixel.util.FlxMath = function() { };
$hxClasses["flixel.util.FlxMath"] = flixel.util.FlxMath;
flixel.util.FlxMath.__name__ = ["flixel","util","FlxMath"];
flixel.util.FlxMath.roundDecimal = function(Value,Precision) {
	var mult = 1;
	var _g = 0;
	while(_g < Precision) {
		var i = _g++;
		mult *= 10;
	}
	return Math.round(Value * mult) / mult;
};
flixel.util.FlxMath.bound = function(Value,Min,Max) {
	var lowerBound;
	if(Value < Min) lowerBound = Min; else lowerBound = Value;
	if(lowerBound > Max) return Max; else return lowerBound;
};
flixel.util.FlxMath.lerp = function(Min,Max,Ratio) {
	return Min + Ratio * (Max - Min);
};
flixel.util.FlxMath.inBounds = function(Value,Min,Max) {
	return Value > Min && Value < Max;
};
flixel.util.FlxMath.isOdd = function(n) {
	if(((n | 0) & 1) != 0) return true; else return false;
};
flixel.util.FlxMath.isEven = function(n) {
	if(((n | 0) & 1) != 0) return false; else return true;
};
flixel.util.FlxMath.numericComparison = function(num1,num2) {
	if(num2 > num1) return -1; else if(num1 > num2) return 1;
	return 0;
};
flixel.util.FlxMath.pointInCoordinates = function(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
	if(pointX >= rectX && pointX <= rectX + rectWidth) {
		if(pointY >= rectY && pointY <= rectY + rectHeight) return true;
	}
	return false;
};
flixel.util.FlxMath.pointInFlxRect = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height) return true;
	return false;
};
flixel.util.FlxMath.mouseInFlxRect = function(useWorldCoords,rect) {
	if(rect == null) return true;
	if(useWorldCoords) return flixel.util.FlxMath.pointInFlxRect(Math.floor(flixel.FlxG.mouse.x),Math.floor(flixel.FlxG.mouse.y),rect); else return flixel.util.FlxMath.pointInFlxRect(flixel.FlxG.mouse.screenX,flixel.FlxG.mouse.screenY,rect);
};
flixel.util.FlxMath.pointInRectangle = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.get_right() && pointY >= rect.y && pointY <= rect.get_bottom()) return true;
	return false;
};
flixel.util.FlxMath.maxAdd = function(value,amount,max,min) {
	if(min == null) min = 0;
	value += amount;
	if(value > max) value = max; else if(value <= min) value = min;
	return value;
};
flixel.util.FlxMath.wrapValue = function(value,amount,max) {
	var diff;
	value = Std["int"](Math.abs(value));
	amount = Std["int"](Math.abs(amount));
	max = Std["int"](Math.abs(max));
	diff = (value + amount) % max;
	return diff;
};
flixel.util.FlxMath.dotProduct = function(ax,ay,bx,by) {
	return ax * bx + ay * by;
};
flixel.util.FlxMath.vectorLength = function(dx,dy) {
	return Math.sqrt(dx * dx + dy * dy);
};
flixel.util.FlxMath.getDistance = function(Point1,Point2) {
	var dx = Point1.x - Point2.x;
	var dy = Point1.y - Point2.y;
	if(Point1._weak) flixel.util.FlxPoint._pool.put(Point1);
	if(Point2._weak) flixel.util.FlxPoint._pool.put(Point2);
	return Math.sqrt(dx * dx + dy * dy);
};
flixel.util.FlxMath.distanceBetween = function(SpriteA,SpriteB) {
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel.util.FlxMath.isDistanceWithin = function(SpriteA,SpriteB,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel.util.FlxMath.distanceToPoint = function(Sprite,Target) {
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	if(Target._weak) flixel.util.FlxPoint._pool.put(Target);
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel.util.FlxMath.isDistanceToPointWithin = function(Sprite,Target,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	if(Target._weak) flixel.util.FlxPoint._pool.put(Target);
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel.util.FlxMath.distanceToMouse = function(Sprite) {
	var dx = Sprite.x + Sprite.origin.x - flixel.FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - flixel.FlxG.mouse.screenY;
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel.util.FlxMath.isDistanceToMouseWithin = function(Sprite,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - flixel.FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - flixel.FlxG.mouse.screenY;
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel.util.FlxMath.distanceToTouch = function(Sprite,Touch) {
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	return Std["int"](Math.sqrt(dx * dx + dy * dy));
};
flixel.util.FlxMath.isDistanceToTouchWithin = function(Sprite,Touch,Distance,IncludeEqual) {
	if(IncludeEqual == null) IncludeEqual = false;
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	if(IncludeEqual) return dx * dx + dy * dy <= Distance * Distance; else return dx * dx + dy * dy < Distance * Distance;
};
flixel.util.FlxMath.getDecimals = function(Number) {
	var helperArray = (Number == null?"null":"" + Number).split(".");
	var decimals = 0;
	if(helperArray.length > 1) decimals = helperArray[1].length;
	return decimals;
};
flixel.util.FlxMath.equal = function(aValueA,aValueB,aDiff) {
	if(aDiff == null) aDiff = 0.00001;
	return Math.abs(aValueA - aValueB) <= aDiff;
};
flixel.util.FlxMath.signOf = function(f) {
	if(f < 0) return -1; else return 1;
};
flixel.util.FlxMath.sameSign = function(f1,f2) {
	return (f1 < 0?-1:1) == (f2 < 0?-1:1);
};
flixel.util.FlxCallbackPoint = function(setXCallback,setYCallback,setXYCallback) {
	flixel.util.FlxPoint.call(this);
	this._setXCallback = setXCallback;
	this._setYCallback = setXYCallback;
	this._setXYCallback = setXYCallback;
	if(this._setXCallback != null) {
		if(this._setYCallback == null) this._setYCallback = setXCallback;
		if(this._setXYCallback == null) this._setXYCallback = setXCallback;
	}
};
$hxClasses["flixel.util.FlxCallbackPoint"] = flixel.util.FlxCallbackPoint;
flixel.util.FlxCallbackPoint.__name__ = ["flixel","util","FlxCallbackPoint"];
flixel.util.FlxCallbackPoint.__super__ = flixel.util.FlxPoint;
flixel.util.FlxCallbackPoint.prototype = $extend(flixel.util.FlxPoint.prototype,{
	_setXCallback: null
	,_setYCallback: null
	,_setXYCallback: null
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		flixel.util.FlxPoint.prototype.set.call(this,X,Y);
		if(this._setXYCallback != null) this._setXYCallback(this);
		return this;
	}
	,set_x: function(Value) {
		flixel.util.FlxPoint.prototype.set_x.call(this,Value);
		if(this._setXCallback != null) this._setXCallback(this);
		return Value;
	}
	,set_y: function(Value) {
		flixel.util.FlxPoint.prototype.set_y.call(this,Value);
		if(this._setYCallback != null) this._setYCallback(this);
		return Value;
	}
	,destroy: function() {
		flixel.util.FlxPoint.prototype.destroy.call(this);
		this._setXCallback = null;
		this._setYCallback = null;
		this._setXYCallback = null;
	}
	,put: function() {
	}
	,__class__: flixel.util.FlxCallbackPoint
});
flixel.util.FlxPool = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool"] = flixel.util.FlxPool;
flixel.util.FlxPool.__name__ = ["flixel","util","FlxPool"];
flixel.util.FlxPool.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel.util.FlxPool
	,__properties__: {get_length:"get_length"}
};
flixel.util.FlxPool_flixel_util_LabelValuePair = function(classObj) {
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_util_LabelValuePair"] = flixel.util.FlxPool_flixel_util_LabelValuePair;
flixel.util.FlxPool_flixel_util_LabelValuePair.__name__ = ["flixel","util","FlxPool_flixel_util_LabelValuePair"];
flixel.util.FlxPool_flixel_util_LabelValuePair.prototype = {
	_pool: null
	,_class: null
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = Type.createInstance(this._class,[]);
		return obj;
	}
	,put: function(obj) {
		if(obj != null && HxOverrides.indexOf(this._pool,obj,0) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,preAllocate: function(numObjects) {
		var _g = 0;
		while(_g < numObjects) {
			var i = _g++;
			this._pool.push(Type.createInstance(this._class,[]));
		}
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._pool.length;
	}
	,__class__: flixel.util.FlxPool_flixel_util_LabelValuePair
	,__properties__: {get_length:"get_length"}
};
flixel.util.FlxRandom = function() { };
$hxClasses["flixel.util.FlxRandom"] = flixel.util.FlxRandom;
flixel.util.FlxRandom.__name__ = ["flixel","util","FlxRandom"];
flixel.util.FlxRandom.__properties__ = {set_globalSeed:"set_globalSeed"}
flixel.util.FlxRandom.getObject_getRandom_T = function(Objects,StartIndex,EndIndex) {
	if(EndIndex == null) EndIndex = 0;
	if(StartIndex == null) StartIndex = 0;
	var selected = null;
	if(Objects.length != 0) {
		if(StartIndex < 0) StartIndex = 0;
		if(EndIndex < StartIndex) {
			StartIndex = StartIndex + EndIndex;
			EndIndex = StartIndex - EndIndex;
			StartIndex = StartIndex - EndIndex;
		}
		if(EndIndex <= 0 || EndIndex > Objects.length - 1) EndIndex = Objects.length - 1;
		selected = Objects[flixel.util.FlxRandom.intRanged(StartIndex,EndIndex)];
	}
	return selected;
};
flixel.util.FlxRandom.shuffleArray_shuffle_T = function(Objects,HowManyTimes) {
	HowManyTimes = Std["int"](Math.max(HowManyTimes,0));
	var tempObject = null;
	var _g = 0;
	while(_g < HowManyTimes) {
		var i = _g++;
		flixel.util.FlxRandom._intHelper2 = flixel.util.FlxRandom.intRanged(0,Objects.length - 1);
		flixel.util.FlxRandom._intHelper3 = flixel.util.FlxRandom.intRanged(0,Objects.length - 1);
		tempObject = Objects[flixel.util.FlxRandom._intHelper2];
		Objects[flixel.util.FlxRandom._intHelper2] = Objects[flixel.util.FlxRandom._intHelper3];
		Objects[flixel.util.FlxRandom._intHelper3] = tempObject;
	}
	return Objects;
};
flixel.util.FlxRandom.set_globalSeed = function(NewSeed) {
	if(NewSeed < 1) NewSeed = 1;
	if(NewSeed > 2147483647) NewSeed = 2147483647;
	flixel.util.FlxRandom._internalSeed = NewSeed;
	flixel.util.FlxRandom.globalSeed = NewSeed;
	return flixel.util.FlxRandom.globalSeed;
};
flixel.util.FlxRandom.resetGlobalSeed = function() {
	return flixel.util.FlxRandom.set_globalSeed(Std["int"](Math.random() * 2147483647));
};
flixel.util.FlxRandom["int"] = function() {
	return flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647;
};
flixel.util.FlxRandom["float"] = function() {
	return (flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647;
};
flixel.util.FlxRandom.intRanged = function(Min,Max,Excludes) {
	if(Max == null) Max = 2147483647;
	if(Min == null) Min = 0;
	if(Min == Max) flixel.util.FlxRandom._intHelper = Min; else {
		if(Min > Max) {
			Min = Min + Max;
			Max = Min - Max;
			Min = Min - Max;
		}
		if(Excludes == null) flixel.util.FlxRandom._intHelper = Math.floor(Min + (flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min + 1)); else do flixel.util.FlxRandom._intHelper = Math.floor(Min + (flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min + 1)); while(HxOverrides.indexOf(Excludes,flixel.util.FlxRandom._intHelper,0) >= 0);
	}
	return flixel.util.FlxRandom._intHelper;
};
flixel.util.FlxRandom.floatRanged = function(Min,Max,Excludes) {
	if(Max == null) Max = 1;
	if(Min == null) Min = 0;
	if(Min == Max) flixel.util.FlxRandom._floatHelper = Min; else {
		if(Min > Max) {
			Min = Min + Max;
			Max = Min - Max;
			Min = Min - Max;
		}
		if(Excludes == null) flixel.util.FlxRandom._floatHelper = Min + (flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min); else do flixel.util.FlxRandom._floatHelper = Min + (flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647) / 2147483647 * (Max - Min); while(HxOverrides.indexOf(Excludes,flixel.util.FlxRandom._floatHelper,0) >= 0);
	}
	return flixel.util.FlxRandom._floatHelper;
};
flixel.util.FlxRandom.chanceRoll = function(Chance) {
	if(Chance == null) Chance = 50;
	return flixel.util.FlxRandom.floatRanged(0,100) < Chance;
};
flixel.util.FlxRandom.sign = function(Chance) {
	if(Chance == null) Chance = 50;
	if(flixel.util.FlxRandom.floatRanged(0,100) < Chance) return 1; else return -1;
};
flixel.util.FlxRandom.weightedPick = function(WeightsArray) {
	flixel.util.FlxRandom._floatHelper = 0;
	var _g = 0;
	while(_g < WeightsArray.length) {
		var i = WeightsArray[_g];
		++_g;
		flixel.util.FlxRandom._floatHelper += i;
	}
	flixel.util.FlxRandom._floatHelper = flixel.util.FlxRandom.floatRanged(0,flixel.util.FlxRandom._floatHelper);
	var _g1 = 0;
	var _g2 = WeightsArray.length;
	while(_g1 < _g2) {
		var i1 = _g1++;
		if(flixel.util.FlxRandom._floatHelper < WeightsArray[i1]) {
			flixel.util.FlxRandom._intHelper = i1;
			break;
		}
		flixel.util.FlxRandom._floatHelper -= WeightsArray[i1];
	}
	return flixel.util.FlxRandom._intHelper;
};
flixel.util.FlxRandom.color = function(Min,Max,Alpha,GreyScale) {
	if(GreyScale == null) GreyScale = false;
	if(Alpha == null) Alpha = 255;
	if(Max == null) Max = 255;
	if(Min == null) Min = 0;
	if(Min < 0) Min = 0;
	if(Min > 255) Min = 255;
	if(Max < 0) Max = 0;
	if(Max > 255) Max = 255;
	if(Alpha < 0) Alpha = 0;
	if(Alpha > 255) Alpha = 255;
	if(Max < Min) {
		Min = Min + Max;
		Max = Min - Max;
		Min = Min - Max;
	}
	flixel.util.FlxRandom._red = flixel.util.FlxRandom.intRanged(Min,Max);
	if(GreyScale) flixel.util.FlxRandom._green = flixel.util.FlxRandom._red; else flixel.util.FlxRandom._green = flixel.util.FlxRandom.intRanged(Min,Max);
	if(GreyScale) flixel.util.FlxRandom._blue = flixel.util.FlxRandom._red; else flixel.util.FlxRandom._blue = flixel.util.FlxRandom.intRanged(Min,Max);
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (flixel.util.FlxRandom._red & 255) << 16 | (flixel.util.FlxRandom._green & 255) << 8 | flixel.util.FlxRandom._blue & 255;
};
flixel.util.FlxRandom.colorExt = function(RedMinimum,RedMaximum,GreenMinimum,GreenMaximum,BlueMinimum,BlueMaximum,AlphaMinimum,AlphaMaximum) {
	if(AlphaMaximum == null) AlphaMaximum = -1;
	if(AlphaMinimum == null) AlphaMinimum = -1;
	if(BlueMaximum == null) BlueMaximum = 255;
	if(BlueMinimum == null) BlueMinimum = 0;
	if(GreenMaximum == null) GreenMaximum = 255;
	if(GreenMinimum == null) GreenMinimum = 0;
	if(RedMaximum == null) RedMaximum = 255;
	if(RedMinimum == null) RedMinimum = 0;
	if(RedMinimum < 0) RedMinimum = 0;
	if(RedMinimum > 255) RedMinimum = 255;
	if(RedMaximum < 0) RedMaximum = 0;
	if(RedMaximum > 255) RedMaximum = 255;
	if(GreenMinimum < 0) GreenMinimum = 0;
	if(GreenMinimum > 255) GreenMinimum = 255;
	if(GreenMaximum < 0) GreenMaximum = 0;
	if(GreenMaximum > 255) GreenMaximum = 255;
	if(BlueMinimum < 0) BlueMinimum = 0;
	if(BlueMinimum > 255) BlueMinimum = 255;
	if(BlueMaximum < 0) BlueMaximum = 0;
	if(BlueMaximum > 255) BlueMaximum = 255;
	if(AlphaMinimum == -1) AlphaMinimum = 255;
	if(AlphaMaximum == -1) AlphaMaximum = 255;
	if(AlphaMinimum < 0) AlphaMinimum = 0;
	if(AlphaMinimum > 255) AlphaMinimum = 255;
	if(AlphaMaximum < 0) AlphaMaximum = 0;
	if(AlphaMaximum > 255) AlphaMaximum = 255;
	flixel.util.FlxRandom._red = flixel.util.FlxRandom.intRanged(RedMinimum,RedMaximum);
	flixel.util.FlxRandom._green = flixel.util.FlxRandom.intRanged(GreenMinimum,GreenMaximum);
	flixel.util.FlxRandom._blue = flixel.util.FlxRandom.intRanged(BlueMinimum,BlueMaximum);
	flixel.util.FlxRandom._alpha = flixel.util.FlxRandom.intRanged(AlphaMinimum,AlphaMaximum);
	return flixel.util.FlxColorUtil.makeFromARGB(flixel.util.FlxRandom._alpha,flixel.util.FlxRandom._red,flixel.util.FlxRandom._green,flixel.util.FlxRandom._blue);
};
flixel.util.FlxRandom.generate = function() {
	return flixel.util.FlxRandom._internalSeed = flixel.util.FlxRandom._internalSeed * 48271 % 2147483647 & 2147483647;
};
flixel.util._FlxSignal.FlxSignalHandler = function(listener,dispatchOnce) {
	this.dispatchOnce = false;
	this.listener = listener;
	this.dispatchOnce = dispatchOnce;
};
$hxClasses["flixel.util._FlxSignal.FlxSignalHandler"] = flixel.util._FlxSignal.FlxSignalHandler;
flixel.util._FlxSignal.FlxSignalHandler.__name__ = ["flixel","util","_FlxSignal","FlxSignalHandler"];
flixel.util._FlxSignal.FlxSignalHandler.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util._FlxSignal.FlxSignalHandler.prototype = {
	listener: null
	,dispatchOnce: null
	,destroy: function() {
		this.listener = null;
	}
	,__class__: flixel.util._FlxSignal.FlxSignalHandler
};
flixel.util._FlxSignal.FlxSignalBase = function() {
	this._handlers = [];
};
$hxClasses["flixel.util._FlxSignal.FlxSignalBase"] = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignalBase.__name__ = ["flixel","util","_FlxSignal","FlxSignalBase"];
flixel.util._FlxSignal.FlxSignalBase.__interfaces__ = [flixel.interfaces.IFlxSignal];
flixel.util._FlxSignal.FlxSignalBase.prototype = {
	dispatch: null
	,_handlers: null
	,add: function(listener) {
		if(listener != null) this.registerListener(listener,false);
	}
	,addOnce: function(listener) {
		if(listener != null) this.registerListener(listener,true);
	}
	,remove: function(listener) {
		if(listener != null) {
			var handler = this.getHandler(listener);
			if(handler != null) {
				HxOverrides.remove(this._handlers,handler);
				handler.destroy();
				handler = null;
			}
		}
	}
	,has: function(listener) {
		if(listener == null) return false;
		return this.getHandler(listener) != null;
	}
	,removeAll: function() {
		while(this._handlers.length > 0) {
			var handler = this._handlers.pop();
			handler.destroy();
			handler = null;
		}
	}
	,destroy: function() {
		this.removeAll();
		this._handlers = null;
	}
	,registerListener: function(listener,dispatchOnce) {
		var handler = this.getHandler(listener);
		if(handler == null) {
			handler = new flixel.util._FlxSignal.FlxSignalHandler(listener,dispatchOnce);
			this._handlers.push(handler);
			return handler;
		} else if(handler.dispatchOnce != dispatchOnce) throw "You cannot addOnce() then add() the same listener without removing the relationship first."; else return handler;
	}
	,getHandler: function(listener) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(handler.listener == listener) return handler;
		}
		return null;
	}
	,__class__: flixel.util._FlxSignal.FlxSignalBase
};
flixel.util._FlxSignal.FlxSignal0 = function() {
	flixel.util._FlxSignal.FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch0);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal0"] = flixel.util._FlxSignal.FlxSignal0;
flixel.util._FlxSignal.FlxSignal0.__name__ = ["flixel","util","_FlxSignal","FlxSignal0"];
flixel.util._FlxSignal.FlxSignal0.__super__ = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignal0.prototype = $extend(flixel.util._FlxSignal.FlxSignalBase.prototype,{
	dispatch0: function() {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener();
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel.util._FlxSignal.FlxSignal0
});
flixel.util._FlxSignal.FlxSignal1 = function() {
	flixel.util._FlxSignal.FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch1);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal1"] = flixel.util._FlxSignal.FlxSignal1;
flixel.util._FlxSignal.FlxSignal1.__name__ = ["flixel","util","_FlxSignal","FlxSignal1"];
flixel.util._FlxSignal.FlxSignal1.__super__ = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignal1.prototype = $extend(flixel.util._FlxSignal.FlxSignalBase.prototype,{
	dispatch1: function(value1) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel.util._FlxSignal.FlxSignal1
});
flixel.util._FlxSignal.FlxSignal2 = function() {
	flixel.util._FlxSignal.FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch2);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal2"] = flixel.util._FlxSignal.FlxSignal2;
flixel.util._FlxSignal.FlxSignal2.__name__ = ["flixel","util","_FlxSignal","FlxSignal2"];
flixel.util._FlxSignal.FlxSignal2.__super__ = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignal2.prototype = $extend(flixel.util._FlxSignal.FlxSignalBase.prototype,{
	dispatch2: function(value1,value2) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel.util._FlxSignal.FlxSignal2
});
flixel.util._FlxSignal.FlxSignal3 = function() {
	flixel.util._FlxSignal.FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch3);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal3"] = flixel.util._FlxSignal.FlxSignal3;
flixel.util._FlxSignal.FlxSignal3.__name__ = ["flixel","util","_FlxSignal","FlxSignal3"];
flixel.util._FlxSignal.FlxSignal3.__super__ = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignal3.prototype = $extend(flixel.util._FlxSignal.FlxSignalBase.prototype,{
	dispatch3: function(value1,value2,value3) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2,value3);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel.util._FlxSignal.FlxSignal3
});
flixel.util._FlxSignal.FlxSignal4 = function() {
	flixel.util._FlxSignal.FlxSignalBase.call(this);
	this.dispatch = $bind(this,this.dispatch4);
};
$hxClasses["flixel.util._FlxSignal.FlxSignal4"] = flixel.util._FlxSignal.FlxSignal4;
flixel.util._FlxSignal.FlxSignal4.__name__ = ["flixel","util","_FlxSignal","FlxSignal4"];
flixel.util._FlxSignal.FlxSignal4.__super__ = flixel.util._FlxSignal.FlxSignalBase;
flixel.util._FlxSignal.FlxSignal4.prototype = $extend(flixel.util._FlxSignal.FlxSignalBase.prototype,{
	dispatch4: function(value1,value2,value3,value4) {
		var _g = 0;
		var _g1 = this._handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler.listener(value1,value2,value3,value4);
			if(handler.dispatchOnce) this.remove(handler.listener);
		}
	}
	,__class__: flixel.util._FlxSignal.FlxSignal4
});
flixel.util.FlxSort = function() { };
$hxClasses["flixel.util.FlxSort"] = flixel.util.FlxSort;
flixel.util.FlxSort.__name__ = ["flixel","util","FlxSort"];
flixel.util.FlxSort.byY = function(Order,Obj1,Obj2) {
	return flixel.util.FlxSort.byValues(Order,Obj1.y,Obj2.y);
};
flixel.util.FlxSort.byValues = function(Order,Value1,Value2) {
	var result = 0;
	if(Value1 < Value2) result = Order; else if(Value1 > Value2) result = -Order;
	return result;
};
flixel.util.FlxSpriteUtil = function() { };
$hxClasses["flixel.util.FlxSpriteUtil"] = flixel.util.FlxSpriteUtil;
flixel.util.FlxSpriteUtil.__name__ = ["flixel","util","FlxSpriteUtil"];
flixel.util.FlxSpriteUtil.alphaMask = function(output,source,mask) {
	var data = null;
	if(typeof(source) == "string") data = flixel.system.FlxAssets.getBitmapData(source); else if(js.Boot.__instanceof(source,Class)) data = Type.createInstance(source,[]).bitmapData; else if(js.Boot.__instanceof(source,flash.display.BitmapData)) data = (js.Boot.__cast(source , flash.display.BitmapData)).clone(); else return null;
	var maskData = null;
	if(typeof(mask) == "string") maskData = flixel.system.FlxAssets.getBitmapData(mask); else if(js.Boot.__instanceof(mask,Class)) maskData = Type.createInstance(mask,[]).bitmapData; else if(js.Boot.__instanceof(mask,flash.display.BitmapData)) maskData = mask; else return null;
	data.copyChannel(maskData,new flash.geom.Rectangle(0,0,data.width,data.height),new flash.geom.Point(),8,8);
	output.set_pixels(data);
	return output;
};
flixel.util.FlxSpriteUtil.alphaMaskFlxSprite = function(sprite,mask,output) {
	if(sprite.dirty) {
		sprite.dirty = true;
		sprite.calcFrame();
	}
	var data = sprite.get_pixels().clone();
	data.copyChannel(mask.get_pixels(),new flash.geom.Rectangle(0,0,sprite.get_width(),sprite.get_height()),new flash.geom.Point(),8,8);
	output.set_pixels(data);
	return output;
};
flixel.util.FlxSpriteUtil.screenWrap = function(sprite,Left,Right,Top,Bottom) {
	if(Bottom == null) Bottom = true;
	if(Top == null) Top = true;
	if(Right == null) Right = true;
	if(Left == null) Left = true;
	if(Left && sprite.x + sprite.frameWidth <= 0) sprite.set_x(flixel.FlxG.width); else if(Right && sprite.x >= flixel.FlxG.width) sprite.set_x(0);
	if(Top && sprite.y + sprite.frameHeight <= 0) sprite.set_y(flixel.FlxG.height); else if(Bottom && sprite.y >= flixel.FlxG.height) sprite.set_y(0);
	return sprite;
};
flixel.util.FlxSpriteUtil.bound = function(sprite,MinX,MaxX,MinY,MaxY) {
	if(MaxY == null) MaxY = 0;
	if(MinY == null) MinY = 0;
	if(MaxX == null) MaxX = 0;
	if(MinX == null) MinX = 0;
	if(MaxX <= 0) MaxX = flixel.FlxG.width;
	if(MaxY <= 0) MaxY = flixel.FlxG.height;
	MaxX -= sprite.frameWidth;
	MaxY -= sprite.frameHeight;
	sprite.set_x(flixel.util.FlxMath.bound(sprite.x,MinX,MaxX));
	sprite.set_y(flixel.util.FlxMath.bound(sprite.y,MinY,MaxY));
	return sprite;
};
flixel.util.FlxSpriteUtil.space = function(objects,startX,startY,horizontalSpacing,verticalSpacing,spaceFromBounds) {
	if(spaceFromBounds == null) spaceFromBounds = false;
	if(verticalSpacing == null) verticalSpacing = 0;
	if(horizontalSpacing == null) horizontalSpacing = 0;
	var prevWidth = 0;
	var prevHeight = 0;
	var _g1 = 0;
	var _g = objects.length;
	while(_g1 < _g) {
		var i = _g1++;
		var object = objects[i];
		if(spaceFromBounds) {
			object.set_x(startX + prevWidth + i * horizontalSpacing);
			object.set_y(startY + prevHeight + i * verticalSpacing);
		} else {
			object.set_x(startX + i * horizontalSpacing);
			object.set_y(startY + i * verticalSpacing);
		}
	}
};
flixel.util.FlxSpriteUtil.screenCenter = function(object,xAxis,yAxis) {
	if(yAxis == null) yAxis = true;
	if(xAxis == null) xAxis = true;
	if(xAxis) object.set_x(flixel.FlxG.width / 2 - object.get_width() / 2);
	if(yAxis) object.set_y(flixel.FlxG.height / 2 - object.get_height() / 2);
	return object;
};
flixel.util.FlxSpriteUtil.drawLine = function(sprite,StartX,StartY,EndX,EndY,lineStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	flixel.util.FlxSpriteUtil.flashGfx.beginFill(0,flixel.util.FlxColorUtil.getAlphaFloat(0));
	flixel.util.FlxSpriteUtil.flashGfx.moveTo(StartX,StartY);
	flixel.util.FlxSpriteUtil.flashGfx.lineTo(EndX,EndY);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawRect = function(sprite,X,Y,Width,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	flixel.util.FlxSpriteUtil.flashGfx.drawRect(X,Y,Width,Height);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawRoundRect = function(sprite,X,Y,Width,Height,EllipseWidth,EllipseHeight,Color,lineStyle,fillStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	flixel.util.FlxSpriteUtil.flashGfx.drawRoundRect(X,Y,Width,Height,EllipseWidth,EllipseHeight);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawCircle = function(sprite,X,Y,Radius,Color,lineStyle,fillStyle,drawStyle) {
	if(Color == null) Color = -1;
	if(Radius == null) Radius = -1;
	if(Y == null) Y = -1;
	if(X == null) X = -1;
	if(X == -1 || Y == -1) {
		var midPoint = sprite.getGraphicMidpoint();
		if(X == -1) X = midPoint.x;
		if(Y == -1) Y = midPoint.y;
	}
	if(Radius < 1) {
		var minVal = Math.min(sprite.frameWidth,sprite.frameHeight);
		Radius = minVal / 2;
	}
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	flixel.util.FlxSpriteUtil.flashGfx.drawCircle(X,Y,Radius);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawEllipse = function(sprite,X,Y,Width,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	flixel.util.FlxSpriteUtil.flashGfx.drawEllipse(X,Y,Width,Height);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawTriangle = function(sprite,X,Y,Height,Color,lineStyle,fillStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	flixel.util.FlxSpriteUtil.flashGfx.moveTo(X + Height / 2,Y);
	flixel.util.FlxSpriteUtil.flashGfx.lineTo(X + Height,Height + Y);
	flixel.util.FlxSpriteUtil.flashGfx.lineTo(X,Height + Y);
	flixel.util.FlxSpriteUtil.flashGfx.lineTo(X + Height / 2,Y);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.drawPolygon = function(sprite,Vertices,Color,lineStyle,fillStyle,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
	var p = Vertices.shift();
	flixel.util.FlxSpriteUtil.flashGfx.moveTo(p.x,p.y);
	var _g = 0;
	while(_g < Vertices.length) {
		var p1 = Vertices[_g];
		++_g;
		flixel.util.FlxSpriteUtil.flashGfx.lineTo(p1.x,p1.y);
	}
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	sprite;
	return sprite;
};
flixel.util.FlxSpriteUtil.beginDraw = function(Color,lineStyle,fillStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.setLineStyle(lineStyle);
	if(fillStyle != null && fillStyle.hasFill) flixel.util.FlxSpriteUtil.flashGfx.beginFill(flixel.util.FlxColorUtil.ARGBtoRGB(fillStyle.color),flixel.util.FlxColorUtil.getAlphaFloat(fillStyle.color)); else flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255,flixel.util.FlxColorUtil.getAlphaFloat(Color));
};
flixel.util.FlxSpriteUtil.endDraw = function(sprite,drawStyle) {
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite,drawStyle);
	return sprite;
};
flixel.util.FlxSpriteUtil.updateSpriteGraphic = function(sprite,drawStyle) {
	if(drawStyle == null) drawStyle = { smoothing : false}; else if(drawStyle.smoothing == null) drawStyle.smoothing = false;
	sprite.get_pixels().draw(flixel.util.FlxSpriteUtil.flashGfxSprite,drawStyle.matrix,drawStyle.colorTransform,drawStyle.blendMode,drawStyle.clipRect,drawStyle.smoothing);
	sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	return sprite;
};
flixel.util.FlxSpriteUtil.setLineStyle = function(lineStyle) {
	if(lineStyle != null) {
		var color;
		var alpha;
		if(lineStyle.color == null) {
			color = 0;
			alpha = 1;
		} else {
			color = flixel.util.FlxColorUtil.ARGBtoRGB(lineStyle.color);
			alpha = flixel.util.FlxColorUtil.getAlphaFloat(lineStyle.color);
		}
		if(lineStyle.pixelHinting == null) lineStyle.pixelHinting = false;
		if(lineStyle.miterLimit == null) lineStyle.miterLimit = 3;
		flixel.util.FlxSpriteUtil.flashGfx.lineStyle(lineStyle.thickness,color,alpha,lineStyle.pixelHinting,lineStyle.scaleMode,lineStyle.capsStyle,lineStyle.jointStyle,lineStyle.miterLimit);
	}
};
flixel.util.FlxSpriteUtil.fill = function(sprite,Color) {
	sprite.get_pixels().fillRect(sprite.get_pixels().rect,Color);
	if(sprite.get_pixels() != sprite.framePixels) sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	return sprite;
};
flixel.util.FlxSpriteUtil.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	flixel.effects.FlxFlicker.flicker(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback);
	return Object;
};
flixel.util.FlxSpriteUtil.isFlickering = function(Object) {
	return flixel.effects.FlxFlicker.isFlickering(Object);
};
flixel.util.FlxSpriteUtil.stopFlickering = function(Object) {
	flixel.effects.FlxFlicker.stopFlickering(Object);
	return Object;
};
flixel.util.FlxSpriteUtil.fadeIn = function(sprite,Duration,ResetAlpha,OnComplete) {
	if(Duration == null) Duration = 1;
	if(ResetAlpha) sprite.set_alpha(0);
	flixel.tweens.FlxTween.color(sprite,Duration,sprite.color,sprite.color,sprite.alpha,1,OnComplete != null?{ complete : OnComplete}:null);
	return sprite;
};
flixel.util.FlxSpriteUtil.fadeOut = function(sprite,Duration,FadeToBlack,OnComplete) {
	if(Duration == null) Duration = 1;
	flixel.tweens.FlxTween.color(sprite,Duration,sprite.color,FadeToBlack?-16777216:sprite.color,sprite.alpha,0,OnComplete != null?{ complete : OnComplete}:null);
	return sprite;
};
flixel.util.FlxStringUtil = function() { };
$hxClasses["flixel.util.FlxStringUtil"] = flixel.util.FlxStringUtil;
flixel.util.FlxStringUtil.__name__ = ["flixel","util","FlxStringUtil"];
flixel.util.FlxStringUtil.formatTicks = function(StartTicks,EndTicks) {
	return Math.abs(EndTicks - StartTicks) / 1000 + "s";
};
flixel.util.FlxStringUtil.formatTime = function(Seconds,ShowMS) {
	if(ShowMS == null) ShowMS = false;
	var timeString = (Seconds / 60 | 0) + ":";
	var timeStringHelper = (Seconds | 0) % 60;
	if(timeStringHelper < 10) timeString += "0";
	timeString += timeStringHelper;
	if(ShowMS) {
		timeString += ".";
		timeStringHelper = (Seconds - (Seconds | 0)) * 100 | 0;
		if(timeStringHelper < 10) timeString += "0";
		timeString += timeStringHelper;
	}
	return timeString;
};
flixel.util.FlxStringUtil.formatArray = function(AnyArray) {
	var string = "";
	if(AnyArray != null && AnyArray.length > 0) {
		string = Std.string(AnyArray[0]);
		var i = 1;
		var l = AnyArray.length;
		while(i < l) string += ", " + Std.string(AnyArray[i++]);
	}
	return string;
};
flixel.util.FlxStringUtil.formatStringMap = function(AnyMap) {
	var string = "";
	var $it0 = AnyMap.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(key == null) string += "null"; else string += "" + key;
		string += ", ";
	}
	return string.substring(0,string.length - 2);
};
flixel.util.FlxStringUtil.formatMoney = function(Amount,ShowDecimal,EnglishStyle) {
	if(EnglishStyle == null) EnglishStyle = true;
	if(ShowDecimal == null) ShowDecimal = true;
	var helper;
	var amount = Math.floor(Amount);
	var string = "";
	var comma = "";
	var zeroes = "";
	while(amount > 0) {
		if(string.length > 0 && comma.length <= 0) {
			if(EnglishStyle) comma = ","; else comma = ".";
		}
		zeroes = "";
		helper = amount - Math.floor(amount / 1000) * 1000;
		amount = Math.floor(amount / 1000);
		if(amount > 0) {
			if(helper < 100) zeroes += "0";
			if(helper < 10) zeroes += "0";
		}
		string = zeroes + helper + comma + string;
	}
	if(ShowDecimal) {
		amount = (Amount * 100 | 0) - (Amount | 0) * 100;
		string += (EnglishStyle?".":",") + amount;
		if(amount < 10) string += "0";
	}
	return string;
};
flixel.util.FlxStringUtil.formatBytes = function(Bytes,Precision) {
	if(Precision == null) Precision = 2;
	var units = ["Bytes","kB","MB","GB","TB","PB"];
	var curUnit = 0;
	while(Bytes >= 1024 && curUnit < units.length - 1) {
		Bytes /= 1024;
		curUnit++;
	}
	return flixel.util.FlxMath.roundDecimal(Bytes,Precision) + units[curUnit];
};
flixel.util.FlxStringUtil.filterDigits = function(Input) {
	var output = new StringBuf();
	var _g1 = 0;
	var _g = Input.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = HxOverrides.cca(Input,i);
		if(c >= 48 && c <= 57) output.b += String.fromCharCode(c);
	}
	return output.b;
};
flixel.util.FlxStringUtil.htmlFormat = function(Text,Size,Color,Bold,Italic,Underlined) {
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Color == null) Color = "FFFFFF";
	if(Size == null) Size = 12;
	var prefix = "<font size='" + Size + "' color='#" + Color + "'>";
	var suffix = "</font>";
	if(Bold) {
		prefix = "<b>" + prefix;
		suffix = suffix + "</b>";
	}
	if(Italic) {
		prefix = "<i>" + prefix;
		suffix = suffix + "</i>";
	}
	if(Underlined) {
		prefix = "<u>" + prefix;
		suffix = suffix + "</u>";
	}
	return prefix + Text + suffix;
};
flixel.util.FlxStringUtil.getDomain = function(url) {
	var urlStart = url.indexOf("://") + 3;
	var urlEnd = url.indexOf("/",urlStart);
	var home = url.substring(urlStart,urlEnd);
	var LastDot = home.lastIndexOf(".") - 1;
	var domEnd = home.lastIndexOf(".",LastDot) + 1;
	home = home.substring(domEnd,home.length);
	home = home.split(":")[0];
	if(home == "") return "local"; else return home;
};
flixel.util.FlxStringUtil.sameClassName = function(Obj1,Obj2,Simple) {
	if(Simple == null) Simple = true;
	return (function($this) {
		var $r;
		var cl;
		if(js.Boot.__instanceof(Obj1,Class)) cl = Obj1; else cl = Type.getClass(Obj1);
		var s = Type.getClassName(cl);
		if(s != null) {
			s = StringTools.replace(s,"::",".");
			if(Simple) {
				var pos = s.lastIndexOf(".") + 1;
				s = HxOverrides.substr(s,pos,null);
			}
		}
		$r = s;
		return $r;
	}(this)) == (function($this) {
		var $r;
		var cl1;
		if(js.Boot.__instanceof(Obj2,Class)) cl1 = Obj2; else cl1 = Type.getClass(Obj2);
		var s1 = Type.getClassName(cl1);
		if(s1 != null) {
			s1 = StringTools.replace(s1,"::",".");
			if(Simple) {
				var pos1 = s1.lastIndexOf(".") + 1;
				s1 = HxOverrides.substr(s1,pos1,null);
			}
		}
		$r = s1;
		return $r;
	}(this));
};
flixel.util.FlxStringUtil.toIntArray = function(Data) {
	if(Data != null && Data != "") {
		var strArray = Data.split(",");
		var iArray = new Array();
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			iArray.push(Std.parseInt(str));
		}
		return iArray;
	}
	return null;
};
flixel.util.FlxStringUtil.toFloatArray = function(Data) {
	if(Data != null && Data != "") {
		var strArray = Data.split(",");
		var fArray = new Array();
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			fArray.push(Std.parseFloat(str));
		}
		return fArray;
	}
	return null;
};
flixel.util.FlxStringUtil.arrayToCSV = function(Data,Width,Invert) {
	if(Invert == null) Invert = false;
	var row = 0;
	var column;
	var csv = "";
	var Height = Data.length / Width | 0;
	var index;
	var offset = 0;
	while(row < Height) {
		column = 0;
		while(column < Width) {
			index = Data[offset];
			if(Invert) {
				if(index == 0) index = 1; else if(index == 1) index = 0;
			}
			if(column == 0) {
				if(row == 0) csv += index; else csv += "\n" + index;
			} else csv += ", " + index;
			column++;
			offset++;
		}
		row++;
	}
	return csv;
};
flixel.util.FlxStringUtil.bitmapToCSV = function(Bitmap,Invert,Scale,ColorMap) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	if(Scale < 1) Scale = 1;
	if(Scale > 1) {
		var bd = Bitmap;
		Bitmap = new flash.display.BitmapData(Bitmap.width * Scale,Bitmap.height * Scale);
		var bdW = bd.width;
		var bdH = bd.height;
		var pCol = 0;
		var _g = 0;
		while(_g < bdW) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < bdH) {
				var j = _g1++;
				pCol = bd.getPixel(i,j);
				var _g2 = 0;
				while(_g2 < Scale) {
					var k = _g2++;
					var _g3 = 0;
					while(_g3 < Scale) {
						var m = _g3++;
						Bitmap.setPixel(i * Scale + k,j * Scale + m,pCol);
					}
				}
			}
		}
	}
	var row = 0;
	var column;
	var pixel;
	var csv = "";
	var bitmapWidth = Bitmap.width;
	var bitmapHeight = Bitmap.height;
	while(row < bitmapHeight) {
		column = 0;
		while(column < bitmapWidth) {
			pixel = Bitmap.getPixel(column,row);
			if(ColorMap != null) pixel = HxOverrides.indexOf(ColorMap,pixel,0); else if(Invert && pixel > 0 || !Invert && pixel == 0) pixel = 1; else pixel = 0;
			if(column == 0) {
				if(row == 0) csv += pixel; else csv += "\n" + pixel;
			} else csv += ", " + pixel;
			column++;
		}
		row++;
	}
	return csv;
};
flixel.util.FlxStringUtil.imageToCSV = function(ImageFile,Invert,Scale) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	var tempBitmapData;
	if(typeof(ImageFile) == "string") tempBitmapData = flixel.system.FlxAssets.getBitmapData(ImageFile); else tempBitmapData = Type.createInstance(ImageFile,[]).bitmapData;
	return flixel.util.FlxStringUtil.bitmapToCSV(tempBitmapData,Invert,Scale);
};
flixel.util.FlxStringUtil.getDebugString = function(LabelValuePairs) {
	var output = "(";
	var _g = 0;
	while(_g < LabelValuePairs.length) {
		var pair = LabelValuePairs[_g];
		++_g;
		output += pair.label + ": ";
		var value = pair.value;
		if(typeof(value) == "number") value = flixel.util.FlxMath.roundDecimal(value,flixel.FlxG["debugger"].precision);
		output += Std.string(value) + " | ";
		flixel.util.LabelValuePair._pool.put(pair);
	}
	output = StringTools.trim(HxOverrides.substr(output,0,output.length - 2));
	return output + ")";
};
flixel.util.LabelValuePair = function() {
};
$hxClasses["flixel.util.LabelValuePair"] = flixel.util.LabelValuePair;
flixel.util.LabelValuePair.__name__ = ["flixel","util","LabelValuePair"];
flixel.util.LabelValuePair.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.LabelValuePair.weak = function(label,value) {
	return flixel.util.LabelValuePair._pool.get().create(label,value);
};
flixel.util.LabelValuePair.prototype = {
	label: null
	,value: null
	,create: function(label,value) {
		this.label = label;
		this.value = value;
		return this;
	}
	,put: function() {
		flixel.util.LabelValuePair._pool.put(this);
	}
	,destroy: function() {
		this.label = null;
		this.value = null;
	}
	,__class__: flixel.util.LabelValuePair
};
flixel.util.FlxVelocity = function() { };
$hxClasses["flixel.util.FlxVelocity"] = flixel.util.FlxVelocity;
flixel.util.FlxVelocity.__name__ = ["flixel","util","FlxVelocity"];
flixel.util.FlxVelocity.moveTowardsObject = function(Source,Dest,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel.util.FlxAngle.angleBetween(Source,Dest,null);
	if(MaxTime > 0) {
		var d = flixel.util.FlxMath.distanceBetween(Source,Dest);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel.util.FlxVelocity.accelerateTowardsObject = function(Source,Dest,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel.util.FlxAngle.angleBetween(Source,Dest,null);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel.util.FlxVelocity.moveTowardsMouse = function(Source,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel.util.FlxAngle.angleBetweenMouse(Source);
	if(MaxTime > 0) {
		var d = flixel.util.FlxMath.distanceToMouse(Source);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel.util.FlxVelocity.moveTowardsTouch = function(Source,Touch,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel.util.FlxAngle.angleBetweenTouch(Source,Touch,null);
	if(MaxTime > 0) {
		var d = flixel.util.FlxMath.distanceToTouch(Source,Touch);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
};
flixel.util.FlxVelocity.accelerateTowardsMouse = function(Source,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel.util.FlxAngle.angleBetweenMouse(Source);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel.util.FlxVelocity.accelerateTowardsTouch = function(Source,Touch,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel.util.FlxAngle.angleBetweenTouch(Source,Touch,null);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
};
flixel.util.FlxVelocity.moveTowardsPoint = function(Source,Target,Speed,MaxTime) {
	if(MaxTime == null) MaxTime = 0;
	if(Speed == null) Speed = 60;
	var a = flixel.util.FlxAngle.angleBetweenPoint(Source,Target);
	if(MaxTime > 0) {
		var d = flixel.util.FlxMath.distanceToPoint(Source,Target);
		Speed = d / (MaxTime / 1000) | 0;
	}
	Source.velocity.set_x(Math.cos(a) * Speed);
	Source.velocity.set_y(Math.sin(a) * Speed);
	if(Target._weak) flixel.util.FlxPoint._pool.put(Target);
};
flixel.util.FlxVelocity.accelerateTowardsPoint = function(Source,Target,Acceleration,MaxXSpeed,MaxYSpeed) {
	var a = flixel.util.FlxAngle.angleBetweenPoint(Source,Target);
	Source.velocity.set_x(0);
	Source.velocity.set_y(0);
	Source.acceleration.set_x(Math.cos(a) * Acceleration);
	Source.acceleration.set_y(Math.sin(a) * Acceleration);
	Source.maxVelocity.set_x(MaxXSpeed);
	Source.maxVelocity.set_y(MaxYSpeed);
	if(Target._weak) flixel.util.FlxPoint._pool.put(Target);
};
flixel.util.FlxVelocity.velocityFromAngle = function(Angle,Speed) {
	var a = Angle * (Math.PI / 180);
	var result = flixel.util.FlxPoint.get(null,null);
	result.set_x(Math.cos(a) * Speed);
	result.set_y(Math.sin(a) * Speed);
	return result;
};
flixel.util.FlxVelocity.velocityFromFacing = function(Parent,Speed) {
	var a = 0;
	if(Parent.facing == 1) a = 180 * (Math.PI / 180); else if(Parent.facing == 16) a = 0 * (Math.PI / 180); else if(Parent.facing == 256) a = -90 * (Math.PI / 180); else if(Parent.facing == 4096) a = 90 * (Math.PI / 180);
	var result = flixel.util.FlxPoint.get(null,null);
	result.set_x(Math.cos(a) * Speed);
	result.set_y(Math.sin(a) * Speed);
	return result;
};
flixel.util.FlxVelocity.computeVelocity = function(Velocity,Acceleration,Drag,Max) {
	if(Acceleration != 0) Velocity += Acceleration * flixel.FlxG.elapsed; else if(Drag != 0) {
		var drag = Drag * flixel.FlxG.elapsed;
		if(Velocity - drag > 0) Velocity = Velocity - drag; else if(Velocity + drag < 0) Velocity += drag; else Velocity = 0;
	}
	if(Velocity != 0 && Max != 0) {
		if(Velocity > Max) Velocity = Max; else if(Velocity < -Max) Velocity = -Max;
	}
	return Velocity;
};
flixel.util.loaders = {};
flixel.util.loaders.CachedGraphics = function(Key,Bitmap,Persist) {
	if(Persist == null) Persist = false;
	this.useCount = 0;
	this.isDumped = false;
	this.destroyOnNoUse = true;
	this.persist = false;
	this.key = Key;
	this.bitmap = Bitmap;
	this.persist = Persist;
};
$hxClasses["flixel.util.loaders.CachedGraphics"] = flixel.util.loaders.CachedGraphics;
flixel.util.loaders.CachedGraphics.__name__ = ["flixel","util","loaders","CachedGraphics"];
flixel.util.loaders.CachedGraphics.prototype = {
	key: null
	,bitmap: null
	,assetsKey: null
	,assetsClass: null
	,data: null
	,persist: null
	,destroyOnNoUse: null
	,isDumped: null
	,tilesheet: null
	,useCount: null
	,_tilesheet: null
	,dump: function() {
	}
	,undump: function() {
	}
	,onContext: function() {
		if(this.isDumped) {
			this.undump();
			this.dump();
		}
	}
	,getRegionForFrame: function(FrameName) {
		var region = new flixel.util.loaders.TextureRegion(this);
		var frame = this.get_tilesheet().getFrame(FrameName);
		if(frame != null) {
			region.region.startX = frame.frame.x | 0;
			region.region.startY = frame.frame.y | 0;
			region.region.width = frame.frame.width | 0;
			region.region.height = frame.frame.height | 0;
		}
		return region;
	}
	,destroy: function() {
		this.bitmap = flixel.util.FlxDestroyUtil.dispose(this.bitmap);
		this.data = flixel.util.FlxDestroyUtil.destroy(this.data);
		this._tilesheet = flixel.util.FlxDestroyUtil.destroy(this._tilesheet);
		this.key = null;
		this.assetsKey = null;
		this.assetsClass = null;
	}
	,get_tilesheet: function() {
		if(this._tilesheet == null) {
			if(this.isDumped) this.onContext();
			this._tilesheet = new flixel.system.layer.TileSheetData(this.bitmap);
		}
		return this._tilesheet;
	}
	,getBitmapFromSystem: function() {
		var newBitmap = null;
		if(this.assetsClass != null) newBitmap = Type.createInstance(js.Boot.__cast(this.assetsClass , Class),[]); else if(this.assetsKey != null) newBitmap = openfl.Assets.getBitmapData(this.assetsKey,false);
		return newBitmap;
	}
	,get_canBeDumped: function() {
		return this.assetsClass != null || this.assetsKey != null;
	}
	,set_useCount: function(Value) {
		if(Value <= 0 && this.destroyOnNoUse && !this.persist) flixel.FlxG.bitmap.remove(this.key);
		return this.useCount = Value;
	}
	,set_destroyOnNoUse: function(Value) {
		if(Value && this.useCount == 0 && this.key != null && !this.persist) flixel.FlxG.bitmap.remove(this.key);
		return this.destroyOnNoUse = Value;
	}
	,__class__: flixel.util.loaders.CachedGraphics
	,__properties__: {set_useCount:"set_useCount",get_tilesheet:"get_tilesheet",get_canBeDumped:"get_canBeDumped",set_destroyOnNoUse:"set_destroyOnNoUse"}
};
flixel.util.loaders.TextureAtlasFrame = function() {
	this.additionalAngle = 0;
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
};
$hxClasses["flixel.util.loaders.TextureAtlasFrame"] = flixel.util.loaders.TextureAtlasFrame;
flixel.util.loaders.TextureAtlasFrame.__name__ = ["flixel","util","loaders","TextureAtlasFrame"];
flixel.util.loaders.TextureAtlasFrame.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.loaders.TextureAtlasFrame.prototype = {
	name: null
	,frame: null
	,rotated: null
	,trimmed: null
	,sourceSize: null
	,offset: null
	,additionalAngle: null
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
	}
	,__class__: flixel.util.loaders.TextureAtlasFrame
};
flixel.util.loaders.TexturePackerData = function(Description,AssetName) {
	this.assetName = AssetName;
	this.description = Description;
	this.frames = new Array();
	this.parseData();
};
$hxClasses["flixel.util.loaders.TexturePackerData"] = flixel.util.loaders.TexturePackerData;
flixel.util.loaders.TexturePackerData.__name__ = ["flixel","util","loaders","TexturePackerData"];
flixel.util.loaders.TexturePackerData.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.loaders.TexturePackerData.prototype = {
	frames: null
	,assetName: null
	,description: null
	,asset: null
	,parseData: function() {
		if(this.frames.length != 0) return;
		if(this.assetName == null || this.description == null) return;
		this.asset = flixel.FlxG.bitmap.addWithSpaces(this.assetName,0,0,1,1,false,null).bitmap;
		var data = JSON.parse(openfl.Assets.getText(this.description));
		var _g = 0;
		var _g1 = Lambda.array(data.frames);
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			var texFrame = new flixel.util.loaders.TextureAtlasFrame();
			texFrame.trimmed = frame.trimmed;
			texFrame.rotated = frame.rotated;
			texFrame.name = frame.filename;
			texFrame.sourceSize = flixel.util.FlxPoint.get(frame.sourceSize.w,frame.sourceSize.h);
			texFrame.offset = flixel.util.FlxPoint.get(0,0);
			texFrame.offset.set(frame.spriteSourceSize.x,frame.spriteSourceSize.y);
			if(frame.rotated) {
				texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.h,frame.frame.w);
				texFrame.additionalAngle = -90;
			} else {
				texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.w,frame.frame.h);
				texFrame.additionalAngle = 0;
			}
			this.frames.push(texFrame);
		}
	}
	,destroy: function() {
		this.frames = flixel.util.FlxDestroyUtil.destroyArray(this.frames);
		this.assetName = null;
		this.description = null;
		this.asset = null;
	}
	,__class__: flixel.util.loaders.TexturePackerData
};
flixel.util.loaders.TextureRegion = function(data,startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.data = data;
	if(width <= 0) width = data.bitmap.width;
	if(height <= 0) height = data.bitmap.height;
	this.region = new flixel.system.layer.Region(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height);
};
$hxClasses["flixel.util.loaders.TextureRegion"] = flixel.util.loaders.TextureRegion;
flixel.util.loaders.TextureRegion.__name__ = ["flixel","util","loaders","TextureRegion"];
flixel.util.loaders.TextureRegion.__interfaces__ = [flixel.interfaces.IFlxDestroyable];
flixel.util.loaders.TextureRegion.prototype = {
	data: null
	,region: null
	,clone: function() {
		return new flixel.util.loaders.TextureRegion(this.data,this.region.startX,this.region.startY,this.region.tileWidth,this.region.tileHeight,this.region.spacingX,this.region.spacingY,this.region.width,this.region.height);
	}
	,destroy: function() {
		this.data = null;
		this.region = null;
	}
	,__class__: flixel.util.loaders.TextureRegion
};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.crypto.Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
};
haxe.Serializer.prototype = {
	buf: null
	,cache: null
	,shash: null
	,scount: null
	,useCache: null
	,useEnumIndex: null
	,toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe.ds.StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe.io.Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe.Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,__class__: haxe.Serializer
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.prototype = {
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0;
	var _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = ["haxe","crypto","Base64"];
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe.crypto.BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe.io.Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	dir: null
	,file: null
	,ext: null
	,backslash: null
	,toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
js.Browser = function() { };
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
js.Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
};
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	bitmapData: null
	,enabled: null
	,font: null
	,sound: null
	,clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 118, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 124, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 130, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 167, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 173, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 179, className : "openfl.Assets", methodName : "getBytes"});
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 230, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 236, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 242, className : "openfl.Assets", methodName : "getFont"});
	return null;
};
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
};
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 292, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 298, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 304, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
};
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 361, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 367, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 373, className : "openfl.Assets", methodName : "getMusic"});
	return null;
};
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 408, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 414, className : "openfl.Assets", methodName : "getPath"});
	return null;
};
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 471, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 477, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 483, className : "openfl.Assets", methodName : "getSound"});
	return null;
};
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 520, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 526, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 532, className : "openfl.Assets", methodName : "getText"});
	return null;
};
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData.__sourceImage != null || bitmapData.__sourceCanvas != null;
	return true;
};
openfl.Assets.isValidSound = function(sound) {
	return true;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData1) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				handler(bitmapData1);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 697, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 703, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
};
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 733, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 739, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
};
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 790, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 796, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
};
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 826, className : "openfl.Assets", methodName : "loadLibrary"});
};
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 881, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 887, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
};
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 917, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 923, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
};
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 980, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 986, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
};
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1016, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1022, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
};
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName;
		var pos = key.indexOf(":") + 1;
		symbolName = HxOverrides.substr(key,pos,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	id: null
	,path: null
	,type: null
	,__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
flash.ui.Multitouch.maxTouchPoints = 2;
flash.ui.Multitouch.supportedGestures = [];
flash.ui.Multitouch.supportsGestureEvents = false;
haxe.Resource.content = [{ name : "__ASSET__:bitmap_flixel_tile_GraphicAutoAlt", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQUlDQU1BQUFBR0F3ZE1BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBd0JRVEZSRkFBQUFYbDVlQUFBQUF3TURCQVFFQlFVRkJnWUdCd2NIQ0FnSUNRa0pDZ29LQ3dzTERBd01EUTBORGc0T0R3OFBFQkFRRVJFUkVoSVNFeE1URkJRVUZSVVZGaFlXRnhjWEdCZ1lHUmtaR2hvYUd4c2JIQndjSFIwZEhoNGVIeDhmSUNBZ0lTRWhJaUlpSXlNakpDUWtKU1VsSmlZbUp5Y25LQ2dvS1NrcEtpb3FLeXNyTEN3c0xTMHRMaTR1THk4dk1EQXdNVEV4TWpJeU16TXpORFEwTlRVMU5qWTJOemMzT0RnNE9UazVPam82T3pzN1BEdzhQVDA5UGo0K1B6OC9RRUJBUVVGQlFrSkNRME5EUkVSRVJVVkZSa1pHUjBkSFNFaElTVWxKU2twS1MwdExURXhNVFUxTlRrNU9UMDlQVUZCUVVWRlJVbEpTVTFOVFZGUlVWVlZWVmxaV1YxZFhXRmhZV1ZsWldscGFXMXRiWEZ4Y1hWMWRYbDVlWDE5ZllHQmdZV0ZoWW1KaVkyTmpaR1JrWldWbFptWm1aMmRuYUdob2FXbHBhbXBxYTJ0cmJHeHNiVzF0Ym01dWIyOXZjSEJ3Y1hGeGNuSnljM056ZEhSMGRYVjFkbloyZDNkM2VIaDRlWGw1ZW5wNmUzdDdmSHg4ZlgxOWZuNStmMzkvZ0lDQWdZR0Jnb0tDZzRPRGhJU0VoWVdGaG9hR2g0ZUhpSWlJaVltSmlvcUtpNHVMakl5TWpZMk5qbzZPajQrUGtKQ1FrWkdSa3BLU2s1T1RsSlNVbFpXVmxwYVdsNWVYbUppWW1abVptcHFhbTV1Ym5KeWNuWjJkbnA2ZW41K2ZvS0Nnb2FHaG9xS2lvNk9qcEtTa3BhV2xwcWFtcDZlbnFLaW9xYW1wcXFxcXE2dXJyS3lzcmEydHJxNnVyNit2c0xDd3NiR3hzckt5czdPenRMUzB0YlcxdHJhMnQ3ZTN1TGk0dWJtNXVycTZ1N3U3dkx5OHZiMjl2cjYrdjcrL3dNREF3Y0hCd3NMQ3c4UER4TVRFeGNYRnhzYkd4OGZIeU1qSXljbkp5c3JLeTh2THpNek16YzNOenM3T3o4L1AwTkRRMGRIUjB0TFMwOVBUMU5UVTFkWFYxdGJXMTlmWDJOalkyZG5aMnRyYTI5dmIzTnpjM2QzZDN0N2UzOS9mNE9EZzRlSGg0dUxpNCtQajVPVGs1ZVhsNXVibTUrZm42T2pvNmVucDZ1cnE2K3ZyN096czdlM3Q3dTd1NysvdjhQRHc4Zkh4OHZMeTgvUHo5UFQwOWZYMTl2YjI5L2YzK1BqNCtmbjUrdnI2Ky92Ny9QejgvZjM5L3Y3Ky8vLy9Ra3FmSXdBQUFBTjBVazVULy84QTE4b05RUUFBQUhaSlJFRlVlTnJzVTBrU3dDQUlTeGovLzJUcFFSaGJOZHBiTC9VQ1lRa09Dd3dBZ0JBQU9NZ0ViTkt3OG0rTk4vN1pYMnF6MVFNRlBaU0loNHRLbWU5UFhKVy9OTFdYWFJPNzBQZVJIV3Qrdzhmdi8wREorWENhRGw5TWZGNWRIblpDdGNER1RGdldvRDdUYlVjcGIrd0NBQUQvL3dNQXl5QVNLMkFhNkV3QUFBQUFTVVZPUks1Q1lJST0"},{ name : "__ASSET__:bitmap_flixel_system_GraphicLogo", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQmtDQVlBQUFCdzRwVlVBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFCTTFKUkVGVWVOcnMyOCtMRzJVWXdQSFhabTZDdVhrMGRFMFRzVCtTbVQxb2Q1Rmsrd3ZwbXRHYmlFaE9YbFZRTDE0Q25rdjNYRVFESG9SQ1llbXBiS21kcE10U3dVejIxUE1jUlBCU2dwQmxZVWQ0UEd5em1VMDJ1L01tNzQvbm1mZDk0ZmtIOHVHYk4rL2tIUVpkRDVSTXgydkRqbHRnUkJjczNjanZsUnJ0dmJJUE1vY3BBK2w2QUIxM0FGMnZCYjNsUEMwSXZ6VXMrUVBaR09wQkNNR29odEFMY2d5bTJzU0dNU3o1emIyeUg2bUV3QUV5aG9rd3dPaUV3QVdTaEhubTFsUkQ3QmNidGIyU3Y2c1RBaWZJR0NaUUFiTmZiTlNHNVVhQUFRSTNTQkptMjYySS8ycjZxSUlOZ2dhSTREUE0vdm5iQlJWbmlleURMQWhEQVlJbUNPY1pSdGRad2l5UUZEQVVJZWlEekRoY0RrdCtreUpFZGtCZXpSL0JsYWh6NjJaRUZTSlRJTHRCQmZKYmIwTitzd2pQcjkyMElCZ3cyTllTc0swbDhpZ3NTeGhaUUdGWnc2Q093cktJa1p4N1gzeGdRV1RPNXRQTHFURW9vcEFDYVQrOXhBVkJFWVdaZ0VFSmhabUNRUVdGbVlSQkFZV1pob0VkaFptSWdSbUZtWXFCRllWQnh3MU14UmpORDkrOGp3amttVnN6R1dNMG4vL280UUJoakRIb2VHMlRNVENoSElMMGx2T3YvaEkxRmdNSlNqVCtIN3BiL1ZvSHhzYnZGOUZnNkVZWmx2emoxMmtQNzlpcXcyZytlUWNkaGthVWFQcmFqTUlOSGpPR0RwU3BPc2FWZUpzV1F6bEtOUHR5Mlk1YmtMbkJVOEpRaFRLemp2RUc3N1VzeGpUSzM5VjF0WFVjZ1J6K0RJNHN4dkc1L1BPN3dsSE9yR084d1ZjL3RoaVNVVXIrTHQrTGp3S2VjMlVKUXpUS2ZySEI5MUlTYkxzVml5RUhaVmh1QlBPOUh0ejFOaXlHZUJUdU9pWTIrSUhGRUljeWR4Mko1MXhOaXlFT1plNDZKamI0M2RNZ0JoMFhLbzh2R0lmQmk3SndIV21lYzVtT3dZTWlwSTdFYzY2MnhUaDkzdnF0UFBPU3Q3QTZabTN3Rm9QdjVyM1FPaWFmYzFrTVBoVGhkU1RYeTA0MXNoaDhLRkxxR0sxTHplZEI3bUhGZnVncFVSNnRYNWRYeDlVMXFLMnVBVlErZlFFV0pjVTh1UTI1UC8rUkI3SmFoMkIxRGNDaXBNVjRDVTRZZzlPUGE5THFTSTVGU1lFUnh1RDA0a0JxSGNrcGZ2WEFBcHlHTVJxUmxaeFVoMFhod0JCZHlhdzZMRXBLREpHVm5GV0hSVW1KSWFxU05IVVlqWklXUTBRbFBIVVlpY0tMc1dnbHZIV1loUEphOENVL3hpS1Z6RnRIY3M1Ly8wczJNVHJmemdleFNDV0wxSkdjTis5OFp6RVdyVVJFSFZsRUVZWVJ4cERyeFp2SzY4Z1Npa2lNMGJBK0ZKVFhrUVVVR1JoT0dFTXVQR2hycVlNeWlpeU1WSlhJcklNaWlteU1NeXVSWFFjbEZCVVlwMWFpcW83a3ZQSFRaOFpqekt4RVpSMmplZS9EZitIMVg5ZU54aml4RWgxMVlFVFJoVEZWaVk0NnNLSG94RGlxUkhjZFdGQXdZQnlCNks1RE53b1dEQ2VNQVUwZHVsQXdZVGhoREtqcVVJMkNEZU1RQkNIR2FKWS8rVXZhblMrTUdPaEJaRjNFdzRwQkFrUTB5cm50dTJneHlJQ0lRam0zY3g4MUJpbVFSVkVvWUpBRG1SZUZDZ1pKRUY0VVNoaGtRZEtpVU1NZ0RYTFdSVHlLR09SQlpxRlF4Y2dFeUNRS1pZek1nSXhRcUdOa0JtU2xEdTJWYTFCZ2ZTamt3b08yQmRFMWRRaXVyc0gwL2RnK1ZKeGVIRmdRM1JBVHkrbkhOV293ak5oWFU3UmFoeWJ2TFg1S01DekxFSk1yMS91dm1Rc1BJZ3N5LzFmVFlLVU9MZEh2MjJPR1laZ2hsbTlBbmtsY0dHRVlRb3dOMlJESFZnL3lUaGkzY21FOHNDQW5uU1YwTFNRd0RNTlBXSzBReUdBWTlyT0V0cVhwMVAvL0FOd29yczhWOE1oV0FBQUFBRWxGVGtTdVFtQ0M"},{ name : "__ASSET__:bitmap_flixel_system_debug__Window_GraphicCloseButton", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFkZ0FBQUhZQlRuc21DQUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFCL1NVUkJWQmlWVFkweENzSlFFQVhIYnlTZXdNdWxUV2R2YTZPbGxXSnBDQ0syaWsxT1krY3RRc1lpcS9rREM4dnM3bHZVU3UzVXBVcFdPN1ZDM1RqU3FXVU1EK0dldisxdGlKZDZ5dm95ajl3NzhWQVhLb21SR2JCaW9nY0dBTlNrTm5GNVY0L1IzOVNFMm9hNHF2TjRkdzUzS1lBMzBBRDFQeGJXUUFGOHZwYVlyTldBYU5WMEFBQUFBRWxGVGtTdVFtQ0M"},{ name : "__ASSET__:bitmap_flixel_system_debug__Window_GraphicWindowHandle", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQUZCSlJFRlVlTnFNandFS0FDQUlBeFgyeWg3b055MmpRa3lwUWJUMGRFU3FTblllRXZoWE5zRE1ZblhlelZHNHdBME5OVlJaSGpLUEgyaDYvNWwxVzBPaXgzTlRFbDFDSjdxS0MvNExraTdBQUQ1WWZydllMZlJQQUFBQUFFbEZUa1N1UW1DQw"},{ name : "__ASSET__:bitmap_flixel_ui__FlxTypedButton_GraphicButton", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZBQUFBQThDQVlBQUFEeEp6Mk1BQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBQWFkRVZZZEZOdlpuUjNZWEpsQUZCaGFXNTBMazVGVkNCMk15NDFMakV3TVBSeW9RQUFBWFpKUkVGVWVGN3RtMEVLZzBBTVJlZGVYc3M3ZUE0RjcrRUozSGdUdHk3U3BraWhNbU5tU0FjY2VFSUs3Y0xGNC84NHpUZEJSTUw3MGcrcWtNSEpMc2k2cmpKTkUxWEFRSm1kb2d2Uzk3MTBYWWNDTXhXb3JKVFpEMEQ5b3RlKzc5UU5BMldrcktJQWwyVVJ5bVlBUUtkUUFBaEEyMlkxV3hFS1JJRW9zT21uUFJiR3dsZ1lDOWM4Smp6OTN2VEFXajF3R0FhaGJBWlJCVExPeWg4b1I4ZForaU9WeitBN3ptS2tuNis4YSt6eFlRZEFKMENsU2laU25nZVJpV1RtSDdHMDhqWVRPWTVEcURTRDIweGsyemFoYkFiSmZ5TEFzK0VwSXdBNm5RWkFBT1paclZaTFFvRW9FQVUyZlZ6Q3dsZ1lDMlBoV2tlRUZ1NmI3SUh6UEF0bE15QVRjWXl5RkI2WnlCL3lIeklScHdyUGQ4ckpSRHo3TWV5SkZPeUZYUGRveUVRY0ZrNW1JdG9ZS1p0QjhodzRqcU5RTmdNQU9vVUNRQURhTnF2WmlsQWdDa1NCVFQvdHNUQVd4c0pZdU9ZeDRlbjNwZ2ZTQXgvWUE5a1R5WC9aUERyT1lveGxqN0d1akQ3VGJOWWM4cFVYMnhONUFRa0dlQlBxNStCakFBQUFBRWxGVGtTdVFtQ0M"},{ name : "__ASSET__:bitmap_flixel_input_mouse__FlxMouse_GraphicCursor", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQWdDQVlBQUFBSVhyZzRBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQW1SSlJFRlVlTnEwbHM5ckUwRVV4Nzg3MllTZ0psVFNTaVdwVnZyRElxaEZVSUtnK0NlSUlncWVGRS9pVFJDOHBMUVhqeUwwNGc5Q29tWFRKSVcwT1ZVRU1UZEJSSWs1VzZXdGtLSlNiR25EcHNuNlprMlczVFFicytua3dkdVpuVm0rbjMwenczc2pCVUxCQ0lBcGRNbGMrL3orZDlScTVMbHVBT1JhTzhrZkR5ZW5XMGJ5YU9LZVl3RGpEMDNUZEFnSlJFUkhJTkVlYUpWS0ZZeEprQ1NKajAzWVJYTC85bVZib2Q2QmtIMEV1bWxTdlNjMEVnTnc1ZXAxakE2UENJY1lnQU0rUDU0OG5zYXh3VUdoRUdaKzJTaFZNSjlLNCtqQUVXRVFDMkM3cEVKakhpeWswd2dGZzBJZ3JIRmdhYm1vaTJkbWt6amMzNzlueUM3QW44MHQvRjdmMFBlQ1F3NzE5UmtRT29xUlBRTzRmVjBwNnUzdzBCQXl5U1FDZ1VESGtLYUE0czkxYkc2VjlQN3hrVkU5a29NOVBSMUJtTjNFVWkwS2JpZkd4akNuS1BEN2ZJNGh0b0RWNGkrbzVSM2ovZlRKVXdSSk9JYllBbmgrK3I2NlpoazdNejRPSlI2SDErdHRHOEphVFg3N3NZWkt0V29aQzU4OWg5U3JtYlloTFFHcXVxTXZWYU9kRDRjeEU0M0M0M2JEVkU4aWpnR05tMjIyU3hjdUl2Nzh4WDhoY2l2eFdTV0dmUDRUYmV4K0VtcitLVjhxdFZ3MlEyQ3U4YmFBVk9JbEZ1YlQvejZTWFdBdTF1N1J0MENhQXJJa25Na2t3UXVjTE11UW1PUTBReGlRWFlEWGkxa2thR2tZWTVEZExqNzBsdnhCaDhuVVl3SGtjbThRaXo0MUw4a2lMM1pVbzdjN3Jja0c0T09IOXlnVThuQVRzMWI4cytUWFNGd1ZVbkMrRkQ3VFh4czNpemtSNGtZRUx1c0o0ZUkzbTRuYkxZT1RWS0dRM3hEeDU1YUxWNjBmSTcvRDg1ekltMTA5Z21ma3QwU0wxMi9YdmRUZTdkYjEvYThBQXdDWlVNUU16UW9keXdBQUFBQkpSVTVFcmtKZ2dnPT0"},{ name : "__ASSET__:bitmap_flixel_tile_GraphicAuto", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQUlDQU1BQUFBR0F3ZE1BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBd0JRVEZSRkFBQUFYbDVlQUFBQUF3TURCQVFFQlFVRkJnWUdCd2NIQ0FnSUNRa0pDZ29LQ3dzTERBd01EUTBORGc0T0R3OFBFQkFRRVJFUkVoSVNFeE1URkJRVUZSVVZGaFlXRnhjWEdCZ1lHUmtaR2hvYUd4c2JIQndjSFIwZEhoNGVIeDhmSUNBZ0lTRWhJaUlpSXlNakpDUWtKU1VsSmlZbUp5Y25LQ2dvS1NrcEtpb3FLeXNyTEN3c0xTMHRMaTR1THk4dk1EQXdNVEV4TWpJeU16TXpORFEwTlRVMU5qWTJOemMzT0RnNE9UazVPam82T3pzN1BEdzhQVDA5UGo0K1B6OC9RRUJBUVVGQlFrSkNRME5EUkVSRVJVVkZSa1pHUjBkSFNFaElTVWxKU2twS1MwdExURXhNVFUxTlRrNU9UMDlQVUZCUVVWRlJVbEpTVTFOVFZGUlVWVlZWVmxaV1YxZFhXRmhZV1ZsWldscGFXMXRiWEZ4Y1hWMWRYbDVlWDE5ZllHQmdZV0ZoWW1KaVkyTmpaR1JrWldWbFptWm1aMmRuYUdob2FXbHBhbXBxYTJ0cmJHeHNiVzF0Ym01dWIyOXZjSEJ3Y1hGeGNuSnljM056ZEhSMGRYVjFkbloyZDNkM2VIaDRlWGw1ZW5wNmUzdDdmSHg4ZlgxOWZuNStmMzkvZ0lDQWdZR0Jnb0tDZzRPRGhJU0VoWVdGaG9hR2g0ZUhpSWlJaVltSmlvcUtpNHVMakl5TWpZMk5qbzZPajQrUGtKQ1FrWkdSa3BLU2s1T1RsSlNVbFpXVmxwYVdsNWVYbUppWW1abVptcHFhbTV1Ym5KeWNuWjJkbnA2ZW41K2ZvS0Nnb2FHaG9xS2lvNk9qcEtTa3BhV2xwcWFtcDZlbnFLaW9xYW1wcXFxcXE2dXJyS3lzcmEydHJxNnVyNit2c0xDd3NiR3hzckt5czdPenRMUzB0YlcxdHJhMnQ3ZTN1TGk0dWJtNXVycTZ1N3U3dkx5OHZiMjl2cjYrdjcrL3dNREF3Y0hCd3NMQ3c4UER4TVRFeGNYRnhzYkd4OGZIeU1qSXljbkp5c3JLeTh2THpNek16YzNOenM3T3o4L1AwTkRRMGRIUjB0TFMwOVBUMU5UVTFkWFYxdGJXMTlmWDJOalkyZG5aMnRyYTI5dmIzTnpjM2QzZDN0N2UzOS9mNE9EZzRlSGg0dUxpNCtQajVPVGs1ZVhsNXVibTUrZm42T2pvNmVucDZ1cnE2K3ZyN096czdlM3Q3dTd1NysvdjhQRHc4Zkh4OHZMeTgvUHo5UFQwOWZYMTl2YjI5L2YzK1BqNCtmbjUrdnI2Ky92Ny9QejgvZjM5L3Y3Ky8vLy9Ra3FmSXdBQUFBTjBVazVULy84QTE4b05RUUFBQUcxSlJFRlVlTnJzazdFU3dDQUlRMS84LzQ5MlVEeUJWdHk2MUNVWEVnVTVvQUZBUXdCaWNnYUhTc2ZaZlBCT2x5UUpTekM1bHJmUWpWb0MrVUNwYncvdlNNQ0RuczFQdnp6b2Z3SGZGMkJENWxCKzJONExTUFp3eWdKc3pRS0dkYXM2UUxwMjI0RU9BQUQvL3dNQTlQY0E4YU9wY3lVQUFBQUFTVVZPUks1Q1lJST0"},{ name : "__ASSET__:bitmap_flixel__FlxSprite_GraphicDefault", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQkdkQlRVRUFBTEdPZlB0Umt3QUFBQ0JqU0ZKTkFBQ0hEd0FBakE4QUFQMVNBQUNCUUFBQWZYa0FBT21MQUFBODVRQUFHY3h6UElWM0FBQUtPV2xEUTFCUWFHOTBiM05vYjNBZ1NVTkRJSEJ5YjJacGJHVUFBRWpIblpaM1ZGVFhGb2ZQdlhkNm9jMHdBbEtHM3J2QUFOSjdrMTVGWVpnWllDZ0REak0wc1NHaUFoRkZSSm9pU0ZERWdORlFKRlpFc1JBVVZMQUhKQWdvTVJoRlZDeHZSdGFMcnF5ODkvTHkrK09zYisyejk3bjc3TDNQV2hjQWtxY3ZsNWNHU3dHUXloUHdnenljNlJHUlVYVHNBSUFCSG1DQUtRQk1Wa2E2WDdCN0NCREp5ODJGbmlGeUFsOEVBZkI2V0x3Q2NOUFFNNEJPQi8rZnBGbnBmSUhvbUFBUm03TTVHU3dSRjRnNEpVdVFMcmJQaXBnYWx5eG1HQ1ZtdmloQkVjdUpPV0dSRFQ3N0xMS2ptTm1wUExhSXhUbW5zMVBaWXU0VjhiWk1JVWZFaUsrSUN6TzVuQ3dSM3hLeFJvb3dsU3ZpTitMWVZBNHpBd0FVU1d3WGNGaUpJallSTVlrZkV1UWk0dVVBNEVnSlgzSGNWeXpnWkF2RWwzSkpTOC9oY3hNU0JYUWRsaTdkMU5xYVFmZmtaS1Z3QkFMREFDWXJtY2xuMDEzU1V0T1p2QndBRnUvOFdUTGkydEpGUmJZMHRiYTBORFF6TXYycVVQOTE4MjlLM050RmVobjR1V2NRcmYrTDdhLzgwaG9BWU15SmFyUHppeTJ1Q29ET0xRREkzZnRpMHpnQWdLU29ieDNYdjdvUFRUd3ZpUUpCdW8yeGNWWldsaEdYd3pJU0YvUVAvVStIdjZHdnZtY2tQdTZQOHRCZE9mRk1ZWXFBTHE0Ykt5MGxUY2luWjZReldSeTY0WitIK0I4SC9uVWVCa0djZUE2Znd4TkZoSW1tak10TEVMV2J4K1lLdUdrOE9wZjNuNXI0RDhQK3BNVzVGb25TK0JGUVk0eUExSFVxUUg3dEJ5Z0tFU0RSKzhWZC82TnZ2dmd3SUg1NTRTcVRpM1AvN3pmOVo4R2w0aVdEbS9BNXppVW9oTTRTOGpNWDk4VFBFcUFCQVVnQ0twQUh5a0FkNkFCRFlBYXNnQzF3Qkc3QUcvaURFQkFKVmdNV1NBU3BnQSt5UUI3WUJBcEJNZGdKOW9CcVVBY2FRVE5vQmNkQkp6Z0Z6b05MNEJxNEFXNkQrMkFVVElCbllCYThCZ3NRQkdFaE1rU0I1Q0VWU0JQU2g4d2dCbVFQdVVHK1VCQVVDY1ZDQ1JBUEVrSjUwR2FvR0NxRHFxRjZxQm42SGpvSm5ZZXVRSVBRWFdnTW1vWitoOTdCQ0V5Q3FiQVNyQVVid3d6WUNmYUJRK0JWY0FLOEJzNkZDK0FkY0NYY0FCK0ZPK0R6OERYNE5qd0tQNFBuRUlBUUVScWlpaGdpRE1RRjhVZWlrSGlFajZ4SGlwQUtwQUZwUmJxUlB1UW1Nb3JNSUc5UkdCUUZSVWNab214Um5xaFFGQXUxQnJVZVZZS3FSaDFHZGFCNlVUZFJZNmhaMUVjMEdhMkkxa2Zib0wzUUVlZ0VkQmE2RUYyQmJrSzNveStpYjZNbjBLOHhHQXdObzQyeHduaGlJakZKbUxXWUVzdytUQnZtSEdZUU00Nlp3Mkt4OGxoOXJCM1dIOHZFQ3JDRjJDcnNVZXhaN0JCMkF2c0dSOFNwNE14dzdyZ29IQStYajZ2QUhjR2R3UTNoSm5FTGVDbThKdDRHNzQ5bjQzUHdwZmhHZkRmK09uNEN2MENRSm1nVDdBZ2hoQ1RDSmtJbG9aVndrZkNBOEpKSUpLb1JyWW1CUkM1eEk3R1NlSXg0bVRoR2ZFdVNJZW1SWEVqUkpDRnBCK2tRNlJ6cEx1a2xtVXpXSWp1U284Z0M4ZzV5TS9rQytSSDVqUVJGd2tqQ1M0SXRzVUdpUnFKRFlraml1U1JlVWxQU1NYSzFaSzVraGVRSnlldVNNMUo0S1MwcEZ5bW0xSHFwR3FtVFVpTlNjOUlVYVZOcGYrbFU2UkxwSTlKWHBLZGtzREphTW00eWJKa0NtWU15RjJUR0tRaEZuZUpDWVZFMlV4b3BGeWtUVkF4Vm0rcEZUYUlXVTcrakRsQm5aV1ZrbDhtR3lXYkwxc2llbGgybElUUXRtaGN0aFZaS08wNGJwcjFib3JURWFRbG55ZllsclV1R2xzekxMWlZ6bE9QSUZjbTF5ZDJXZXlkUGwzZVRUNWJmSmQ4cC8xQUJwYUNuRUtpUXBiQmY0YUxDekZMcVV0dWxyS1ZGUzQ4dnZhY0lLK29wQmltdVZUeW8ySzg0cDZTczVLR1VybFNsZEVGcFJwbW03S2ljcEZ5dWZFWjVXb1dpWXEvQ1ZTbFhPYXZ5bEM1TGQ2S24wQ3ZwdmZSWlZVVlZUMVdoYXIzcWdPcUNtclphcUZxK1dwdmFRM1dDT2tNOVhyMWN2VWQ5VmtORncwOGpUNk5GNDU0bVhwT2htYWk1VjdOUGMxNUxXeXRjYTZ0V3A5YVV0cHkybDNhdWRvdjJBeDJ5am9QT0dwMEduVnU2R0YyR2JyTHVQdDBiZXJDZWhWNmlYbzNlZFgxWTMxS2ZxNzlQZjlBQWJXQnR3RE5vTUJneEpCazZHV1lhdGhpT0dkR01mSTN5alRxTm5odHJHRWNaN3pMdU0vNW9ZbUdTWXRKb2N0OVV4dFRiTk4rMDIvUjNNejB6bGxtTjJTMXpzcm03K1Fiekx2TVh5L1NYY1pidFgzYkhnbUxoWjdIVm9zZmlnNldWSmQreTFYTGFTc01xMXFyV2FvUkJaUVF3U2hpWHJkSFd6dFlickU5WnY3V3h0QkhZSExmNXpkYlFOdG4yaU8zVWN1M2xuT1dOeThmdDFPeVlkdlYyby9aMCsxajdBL2FqRHFvT1RJY0doOGVPNm81c3h5YkhTU2RkcHlTbm8wN1BuVTJjK2M3dHp2TXVOaTdyWE02NUlxNGVya1d1QTI0eWJxRnUxVzZQM05YY0U5eGIzR2M5TER6V2VwenpSSHY2ZU83eUhQRlM4bUo1Tlh2TmVsdDVyL1B1OVNINUJQdFUrenoyMWZQbCszYjd3WDdlZnJ2OUhxelFYTUZiMGVrUC9MMzhkL3MvRE5BT1dCUHdZeUFtTUNDd0p2QkprR2xRWGxCZk1DVTRKdmhJOE9zUTU1RFNrUHVoT3FIQzBKNHd5YkRvc09hdytYRFg4TEx3MFFqamlIVVIxeUlWSXJtUlhWSFlxTENvcHFpNWxXNHI5NnljaUxhSUxvd2VYcVc5S252VmxkVUtxMU5XbjQ2UmpHSEduSWhGeDRiSEhvbDl6L1JuTmpEbjRyemlhdU5tV1M2c3ZheG5iRWQyT1h1YVk4Y3A0MHpHMjhXWHhVOGwyQ1hzVHBoT2RFaXNTSnpodW5DcnVTK1NQSlBxa3VhVC9aTVBKWDlLQ1U5cFM4V2x4cWFlNU1ud2tubTlhY3BwMldtRDZmcnBoZW1qYTJ6VzdGa3p5L2ZoTjJWQUdhc3l1Z1JVMGM5VXYxQkh1RVU0bG1tZldaUDVKaXNzNjBTMmREWXZ1ejlITDJkN3ptU3VlKzYzYTFGcldXdDc4bFR6TnVXTnJYTmFWNzhlV2grM3ZtZUQrb2FDRFJNYlBUWWUza1RZbEx6cHAzeVQvTEw4VjV2RE4zY1hLQlZzTEJqZjRyR2xwVkNpa0Y4NHN0VjJhOTAyMURidXRvSHQ1dHVydG44c1loZGRMVFlwcmloK1g4SXF1ZnFONlRlVjMzemFFYjlqb05TeWRQOU96RTdlenVGZERyc09sMG1YNVphTjcvYmIzVkZPTHk4cWY3VW5acytWaW1VVmRYc0plNFY3Unl0OUs3dXFOS3AyVnIydlRxeStYZU5jMDFhcldMdTlkbjRmZTkvUWZzZjlyWFZLZGNWMTd3NXdEOXlwOTZqdmFOQnFxRGlJT1poNThFbGpXR1BmdDR4dm01c1Vtb3FiUGh6aUhSbzlISFM0dDltcXVmbUk0cEhTRnJoRjJESjlOUHJvamU5Y3YrdHFOV3l0YjZPMUZSOER4NFRIbm40ZisvM3djWi9qUFNjWUoxcC8wUHlodHAzU1h0UUJkZVIwekhZbWRvNTJSWFlObnZRKzJkTnQyOTMrbzlHUGgwNnBucW81TFh1NjlBemhUTUdaVDJkeno4NmRTejgzY3o3aC9IaFBUTS85Q3hFWGJ2VUc5ZzVjOUxsNCtaTDdwUXQ5VG4xbkw5dGRQblhGNXNySnE0eXJuZGNzcjNYMFcvUzMvMlR4VS91QTVVREhkYXZyWFRlc2IzUVBMaDg4TStRd2RQNm02ODFMdDd4dVhidTk0dmJnY09qd25aSG9rZEU3N0R0VGQxUHV2cmlYZVcvaC9zWUg2QWRGRDZVZVZqeFNmTlR3cys3UGJhT1dvNmZIWE1mNkh3Yy92ai9PR24vMlM4WXY3eWNLbnBDZlZFeXFURFpQbVUyZG1uYWZ2dkYwNWRPSlorblBGbVlLZjVYK3RmYTV6dk1mZm5QOHJYODJZbmJpQmYvRnA5OUxYc3EvUFBScTJhdWV1WUM1UjY5VFh5L01GNzJSZjNQNExlTnQzN3Z3ZDVNTFdlK3g3eXMvNkg3by91ano4Y0duMUUrZi9nVURtUFA4dXNUbzB3QUFBQWx3U0ZsekFBQU93Z0FBRHNJQkZTaEtnQUFBQUJwMFJWaDBVMjltZEhkaGNtVUFVR0ZwYm5RdVRrVlVJSFl6TGpVdU1UQXc5SEtoQUFBQjIwbEVRVlE0VDMzVHZVOFRZUURIOGVmbEFJbEpnN0hhOUtoS3IwSmJpb0FscGhyRWhNaE00dUtnTVVhZ0pjWEpRVWNUYzRZQllwZ2NpQTY0WUl3MnZnUmJyVkVQUnRERkR0VTQ5eDhncVFvTVA1N255blB0NVdxSFgyNzZmcDU3eVJGeldxL2tUQU5xajI2SDBPMXZBeUhFdFVPVVk3WXJqT2ZkNTV6ZDk4Y3FSSVpZVDdxMlhSakNmRWJIVVorR05rcHgzWGNDSmVNeXF0RkoxeVRXRkZEZzF0c0JQSndjOFlRS2Fnbjhzb2JSVXp5Tjlud0VLOWN1TlVWczRPbTlVNTVIK0NuaWtJakpSOE9lVm9oZytlYVlCMW5WQmRBYjZrQzFPT3dnUDZ3aEJJc1JKMVlJLzJEZzhhMkxMaVI3SkN4Zk5NRjhXcmVCa29nRFRXS0ZNSUVzemRTUXNqR0JUdkZsYk1CM21PUE5pemlPdFlnYmtZWFpVYVM3ZXRSbkptQ3NBMzFYWG9HL0cvVGN1Z29icit4ckJscHF2QTRFZ3RNWUhRZk8zTmdFWDB1MFJLaVZoZmF0Q3Y3a0N3aGxJUEwwa2ZPL2JVQXVNYlVCOXI2L0tVS3RPV2pmLzRydENXUVhORGtHRWdoT09iRkMrdE9mQkJKekliWDRUeTArR0RlZmdjUUdjaDVBUXZGTUVTeGZRNmgxcDM1eUk3RDQ4ditBUktMWk5iRFBkMFg4ejNXeWN3ZXRnR1NxRFAveHE2RFJzK0JMcjZGdDdYZ1FMb0dUWWJNaUg2TnhBVDBOeXRycnY3UDRJK25nQlRCekJUSlNZM01QS3Z0ZUJpU2RVNUVBV3dBQUFBQkpSVTVFcmtKZ2dnPT0"}];
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
flash.display.DisplayObject.__instanceCount = 0;
flash.display.DisplayObject.__worldDirty = true;
flash.display.DisplayObject.__worldTransformDirty = true;
flixel.util.FlxRect._pool = new flixel.util.FlxPool_flixel_util_FlxRect(flixel.util.FlxRect);
flixel.FlxObject.SEPARATE_BIAS = 4;
flixel.FlxObject.LEFT = 1;
flixel.FlxObject.RIGHT = 16;
flixel.FlxObject.UP = 256;
flixel.FlxObject.DOWN = 4096;
flixel.FlxObject.NONE = 0;
flixel.FlxObject.CEILING = 256;
flixel.FlxObject.FLOOR = 4096;
flixel.FlxObject.WALL = 17;
flixel.FlxObject.ANY = 4369;
flixel.FlxObject._firstSeparateFlxRect = flixel.util.FlxRect.get(null,null,null,null);
flixel.FlxObject._secondSeparateFlxRect = flixel.util.FlxRect.get(null,null,null,null);
Connect._server = "ws://127.0.0.1:8889";
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
flash.Lib.__startTime = haxe.Timer.stamp();
flash.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display._CapsStyle.CapsStyle_Impl_.NONE = "butt";
flash.display._CapsStyle.CapsStyle_Impl_.ROUND = "round";
flash.display._CapsStyle.CapsStyle_Impl_.SQUARE = "square";
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display._JointStyle.JointStyle_Impl_.MITER = "miter";
flash.display._JointStyle.JointStyle_Impl_.ROUND = "round";
flash.display._JointStyle.JointStyle_Impl_.BEVEL = "bevel";
flash.display._StageQuality.StageQuality_Impl_.BEST = "best";
flash.display._StageQuality.StageQuality_Impl_.HIGH = "high";
flash.display._StageQuality.StageQuality_Impl_.MEDIUM = "medium";
flash.display._StageQuality.StageQuality_Impl_.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events._EventPhase.EventPhase_Impl_.CAPTURING_PHASE = 0;
flash.events._EventPhase.EventPhase_Impl_.AT_TARGET = 1;
flash.events._EventPhase.EventPhase_Impl_.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.geom.Matrix.__identity = new flash.geom.Matrix();
flash.media.Sound.__registeredSounds = new haxe.ds.StringMap();
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text._AntiAliasType.AntiAliasType_Impl_.ADVANCED = "advanced";
flash.text._AntiAliasType.AntiAliasType_Impl_.NORMAL = "normal";
flash.ui._KeyLocation.KeyLocation_Impl_.STANDARD = 0;
flash.ui._KeyLocation.KeyLocation_Impl_.LEFT = 1;
flash.ui._KeyLocation.KeyLocation_Impl_.RIGHT = 2;
flash.ui._KeyLocation.KeyLocation_Impl_.NUM_PAD = 3;
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flixel.FlxCamera.STYLE_LOCKON = 0;
flixel.FlxCamera.STYLE_PLATFORMER = 1;
flixel.FlxCamera.STYLE_TOPDOWN = 2;
flixel.FlxCamera.STYLE_TOPDOWN_TIGHT = 3;
flixel.FlxCamera.STYLE_SCREEN_BY_SCREEN = 4;
flixel.FlxCamera.STYLE_NO_DEAD_ZONE = 5;
flixel.FlxCamera.SHAKE_BOTH_AXES = 0;
flixel.FlxCamera.SHAKE_HORIZONTAL_ONLY = 1;
flixel.FlxCamera.SHAKE_VERTICAL_ONLY = 2;
flixel.util.FlxPoint._pool = new flixel.util.FlxPool_flixel_util_FlxPoint(flixel.util.FlxPoint);
flixel.system.scaleModes.BaseScaleMode.zoom = flixel.util.FlxPoint.get(null,null);
flixel.system.frontEnds.HTML5FrontEnd.INTERNET_EXPLORER = "Internet Explorer";
flixel.system.frontEnds.HTML5FrontEnd.CHROME = "Chrome";
flixel.system.frontEnds.HTML5FrontEnd.FIREFOX = "Firefox";
flixel.system.frontEnds.HTML5FrontEnd.SAFARI = "Safari";
flixel.system.frontEnds.HTML5FrontEnd.OPERA = "Opera";
flixel.util.FlxPath.FORWARD = 0;
flixel.util.FlxPath.BACKWARD = 1;
flixel.util.FlxPath.LOOP_FORWARD = 16;
flixel.util.FlxPath.LOOP_BACKWARD = 256;
flixel.util.FlxPath.YOYO = 4096;
flixel.util.FlxPath.HORIZONTAL_ONLY = 65536;
flixel.util.FlxPath.VERTICAL_ONLY = 1048576;
flixel.util.FlxPath._point = flixel.util.FlxPoint.get(null,null);
flixel.tweens.FlxTween.PERSIST = 1;
flixel.tweens.FlxTween.LOOPING = 2;
flixel.tweens.FlxTween.PINGPONG = 4;
flixel.tweens.FlxTween.ONESHOT = 8;
flixel.tweens.FlxTween.BACKWARD = 16;
flixel.util.FlxSave.SUCCESS = 0;
flixel.util.FlxSave.PENDING = 1;
flixel.util.FlxSave.ERROR = 2;
flixel.FlxG.autoPause = true;
flixel.FlxG.fixedTimestep = true;
flixel.FlxG.timeScale = 1;
flixel.FlxG.worldDivisions = 6;
flixel.FlxG.VERSION = new flixel.system.FlxVersion(3,3,4);
flixel.FlxG.elapsed = 0;
flixel.FlxG.maxElapsed = 0.1;
flixel.FlxG.fullscreen = false;
flixel.FlxG.worldBounds = flixel.util.FlxRect.get(null,null,null,null);
flixel.FlxG.save = new flixel.util.FlxSave();
flixel.FlxG.swipes = [];
flixel.FlxG.html5 = new flixel.system.frontEnds.HTML5FrontEnd();
flixel.FlxG.inputs = new flixel.system.frontEnds.InputFrontEnd();
flixel.FlxG.console = new flixel.system.frontEnds.ConsoleFrontEnd();
flixel.FlxG.log = new flixel.system.frontEnds.LogFrontEnd();
flixel.FlxG.bitmapLog = new flixel.system.frontEnds.BitmapLogFrontEnd();
flixel.FlxG.watch = new flixel.system.frontEnds.WatchFrontEnd();
flixel.FlxG["debugger"] = new flixel.system.frontEnds.DebuggerFrontEnd();
flixel.FlxG.vcr = new flixel.system.frontEnds.VCRFrontEnd();
flixel.FlxG.bitmap = new flixel.system.frontEnds.BitmapFrontEnd();
flixel.FlxG.cameras = new flixel.system.frontEnds.CameraFrontEnd();
flixel.FlxG.plugins = new flixel.system.frontEnds.PluginFrontEnd();
flixel.FlxG.sound = new flixel.system.frontEnds.SoundFrontEnd();
flixel.FlxG.signals = new flixel.system.frontEnds.SignalFrontEnd();
flixel.FlxG._scaleMode = new flixel.system.scaleModes.RatioScaleMode();
flixel._FlxSprite.GraphicDefault.resourceType = "image/png";
flixel._FlxSprite.GraphicDefault.resourceName = "__ASSET__:bitmap_flixel__FlxSprite_GraphicDefault";
flixel.animation.FlxAnimationController.prefixLength = 0;
flixel.animation.FlxAnimationController.postfixLength = 0;
flixel.animation.FlxPrerotatedAnimation.PREROTATED = "prerotated_animation";
flixel.effects.FlxFlicker._pool = new flixel.util.FlxPool_flixel_effects_FlxFlicker(flixel.effects.FlxFlicker);
flixel.effects.FlxFlicker._boundObjects = new haxe.ds.ObjectMap();
flixel.input.gamepad.FlxGamepad.JUST_RELEASED = -1;
flixel.input.gamepad.FlxGamepad.RELEASED = 0;
flixel.input.gamepad.FlxGamepad.PRESSED = 1;
flixel.input.gamepad.FlxGamepad.JUST_PRESSED = 2;
flixel.input.keyboard.FlxKey.JUST_RELEASED = -1;
flixel.input.keyboard.FlxKey.RELEASED = 0;
flixel.input.keyboard.FlxKey.PRESSED = 1;
flixel.input.keyboard.FlxKey.JUST_PRESSED = 2;
flixel.input.keyboard.FlxKey.A = 65;
flixel.input.keyboard.FlxKey.B = 66;
flixel.input.keyboard.FlxKey.C = 67;
flixel.input.keyboard.FlxKey.D = 68;
flixel.input.keyboard.FlxKey.E = 69;
flixel.input.keyboard.FlxKey.F = 70;
flixel.input.keyboard.FlxKey.G = 71;
flixel.input.keyboard.FlxKey.H = 72;
flixel.input.keyboard.FlxKey.I = 73;
flixel.input.keyboard.FlxKey.J = 74;
flixel.input.keyboard.FlxKey.K = 75;
flixel.input.keyboard.FlxKey.L = 76;
flixel.input.keyboard.FlxKey.M = 77;
flixel.input.keyboard.FlxKey.N = 78;
flixel.input.keyboard.FlxKey.O = 79;
flixel.input.keyboard.FlxKey.P = 80;
flixel.input.keyboard.FlxKey.Q = 81;
flixel.input.keyboard.FlxKey.R = 82;
flixel.input.keyboard.FlxKey.S = 83;
flixel.input.keyboard.FlxKey.T = 84;
flixel.input.keyboard.FlxKey.U = 85;
flixel.input.keyboard.FlxKey.V = 86;
flixel.input.keyboard.FlxKey.W = 87;
flixel.input.keyboard.FlxKey.X = 88;
flixel.input.keyboard.FlxKey.Y = 89;
flixel.input.keyboard.FlxKey.Z = 90;
flixel.input.keyboard.FlxKey.ZERO = 48;
flixel.input.keyboard.FlxKey.ONE = 49;
flixel.input.keyboard.FlxKey.TWO = 50;
flixel.input.keyboard.FlxKey.THREE = 51;
flixel.input.keyboard.FlxKey.FOUR = 52;
flixel.input.keyboard.FlxKey.FIVE = 53;
flixel.input.keyboard.FlxKey.SIX = 54;
flixel.input.keyboard.FlxKey.SEVEN = 55;
flixel.input.keyboard.FlxKey.EIGHT = 56;
flixel.input.keyboard.FlxKey.NINE = 57;
flixel.input.keyboard.FlxKey.PAGEUP = 33;
flixel.input.keyboard.FlxKey.PAGEDOWN = 34;
flixel.input.keyboard.FlxKey.HOME = 36;
flixel.input.keyboard.FlxKey.END = 35;
flixel.input.keyboard.FlxKey.INSERT = 45;
flixel.input.keyboard.FlxKey.ESCAPE = 27;
flixel.input.keyboard.FlxKey.MINUS = 189;
flixel.input.keyboard.FlxKey.PLUS = 187;
flixel.input.keyboard.FlxKey.DELETE = 46;
flixel.input.keyboard.FlxKey.BACKSPACE = 8;
flixel.input.keyboard.FlxKey.LBRACKET = 219;
flixel.input.keyboard.FlxKey.RBRACKET = 221;
flixel.input.keyboard.FlxKey.BACKSLASH = 220;
flixel.input.keyboard.FlxKey.CAPSLOCK = 20;
flixel.input.keyboard.FlxKey.SEMICOLON = 186;
flixel.input.keyboard.FlxKey.QUOTE = 222;
flixel.input.keyboard.FlxKey.ENTER = 13;
flixel.input.keyboard.FlxKey.SHIFT = 16;
flixel.input.keyboard.FlxKey.COMMA = 188;
flixel.input.keyboard.FlxKey.PERIOD = 190;
flixel.input.keyboard.FlxKey.SLASH = 191;
flixel.input.keyboard.FlxKey.NUMPADSLASH = 191;
flixel.input.keyboard.FlxKey.GRAVEACCENT = 192;
flixel.input.keyboard.FlxKey.CONTROL = 17;
flixel.input.keyboard.FlxKey.ALT = 18;
flixel.input.keyboard.FlxKey.SPACE = 32;
flixel.input.keyboard.FlxKey.UP = 38;
flixel.input.keyboard.FlxKey.DOWN = 40;
flixel.input.keyboard.FlxKey.LEFT = 37;
flixel.input.keyboard.FlxKey.RIGHT = 39;
flixel.input.keyboard.FlxKey.TAB = 9;
flixel.input.keyboard.FlxKey.PRINTSCREEN = 301;
flixel.input.keyboard.FlxKey.F1 = 112;
flixel.input.keyboard.FlxKey.F2 = 113;
flixel.input.keyboard.FlxKey.F3 = 114;
flixel.input.keyboard.FlxKey.F4 = 115;
flixel.input.keyboard.FlxKey.F5 = 116;
flixel.input.keyboard.FlxKey.F6 = 117;
flixel.input.keyboard.FlxKey.F7 = 118;
flixel.input.keyboard.FlxKey.F8 = 119;
flixel.input.keyboard.FlxKey.F9 = 120;
flixel.input.keyboard.FlxKey.F10 = 121;
flixel.input.keyboard.FlxKey.F11 = 122;
flixel.input.keyboard.FlxKey.F12 = 123;
flixel.input.keyboard.FlxKey.NUMPADZERO = 96;
flixel.input.keyboard.FlxKey.NUMPADONE = 97;
flixel.input.keyboard.FlxKey.NUMPADTWO = 98;
flixel.input.keyboard.FlxKey.NUMPADTHREE = 99;
flixel.input.keyboard.FlxKey.NUMPADFOUR = 100;
flixel.input.keyboard.FlxKey.NUMPADFIVE = 101;
flixel.input.keyboard.FlxKey.NUMPADSIX = 102;
flixel.input.keyboard.FlxKey.NUMPADSEVEN = 103;
flixel.input.keyboard.FlxKey.NUMPADEIGHT = 104;
flixel.input.keyboard.FlxKey.NUMPADNINE = 105;
flixel.input.keyboard.FlxKey.NUMPADMINUS = 109;
flixel.input.keyboard.FlxKey.NUMPADPLUS = 107;
flixel.input.keyboard.FlxKey.NUMPADPERIOD = 110;
flixel.input.keyboard.FlxKey.NUMPADMULTIPLY = 106;
flixel.input.keyboard.FlxKeyboard.TOTAL = 256;
flixel.input.mouse._FlxMouse.GraphicCursor.resourceType = "image/png";
flixel.input.mouse._FlxMouse.GraphicCursor.resourceName = "__ASSET__:bitmap_flixel_input_mouse__FlxMouse_GraphicCursor";
flixel.input.mouse.FlxMouseButton.LEFT = -1;
flixel.input.mouse.FlxMouseButton.MIDDLE = -2;
flixel.input.mouse.FlxMouseButton.RIGHT = -3;
flixel.input.mouse.FlxMouseButton.FAST_PRESS_RELEASE = -2;
flixel.input.mouse.FlxMouseButton.JUST_RELEASED = -1;
flixel.input.mouse.FlxMouseButton.RELEASED = 0;
flixel.input.mouse.FlxMouseButton.PRESSED = 1;
flixel.input.mouse.FlxMouseButton.JUST_PRESSED = 2;
flixel.input.touch.FlxTouchManager.maxTouchPoints = 0;
flixel.system.GraphicLogo.resourceType = "image/png";
flixel.system.GraphicLogo.resourceName = "__ASSET__:bitmap_flixel_system_GraphicLogo";
flixel.system.FlxAssets.FONT_DEFAULT = "Nokia Cellphone FC Small";
flixel.system.FlxAssets.FONT_DEBUGGER = "Arial";
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.NONE = 0;
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.OBJECT = 1;
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.GROUP = 2;
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.TILEMAP = 3;
flixel.system._FlxCollisionType.FlxCollisionType_Impl_.SPRITEGROUP = 4;
flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
flixel.system.FlxQuadTree.A_LIST = 0;
flixel.system.FlxQuadTree.B_LIST = 1;
flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
flixel.system.debug.LogStyle.NORMAL = new flixel.system.debug.LogStyle();
flixel.system.debug.LogStyle.WARNING = new flixel.system.debug.LogStyle("[WARNING] ","FFFF00",12,true,false,false,"assets/sounds/beep",true);
flixel.system.debug.LogStyle.ERROR = new flixel.system.debug.LogStyle("[ERROR] ","FF0000",12,true,false,false,"assets/sounds/beep",true);
flixel.system.debug.LogStyle.NOTICE = new flixel.system.debug.LogStyle("[NOTICE] ","008000",12,true);
flixel.system.debug.LogStyle.CONSOLE = new flixel.system.debug.LogStyle("&#62; ","0000ff",12,true);
flixel.system.debug.Window.BG_COLOR = -580952225;
flixel.system.debug.Window.HEADER_COLOR = -1157627904;
flixel.system.debug.Window.HEADER_ALPHA = 0.8;
flixel.system.debug.Window.HEADER_HEIGHT = 15;
flixel.system.debug.Window.WINDOW_AMOUNT = 0;
flixel.system.debug._Window.GraphicWindowHandle.resourceType = "image/png";
flixel.system.debug._Window.GraphicWindowHandle.resourceName = "__ASSET__:bitmap_flixel_system_debug__Window_GraphicWindowHandle";
flixel.system.debug._Window.GraphicCloseButton.resourceType = "image/png";
flixel.system.debug._Window.GraphicCloseButton.resourceName = "__ASSET__:bitmap_flixel_system_debug__Window_GraphicCloseButton";
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
flixel.system.layer.TileSheetExt._DRAWCALLS = 0;
flixel.system.layer.frames.FlxFrame.POINT = new flash.geom.Point();
flixel.system.layer.frames.FlxFrame.MATRIX = new flash.geom.Matrix();
flixel.system.layer.frames.FlxFrame.RECT = new flash.geom.Rectangle();
flixel.text.FlxText.BORDER_NONE = 0;
flixel.text.FlxText.BORDER_SHADOW = 1;
flixel.text.FlxText.BORDER_OUTLINE = 2;
flixel.text.FlxText.BORDER_OUTLINE_FAST = 3;
flixel.text.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
flixel.text.pxText.PxBitmapFont.ZERO_POINT = new flash.geom.Point();
flixel.tile.GraphicAuto.resourceType = "image/png";
flixel.tile.GraphicAuto.resourceName = "__ASSET__:bitmap_flixel_tile_GraphicAuto";
flixel.tile.GraphicAutoAlt.resourceType = "image/png";
flixel.tile.GraphicAutoAlt.resourceName = "__ASSET__:bitmap_flixel_tile_GraphicAutoAlt";
flixel.tile.FlxTilemap.OFF = 0;
flixel.tile.FlxTilemap.AUTO = 1;
flixel.tile.FlxTilemap.ALT = 2;
flixel.tile.FlxTilemap._helperBuffer = Type.createEmptyInstance(flixel.tile.FlxTilemapBuffer);
flixel.tweens.FlxEase.PI2 = Math.PI / 2;
flixel.tweens.FlxEase.EL = 2 * Math.PI / .45;
flixel.tweens.FlxEase.B1 = 0.363636363636363646;
flixel.tweens.FlxEase.B2 = 0.727272727272727293;
flixel.tweens.FlxEase.B3 = 0.545454545454545414;
flixel.tweens.FlxEase.B4 = 0.909090909090909061;
flixel.tweens.FlxEase.B5 = 0.818181818181818232;
flixel.tweens.FlxEase.B6 = 0.954545454545454586;
flixel.tweens.FlxEase.ELASTIC_AMPLITUDE = 1;
flixel.tweens.FlxEase.ELASTIC_PERIOD = 0.4;
flixel.ui.FlxButton.NORMAL = 0;
flixel.ui.FlxButton.HIGHLIGHT = 1;
flixel.ui.FlxButton.PRESSED = 2;
flixel.ui._FlxTypedButton.GraphicButton.resourceType = "image/png";
flixel.ui._FlxTypedButton.GraphicButton.resourceName = "__ASSET__:bitmap_flixel_ui__FlxTypedButton_GraphicButton";
flixel.util.FlxAngle.cosTable = new Array();
flixel.util.FlxAngle.sinTable = new Array();
flixel.util.FlxBitmapDataPool.maxLength = 8;
flixel.util.FlxBitmapDataPool.$length = 0;
flixel.util.FlxBitmapDataPool._head = null;
flixel.util.FlxBitmapDataPool._tail = null;
flixel.util.FlxBitmapDataPool._rect = new flash.geom.Rectangle();
flixel.util.FlxCollision.CAMERA_WALL_OUTSIDE = 0;
flixel.util.FlxCollision.CAMERA_WALL_INSIDE = 1;
flixel.util.FlxCollision.pointA = new flash.geom.Point();
flixel.util.FlxCollision.pointB = new flash.geom.Point();
flixel.util.FlxCollision.centerA = new flash.geom.Point();
flixel.util.FlxCollision.centerB = new flash.geom.Point();
flixel.util.FlxCollision.matrixA = new flash.geom.Matrix();
flixel.util.FlxCollision.matrixB = new flash.geom.Matrix();
flixel.util.FlxCollision.testMatrix = new flash.geom.Matrix();
flixel.util.FlxCollision.boundsA = new flash.geom.Rectangle();
flixel.util.FlxCollision.boundsB = new flash.geom.Rectangle();
flixel.util.FlxColor.RED = -65536;
flixel.util.FlxColor.YELLOW = -256;
flixel.util.FlxColor.GREEN = -16744448;
flixel.util.FlxColor.BLUE = -16776961;
flixel.util.FlxColor.PINK = -16181;
flixel.util.FlxColor.PURPLE = -8388480;
flixel.util.FlxColor.WHITE = -1;
flixel.util.FlxColor.BLACK = -16777216;
flixel.util.FlxColor.GRAY = -8355712;
flixel.util.FlxColor.BROWN = -6927616;
flixel.util.FlxColor.TRANSPARENT = 0;
flixel.util.FlxColor.IVORY = -16;
flixel.util.FlxColor.BEIGE = -657956;
flixel.util.FlxColor.WHEAT = -663885;
flixel.util.FlxColor.TAN = -2968436;
flixel.util.FlxColor.KHAKI = -3952495;
flixel.util.FlxColor.SILVER = -4144960;
flixel.util.FlxColor.CHARCOAL = -12171706;
flixel.util.FlxColor.NAVY_BLUE = -16777088;
flixel.util.FlxColor.ROYAL_BLUE = -16233314;
flixel.util.FlxColor.MEDIUM_BLUE = -16777011;
flixel.util.FlxColor.AZURE = -16744449;
flixel.util.FlxColor.CYAN = -16711681;
flixel.util.FlxColor.MAGENTA = -65281;
flixel.util.FlxColor.AQUAMARINE = -8388652;
flixel.util.FlxColor.TEAL = -16744320;
flixel.util.FlxColor.FOREST_GREEN = -14513374;
flixel.util.FlxColor.OLIVE = -8355840;
flixel.util.FlxColor.CHARTREUSE = -8388864;
flixel.util.FlxColor.LIME = -4194560;
flixel.util.FlxColor.GOLDEN = -10496;
flixel.util.FlxColor.GOLDENROD = -2448096;
flixel.util.FlxColor.CORAL = -32944;
flixel.util.FlxColor.SALMON = -360334;
flixel.util.FlxColor.HOT_PINK = -258112;
flixel.util.FlxColor.FUCHSIA = -34817;
flixel.util.FlxColor.PUCE = -3372903;
flixel.util.FlxColor.MAUVE = -2051841;
flixel.util.FlxColor.LAVENDER = -4882724;
flixel.util.FlxColor.PLUM = -8113799;
flixel.util.FlxColor.INDIGO = -11861886;
flixel.util.FlxColor.MAROON = -8388608;
flixel.util.FlxColor.CRIMSON = -2354116;
flixel.util.FlxMath.MIN_VALUE = 0.0000000000000001;
flixel.util.FlxMath.MAX_VALUE = 1.79e+308;
flixel.util.FlxMath.SQUARE_ROOT_OF_TWO = 1.41421356237;
flixel.util.FlxRandom.globalSeed = 1;
flixel.util.FlxRandom._internalSeed = 1;
flixel.util.FlxRandom.MULTIPLIER = 48271;
flixel.util.FlxRandom.MODULUS = 2147483647;
flixel.util.FlxRandom._intHelper = 0;
flixel.util.FlxRandom._intHelper2 = 0;
flixel.util.FlxRandom._intHelper3 = 0;
flixel.util.FlxRandom._floatHelper = 0;
flixel.util.FlxRandom._arrayFloatHelper = null;
flixel.util.FlxRandom._red = 0;
flixel.util.FlxRandom._green = 0;
flixel.util.FlxRandom._blue = 0;
flixel.util.FlxRandom._alpha = 0;
flixel.util.FlxSort.ASCENDING = -1;
flixel.util.FlxSort.DESCENDING = 1;
flixel.util.FlxSpriteUtil.flashGfxSprite = new flash.display.Sprite();
flixel.util.FlxSpriteUtil.flashGfx = flixel.util.FlxSpriteUtil.flashGfxSprite.get_graphics();
flixel.util.LabelValuePair._pool = new flixel.util.FlxPool_flixel_util_LabelValuePair(flixel.util.LabelValuePair);
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
ApplicationMain.main();
})();
