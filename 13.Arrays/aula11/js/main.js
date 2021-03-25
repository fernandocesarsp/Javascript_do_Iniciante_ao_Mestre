
    var paragrafos = document.querySelectorAll('p');

    for(var i = 0; i < paragrafos.length; i++) {

        var temJS = paragrafos[i].textContent.toLowerCase().indexOf('javascript') >= 0;

        paragrafos[i].className = temJS ? 'destaque' : '';
    }

   
