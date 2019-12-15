'use strict';

class Game {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.animation;
    this.ground = new Ground(canvas);
  }
  _renderGround = () => {
    this.ground.render();
  }
  _clearCanvas = () => {
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, 1280, 720);
  }
  start = () => {
    function gameLoop() {
      this._clearCanvas();
      this._renderGround();
      this.animation = window.requestAnimationFrame(gameLoop.bind(this));
    }
    window.requestAnimationFrame(gameLoop.bind(this));
  }
}





