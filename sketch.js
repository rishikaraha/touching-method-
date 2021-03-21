var player1,player2,pllayer3;
function setup() {
  createCanvas(800,400);
  player1=createSprite(400,200,50,100);
  player2=createSprite(500,200,50,100);
  player1.shapeColor="blue";
  player2.shapeColor="blue";
  player1.debug=true;
  player2.debug=true;
  pllayer3=createSprite(300,100,100,50);
  pllayer3.shapeColor="pink";

}
function draw() {
  background(100,55,50);
  player2.x=mouseX;
  player2.y=mouseY; 
  
 if(is_touching(player2,player1)){
   player1.velocityX=1;
   player2.shapeColor="red";
 }
 else{
   player1.x=random(100,300);
   player2.shapeColor="yellow";
 }
  if(is_touching(player2,pllayer3)){
    player2.velocityY=6;
    pllayer3.shapeColor ="green";
  }
 else{
   player2.shapeColor="red";
   pllayer3.shapeColor="black";
 }


  
  drawSprites();
}

