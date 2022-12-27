let img2, 
colorFG2 = '#111111',
colorBG2 = '#f1f1f1';

function preload(){
img2 = loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/denimroots.jpg'); 			  			//add an image
}

function setup() {
createCanvas(600, 600).parent('sketch-container2');
background(colorBG);
img2.resize(600, 600);
}


function draw() {
background(colorBG2);
fill(colorFG2);
noStroke();
const ratio = 600/600;
let coefZ = (mouseX/width)*400;
console.log(coefZ)
console.log(mouseX)
const tilesX = map(coefZ, 0, 600, 10, 100);
const tilesY = ratio * tilesX;
const tileSize = width / tilesX;
for (let y = 0; y < img2.height; y += tileSize) {
for (let x = 0; x < img2.width; x += tileSize) {
  let c = img2.get(x, y);
  let b = map(brightness(c), 0, 255, 1, 0);
  push();
  translate(x, y);
  rect(0, 0, b * tileSize, b * tileSize);
  pop();
}
}
}