var posX = 100;
var posY = 100;
var x = 85;

draw = function() {
    
    //Background
    background(207, 254, 255); //sky
    fill(0, 255, 38); //green
    rect(-2,294,405,113); //grass
    
    //yoshi body
    fill(9, 217, 36); //skin colour
    ellipse(270,225,100,100);//body
    fill(255, 255, 255);//white
    beginShape();
    vertex(226,207);
    bezierVertex(203,231,243,296,289,269);
    endShape();
    fill(9, 217, 36);
    ellipse(282,283,40,58);//leg
    ellipse(260,231,52,28);//arm
    ellipse(244,231,35,35);//hand
    
    //Yoshi Head
    fill(255, 255, 255);//white
    ellipse(220,170,72,60);//head
    
    //moving mouth part
    fill(171, 0, 114);
    ellipse(x+133,200,(x/(4/5))-120,12);
    ellipse((x*1.5)+80,200,((x/3)-35),15);
    fill(255, 255, 255);//white
    beginShape();//mouth
    vertex(200,185);
    bezierVertex(192,252,259,196,251,179);
    endShape();
    
    fill(9, 217, 36);//green
    beginShape();//eye_behind
    vertex(195,129);
    bezierVertex(235,85,248,98,245,149);
    endShape();
    fill(255, 255, 255);//white
    beginShape();//eyeBall_behind
    vertex(203,129);
    bezierVertex(232,85,247,117,245,149);
    endShape();
    fill(9, 217, 36);
    beginShape();//eye_front
    vertex(226,131);
    bezierVertex(249,97,275,112,255,164);
    endShape();
    fill(255, 255, 255);//white
    beginShape();//eyeBall_front
    vertex(226,131);
    bezierVertex(240,105,274,112,250,158);
    endShape();
    fill(0, 0, 0);//black
    ellipse(222,122,10,10);//left_Pupil
    ellipse(248,126,10,10);//right_Pupil
    fill(9, 217, 36);//green
    arc(220,170,72,60,-215,24);//head
    ellipse(201,163,80,80);//noes
    
    
    
    //yoshi shell
    fill(255, 255, 255);//white
    arc(293,199,60,60,-140,40);//bottom of shell
    fill(255, 0, 0);//red 
    arc(296,195,60,60,-140,40); //top of shell
    
    //boot
    fill(199, 124, 73); //light brown
    rect(264,307,35,-6);//top of boot
    fill(110, 56, 20);//dark brown
    rect(249,306,51,31);//bottom of boot
    

};
