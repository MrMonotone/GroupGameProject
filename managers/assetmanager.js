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
        case filePath:
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
        var img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject(new Error("Cannot Download:" + filePath))
        }
        img.src = filePath;
        this.cache[filePath] = img;
    })
}

AssetManager.prototype.downloadAll = function (onComplete) {
    Promise.all(this.downloadQueue).then(() => {
        onComplete();
    })
    // .catch((error) => {
    //     console.log("Feels bad man..." + error)
    // })
}

AssetManager.prototype.getAsset = function(path){
    //console.log(path.toString());
    return this.cache[path];
}