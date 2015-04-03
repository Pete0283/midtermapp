var map;

document.addEventListener("DOMContentLoaded", function(){   

    
    if( navigator.geolocation ){ 
    
        var params = {enableHighAccuracy: false, timeout:36000, maximumAge:60000};
        navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
    }
    else{
    
        alert("Sorry, but your browser does not support location based awesomeness.");
    }
    });
                          
function reportPosition(position) {

    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
console.log(pos);
        var mapOptions = {
            zoom: 12,
            center: pos
        };
    
    map = new google.maps.Map(document.getElementById('twomap'),
      mapOptions);
    
    
};

function gpsError(){
    alert("Does not support GPS");
}