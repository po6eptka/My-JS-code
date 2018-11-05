console.log('You are at' +window.location); 

//<!-- текст -->//

//const cools = document.getElementsByClassName('cool');
const cools = document.querySelectorAll('.cool');
console.log(cools);

cools[0].innerHTML = 'I am the first';