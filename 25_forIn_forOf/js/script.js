console.log('You are at' +window.location); 

//<!-- текст -->//

const buttons = document.querySelectorAll('button');

for(button of buttons) {
	button.style.backgroundColor = 'red';
}

let person = {
	name:'Rob',
	surname: 'Kalimullin',
	student: true
}

for(key in person) {
	console.log(person[key]);
}