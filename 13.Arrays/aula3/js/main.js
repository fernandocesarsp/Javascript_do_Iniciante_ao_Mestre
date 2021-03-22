//Forma literal
/*
var arr = new Array(0,2,3, 'ioo');
console.log(arr);
*/

var arr = ['1',20,3,4,5, 'kkkj', 20, '30'];

var sohNumeros = arr.every( function(el) {
    return typeof el === 'number';
} ); 
console.log(sohNumeros);

//************** */

var aoMenosUmNumero = arr.some( function(el) {
    return typeof el === 'number';
} ); 
console.log(aoMenosUmNumero);

var numeros = arr.filter(function(el, i, arr) {
    return typeof el === 'number';
});
console.log(numeros);

arr.forEach(function(el, i, arr) {
  console.log('el = ', el, ' | indice = ', i, ' | i - ', arr.toString());
});
console.log('------------------');

var posicaoStr1 = arr.indexOf(20, 5);
console.log('posicaoStr1', posicaoStr1);

var posicaoStr2 = arr.lastIndexOf(20, 5);
console.log('posicaoStr2', posicaoStr2);

console.log(numeros);
numeros = numeros.map(function(el, i, arr) {
    return el * i;
});
console.log(numeros);

console.log(arr);
var arr2 = arr.concat(numeros, 'Olá', 'array2', 100);
console.log(arr2);

var str = arr2.join(' -- ');
console.log(str);

arr.push('Novo', 'item');
console.log(arr);

var ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

var primeiroItem = arr.shift();
console.log(primeiroItem);
console.log(arr);

arr.unshift(true, false, 'unshift');
console.log(arr);
