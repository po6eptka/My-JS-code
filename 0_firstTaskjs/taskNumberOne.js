var sumofmany=parseInt(Number(prompt("сколько у вас денег?")));
var hmapple=Number(prompt("сколько яблок вы купили?"));
var hmbread=Number(prompt("сколько штук хлеба вы взяли?"));
var sumcoinofapple=parseInt(Number(prompt("сколько стоит одно яблоко?"))*hmapple);
var sumcoinofbread=parseInt(Number(prompt("сколько стоит один хлеб?"))*hmbread);
var justdochoose=Boolean(sumofmany>sumcoinofapple+sumcoinofbread);
document.write(justdochoose);

//теорема Коши//