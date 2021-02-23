var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

btn2.onclick = clicar;

function clicar() {
    alert("Clicou");

    return function() {
        alert('Clicou 2');
    }
}

btn3.addEventListener("click", function(){
    alert('Clicou com o Dom nível 2');
});
btn3.addEventListener("click", function(){
    alert('Clicou com o Dom nível 2 com outro evento');
});

btn3.onclick = function() {
    alert('Olá');
}
btn3.onclick = function() {
    alert('Mundo');
}

var $d1 = document.getElementById('d1');
var $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function() {
    console.log('Clique no d1');
}, true);

$d1Span.addEventListener('click', function() {
    console.log('Clique no d1Span');
}, true);

document.addEventListener('click', function() {
    console.log('Clique no document');
}, true);







