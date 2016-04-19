function GameManager()
{
    this.inputManager = Object.create(InputManager);
    this.mapManager = Object.create(MapManager);
    this.sceneManager = Object.create(SceneManager);
}

GameManager.prototype.start()
{
    let scene = {};
    sceneManager.load(scene);
}