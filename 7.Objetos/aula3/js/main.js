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
    debugger;
    var n2 = n;
    console.log(++n2);
}
mudaN(n);
console.log(n);
