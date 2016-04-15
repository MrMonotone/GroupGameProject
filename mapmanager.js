function Map(dims, tdims)
{
    this.dims = dims;
    this.tdims = tdims;
}

Map.prototype.drawMap = function () {
        map.layers.forEach(function (layer, index) {
        this.drawLayer(index);
    }, this);
}

Map.prototype.drawLayer = function (layer) {
    var context = this.layerCanvas[layer].getContext('2d');
    context.clearRect(0, 0, 512, 512);
    //     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // this.ctx.save();
    var startCol = Math.floor(this.camera.x / this.tdims.x);
    var endCol = startCol + (this.camera.width / this.tdims.x);
    var startRow = Math.floor(this.camera.y / this.tdims.y);
    var endRow = startRow + (this.camera.height / this.tdims.y);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * this.tdims.y;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                context.drawImage(
                    this.tileAtlas, // image
                    (tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};