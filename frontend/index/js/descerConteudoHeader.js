(function(){
   
    var $span = document.querySelector(".icon-menu3");
    var $header_bar = document.querySelector(".header-bar");
    $span.addEventListener("click", function(){
        $header_bar.classList.toggle("desceHeader");
    })
})()