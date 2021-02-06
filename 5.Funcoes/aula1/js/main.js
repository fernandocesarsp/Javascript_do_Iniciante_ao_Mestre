// Literal
function somar(n1, n2) {
    // Corpo da função
    return n1 + n2;
}

var soma = somar(10, 20);
console.log('Resultado: ', soma);

somar.teste = 'propriedade da função';
console.log(somar.teste);

var teste = function(f) {
    f();
};

teste(function(){
    console.log('Função passada por parâmetro')
});

console.log('-----------------');

var x = 0;
var y;

function mostraX() {
    var x = 10; // Escopo local
    var y = 20;
    console.log('Mostra x dentro: ', x);
    console.log('Mostra y dentro: ', y);
}

mostraX();
console.log('Mostra x fora: ', x)
console.log('Mostra y fora: ', y)


//IFEE Funções autoinvocáveis
(function(){
    var isValid = false;
})();

console.log(isValid);

