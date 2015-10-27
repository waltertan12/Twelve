(function (root) {
  "use strict";
  
  var Tile = root.Tile = function (position, value) {
    this.x = position.x;
    this.y = position.y;

    this.value = value;
  };

  Tile.prototype.setValue = function(newValue) {
    this.value = newValue;
  };

  Tile.prototype.isMatch = function (otherTile) {
    return this.value === otherTile.value;
  };

  Tile.prototype.updatePosition = function (position) {
    this.x = position.x;
    this.y = position.y;
  };
})(this);