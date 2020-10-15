(function(){
    const $especie = document.querySelector(".especie");
    const $select = document.querySelector(".idadePet");
    $select.setAttribute("disabled", "disabled");
    $especie.addEventListener("change", function(e){
        if($especie.value === "Cachorro" && $especie.value!="default"){
            $select.removeAttribute("disabled");
            $select.innerHTML = '<option value="default">Selecione</option> <option value="none">Não sei informar</option> <option value="filhote">Até 6 meses</option> <option value="jovem">De 7 meses a 3 anos</option> <option value="adulto">De 4 a 9 anos</option>  <option value="idoso">10 ou mais anos</option>'
        }
        else if($especie.value === "Gato" && $especie.value!="default"){
            $select.removeAttribute("disabled");
            $select.innerHTML = '<option value="default">Selecione</option> <option value="none">Não sei informar</option> <option value="filhote">Até 6 meses</option> <option value="junior">De 7 meses a 2 anos</option> <option value="jovem">De 3 a 6 anos</option>  <option value="adulto">De 7 a 10 anos</option> <option value="senior">De 11 a 14 anos</option> <option value="idoso">15 anos ou mais</option>'
        }
        else{
            $select.setAttribute("disabled", "disabled");
            $select.textContent = " ";
        }
    })
})()                    
