const APIkey = 'b6907d289e10d714a6e88b30761fae22';
//взял переменную из инпута 
let userCity = document.querySelector('.forAnswer').value;
const url = 'https://openweathermap.org/data/2.5/weather?q='+userCity+'&appid='+APIkey;

//создал и настроил запрос
let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);

//отправи запрос
xhr.send();


//вывод на страницу
if(xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
}
else {
	let DATA = JSON.parse(xhr.responseText);
	let insert = document.querySelector('.total');
	insert.innerHTML = DATA.main.temp;
}

