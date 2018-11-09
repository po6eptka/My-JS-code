const APIkey = 'b6907d289e10d714a6e88b30761fae22';
const form = document.forms[0];
console.log(form);
const insert = document.querySelector('.total');
const city = form.elements.randomcity.value; // как задать input в переменной?
//console.log(city);
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
//let userCity = querySelector('randomcity');
//document.querySelector('.forAnswer').value;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
}
else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	insert.innerHTML = DATA.main.temp; //так ли вывод?
	/*document.write(DATA.main.temp);*/
}

/*form.onsubmit = function(e){
	e.preventDefault();
	insert.innerHTML = ;
}*/


