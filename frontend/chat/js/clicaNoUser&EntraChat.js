(function(){
    if(window.matchMedia("(max-width: 45em").matches){
        var $ul = document.querySelector(".ul-nav");
        $ul.addEventListener("click", function(e){
            if(e.target.nodeName === "LI" || e.target.nodeName === "P" || e.target.nodeName === "IMG"){
                var $chatNav = document.querySelector(".chat-nav");
                var $chatArea = document.querySelector(".chat-area");
                var $input = document.querySelector(".input");
                var $inputS = document.querySelector(".inputS");
                var $voltar = document.querySelector(".voltar");
                if($chatNav.className === "chat-nav mostraNav"){
                    $chatNav.classList.replace("mostraNav", "escondeNav");
                }
                else{
                    $chatNav.classList.toggle("escondeNav");
                }
                $chatArea.classList.toggle("mostraChat");
                $input.classList.toggle("mostraChat");
                $inputS.classList.toggle("mostraChat");
                $voltar.classList.toggle("mostraChat");
            }
        })
    }
})()