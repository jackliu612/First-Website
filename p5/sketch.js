const dim = 5
const size = 25;
const padding = 10;

function setup() {

	let myCanvas = createCanvas(1000, 1000);
	myCanvas.parent('canvas');
	rectMode(RADIUS);
}

function draw() {
	rect(width/2, height/2, width/2, height/2);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
	var start = (width/2)-(floor(dim/2)*2*(size+padding));
	noStroke();
	fill(100);
	//"Nice" dark blue color
	//fill(22, 111, 255);
	for(var r = 0; r < dim; r++){
		for(var c = 0; c < dim; c++){
			rect(start+(2*size+padding)*r, start+(2*size+padding)*c , size, size);
		}
	}
}