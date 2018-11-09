const form = document.forms[0];

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
		if (тепература>15) {
			return this.happiness+1;
		} 
		else {
			return this.happiness;
		}
	}
}

form.onsubmit = function(e){
	e.preventDefault();