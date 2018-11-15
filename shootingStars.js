var xPos = 6;
var yPos = 255;

draw = function() {
    xPos += 2;
    yPos -= 0.5;
    
    background(29, 40, 115);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    fill(255, 242, 0);
    ellipse(400-xPos, 400-yPos, 10, 10);
};
