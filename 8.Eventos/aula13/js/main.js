(function() {
    'use strict';
    
    var $btn = document.querySelector('#btn');
    var $chk = document.getElementById('chk');
   
    toggleBtn();
    $chk.addEventListener('change', function() {
        /*
        if(this.checked) {
            $btn.disabled = false;
        } else {
            $btn.disabled = true;
        }
        */
       toggleBtn();

    });

    function toggleBtn() {
        $btn.disabled  = !$chk.checked;
    }


})();





