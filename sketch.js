let cor;
let CirculoX; // horizontal
let CirculoY; // vertical


function setup() {
  
  createCanvas(800, 800);
  background("white")
  cor=color(random(0,255), random(0, 255), random(0, 255))  
  CirculoX = [0, 0, 0]
  CirculoY = [random(height), random(height), random(height)]
}


// CirculoX = 0,0, 0
// CirculoY = 300, 150, 50

function draw() {
  
  fill(cor)
  
  // console.log(CirculoX.length);
  for(let contador in CirculoX){
  console.log(contador); 
   circle(CirculoX[contador], CirculoY[contador], 50);
  CirculoX[contador] += random(0, 3);
  CirculoY[contador] += random(-3, 3);
    
    if(CirculoX[contador] >= width) {
      CirculoX[contador] = 0
      CirculoY[contador] = random(height)
    }
      
      
      
  }
  
  
  
  //CirculoX[1] += random(0, 3);
  //CirculoY[1] += random(-3, 3);
  
  //CirculoX[2] += random(0, 3);
  //CirculoY[2] += random(-3, 3);
  
  
  if(mouseIsPressed) {
    cor=color(random(0,255), random(0, 255), random(0, 255));
  }
  
  
     }
  