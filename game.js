// // This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011


// // GameBoard code below

// function GameBoard() {

//     Entity.call(this, null, 0, 0);
// }

// GameBoard.prototype = new Entity();
// GameBoard.prototype.constructor = GameBoard;

// GameBoard.prototype.update = function () {
//     Entity.prototype.update.call(this);
// }

// GameBoard.prototype.draw = function (ctx) {
// }

// // the "main" code begins here

// var ASSET_MANAGER = new AssetManager();
// ASSET_MANAGER.queueDownload("assets/A.png");
// ASSET_MANAGER.queueDownload("assets/b.png");
// ASSET_MANAGER.queueDownload("assets/ga.png");
// ASSET_MANAGER.queueDownload("assets/c.png");

// ASSET_MANAGER.downloadAll(function () {
//     console.log("starting up da sheild");
//     //If you download the images too quickly the canvas may not exist yet...
//     document.addEventListener('DOMContentLoaded', () => {
//         var canvas = document.getElementById('gameWorld');
//         var ctx = canvas.getContext('2d');
//         var gameEngine = new GameEngine();
//         gameEngine.showOutlines = true;
//         var gameboard = new GameBoard();
//         let test = new Entity(gameEngine, 10, 10);
//         test.radius = 50;
    

//         gameEngine.addEntity(gameboard);
//         gameEngine.addEntity(test);
    
//         gameEngine.init(ctx);
//         gameEngine.start();
//     })
// });
