function Symbol(x, y, s) {
  this.x = x;
  this.y = y || 0;

  this.value = char(0);
  this.color = '#31a031';
  this.speed = s || random(1, 8);
  this.switchInterval = round(random(21, 101));

  this.setRandomSymbol();
}

Symbol.prototype.size = 20;

Symbol.prototype.setRandomSymbol = function() {
  this.value = char(0x30A0 + round(random(0, 96)));
}

Symbol.prototype.fall = function() {
  if(this.y >= windowHeight) {
    this.y = 0;
  } else {
    this.y += this.speed;
  }

  if(frameCount % this.switchInterval == 0) {
    this.setRandomSymbol();
  }
}

Symbol.prototype.show = function() {
  textSize(this.size);
  fill(this.color);
  text(this.value, this.x, this.y);
}
