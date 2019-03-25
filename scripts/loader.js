var m;

function load() {
    $.getJSON("./maps/maps.json", function (data){
        m = data;
    })/*.then(function(){
        alert(m.maps[0].map);
    })*/;
}

