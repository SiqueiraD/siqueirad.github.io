import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

function criarMapa() {
    return import( /* webpackChunkName: "lodash" */ 'lodash').then(({
        default: _
    }) => {
        const element = document.createElement('div');
        //const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.id= 'mapid';

        // Add the image to our existing div.
        /*const myIcon = new Image();
        myIcon.src = Honeycomb;

        element.appendChild(myIcon);

        console.log(Data);*/
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

criarMapa().then(map => {
    document.body.appendChild(map);
    var mymap = L.map('mapid').setView([-22.90309921448796, -43.12773227691651], 15);

    var popup = L.popup();

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiZGFuaWxvc2ljIiwiYSI6ImNrMW54OHY5cTBnOXUzbXEzazRxZzg4dXAifQ.dwMFsKzaU7RHsPKcD4aPgA'
    }).addTo(mymap);

});