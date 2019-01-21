'use strict';

function BackGround(finalCanvas) {

  this.canvas = finalCanvas;

  this.ctx = finalCanvas.getContext('2d');
  this.backgroundImage = document.getElementById('image');
  this.x = 150;
  this.y = 82;

  this.acceleration = 3.6666;

}

BackGround.prototype.render = function() {

  this.ctx.drawImage(this.backgroundImage, this.x, this.y, 920, 288);

}

BackGround.prototype.scrollRight = function() {
  this.x += 20;
}

BackGround.prototype.scrollLeft = function() {
    this.x -= 20;
}

BackGround.prototype.scrollUp = function() {
  this.y -= this.acceleration * 16.3333;
}

BackGround.prototype.scrollDown = function() {
  this.y += this.acceleration * 16.3333;
}