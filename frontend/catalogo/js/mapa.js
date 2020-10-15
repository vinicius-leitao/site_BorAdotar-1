(function(){
    // Pegando a referência do container
    var container = document.getElementById("mapa");
    //Checando se o container existe para a introdução do mapa
    if(container) {
     //Verificando se o usuário está logado. O mapa exibirá a partir do ponto mais proximo dele. Caso não esteja, exibirá uma coordenada padrão do Rio de Janeiro; 
        axios.get("http://localhost:3000/catalogo").then(response => {
            let user 
            let location
            if(response.headers.user == "undefined"){
            } else {
                user = JSON.parse(response.headers.user)
            } 
            if(user !== undefined){
                location = JSON.parse(user.location)
            }
            if(response.headers.logged !== "false"){
                //Inserindo o mapa com ponto de vista mais próximo do usuário.
                var mymap = L.map('mapa').setView([location[0].lat, location[0].lng], 13);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
                }).addTo(mymap);
            } else {
                //Inserindo mapa com ponto de vista padrão do Rio de Janeiro.
                var mymap = L.map('mapa').setView([ -22.9035,  -43.2096 ], 13);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
                }).addTo(mymap);
            }
            let animals = JSON.parse(response.headers.catalog)
            animals.forEach(animal => { // Criando um loop para marcar cada animal no mapa (Parte mais complicada, devido a forma que vou obter essas informações do animal)
                //Obtendo localização do animal da forma que eu imagino ser.
                let location = JSON.parse(animal.location)
                var lat = location[0].lat
                var lgt = location[0].lng
                var marcador;
                var gato = L.icon({
                    iconUrl: './img/cat.png',
                    popupAnchor: [12, 0]
                })
                var cachorro = L.icon({
                    iconUrl: './img/dog.png',
                    popupAnchor: [12, 0]
                })
                if(animal.specie == "Gato"){
                    marcador= L.marker([lat, lgt], {icon: gato}).addTo(mymap);
                    marcador.bindPopup(animal.name).openPopup();
                }else{
                    marcador= L.marker([lat, lgt], {icon: cachorro}).addTo(mymap);
                    marcador.bindPopup(animal.name).openPopup();
                }  
            }) 
        })
    }
})()