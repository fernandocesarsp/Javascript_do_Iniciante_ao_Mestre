(function() {
    window.addEventListener('load', init);
    
    function init() {
      var n = sortear(5) + 1;

      document.querySelector('body').style.backgroundImage = "url(images/" + n +  ".jpg)";
    }

}) ();
