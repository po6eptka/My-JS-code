//var sumofmany=parseInt(Number(prompt("сколько у вас денег?")));
//var hmapple=Number(prompt("сколько яблок вы купили?"));
//var hmbread=Number(prompt("сколько штук хлеба вы взяли?"));
//var sumcoinofapple=parseInt(Number(prompt("сколько стоит одно яблоко?"))*hmapple);
//var sumcoinofbread=parseInt(Number(prompt("сколько стоит один хлеб?"))*hmbread);
//var justdochoose=Boolean(sumofmany>=sumcoinofapple+sumcoinofbread);
//document.write(justdochoose);

//вопросы//
let sumofmany=parseInt(Number(prompt("сколько у вас денег?")));
let hmapple=Number(prompt("сколько яблок вы купили?"));
let hmbread=Number(prompt("сколько штук хлеба вы взяли?"));
let coinofapple=parseInt(Number(prompt("сколько стоит одно яблоко?")));
let coinofbread=parseInt(Number(prompt("сколько стоит один хлеб?")));



let haveEnough = function (sumofmany, hmapple, hmbread, coinofapple, coinofbread) {
      var justdochoose = Boolean(sumofmany >= (hmapple*coinofapple+hmbread*coinofbread));
}

if justdochoose 
