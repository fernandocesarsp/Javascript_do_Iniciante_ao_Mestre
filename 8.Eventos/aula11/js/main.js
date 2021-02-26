(function() {
    'use strict';
    
    //console.log(hhdhdhd);
    
    var $txtMsg = document.querySelector('#msg');
    var $restaContainer = document.querySelector('#restaContainer');
    var $resta = document.getElementById('resta');
    
    var maxima = $txtMsg.maxLength;

    $restaContainer.style.display = 'block';
    $resta.textContent = maxima;


    $txtMsg.addEventListener('input', checkLength);

 

    function checkLength(e) {
       var numeroLetrasDigitadas = this.value.length;
       $resta.textContent = maxima - numeroLetrasDigitadas;

    }

})();





