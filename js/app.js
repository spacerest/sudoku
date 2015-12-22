/* first botched attempt

var height = 9; //how many cells tall is the grid?
var width = 9; //how many cells wide is the grid?
var row; //what row are we in (0 - 8)
var col; //what column are we in (0 - 8) = numbers.length
var unit = col + row*9;
var numbersFirst = []; //where the random numbers are stored
var numbersSecond = [];
var numbersThird = [];
var numbersFourth = [];
var numbersFifth = [];
var numbersSixth = [];
var numbersSeventh = [];
var numbersEighth = [];
var numbersNinth = [];




	what if we make 9 arrays, compare them, and push them all into grid after the fact? yes



var num = [[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[4,3,4,3,4,3,4,3]];

var grid = document.getElementById("game");


var makeNumbers = function(x,r,p,numbers){
	for (var i = x; i < 9*r; i++){
		numbers[x] = Math.floor(Math.random()*9)+1;	
		while (numbers[x] === numbers[x-1] || numbers[x] === numbers[x-2] || numbers[x] === numbers[x-3] || numbers[x] === numbers[x-4] || numbers[x] === numbers[x-5] || numbers[x] === numbers[x-6] || numbers[x] === numbers[x-7] || numbers [x] === numbers[x-8]){
			numbers[x] = Math.floor(Math.random()*9)+1;
		}
		x++;
	}
	r++;
	console.log(r);

 

var makeGrid = function(numbers){
	var x = 0;
	for (var i = 1; i <= height; ++i){
		var tr = grid.appendChild(document.createElement("tr"));
		for (var j = 1; j <= width; ++j){
			var cell = tr.appendChild(document.createElement("td"));
			if (numbers[x] === undefined){
				cell.innerHTML = ":-/";
			}
			else {
			cell.innerHTML = numbers[x]; 
			}
			x++;
		}
	}
		return grid;	
}


makeNumbers(0,1,8,numbersFirst);
makeGrid(numbersFirst); 
console.log(numbersFirst);
*/

/*second botched attempt: 

var height = 9;
var width = 9;
var numbers = [[],[],[],[],[],[],[],[],[]];
var unit = 1;
var grid = document.getElementById("game");
function makeArray(){
	y = 0;
	for (var r = 0; r < 9; r++){
		for (var c = 0; c < 9; c++){
			numbers[r][c] = Math.floor(Math.random()*9)+1;
			while (
				//no repeats in the same block
				numbers[r][c]===numbers[r][c-1]||
				numbers[r][c]===numbers[r][c-2]||
				numbers[r][c]===numbers[r][c-3]||
				numbers[r][c]===numbers[r][c-4]||
				numbers[r][c]===numbers[r][c-5]||
				numbers[r][c]===numbers[r][c-6]||
				numbers[r][c]===numbers[r][c-7]||
				numbers[r][c]===numbers[r][c-8]
			){
			numbers[r][c] = Math.floor(Math.random()*9)+1;
			}
			var function1 = function(r,c,s,p){
				if (c===s&&r===p){
					//no repeats in the same row for 2nd block 1st row, compared to entire 1st block
					while (
						numbers[r][c]===numbers[r-1][c+0]|| 
						numbers[r][c]===numbers[r-1][c+1]||
						numbers[r][c]===numbers[r-1][c+2]
						
					){
				numbers[r][c] = Math.floor(Math.random()*9)+1;
					}
				}
			}
			function1(r,c,0,1);
			function1(r,c,0,4);
			function1(r,c,0,7);
			function1(r,c,3,1);
			function1(r,c,3,4);
			function1(r,c,3,7);
			function1(r,c,6,1);
			function1(r,c,6,4);
			function1(r,c,6,7);
			var function2 = function(r,c,s,p){
				if (c===s&&r===p){
				//no repeats in the same row for 3rd block 1st row,compared to entire 1st and 2nd blocks
					while (
						numbers[r][c]===numbers[r-2][c+0]||
						numbers[r][c]===numbers[r-2][c+1]||
						numbers[r][c]===numbers[r-2][c+2]||
						numbers[r][c]===numbers[r-1][c+0]|| 
						numbers[r][c]===numbers[r-1][c+1]||
						numbers[r][c]===numbers[r-1][c+2]

					){
				numbers[r][c] = Math.floor(Math.random()*9)+1;	
					}		
				}
			}
			function2(r,c,0,2);
			function2(r,c,0,5);
			function2(r,c,0,8);
			function2(r,c,3,2);
			function2(r,c,3,5);
			function2(r,c,3,8);
			function2(r,c,6,2);
			function2(r,c,6,5);
			function2(r,c,6,8);
			var function3 = function(r,c,s,p){
				if (c===s&&r===p){
				//no repeats in the same row for 2nd block 2nd row, compared to entire 1st block
					while (
						numbers[r][c]===numbers[r-1][c-1]||
						numbers[r][c]===numbers[r-1][c+0]||
						numbers[r][c]===numbers[r-1][c+1]	
					){
				numbers[r][c] = Math.floor(Math.random()*9)+1;
					}
				}
			}
			function3(r,c,1,1);
			function3(r,c,1,4);
			function3(r,c,1,7);
			function3(r,c,4,1);
			function3(r,c,4,4);
			function3(r,c,4,7);
			function3(r,c,7,1);
			function3(r,c,7,4);
			function3(r,c,7,7);
			var function4 = function(r,c,s,p){
				if (c===s&&r===p){
				//no repeats in the same row for 3rd block 2nd row, compared to 1st and 2nd blocks
					while (
						numbers[r][c]===numbers[r-1][c-1]||
						numbers[r][c]===numbers[r-1][c+0]||
						numbers[r][c]===numbers[r-1][c+1]||
						numbers[r][c]===numbers[r-2][c-1]||
						numbers[r][c]===numbers[r-2][c+0]||
						numbers[r][c]===numbers[r-2][c+1]

					){
				//store the duplicate unit value in a new variable and assign it to the unit that has a duplicate value in the same unit.. no nm, this would wipe out the info in the same rows...

//minimum number of units to determine a layout?

//no, instead determine block1 and go down, up from there and then circle around
				numbers[r][c] = Math.floor(Math.random()*9)+1;
					}
				}
			}
			function4(r,c,1,2);
			function4(r,c,1,5);
			function4(r,c,1,8);
			function4(r,c,4,2);
			function4(r,c,4,5);
			function4(r,c,4,7);
			function4(r,c,7,2);
			function4(r,c,7,5);
			function4(r,c,7,7);
		}
	}
}

function makeGrid(){
	var x =0;
	var y =0;
	for (var i = 0; i < 3; ++i){
		var tr = grid.appendChild(document.createElement("tr"));
		for (var j = 0; j < 3; ++j){
			var cell = tr.appendChild(document.createElement("td"));
			for (var k = 0; k <3; ++k){
				var nothing = cell.appendChild(document.createElement("tr"));
				
				 for (var h = 0; h <3; ++h){
					var oops = nothing.appendChild(document.createElement("td"));
					if (x > 8 || y > 8){
					oops.value = ":/";
					} else {	
					oops.value = numbers[x][y];
					}
					oops.innerHTML = oops.value;
					y++;
					if (y === 9){
						y = 0;
					}
				}
			}
			x++;
		}
	}	
	return oops;
}

makeArray();
makeGrid();
console.log(numbers);

*/

/*attempt no. 3 - make blocks 2, 4, 6, and 8 and build the other blocks based on their intersections. for now, make blocks 1,3,5,7 and nine editable. according to cornell site, trial and error is the most common way to make sudoku boards?*/

var lastClicked;
var grid = makeBoard(function(unit,bValues,x,y){
	/*unit.className = "editable";
	if (bValues[x][y] === 0){
		var edit = unit.appendChild(document.createElement("input"));
		edit.className = "inputSpace";
		edit.type = "checkbox";
		bValues[x][y] = undefined;
	}
	if (lastClicked) lastClicked.className="";
	lastClicked = unit;*/
});

function shuffle(arr) {
	//fisher-yates shuffler
	var m = arr.length, t, i;
	while (m) {
		i = Math.floor(Math.random()*m--);
		t = arr[m];
		arr[m] = arr[i];
		arr[i] = t;
	}
}

function indieRandoBlock(){
//takes an array of 1 - 9 and shuffles it into a random array of 1 - 9 to pass into starting(?) blocks
	var arr = [];
	for (var i = 0; i < 9; i++){
		arr[i] = i + 1;
	}	
	shuffle(arr);
	return arr;

	/* result arr hopefully to be passed into designated blocks like so
		         |        |         
		  arr[0] | arr[1] | arr[2]  
		 ________|________|________ 
		         |        |         
		  arr[3] | arr[4] | arr[5]  
		 ________|________|________ 
		         |        |         
		  arr[6] | arr[7] | arr[8]  
		         |        |        
	*/

}

function dependoBlankBlock(){
//makes a blank array with length of 8 for passing into blocks whose content is going to depend on others'
	var arr = [];
	for (var i = 0; i < 9; i++){
		arr[i] = 0;
	}
	return arr;

}

function blockOne(){
//blank for now
	return indieRandoBlock();
}

function blockTwo(){
	return dependoBlankBlock();
}

function blockThree(){
//blank for now
	return dependoBlankBlock();
}

function blockFour(){
	return dependoBlankBlock();
}

function blockFive(){
//blank for now
	return indieRandoBlock();
}

function blockSix(){
	return dependoBlankBlock();
}

function blockSeven(){
//blank for now
	return dependoBlankBlock();
}

function blockEight(){
//blank for now
	return indieRandoBlock();
}

function blockNine(){
	return indieRandoBlock();
}

function boardValues(){
	//compile all block values into a 9 x 9 array to pass into the board when making it
	var arr = [blockOne(),blockTwo(),blockThree(),blockFour(),blockFive(),blockSix(),blockSeven(),blockEight(),blockNine()];
	return arr;

	/* grid will correspond to values at the below indices

		 |	  |	   |	    |	     |	      |	       | 	|	
	  [0][0] | [0][1] | [0][2] | [1][0] | [1][1] | [1][2] | [2][0] | [2][1] | [2][2]     
	 ________|________|________|________|________|________|________|________|________
	 	 |	  |	   |	    |	     |	      |	       | 	|	
	  [0][3] | [0][4] | [0][5] | [1][3] | [1][4] | [1][5] | [2][3] | [2][4] | [2][5]     
	 ________|________|________|________|________|________|________|________|________
	 	 |	  |	   |	    |	     |	      |	       | 	|	
	  [0][6] | [0][7] | [0][8] | [1][6] | [1][7] | [1][8] | [2][6] | [2][7] | [2][8]     
	 ________|________|________|________|________|________|________|________|________
	 	 |	  |	   |	    |	     |	      |	       | 	|	
	  [3][0] | [3][1] | [3][2] | [4][0] | [4][1] | [4][2] | [5][0] | [5][1] | [5][2]     
	 ________|________|________|________|________|________|________|________|________
	  	 |	  |	   |	    |	     |	      |	       | 	|	
	  [3][3] | [3][4] | [3][5] | [4][3] | [4][4] | [4][5] | [5][3] | [5][4] | [5][5]     
	 ________|________|________|________|________|________|________|________|________
	  	 |	  |	   |	    |	     |	      |	       | 	|	
	  [3][6] | [3][7] | [3][8] | [4][6] | [4][7] | [4][8] | [5][6] | [5][7] | [5][8]     
	 ________|________|________|________|________|________|________|________|________
	 	 |	  |	   |	    |	     |	      |	       | 	|	
	  [6][0] | [6][1] | [6][2] | [7][0] | [7][1] | [7][2] | [8][0] | [8][1] | [8][2]     
	 ________|________|________|________|________|________|________|________|________
	  	 |	  |	   |	    |	     |	      |	       | 	|	
	  [6][3] | [6][4] | [6][5] | [7][3] | [7][4] | [7][5] | [8][3] | [8][4] | [8][5]     
	 ________|________|________|________|________|________|________|________|________
	  	 |	  |	   |	    |	     |	      |	       | 	|	
	  [6][6] | [6][7] | [6][8] | [7][6] | [7][7] | [7][8] | [8][6] | [8][7] | [8][8]     
	         |        |        |        |        |        |        |        |      
	*/



	 
}

function fixedOrBlank(){
	//takes the 9 x 9 array and passes into a new array with some indices wiped out. saves original array as answers
}

function editUnit(){
	//make units with 0 values editable
}

function makeBoard(callback){
	
	//make a 3 x 3 table, then 3 x 3 within each td to make the full board. while making the board, pass in the array holding the fixed pieces
	var x = 0;
	var y = 0;
	var localGrid = document.getElementById("game");
	var bValues = boardValues();
	for (var i = 0;	i < 3; i++){
		var blockRow = localGrid.appendChild(document.createElement("tr"));
		for (var j = 0; j < 3; j++){
			var blockColumn = blockRow.appendChild(document.createElement("td"));
			for (var k = 0; k < 3; k++){
				var unitRow = blockColumn.appendChild(document.createElement("tr"));
				for (var m = 0; m < 3; m++){
					var unit = unitRow.appendChild(document.createElement("td"));
					if (bValues[x][y] !== 0){
						unit.innerHTML = bValues[x][y];
					} else {
						var edit = unit.appendChild(document.createElement("input"));
						edit.className = "inputSpace";
						edit.maxlength=1;
					}
					unit.addEventListener("click",(function(unit,bValues,x,y){
						return function(){
							callback(unit,bValues,x,y);
						}
					})(unit,bValues,x,y),false);
					y++;
					if (y === 9){
						y = 0;
					}

				}
			}
			x++;
		}
	}
}




