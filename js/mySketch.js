//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded



function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    
    background("blue");
}

function draw() {

    
    circle(20, 40, 100);
}

function mouseClicked() {
   
   circle(100,80,20);
	circle(300,60,20);
	circle(250,40,20);
	circle(150,25,20);
	circle(40,38,20);
	circle(45,120,20);
	circle(320,115,20);
	circle(330,38,20);
	circle(480,38,20);
	circle(330,65,20);
	circle(630,55,20);
	circle(720,80,20);
	circle(460,60,20);
	circle(573,38,20);
	circle(788,23,20);
	circle(627,120,20);
	circle(698,60,20);
	circle(400,88,20);
	circle(227,40,20);
	circle(280,88,20);
	
}


function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
