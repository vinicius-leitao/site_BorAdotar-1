(function(){
    var $ul = document.querySelector(".topicos");
    $ul.addEventListener("click", function(e){
        if(e.target.nodeName === "LI"){
        var $p = e.target.parentElement.querySelector("p");
            if($p.style.display === "none" || $p.style.display === ""){
                $p.style.display = "block";
            }
            else{
                $p.style.display = "none";
            }
        }
    })
})();