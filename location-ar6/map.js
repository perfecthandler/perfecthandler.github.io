var map, geojson;
var selected, features, layer_name, layerControl;
var content;
var popup = L.popup();




var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [osm, cities]
// });





var map = L.map('map', {
   
    crs: L.CRS.EPSG4326,
    center: [23.00, 82.00],
    zoom: 3,
    zoomControl: false
   // layers: [googleStreets]
});

var satellite = L.tileLayer('https://wi.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
   // maxZoom: 23,
	    attribution: 'Source: Esri, Maxar, Earthstar Geographics, CNES/Airbus DS, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, and the GIS User Community'
    }).addTo(map);

    // var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    //     maxZoom: 20,
    //     subdomains:['mt0','mt1','mt2','mt3']
    // }).addTo(map);


    // JavaScript code (add to the existing code)
var polyline = L.polyline([
    [17.464037137429827, 78.34378680652242],
    [17.46392396973065, 78.34376676531338],
    [17.463886870382268, 78.34379828127052],
    [17.463898383973955, 78.34383382054133],
    [17.46386640177301, 78.34384924324377]
  ]).addTo(map);
  

  function zoomTo() {
    var lat = document.getElementById("lat").value;
    var lng = document.getElementById("lng").value;
    // map.panTo(new L.LatLng(lat, lng));
    // map.zoomTo()

    map.setView(new L.LatLng(lat, lng), 18);

}   


window.addEventListener('resize', function () {
    map.invalidateSize();
  });


// document.addEventListener('DOMContentLoaded', function () {
//     // Initialize Leaflet map
//     var map = L.map('map').setView([0, 0], 1);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//     // Example polyline coordinates
//     var polylineCoordinates = [
//       [0, 0],
//       [10, 10],
//       [20, 0]
//       // Add more coordinates as needed
//     ];

//     // Create and add polyline to the map
//     var polyline = L.polyline(polylineCoordinates, { color: 'red' }).addTo(map);

//     // Resize map on AR marker detection
//     window.addEventListener('resize', function () {
//       map.invalidateSize();
//     });
//   });

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );