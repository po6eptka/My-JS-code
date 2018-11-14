//только после погрузки всего окна
document.addEventListener('DOMContentLoaded', function() {

//объявление переменных
const APIkey = 'b6907d289e10d714a6e88b30761fae22';
const city = 'Москва';
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;  


//класс с методами
class Person {
	constructor (name) {
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
//отправили запрос
		let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        let DATA = JSON.parse(xhr.responseText);
        console.log(DATA);
        if (DATA.main.temp>15) {
			return this.happiness+1;
		}
		else {
			return this.happiness;
		}
	}
}

//КАК ВЫЗВАТЬ МЕТОДЫ ИЗ КЛАССА ВЫШЕ? ВСЕГДА ВЫДАЕТ ЗНАЧЕНИЕ happiness =4
//действия по сабмиту формы. Делаю onclick, потому что при onsubmit все крашится
elem.onclick = function(e) { 
	e.preventDefault();
    let userName = document.querySelector(".test").value;
	let nameOfUser = document.querySelector('.personName');
	let happinesImage = document.querySelector('.icon');

	//создание нового экземпляра
	const usersInput = new Person ('userName');
	nameOfUser.innerHTML = userName;

//проверка радиобаттонов
if (document.querySelector(".patyes").checked && document.querySelector(".sochiyes").checked && document.querySelector(".bossyes").checked) {
	    usersInput.hasCat();
		usersInput.hasRest();
		usersInput.hasMoney();
}else if (document.querySelector(".patyes").checked && document.querySelector(".sochiyes").checked){
	    usersInput.hasCat();
		usersInput.hasRest();
}else if (document.querySelector(".sochiyes").checked && document.querySelector(".bossyes").checked){
		usersInput.hasRest();
	    usersInput.hasMoney();

}else if (document.querySelector(".patyes").checked && document.querySelector(".bossyes").checked){
	    usersInput.hasCat();
	    usersInput.hasMoney();
}else if (document.querySelector(".patno").checked && document.querySelector(".sochino").checked){
	    usersInput.hasMoney();

}else if (document.querySelector(".patno").checked && document.querySelector(".bossno").checked){
	    usersInput.hasRest(); 
	     
}else if (document.querySelector(".sochino").checked && document.querySelector(".bossno").checked){
	    usersInput.hasCat(); 
}else if (document.querySelector(".patno").checked && document.querySelector(".sochino").checked && document.querySelector(".bossno").checked){
	    alert ("взбодрись!");
}else {
	alert ("hello!");  
}

usersInput.isSunny();


    //присвоение значений и смена картинки
    if (happiness = 4) {
    	happinesImage.innerHTML = '😁';
	}else if(happiness = 3) {
		happinesImage.innerHTML = '😐';
	}
	else if(happiness = 2) {
		happinesImage.innerHTML = '😐';
	}
	else {
		happinesImage.innerHTML = '☹️';
	}
	
  };

}, false);