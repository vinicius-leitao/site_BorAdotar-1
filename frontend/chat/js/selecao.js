window.addEventListener("load", function(){

    const users = document.querySelectorAll(".a");
    console.log("ola")
    users.forEach(user => {
        user.addEventListener("click", function(){
            console.log("ola")
            users.forEach(props => props.classList.remove("user-active"));
            SelectUser(this);
        });
    });
    function SelectUser(user){

        user.classList.add("user-active");
    }
})
