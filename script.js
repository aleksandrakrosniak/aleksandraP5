let img, 
colorFG = '#111111',
colorBG = '#f1f1f1';

function preload(){
img = loadImage('https://farm3.staticflickr.com/2849/11011320426_c8ce1bff32_q.jpg'); 			  			//add an image
}

function setup() {
createCanvas(600, 600).parent('sketch-container');
background(colorBG);
img.resize(600, 600);
}


function draw() {
background(colorBG);
fill(colorFG);
noStroke();
const ratio = 600/600;
let coefZ = (mouseX/width)*400;
console.log(coefZ)
console.log(mouseX)
const tilesX = map(coefZ, 0, 600, 10, 100);
const tilesY = ratio * tilesX;
const tileSize = width / tilesX;
for (let y = 0; y < img.height; y += tileSize) {
for (let x = 0; x < img.width; x += tileSize) {
  let c = img.get(x, y);
  let b = map(brightness(c), 0, 255, 1, 0);
  push();
  translate(x, y);
  rect(0, 0, b * tileSize, b * tileSize);
  pop();
}
}
}