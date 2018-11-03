console.log('You are at' +window.location); 


var a = 'hi'; 

function myFunc() {
	a = 'hello'; 
	return a; 
}
console.log (a); 

function myFunc2() {
	var b=3;
	console.log(b);
}
myFunc2();

if(true) {
	var c=5;//видно на глобальном уровне 
	let d=6;//видно только внутри функции
}

console.log(c);
//console.log(d);//ошибка видимости 

