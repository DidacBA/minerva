'use strict';

function BackGround(finalCanvas) {

  this.canvas = finalCanvas;

  this.ctx = finalCanvas.getContext('2d');
  this.backgroundImage = document.getElementById('image');
  this.x = 150;
  this.y = 82;

  this.acceleration = 1.6666;

}

BackGround.prototype.render = function() {
  this.ctx.drawImage(this.backgroundImage, this.x, this.y, 920, 288);
}

BackGround.prototype.scrollRight = function() {
  if (this.x < 500) {
    this.x += 20;
  }
}

BackGround.prototype.scrollLeft = function() {
  if (this.x > -100) {
    this.x -= 20;
  }
}

BackGround.prototype.scrollUp = function() {
  if (this.y > 0) {
    this.y -= this.acceleration * 16.3333;
  }
}

BackGround.prototype.scrollDown = function() {
  if (this.y < 300) {
    this.y += this.acceleration * 16.3333;
  }
}