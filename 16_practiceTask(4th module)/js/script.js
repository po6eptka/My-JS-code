
console.log('You are at' +window.location); 

const button = document.querySelector('.request');
const mainBlock = document.querySelector('.popup');
const closeButton = document.querySelector('.closePopup');
const openMenuButton = document.querySelector('.openMenu');
const menuOnPage = document.querySelector('.menu');
const closeMenuButton = document.querySelector('.closeMenu');



button.addEventListener ('click', function() {
	mainBlock.style.display = 'block';
} )

closeButton.addEventListener ('click', function(){
    mainBlock.style.display = 'none';
})

openMenuButton.addEventListener ('click', function() {
	menuOnPage.style.left = '0';
} )

closeMenuButton.addEventListener ('click', function() {
	menuOnPage.style.left = '-50vw';
} )