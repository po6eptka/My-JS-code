console.log('You are at' +window.location); 

class Custumer {
	constructor (name, purchase) {
		this.name = name;
		this.purchase = purchase; 
	}
		sayBuy() {
			return 'Куплено, '+this.name+'!';
		}
	}


class childCustumer extends Custumer {
	getPresent() {
		return 'Шарик в подарок'
	}
}

const Vera = new childCustumer ('Вера' , 'игрушки');
console.log(Vera);
console.log(Vera.sayBuy());
console.log(Vera.getPresent());