window.addEventListener("load", function(){
    const ImgSelect = document.querySelectorAll('img');
    ImgSelect.forEach(img => {
        img.addEventListener('click', function(){
            ImgSelect.forEach( border => border.classList.remove('img-border'));
            this.classList.add('img-border');
            TrocarImagens(this);
        });
    });
})

function TrocarImagens(img){
    let imgClicked = img.getAttribute('src');
    let imgSelected = document.querySelector('.img-focus');

    imgSelected.src = imgClicked;

}
