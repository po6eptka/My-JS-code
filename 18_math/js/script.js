console.log('You are at' +window.location); 

//<!-- текст -->//

function moduleSquare(num) {
	return Math.abs(num)/2;
}

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(3.545));
console.log(Math.round(3.545));

console.log(Math.random());

console.log(Math.random()*(10-5)+5);

console.log(Math.floor(Math.random()*(10-5)+5));

//задание

function taskMy(number) {
	return Math.abs((number)**Math.random()*(10-1)+1);
}


console.log(taskMy(8));