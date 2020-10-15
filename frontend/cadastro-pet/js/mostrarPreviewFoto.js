(function(){
    var inputPreview = document.querySelector(".inputImg");
    inputPreview.addEventListener("change", previewFiles);
    function previewFiles(){
    var container = document.querySelector(".preview-container");
    var files = inputPreview.files;
    function readAndPreview(file){
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            var image = new Image();
            image.classList.add("uploadedImg");
            image.alt = "Foto deve conter animais de estimação em processo de adoção";
            image.src = this.result;
            container.appendChild(image);
        }, false);
        reader.readAsDataURL(file);
    }
    if(files){
        [].forEach.call(files, readAndPreview);
    }
    }
})()