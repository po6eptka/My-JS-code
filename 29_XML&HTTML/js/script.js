const APIkey = 'b6907d289e10d714a6e88b30761fae22';
const city = 'Альметьевск';
const url = 'https://openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
//let userCity = querySelector('randomcity');

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
}
else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp);
}

