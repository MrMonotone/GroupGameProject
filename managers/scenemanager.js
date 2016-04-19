var gameManager = gameManager || {};

function SceneManager ()
{
    this.camera = new Camera(0,0);
    this.map = undefined;
}

SceneManager.prototype.load = function (scene)
{
    // Change the tileset if it changes
    // if (this.currentTileset !== scene.tileset)
    // {
    //     if (!gameManager.asset.getAsset(scene.tileset))
    //         gameManager.asset.queueDownload(scene.tileset);
    //     gameManager.asset.download(scene.tileset);
    // }
    //this.currentTileset = scene.tileset;
    //Load the Map
    this.map = new Map(ASSET_MANAGER.getAsset(scene.map.tileset),scene.map.data, {x: 12, y:12}, {width: 64, height: 64})
    console.log(scene.map.tileset);
    this.map.drawMap(0)
    //gameManager.map.load(scene.map);
    
    //Add the entites to the map
    //gameManager.entity.addAll(scene.entities);
    
//    gameManager.entitym.cache();
    
}

SceneManager.prototype.checkResources = function () {
    
}

SceneManager.prototype.update = function ()
{
    
}

SceneManager.prototype.shutdown = function ()
{
    
}

