(function(){
    function calcularMedia() {

        var total = 0;
        var qtd = arguments.length;
        var x = 0;

        //while(typeof arguments[x])
        while(typeof arguments[x] === 'number') {
            total += arguments[x];
            x++;
        }

        return total / qtd;
    }
    var media1 = calcularMedia(2, 3);
    var media2 = calcularMedia(4, 0, 10, 10);

    console.log('media1: ', media1);
    console.log('media2: ', media2);
})();

// Desafio 

/*
    Crie uma função que retorne o índice de massa corporal (IMC);
    Crie uma outra função que receba este índice e retorne uma string informando sua classificação. 
*/

