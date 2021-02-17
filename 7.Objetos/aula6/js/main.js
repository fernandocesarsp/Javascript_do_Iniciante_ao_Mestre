
var Caneta = (function(window){
    'use strict';
    console.log(this);
    function _caneta(preco, cor) {
    
        var color = cor || 'black';
        this.preco = preco || 1;
    
        this.mudarCor = function(cor) {
            if(cor !== 'red' && cor !== 'blue' && cor !== 'black') {
                return;
            }
            color = cor;
        }
    
        this.pegaCor = function() {
            return color;
        }
    
    }
    
    return _caneta;

})(window);

























