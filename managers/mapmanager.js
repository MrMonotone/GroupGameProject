var gameManager = gameManager || {};

function Map(tileAtlas,data, dims, tdims)
{
    this.dims = dims;
    this.tdims = tdims;
    this.data = data;
    this.tileAtlas = tileAtlas;
    console.log(tileAtlas)
}

// Map.BACKGROUND = 0;
// Map.COLLOSION = 1;
// Map.DETAILS = 2;
// Map.UI = 3

Map.prototype.drawMap = function () {
    this.drawLayer(0);
    // map.layers.forEach(function (layer, index) {
    //     this.drawLayer(index);
    // }, this);
}
Map.prototype.getTile = function (layer, col, row) {
        return this.data[layer][row * this.dims.y + col];
    }

Map.prototype.drawLayer = function (layer) {
    var context = gameManager.canvas.getContext('2d');
    context.clearRect(0, 0, 512, 512);
    //     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // this.ctx.save();
    // var startCol = Math.floor(gameManager.scene.camera.x / this.tdims.x);
    // var endCol = startCol + (gameManager.scene.camera.width / this.tdims.x);
    // var startRow = Math.floor(gameManager.scene.camera.y / this.tdims.y);
    // var endRow = startRow + (gameManager.scene.camera.height / this.tdims.y);
    // var offsetX = -gameManager.scene.camera.x + startCol * this.tdims.x;
    // var offsetY = -gameManager.scene.camera.y + startRow * this.tdims.y;

    for (var c = 0; c <= 11; c++) {
        for (var r = 0; r <= 11; r++) {
            console.log(c)
            var tile = this.getTile(layer, c, r);
            // var x = (c - startCol) * this.tdims.width + offsetX;
            // var y = (r - startRow) * this.tdims.height + offsetY;
            var x = c;
            var y = r;
            if (tile !== 0) { // 0 => empty tile
                context.drawImage(
                    ASSET_MANAGER.getAsset("./assets/tiles.png"), // image
                    (tile - 1) * this.tdims.x, // source x
                    0, // source y
                    this.tdims.x, // source width
                    this.tdims.y, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    this.tdims.x, // target width
                    this.tdims.y // target height
                );
            }
        }
    }
};