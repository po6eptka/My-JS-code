console.log(this);

window.oncroll = function() {console.log(this);}

const button = document.querySelector('button');

button.onclick = function(){
	this.innerHTML = 'Pressed';
}

/*button.onclick = () => {
	console.log(this);
}*/ 
//данную конструкцию не видно, потому что this и стрелочная не работают вместе. При использовании this как селектора только при function