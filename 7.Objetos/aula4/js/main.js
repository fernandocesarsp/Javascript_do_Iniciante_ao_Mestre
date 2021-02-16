// Construtores

var hoje = new Date();

var x = [0];

function mudaArr(x) {
    var y = x;
    y.push(2);
    x.push(3);
    console.log('mudaX: ', y);
    console.log(x);
    console.log(y);
}

mudaArr(x);

console.log('x: ');
console.log(x);


console.log('-----------');

var n = 0;
function mudaN(n) {
    var n2 = n;
    console.log(++n2);
}
mudaN(n);
console.log(n);

console.log('---------------');


function mudaCor(cor) {
    console.log(this);
    this.cor = cor;
}


var caneta1 = {
    cor: 'red',
    preco: 2,
    mudarCor: mudaCor
}

var caneta2 = {
    cor: 'blue',
    preco: 1,
    mudarCor: mudaCor
}

caneta1.mudarCor('green');
console.log(caneta1);
console.log(caneta2);

var caneta3 = new caneta();