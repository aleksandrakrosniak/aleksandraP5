var sketch1 = function(p) {
    let img;
    p.colorFG = '#FF0000';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('./images/denimroots.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(600, 600);
      p.background(p.colorBG);
      img.resize(600, 600);
    };
  
    p.draw = function() {
      p.background(p.colorBG);
      p.fill(p.colorFG);
      p.noStroke();
      p.ratio = 600 / 600;
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
      {p.coefZ = (p.mouseX / p.width) * 200;}
      p.tilesX = p.map(p.coefZ, 0, 600, 10, 100);
      p.tilesY = p.ratio * p.tilesX;
      p.tileSize = p.width / p.tilesX;
      for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
        for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
          p.c = img.get(p.x, p.y);
          p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
          p.push();
          p.translate(p.x, p.y);
          p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
          p.pop();
        }
      }
    }
  };
  
  var sketch2 = function(p) {
    let img;
    p.colorFG = '#111111';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('./images/oplatwadodenim.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(600, 600);
      p.background(p.colorBG);
      img.resize(600, 600);
    };
  
    p.draw = function() {
      p.background(p.colorBG);
      p.fill(p.colorFG);
      p.noStroke();
      p.ratio = 600 / 600;
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
      {p.coefZ = (p.mouseX / p.width) * 200;}
      p.tilesX = p.map(p.coefZ, 0, 600, 10, 100);
      p.tilesY = p.ratio * p.tilesX;
      p.tileSize = p.width / p.tilesX;
      for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
        for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
          p.c = img.get(p.x, p.y);
          p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
          p.push();
          p.translate(p.x, p.y);
          p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
          p.pop();
        }
      }
    }
  };
  
 
  
  new p5(sketch1, 'sketch1-container');
  new p5(sketch2, 'sketch2-container');