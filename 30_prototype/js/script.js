console.log('You are at' +window.location); 
//<!-- текст -->//

let Animal = {
	canEat: true,
	hasParents: true,
	legs: 4
}

let Cow = {
     givesMilk: true,
     __proto__: Animal
}

console.log(Cow.givesMilk);
console.log(Cow.canEat);

for(key in Cow) {
	console.log(key);
}