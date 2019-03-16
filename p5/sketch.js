const dim = 5
const size = 25;
const padding = 10;

function setup() {

	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	background(255, 0, 200);
	rectMode(RADIUS);
	/*
	let myCanvas = createCanvas(1000, 1000);
	myCanvas.parent('canvas');
	*/
}

function draw() {

	//Drawing bounding box
	line(0,0, width, height);
	line(width, 0, 0, height);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);


	var rStart = (width/2)-(floor(dim/2)*(2*size+padding));
	var cStart = (height/2)-(floor(dim/2)*(2*size+padding));
	noStroke();
	fill(100);
	//"Nice" dark blue color
	//fill(22, 111, 255);
	for(var r = 0; r < dim; r++){
		for(var c = 0; c < dim; c++){
			rect(rStart+(2*size+padding)*r, cStart+(2*size+padding)*c , size, size);
		}
	}
}