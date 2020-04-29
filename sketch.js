
var r 
var g 
var b


function setup(){
  createCanvas(600,600);
}


function draw(){
  
  r = mouseX/3;
  g = mouseY/3;
  b = (mouseX/4 + mouseY/4);

  background(r,g,b);
  
  fill(255);
  ellipse(mouseX,mouseY,10,10);

}