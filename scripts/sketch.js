var xDim = Math.floor(Math.random() * 4 +3);
var yDim = Math.floor(Math.random() * 4 +3);
const size = 50;
const padding = 30;
const spacer = 2*size+padding;

var rStart;
var cStart;
var grid = [yDim];

function setup() {
    load();
	var cnv = createCanvas(3*windowWidth/4, 5*windowHeight/6);
	cnv.parent('canvas');
	rectMode(RADIUS);
	prev = createVector(-1,0);

	//Drawing bounding box
	// line(0,0, width, height);
	// line(width, 0, 0, height);
	// line(width/2, 0, width/2, height);
	// line(0, height/2, width, height/2);

	makeGrid();
	drawGrid();
	noStroke();
	/*
	let myCanvas = createCanvas(1000, 1000);
	myCanvas.parent('canvas');
	*/
}

function draw(){
	mouseCheck();
	if(isFilled()){
	    genNew();
	}
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
	if(xDim%2!==0){
		cStart = (width/2)-(floor(xDim/2)*spacer);		
	} else{
		cStart = (width/2)-((xDim-1)/2*spacer);	
	}

	if(yDim%2!==0){
		rStart = (height/2)-(floor(yDim/2)*spacer);
	} else{
		rStart = (height/2)-((yDim-1)/2*spacer);
	}
	//noStroke();
	//fill(100);
	//"Nice" dark blue color
	//fill(22, 111, 255);
	noStroke();
	fill(200);
	for(var c = 0; c < xDim; c++){
		for(var r = 0; r < yDim; r++){
			rect(cStart+spacer*c, rStart+spacer*r , size+10, size+10);
		}
	}
}

function mouseCheck(){
	fill(22, 111, 255);
	for(var c = 0; c < xDim; c++){
		for(var r = 0; r < yDim; r++){	
			if(mouseIsPressed && abs(mouseX-(cStart+spacer*c))<size && abs(mouseY-(rStart+spacer*r))<size && isValid(r, c) ){
				// console.log("r="+r);
				// console.log(" c="+c);
				// console.log(" prev.x ="+prev.x);
				// console.log(" prev.y ="+prev.y);
				drawPath(r, c);
				grid[r][c] = true;
				prev = createVector(c, r);
			}
		}
	}
}

function isValid(r, c){
	if(prev.x === -1){
		prev = createVector(c, r);
		return true;
	} else{
		return (dist(prev.x, prev.y, c, r)===1) && (grid[r][c]===false);
	}

}

function drawPath(r, c){
	rect(cStart+spacer*c, rStart+spacer*r , size, size);	
	rect(cStart+spacer*(c+prev.x)/2, rStart+spacer*(r+prev.y)/2, 50, 50);	

	stroke(255);
	strokeWeight(12);
	fill(255);
	if(r === prev.y && c === prev.x){
		point(cStart+spacer*prev.x, rStart+spacer*prev.y);
	} else if(r === prev.y){
		if(c>prev.x){
			for(var i = 1; i < 3; i++){
				point(cStart+spacer*(prev.x+i/2), rStart+spacer*r);
			}
		}
		else{
			for(var i = 1; i < 3; i++){
				point(cStart+spacer*(prev.x-i/2), rStart+spacer*r);
			}
		}
	} else{
		if(r>prev.y){
			for(var i = 1; i < 3; i++){
				point(cStart+spacer*c, rStart+spacer*(prev.y+i/2));
			}
		}
		else{
			for(var i = 1; i < 3; i++){
				point(cStart+spacer*c, rStart+spacer*(prev.y-i/2));
			}
		}
	}
	noStroke();
}

function isFilled(){
    for(var c = 0; c < xDim; c++){
		for(var r = 0; r < yDim; r++){	
		    if(grid[r][c]===false)
		        return false;
		}
    }
    alert("Hello! I am an alert box!!");
    return true;
}

function genNew(){
	clear();
	xDim = Math.floor(Math.random() * 4 +3);
	yDim = Math.floor(Math.random() * 4 +3);
	prev = createVector(-1,0);
	makeGrid();
	drawGrid();
}

function reset(){
    clear();
	prev = createVector(-1,0);
	makeGrid();
	drawGrid();
}
