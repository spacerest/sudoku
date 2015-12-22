/*var david = document.body.appendChild(document.createElement("table").appendChild(document.createElement("tr")).appendChild(document.createElement("td")));

var testFunc = function(whatWord,whatClass){
david.innerHTML = whatWord;
david.className = whatClass;
}

for (var i = 0; i<10; ++i){
testFunc(i,"grid");
}; - - - when i run this, it overwrites table every time - not new cells*/

var lastClicked;
var height = 10;
var width = 10;
var grid = clickableGrid(height,width,function(element,row,col,item){
	console.log("You clicked on element: ", element);
	console.log("You clicked on row: ", row);
	console.log("You clicked on col: ", col);
	console.log("You clicked on item #: ", item);

	element.className = "clicker";
	if (lastClicked) lastClicked.className="";
	lastClicked = element;
});

/* #1 */ document.body.appendChild(grid);

/* #2 */ function clickableGrid(rows,cols,callback){
	var iii = 0;
	var localGrid = document.createElement("table");
	localGrid.className = "grid";
/* a */ 	for (var rrr = 0; rrr < rows; ++rrr){
		var tr = localGrid.appendChild(document.createElement("tr"));
			for (var ccc = 0; ccc < cols; ++ccc){
				var cell = tr.appendChild(document.createElement("td"));
					cell.innerHTML = ++iii;
					cell.addEventListener("click",(function(el,rrr,ccc,iii){
						return function(){
							callback(el,rrr,ccc,iii);
						}
					})(cell,rrr,ccc,iii),false);
			}
		}
		return localGrid;
}
