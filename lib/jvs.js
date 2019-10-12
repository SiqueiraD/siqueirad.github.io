console.log('inicializa arquivo js');

var points = [];
var layers_mark = [];
var i_points = 0;
var layers_polygon = [];
var i_polygons = 0;

function INITIALFUNTION() {
    function onMapClick(e) {
        points[i_points] = e.latlng;
        layers_mark[i_points] = L.marker(points[i_points]).addTo(mymap);
        layers_mark[i_points].on('click', click_mark);
        i_points++;
    }

    mymap.on('click', onMapClick);

    mymap.setMinZoom(15);
    mymap.setMaxBounds(mymap.getBounds());


}

function click_mark(evt) {

    layers_polygon[i_polygons] = L.polygon(points, {
        color: 'red'
    }).addTo(mymap);
    for (var i = i_points - 1; i >= 0; i--) {
        layers_mark[i].remove();
    }
    points = [];
    i_points = 0;
    i_polygons++;

}