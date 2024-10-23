function setup(){
    createCanvas(400,400);
    background(161,111,250,200);

 scale(0.1);
   translate(width*4, height*3.5);

   for(var i = 0; i < 200; i++) {
    
     translate(width/2, i*2);
      scale(1+i/4000);
     rotate(PI/2);
     beginShape();
     vertex(width/2, height/2);
     vertex(width, height);
     vertex(40, height);
     endShape();

     beginShape();
     vertex(0, 0);
     vertex(width, height);
     endShape();

     strokeWeight(0);
      strokeWeight(6);
      fill(135,33,232,25)
   }
 
}