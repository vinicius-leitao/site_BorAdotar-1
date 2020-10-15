(function(){
    var $labels = document.querySelectorAll(".iconeTam");
   
        $labels[0].firstChild.addEventListener("change", function(e){
            e.stopPropagation;
            if($labels[1].className !== "iconeTam med mudaCor" && $labels[2].className !== "iconeTam gra mudaCor" && $labels[0].firstChild.checked){
                console.log($labels[1].className);
                $labels[0].classList.toggle("mudaCor");
            }
            else if($labels[1].className === "iconeTam med mudaCor" || $labels[2].className === "iconeTam gra mudaCor" && $labels[0].firstChild.checked){
                $labels[1].classList.remove("mudaCor");
                $labels[2].classList.remove("mudaCor");
                $labels[0].classList.toggle("mudaCor");
            }
        })
        $labels[1].firstChild.addEventListener("change", function(e){
            if($labels[0].className !== "iconeTam peq mudaCor" && $labels[2].className !=="iconeTam gra mudaCor" && $labels[1].firstChild.checked){
            $labels[1].classList.toggle("mudaCor");
            }
            else if($labels[0].className === "iconeTam peq mudaCor" || $labels[2].className ==="iconeTam gra mudaCor" && $labels[1].firstChild.checked){
                $labels[0].classList.remove("mudaCor");
                $labels[2].classList.remove("mudaCor");
                $labels[1].classList.toggle("mudaCor");
            }
            
        })
        $labels[2].firstChild.addEventListener("change", function(e){
            if($labels[0].className !== "iconeTam peq mudaCor" && $labels[1].className !=="iconeTam med mudaCor" && $labels[2].firstChild.checked){
            $labels[2].classList.toggle("mudaCor");
            }
            else if($labels[0].className === "iconeTam peq mudaCor" || $labels[1].className ==="iconeTam med mudaCor" && $labels[2].firstChild.checked){
                $labels[0].classList.remove("mudaCor");
                $labels[1].classList.remove("mudaCor");
                $labels[2].classList.toggle("mudaCor");
            }
        })
})()