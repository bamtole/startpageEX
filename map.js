
var Flat
var Flon
navigator.geolocation.getCurrentPosition(succes, error);
function succes(position){
    this.lat = position.coords.latitude;
    this.lon = position.coords.longitude;
    console.log(lon)


}

function error(){
    console.log("error");
}


var container = document.getElementById("map");

var options = {
    center: new daum.maps.LatLng(Flat,Flon),
    level : 3

};

var map = new daum.maps.Map(container, options);