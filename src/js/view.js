// the octopus!
// the functions that "translate" between the views and model

var staticView = function(){
    console.log("Static View Populated");
    this.title = model.text.title;
    this.instructions = model.text.instructions;
    this.provinceFilterText = model.text.provinceFilter;
    this.speciesSearchText = model.text.speciesSearch;
    this.acknowledgement = model.text.natureserveAcknowledgement;

    ko.applyBindings( Translators() );
};

// Google maps stuff
// Class takes in a list of objects (provinces) to display.
var MapView = function(locations){
    console.log("Map View Populated");
    // console.log(locations);

    // Initialize map and markers outside of viewMap function, and then call viewMap.
    var startPoint = model.mapData.mapStartPoint;
    var defaultIcon = {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 5,
        fillColor: "#77FF33",
        fillOpacity: 1.0,
        strokeWeight: 1
    };

    var markersList = [];
    var mapDiv = document.getElementById('map');

    var map = new google.maps.Map(mapDiv, startPoint);
    var infowindow = new google.maps.InfoWindow;

    // For each location, create a map marker.
    for (var i = 0; i < locations.length; i++ ){
        var position = locations[i].location;
        var title = locations[i].title;

        var marker = new google.maps.Marker({
            position: position,
            title: title,
            map: map,
            cursor: "pointer",
            animation: google.maps.Animation.DROP,
            icon: defaultIcon
        });

        // add listener for each marker to open infowindow
        marker.addListener('click', (function(provinceClicked){
            return function(){
                setProvince(provinceClicked);
            }
        })(locations[i]));

        // update each marker & infowindow to its location object
        locations[i].marker = marker;
        locations[i].infowindow = infowindow;

        // add each marker to the list of markers
        markersList.push(marker);
    }
};

var SpeciesView = function(data){
    var url = 'https://services.natureserve.org/idd/rest/ns/v1/globalSpecies/list/nameSearch?name='
                + 'Ruby*' + '&NSAccessKeyId=b68c931e-0647-4dc3-bbfe-04139e176a51';
    function downloadUrl(url, callback){
        var request = window.ActiveXObject ?
            new ActiveXObject("Microsoft.XMLHTTP") :
            new XMLHttpRequest;

        request.onreadystatechange = function(){
            if (reqeust.readyState == 4){
                request.onreadystatechange = noNothing;
                callback(request, request.status);
            }
        };

        request.open('GET', url, true);
        request.send(null);
    }
    // function downloadUrl()
};

