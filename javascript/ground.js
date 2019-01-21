'use strict';

function Ground(bufferCanvas, finalCanvas) {

  this.bufferCanvas = bufferCanvas;

  this.bufferContext = bufferCanvas.getContext('2d');
  this.finalContext = finalCanvas.getContext('2d');

  this.width = 1280;
  this.height = 720;

  //Finds the center of the canvas
  this.centerX = this.width / 2;
  this.centerY = this.height / 2;
  this.reason = 1.26;
  this.green1 = '#006400';
  this.green2 = '#009900';
  this.colorChange = false;

  this.backgroundImage = document.getElementById('image');

}

Ground.prototype.render = function() {

  for (var y = this.height ; y > 1 ; y /= this.reason) {
    if (this.reason > 1.2) {
      this.reason -= 0.0022;
    } else {
      this.reason = 1.26;
    }
  
   console.log('inLoop')
  var posY = this.centerY + y;
  

  this.bufferContext.lineWidth = 2;
  this.bufferContext.strokeStyle = this.green1;


  if (this.colorChange == true) {
    this.bufferContext.fillStyle = this.green2;
    this.colorChange = !this.colorChange;
  } else if (this.colorChange == false) {
    this.bufferContext.fillStyle = this.green1;
    this.colorChange = !this.colorChange;
  }

  this.bufferContext.fillRect(0, posY, this.width, y);

  this.bufferContext.fillStyle = 'rgb(163, 189, 239)';
  this.bufferContext.fillRect(this.width - this.width, this.height - this.height, this.width, this.centerY + 10);
  this.bufferContext.drawImage(this.backgroundImage, 150, 82, 920, 288);
  
  if (y > 2) {
    this.finalContext.drawImage(this.bufferCanvas, 0, 0);
  }


}

}