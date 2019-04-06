
navigator.geolocation.getCurrentPosition(succes, error);
var Flat
var Flon
var mapContainer = document.querySelector(".container");

var options = {
    center: new daum.maps.LatLng(Flat,Flon),
    level : 3

};

var map = new daum.maps.Map(mapContainer, options);
function succes(position){
    this.lat = position.coords.latitude;
    this.lon = position.coords.longitude;
    console.log(lon)


}

function error(){
    console.log("error");
}