function collision(apple, orange){

    if (apple.x - orange.x < orange.width/2 + apple.width/2
      && orange.x - apple.x < orange.width/2 + apple.width/2
      && apple.y - orange.y < orange.height/2 + apple.height/2
      && orange.y - apple.y < orange.height/2 +apple.height/2) {
  
        apple.shapeColor = "red";
        orange.shapeColor = "red";
  
      //return   true 
  }
  else {
    
    apple.shapeColor = "green";
    orange.shapeColor = "green"; 
  
    //return     false
  
  }
  
  }