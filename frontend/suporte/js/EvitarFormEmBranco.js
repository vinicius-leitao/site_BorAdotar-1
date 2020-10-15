(function () { 
    "use strict";

    var $form = document.querySelector("form");
    var $txtNome = document.querySelector(".nome");
    var $txtEmail = document.querySelector(".email");
    var $txtArea =document.querySelector(".msg");

    $form.addEventListener("submit", function(e){
        if(!$txtNome.value || !$txtEmail.value || !$txtArea.value){
            e.stopPropagation();
            e.preventDefault();
        }
    })
})();