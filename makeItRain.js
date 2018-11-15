//Declaring Variables
var xPositions = [];  
var yPositions = [];

//Declaring Positions of Rain
for (var x = 0; x < 25; x++) {
    xPositions[x] = x * 15 + 2;
    yPositions[x] = floor(random(428));
}

//Running Program
draw = function() {
    //Background Color
    background(204, 247, 255);
    
    //Looping Rain Falling
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
        
    }
};
