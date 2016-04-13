// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

function AssetManager() {
    this.cache = [];
    this.downloadQueue = [];
}

AssetManager.prototype.queueDownload = function (path) {
    console.log(path.toString());
    this.downloadQueue.push(this.downloadAsset(path));
}

AssetManager.prototype.downloadAsset = function (filePath) {
    let asset;   
    switch (filePath) {
        case '.png':
            asset = this.downloadImage(filePath);
            break;
        case '.mp3':
            //Handle sound
            break;
        default:
            asset = new Error('Something went wrong');
            break;
    }
    return asset;
}

AssetManager.prototype.downloadImage = function(filePath) {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject(new Error("Cannot Download:" + filePath))
        }
        img.src = filePath
        this.cache[filePath] = img;
    })
}


AssetManager.prototype.downloadAll = function (onComplete) {
    Promise.all(this.downloadQueue).then(() => {
        onComplete();
    }).catch((error) => {
        console.log("Feels bad man..." + error)
    })
}

AssetManager.prototype.getAsset = function(path){
    //console.log(path.toString());
    return this.cache[path];
}


function GameEngine() {
    this.entities = [];
    this.ctx = null;
    this.click = null;
    this.mouse = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();

    console.log('game initialized');
}

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimationFrame(gameLoop, that.ctx.canvas);
    })();
}

GameEngine.prototype.startInput = function () {
    console.log('Starting input');

    var getXandY = function (e) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

        if (x < 1024) {
            x = Math.floor(x / 32);
            y = Math.floor(y / 32);
        }

        return { x: x, y: y };
    }

    var that = this;

    this.ctx.canvas.addEventListener("click", function (e) {
        that.click = getXandY(e);
    }, false);

    this.ctx.canvas.addEventListener("mousemove", function (e) {
        that.mouse = getXandY(e);
    }, false);

    this.ctx.canvas.addEventListener("mousewheel", function (e) {
        that.wheel = e;
    }, false);

    console.log('Input started');
}

GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function (drawCallback) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    this.entities.forEach((entity) => entity.draw(this.ctx))
    if (drawCallback) {
        drawCallback(this);
    }
    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    let filteredEntites = this.entities.filter((entity) => {
            return !entity.removeFromWorld;
    });
    filteredEntites.forEach((entity) => { entity.update(); });
    this.entities = filteredEntites;
}

GameEngine.prototype.loop = function () {
    this.update();
    this.draw();
    this.click = null;
    this.wheel = null;
}

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
}

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }
}

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}

// GameBoard code below

function GameBoard() {

    Entity.call(this, null, 0, 0);
}

GameBoard.prototype = new Entity();
GameBoard.prototype.constructor = GameBoard;

GameBoard.prototype.update = function () {
    Entity.prototype.update.call(this);
}

GameBoard.prototype.draw = function (ctx) {
}

// the "main" code begins here

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("assets/A.png");
ASSET_MANAGER.queueDownload("assets/b.png");
ASSET_MANAGER.queueDownload("assets/ga.png");
ASSET_MANAGER.queueDownload("assets/c.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    //If you download the images too quickly the canvas may not exist yet...
    document.addEventListener('DOMContentLoaded', () => {
        var canvas = document.getElementById('gameWorld');
        var ctx = canvas.getContext('2d');
        var gameEngine = new GameEngine();
        gameEngine.showOutlines = true;
        var gameboard = new GameBoard();
        let test = new Entity(gameEngine, 10, 10);
        test.radius = 50;
    

        gameEngine.addEntity(gameboard);
        gameEngine.addEntity(test);
    
        gameEngine.init(ctx);
        gameEngine.start();
    })
});
