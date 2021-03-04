var $html = document.querySelector('.js');
var btn = document.querySelector('#btnH');


btn.addEventListener('click', function() {
    $html.classList.toggle('menu-opened');
});

