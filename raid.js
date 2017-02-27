function Raid(offset) {
  this.symbols = [];
  this.offset = offset || 0;
  this.count = round(random(7, 30));
  this.speed = random(5, 15);
}

Raid.prototype.init = function() {
  var y = random(-500, 0);
  for (var i = 0; i < this.count; i++) {
    this.symbols[i] = new Symbol(this.offset, y, this.speed);
    y -= Symbol.prototype.size;
  }
}

Raid.prototype.render = function() {
  this.symbols.forEach(function(symbol) {
    symbol.show();
    symbol.fall();
  });
}
