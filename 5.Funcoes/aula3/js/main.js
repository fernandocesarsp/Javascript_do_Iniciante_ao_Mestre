

//IFEE Funções autoinvocáveis
(function(){
    'use strict';
    var isValid = false;
    console.log(isValid);

    function somar(){
        console.log(arguments);
        var result = 0;
        var x = 0;
        while(arguments[x]) {
            result+= arguments[x];
            x++;
        }
        console.log('result: ', result);
    }
    somar(20, 20, 10, 5, 5, 15);
})();



