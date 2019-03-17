const xDim = 5; //Math.floor(Math.random() * 5 +3);
const yDim = 3; //Math.floor(Math.random() * 5 +3);
const size = 50;
const padding = 10;

var rStart;
var cStart;
var grid = [yDim];

function setup() {

	var cnv = createCanvas(windowWidth-20, windowHeight-20);
	rectMode(RADIUS);

	//Drawing bounding box
	line(0,0, width, height);
	line(width, 0, 0, height);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	makeGrid();
	drawGrid();

	/*
	let myCanvas = createCanvas(1000, 1000);
	myCanvas.parent('canvas');
	*/
}

function draw(){
	mouseCheck();
}

function makeGrid(){
	for(var r = 0; r < yDim; r++){
		grid[r] = [xDim];
		for(var c = 0; c < xDim; c++){
			grid[r][c] = false;
		}
	}
}

function drawGrid(){

	//Works for odd lenghts
	if(xDim%2!=0){
		cStart = (width/2)-(floor(xDim/2)*(2*size+padding));		
	} else{
		cStart = (width/2)-((xDim-1)/2*(2*size+padding));	
	}

	if(yDim%2!=0){
		rStart = (height/2)-(floor(yDim/2)*(2*size+padding));
	} else{
		rStart = (height/2)-((yDim-1)/2*(2*size+padding));
	}
	//noStroke();
	//fill(100);
	//"Nice" dark blue color
	//fill(22, 111, 255);
	for(var c = 0; c < xDim; c++){
		for(var r = 0; r < yDim; r++){
			rect(cStart+(2*size+padding)*c, rStart+(2*size+padding)*r , size, size);
		}
	}
}

function mouseCheck(){
	fill(100);
	for(var c = 0; c < xDim; c++){
		for(var r = 0; r < yDim; r++){	
			if(mouseIsPressed && abs(mouseX-(cStart+(2*size+padding)*c))<size && abs(mouseY-(rStart+(2*size+padding)*r))<size){
				rect(cStart+(2*size+padding)*c, rStart+(2*size+padding)*r , size, size);				
				grid[r][c] = true;
				console.log(grid);
			}
		}
	}

}