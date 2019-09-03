'use strict';

class BackGround {
  constructor(finalCanvas) {
    this.canvas = finalCanvas;
    this.ctx = finalCanvas.getContext('2d');
    this.backgroundImage = document.getElementById('background');
    this.x = 150;
    this.y = 82;
    this.acceleration = 16.3333;
  }
  render() {
    this.ctx.drawImage(this.backgroundImage, this.x, this.y, 920, 288);
  }
  scrollRight() {
    if (this.x < 500) {
      this.x += 20;
    }
  }
  scrollLeft() {
    if (this.x > -100) {
      this.x -= 20;
    }
  }
  scrollUp() {
    if (this.y > 20) {
      this.y -= this.acceleration;
    }
  }
  scrollDown() {
    if (this.y < 280) {
      this.y += this.acceleration;
    }
  }
}





