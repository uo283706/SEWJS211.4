class Map{

    constructor(){

    }

    initMap(){
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
        var marcador = new google.maps.Marker({position:oviedo,map:mapa});
    }

}


var mapaGoogle = new Object();

var map = new Map();
mapaGoogle.initMap = map.initMap;