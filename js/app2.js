var numbers;
var unit = 0;

function nothing(){
for (var r = 0; r < 9; r++){
	for (var c = 0; c < 9; c++){
		numbers[r][c] = unit;
		unit++;
	}
}
}

nothing();

console.log(numbers);
