console.log('Testando o meu código');

var n1 = prompt('digite um numero');
n1 = parseInt(n1);
                        
escreve();
            
function escreve() {
   console.log('---------');
   console.log(n1);
}
            
            
function calcular(simbolo){
    var n = prompt('digite outro numero');
    n = parseInt(n);

    switch(simbolo){
        case '+':
            n1 = n1 + n;
            break;
        case '-':
            n1 = n1 - n;
            break;
        case '*':
            n1 = n1 * n;
            break;
        case '/':
            n1 = n1 / n;
    }
                
escreve();                
}