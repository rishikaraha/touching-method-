function is_touching(movingob1,restingob2){
    if(movingob1.x-restingob2.x < movingob1.width/2 +restingob2.width/2 &&
      restingob2.x -movingob1.x <restingob2.width/2 + movingob1.width/2 &&
      movingob1.y-restingob2.y < movingob1.height/2 +restingob2.height/2 &&
      restingob2.y -movingob1.y <restingob2.height/2 + movingob1.height/2){
     return true;
   }
   else{
     return false;
   }
  
  }