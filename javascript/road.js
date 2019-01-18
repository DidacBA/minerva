'use strict';

function RoadSegment(canvas, speed, color) {
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height / 16;
  this.speed = speed;
  this.color = color;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
}

RoadSegment.prototype.draw = function() {
  this.ctx.fillRect(0, this.y, this.width, this.height);
}

RoadSegment.prototype.update = function() {
  this.y += this.height;
}