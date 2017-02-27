var raid = [];
var offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  while(offset <= windowWidth) {
    let item = new Raid(offset);
    item.init();
    raid.push(item);
    offset += Symbol.prototype.size;
  }
}

function draw() {
  background('rgba(0,0,0,0.45)');
  raid.forEach(function(item) {
    item.render();
  });
}
