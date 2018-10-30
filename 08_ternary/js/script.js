console.log('You are at' +window.location); 

let answer = prompt('Введите число?');
answer = parseInt(answer); 


(answer>=0) ? console.log(answer) : console.log(Math.abs(answer));
