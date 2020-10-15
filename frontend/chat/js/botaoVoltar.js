(function(){
    if(window.matchMedia("(max-width: 49.99em").matches){
    var $voltar = document.querySelector(".voltar");
    $voltar.addEventListener("click", function(){
        var $chatNav= document.querySelector(".chat-nav");
        if($chatNav.className === "chat-nav escondeNav"){
           var $chatArea = document.querySelector(".chat-area");
           var  $input = document.querySelector(".input");
           var $inputS = document.querySelector(".inputS");
           var $voltar = document.querySelector(".voltar");
            $chatNav.classList.replace("escondeNav", "mostraNav");
            $chatArea.classList.toggle("mostraChat");
            $input.classList.toggle("mostraChat");
            $inputS.classList.toggle("mostraChat");
            $voltar.classList.toggle("mostraChat");
        }
    })
}
})()