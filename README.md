This is a ten player simultaneous chess game. It's written in Haxe using [HaxeFlixel](https://github.com/HaxeFlixel/flixel) targetting HTML5. The server is written in Python 3 using [Autobahn](https://github.com/tavendo/AutobahnPython). 

This still needs a lot of testing but should be somewhat playable considering there is no win logic yet. I, so far, have only tested this using Chromium. Client needs a lot of refactoring, particularly in the determineMoves method. 

<b>Instructions:</b><br>
[Install Autobahn](http://autobahn.ws/python/installation.html)<br>
Note this is using Python 3 so if you don't want to mess things up then use a virtual environment or something. 

Download the [Client](http://solarjetmen.com/games/bin/chessBin.tgz)<br>
You can also compile it yourself from here. The client also has a folder for the server.

If compiling the server is set in Connect.hx server = "whateverYouWant"
Otherwise, search for "solarjetmen.com" in the ChessClient.js. It's currently on line 24625.
Edit the Server.py server in main, it should be pretty obvious. 

To see it running already, probably, checkout [solarjetmen.com/chessGame](http://solarjetmen.com/chessGame/). The server may or may not be doing something weird but it'll get more stable as I continue to finish this.

<b>Credits:</b><br>
Chess pieces were by [Brian Provan](http://opengameart.org/content/colorful-chess-pieces)
