//document.addEventListener('DOMContentLoaded', function() {
   // your code here
//}, false);
//const form = document.forms[0];
const APIkey = 'b6907d289e10d714a6e88b30761fae22';
const city = 'Москва';
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness+1; 
	}
	hasRest() {
		return this.happiness+1; 
	}
	hasMoney() {
		return this.happiness+1; 
	}
	isSunny() {
		let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        let DATA = JSON.parse(xhr.responseText);
		if (DATA.main.temp>15) {
			return this.happiness+1;
		} 
		else {
			return this.happiness;
		}
	}
}

form.onsubmit = function(e) {

	e.preventDefault();
	//let rbc = document.getElementsByName("cat");
    let userName = document.getElementsByName("name");
	let animal = form.elements.cat;
	let relax = form.elements.rest;
	let cash = form.elements.money;

	let nameOfUser = document.querySelector('.personName');
	let happinesImage = document.querySelector('.icon');
	
	const usersInput = new Person ('userName ' + ' :');
	if (animal[0].checked && relax[0].checked && cash[0].checked) {
		Person.hasCat();
		Person.hasRest();
		Person.hasMoney();
}
	Person.isSunny();
  /*
	if (happiness = 4) {
		happinesImage.style.backgroungImage = "url(img/smile.png)";
	}else if (happiness = 3 || happiness = 2) {
		happinesImage.style.backgroungImage = "url(img/neutral.jpg)";
	}else {
		happinesImage.style.backgroungImage = "url(img/sad.png)";
	}
	*/
}

