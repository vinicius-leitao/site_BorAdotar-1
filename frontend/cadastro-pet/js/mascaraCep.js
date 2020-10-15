(function(){
    var $inputCep = document.querySelector(".inputCep");
    $inputCep.addEventListener("keyup", function(e){
        e.preventDefault();
        var valor = $inputCep.value;
        if(valor.length <= 9){
        var num = mCEP(valor);
        $inputCep.value = num;
        }
        function mCEP(cep){
            cep=cep.replace(/\D/g,"");
            cep=cep.replace(/^(\d{5})(\d)/,"$1-$2");
            return cep;
        }
    });
})()
