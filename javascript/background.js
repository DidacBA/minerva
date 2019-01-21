'use strict';

function BackGround(finalCanvas) {

  this.canvas = finalCanvas;

  this.ctx = finalCanvas.getContext('2d');
  this.backgroundImage = document.getElementById('image');
  this.x = 150;

}

BackGround.prototype.render = function() {

  this.ctx.drawImage(this.backgroundImage, this.x, 82, 920, 288);

}

BackGround.prototype.scrollRight = function() {
  this.x += 20;
}

BackGround.prototype.scrollLeft = function() {
    this.x -= 20;
}