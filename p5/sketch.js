const dim = 5
const size = 20;
const padding = 10;

function setup() {

	let myCanvas = createCanvas(1000, 1000);
	myCanvas.parent('canvas');
	rectMode(RADIUS);
}

function draw() {
	var start = (width/2)-(dim*size/2)
	noStroke();
	fill(22, 111, 255);
	for(var r = 0; r < dim; r++){
		for(var c = 0; c < dim; c++){
			rect(100+50*r, 100+50*c , size, size);
		}
	}
}