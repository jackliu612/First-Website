var xDim;
var yDim;
var jMap;

const size = 40;
const padding = 25;
const spacer = 2*size+padding;

var rStart;
var cStart;
var grid = [yDim];

var score = 0;

function preload(){
    m = loadJSON('./maps/maps.json');
    
}

function setup() {
	var cnv = createCanvas(3*windowWidth/4, 3*windowHeight/4);
	cnv.parent('canvas');
	rectMode(RADIUS);
	prev = createVector(-1,0);

	//Drawing bounding box
// 	 line(0,0, width, height);
// 	 line(width, 0, 0, height);
// 	 line(width/2, 0, width/2, height);
// 	 line(0, height/2, width, height/2);
    
    getNewGrid();
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
	if(isFilled()&&!mouseIsPressed){
	    score++;
        document.getElementById("score").innerHTML = "Score: " + score;
	    genNew();
	    
	}
}

function getNewGrid(){
    jMap = m.maps[Math.floor(Math.random()*m.maps.length)];
    yDim = jMap.r;
    xDim = jMap.c;
    console.log(jMap.map);
}

function makeGrid(){
	for(var r = 0; r < yDim; r++){
		grid[r] = [xDim];
		for(var c = 0; c < xDim; c++){
		    if(jMap.map[jMap.c*r+c] === '*'){
			    grid[r][c] = true;
		    } else{
		        grid[r][c] = false;
		    }
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
		    if(!grid[r][c]){
			    rect(cStart+spacer*c, rStart+spacer*r , size+10, size+10);
		    }
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
	rect(cStart+spacer*(c+prev.x)/2, rStart+spacer*(r+prev.y)/2, size, size);	

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
    return true;
}

function genNew(){
	clear();
	prev = createVector(-1,0);
	getNewGrid();
	makeGrid();
	drawGrid();
}

function reset(){
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    clear();
	prev = createVector(-1,0);
	makeGrid();
	drawGrid();
}
