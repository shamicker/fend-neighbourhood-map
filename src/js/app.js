
// the data
var model = {
    mapStart: function(){
        var mapStartPoint = {
            center: {lat: 56.130366, lng: -106.346771},
            zoom: 3
        };
        return mapStartPoint;
    },
    // markerProperties: function(){
    //     var markers = {
    //         animation: google.maps.Animation.DROP,
    //         cursor: "pointer"
    //         // icon: "iii"
    //     };
    //     return markers;
    // },
    provinces: function(){
        var locations = [
            {title: "British Columbia", location: {lat: 53.726668, lng: -127.647621}},
            {title: "Alberta", location: {lat: 53.933271, lng: -116.576504}},
            {title: "Saskatchewan", location: {lat:52.939916, lng: -106.450864}},
            {title: "Manitoba", location: {lat: 53.760861, lng: -98.813876}},
            {title: "Ontario", location: {lat: 51.253775, lng:-85.323214}},
            {title: "Quebec", location: {lat:52.939916, lng: -73.549136}},
            {title: "New Brunswick", location: {lat: 46.565316, lng: -66.461916}},
            {title: "Nova Scotia", location: {lat: 44.681987, lng: -63.744311}},
            {title: "Prince Edward Island", location: {lat: 46.510712, lng: -63.416814}},
            {title: "Newfoundland", location: {lat: 53.135509, lng: -57.660436}},
            {title: "Yukon", location: {lat: 64.282327, lng: -135.000000}},
            {title: "Northwest Territories", location: {lat: 64.825544, lng: -124.845733}},
            {title: "Nunavut", location: {lat:70.299771, lng:-83.107577}}
        ];
        return locations;
    }
};

// on screen display
// Google maps stuff
var mapView = {
    init: function(){
        var startPoint = model.mapStart();

        var mapDiv = document.getElementById('map');

        var map = new google.maps.Map(mapDiv, startPoint);
        var markers = [];

        this.viewMap(map, markers);
    },
    viewMap: function(map, markers){
        var provinces = model.provinces();
        // var markerProperties = model.markerProperties();

        for (var i = 0; i < provinces.length; i++ ){
            var position = provinces[i].location;
            var title = provinces[i].title;

            var largeInfoWindow = new google.maps.InfoWindow();
            // var bounds = new google.maps.LatLngBounds();

            var marker = new google.maps.Marker({
                position: position,
                title: title,
                map: map,
                cursor: "pointer",
                animation: google.maps.Animation.DROP
            });
            markers.push(marker);
        }
    }
};

// a second on-screen display
// the Knockout stuff
var listView = {};

