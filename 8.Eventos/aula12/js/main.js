(function() {
    'use strict';
    
    //console.log(hhdhdhd);
    
    var $txtMsg = document.querySelector('#msg');
    var $restaContainer = document.querySelector('#restaContainer');
    var $resta = document.getElementById('resta');
    
    var maxima = $txtMsg.maxLength;

    function mostrarContainerResta() {
        $restaContainer.style.display = 'block';

    }

    mostrarContainerResta();
    showCaractersLeft(maxima);
    $txtMsg.addEventListener('input', checkLength);

 

    function checkLength(e) {
       var numeroLetrasDigitadas = this.value.length;
       var caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);

       showCaractersLeft(caracteresRestantes);

    }

    function showCaractersLeft(n) {
        $resta.textContent = n;
    }

})();





