//фон//
const forBody = document.querySelector('body'); 
let colorQuetion = prompt ('Какой будет фон у страницы?');
forBody.style['background-color'] = colorQuetion; 

//шрифт//
const fontscolor = document.querySelector('body'); 
let coloroffontQuetion = prompt('Какой будет цвет текста на странице?'); 
fontscolor.style['color'] = coloroffontQuetion; 

//name//
let nameofperson = document.querySelector('header');
let nameofpersonQuetion = prompt('Как зовут человека, который вас вдохновляет?'); 
nameofperson.innerHTML = "<h1>The person who inspires me is:<h1>" + nameofpersonQuetion;

//imgadress//
let varforimg = document.querySelector('img');
let enterimgadress = prompt('Введите адрес картинки'); 
varforimg.setAttribute('src', 'enterimgadress');
console.log(varforimg.setAttribute('src', 'enterimgadress'));

//textonpage//
let textvar = document.querySelector('p');
let entertext = prompt('Введите текст страницы');
textvar.innerHTML = entertext; 

//animated//
const varforanimate = document.querySelector('.shortBio');
console.log(varforanimate.className);
varforanimate.className += ' animated';
