'use strict';

function Game(canvas) {
  this.ctx = canvas.getContext('2d');
  this.player; //
  this.road = [];
  this.animation;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  this._renderCanvas = function() {
    // renders road
    // renders player
    // renders rival
  }

  this._updateLogic = function() {
    // updates road position
    // updates player position
    // updates enemy position
  }

  this.createRoadSegment = function {
    //creates road segments and pushes them into the array
  }

}

Game.prototype.start = function() {
  function gameLoop() {
    this._updateLogic();
    this._clearCanvas();
    this._renderCanvas();

    this.animation = window.requestAnimationFrame(gameLoop.bind(this));
  }

  this.animation = window.requestAnimationFrame(gameLoop.bind(this));
}
