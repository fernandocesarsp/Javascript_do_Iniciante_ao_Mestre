// Desafio 

/*
    Crie uma função que retorne o índice de massa corporal (IMC);
    Crie uma outra função que receba este índice e retorne uma string informando sua classificação. 
*/

(function(){
   function calcularIMC(peso, altura, callback) {
       var imc =  peso / (altura * altura);

       if (callback && typeof callback === 'function') {
           return callback(imc);
       }
       console.log('Não passou o callback');
       return imc;
   }

   function classificaIMC(imc) {

       if (imc <= 16.9) {
           return 'Muito abaixo do peso';
       } else if (imc <= 18.4) {
           return 'Abaixo do peso';
       } else if (imc <= 24.9) {
           return 'Normal';
       } else if (imc <= 29.9) {
           return 'Acima do peso';
       } else if (imc <= 34.9) {
           return 'Obesidade 1';
       } else if (imc <= 40) {
           return 'Obesidade 2';
       } else {
           return 'Obesidade 3';
       }
   }

   var peso = 65;
   var altura = 1.75;

   var imc = calcularIMC(peso, altura, classificaIMC)
   var classificacao = classificaIMC(calcularIMC(peso, altura));
   
   console.log('classificação IMC: ', imc);

})();