
//это и есть объект, который будет как прототип
let Users = {
	hasAccesToProfile: true, 
	approved: true,
	sayHi: function() {return 'Привет'}
}

function User (name, email, password) {
	//конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;

}
//пришел какой-то объект со своими параметрами
const Fedya = new User('Федя', 'f@ex.com', 'qwerty');

console.log(Fedya);
console.log(Fedya.sayHi());

//создаем девушка с другим приветствием 
function FUser (name, email, password) {
	//конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function() {return 'Привет, '+ this.name+'! Ты зарегистраирована'}
}

const Alla = new FUser ('Алла', 'alx@ya.ru', '12345');
console.log(Alla);
console.log(Alla.sayHi());
