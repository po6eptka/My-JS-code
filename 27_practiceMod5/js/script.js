console.log('You are at' +window.location); 
//<!-- текст -->//
let blockWidthOne = document.querySelector('.first.block');
let blockWidthTwo = document.querySelector('.second.block');
let blockWidthThree = document.querySelector('.third.block');

//blockWidthOne.style.width = '50px';

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

//console.log(crypto[0].price / crypto[1].price);
//let varOne = Math.floor(crypto[0].price / crypto[1].price);
//console.log(varOne);

blockWidthOne.style.width = (crypto[0].price / crypto[2].price)*100 +'px';
blockWidthTwo.style.width = (crypto[1].price / crypto[2].price)*100 +'px';
blockWidthThree.style.width = 1*100 +'px';

