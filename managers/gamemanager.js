function GameManager(canvas)
{
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    // this.input = Object.create(InputManager.prototype);
    //this.map = Object.create(Map.prototype);
    this.scene = new SceneManager();
    // this.entity = Object.create(EntityManager.prototype);
}

GameManager.prototype.start = function ()
{
    let newScene = {
        map: {
            tileset: "./assets/tiles.png",
data: [[
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
        3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
        3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3
    ], [
        4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 0, 0, 3, 3, 3, 3, 3, 3, 3
    ]],
        }
    };
    this.scene.load(newScene);
}
