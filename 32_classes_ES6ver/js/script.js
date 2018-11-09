class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello '+this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Привет, '+this.name+'! ты зарегистрирована';
	}
}

const Man = new User ('someone', 'ada@mail.ru', 'qwerty');
console.log(Man);
console.log(Man.sayHi());

const Anya = new Female ('Аня', 'fkhajfka@gmail.com', 'fdf4523');
console.log(Anya);
console.log(Anya.sayHi());