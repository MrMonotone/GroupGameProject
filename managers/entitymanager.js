var gameManager = gameManager || {};

function EntityManager() {
    this.entities = [];
}

EntityManager.prototype.add = function (entity) {
    this.entities.push(entity);
}

EntityManager.prototype.addAll = function (entities) {
    this.entities.forEach((entity) => {
        this.entities.push(entity);
    }, this);
}

EntityManager.prototype.clear = function () {
    this.entities = [];
}