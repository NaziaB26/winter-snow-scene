//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let xCentre = 200
let yCentre = 100

function setup() {
    createCanvas(windowWidth, windowHeight / 2);

    background("skyblue");
	noLoop();
	
	cloud (100,50);
	cloud (300,70);
	cloud2 (450,60);
	cloud (700,50);
	
	fill ("white");
	noStroke();
	rect (0,500,800,500)
}


function draw() {
	noStroke()
//Snowman 1
	head();
	eyes();
	nose();
	body();
	bellyButton();
	scarf();
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


function head() {
    fill("white")
    circle(xCentre + 0, yCentre + 0, 100);
}

function eyes() {
    fill("#353b48")
    circle(xCentre - 20, yCentre - 15, 10);
    circle(xCentre + 20, yCentre - 15, 10);
}

function nose() {
    fill("#ff9a76")
    circle(xCentre + 0, yCentre + 15, 30);
}

function body() {
    fill("white")
    circle(xCentre + 0, yCentre + 135, 170);
    fill(255, 255, 255);
}

function bellyButton() {
    fill("#353b48")
    circle(xCentre + 0, yCentre + 115, 10);
    circle(xCentre + 0, yCentre + 135, 10);
    circle(xCentre + 0, yCentre + 155, 10);
}

function scarf() {
    fill("red");
    rectMode(CENTER)
    rect(xCentre - 20, yCentre + 50, 120, 15, 15);
}


function cloud (Xposition,Yposition) {
fill ("white");
stroke ("white");
ellipse (Xposition, Yposition, 65);
ellipse (Xposition+32, Yposition+10 ,45);
ellipse (Xposition-32, Yposition+10 ,45)

}

function cloud2 (Xposition,Yposition) {
fill("white");
stroke ("white");
ellipse (Xposition, Yposition, 45);
ellipse (Xposition+25, Yposition+5 ,32);
ellipse (Xposition-25, Yposition+5 ,32)
}