This is a ten player simultaneous chess game. It's written in Haxe using [HaxeFlixel](https://github.com/HaxeFlixel/flixel) targetting HTML5. The server is written in Python 3 using [Autobahn](https://github.com/tavendo/AutobahnPython). 

This still needs a lot of testing but should be fairly playable. I haven't and probably never will be able to test all the cases myself but as far as I can tell it's all working. The server is running consistantly now also and should be cleaning itself up correctly as well as the client itself. 

<b>Instructions:</b><br>
[Install Autobahn](http://autobahn.ws/python/installation.html)<br>

Download the [Client](http://solarjetmen.com/games/bin/chessBin.tgz)<br>
You can also compile it yourself from here. The client also has a folder for the server. Although I might forget to update it.

If compiling the server is set in Connect.hx server = "whateverYouWant"
Otherwise, search for "solarjetmen.com" in the ChessClient.js. It's currently on line 24625.
Edit the Server.py server in main, it should be pretty obvious. 

To see it running already, probably, checkout [solarjetmen.com/chessGame](http://solarjetmen.com/chessGame/). 

<b>Credits:</b><br>
Chess pieces were by [Brian Provan](http://opengameart.org/content/colorful-chess-pieces)
