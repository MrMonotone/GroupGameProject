var gameManager = gameManager || {};

function SceneManager ()
{
    
}

SceneManager.prototype.load = function ()
{
    gameManager.assetm.download();
//    gameManager.entitym.cache();
    gameManager.mapm.load();
    
}

SceneManager.prototype.update = function ()
{
    
}

SceneManager.prototype.shutdown = function ()
{
    
}