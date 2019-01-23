'use strict';

function SplashScreen(finalCanvas) {

  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;
  this.alpha = 0;
  this.splashImage = document.getElementById('splashimage')
  
}

SplashScreen.prototype.show = function() {
  this.ctx.drawImage(this.splashImage, 0, 0, this.width, this.height);
  this.ctx.font = '30px Libre+Barcode';
  this.ctx.fillText('Skydrop', 300, 100);

}

SplashScreen.prototype.transition = function() {
  
}