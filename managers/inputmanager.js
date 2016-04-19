var gameManager = gameManager || {};

function InputManager()
{
    this.space = undefined;
    listenFor();
}
InputManager.prototype.update = function () {
    
    if (this.space) {
        gameManager.scene.load();
        this.space = false;
    }
}

InputManager.prototype.listenFor = function () {
    gameManager.canvas.addEventListener("keydown", function (e) {
        if (String.fromCharCode(e.which) === ' ') 
            this.space = true;
//        console.log(e);
        e.preventDefault();
    }, false).bind(this);
}

