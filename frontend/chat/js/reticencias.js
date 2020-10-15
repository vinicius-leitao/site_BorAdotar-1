(function(){
    var $msg = document.querySelectorAll(".msg");
    var x = 0;
    while($msg[x]){
    if($msg[x].textContent.length > 30){
        $msg[x].textContent = $msg[x].textContent.substring(0, 29) + "..."; 
    }
    x++
    }
})()