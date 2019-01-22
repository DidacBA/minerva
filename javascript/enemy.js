'use strict';

function Enemy(finalCanvas, x, y) {

  this.ctx = finalCanvas.getContext('2d');

  this.enemySprite = document.getElementById('enemy');

  this.sizeEnemyX = 50;
  this.sizeEnemyY = 50;

  this.width = 1280;
  this.height = 720;

  this.centerX = 640;
  this.centerY = 360;



}

Enemy.prototype.render = function() {
  this.ctx.drawImage(this.enemySprite, 160, 90, this.sizeEnemyX, this.sizeEnemyY);
}

Enemy.prototype.update = function() {
  

}

