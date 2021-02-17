var pessoa1 = {
    nome: 'Fernando',
    sobrenome: 'César'
};
var pessoa2 = {
    nome: 'Thais',
    sobrenome: 'Santos'
};
var pessoa3 = {
    nome: 'João',
    sobrenome: 'Martins'
};
 
console.log(pessoa1.nome + ' ' + pessoa1.sobrenome);
console.log(pessoa2.nome + ' ' + pessoa2.sobrenome);
console.log(pessoa3.nome + ' ' + pessoa3.sobrenome);



for (var i = 1; i <= 3; i++) {
    console.log(window['pessoa'+i].nome + ' ' + window['pessoa'+i].sobrenome);
}






















