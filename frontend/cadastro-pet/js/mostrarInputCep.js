(function(){
    var $chk = document.getElementById("local");
    $chk.addEventListener("change", function(){
        var $input = document.querySelector(".inputCep");
        var $label = document.querySelector(".cepL");
        if($chk.checked){
            $input.classList.remove("mostraCep");
            $label.classList.remove("mostraCep");
        }
        else{
            $input.classList.add("mostraCep");
            $label.classList.add("mostraCep");
        }
    })
})()