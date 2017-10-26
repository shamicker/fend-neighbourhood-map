// the octopus!
// the functions that "translate" between the views and model

var staticView = function(){
    console.log("Static View Populated");
    this.title = model.text.title;
    this.instructions = model.text.instructions;
    this.provinceSearchText = model.text.provinceSearch;
    this.speciesSearchText = model.text.speciesSearch;
    this.acknowledgement = model.text.natureserveAcknowledgement;

    ko.applyBindings( Translators() );
};


// Class takes in a list of objects (provinces) to display.
var MapView = function(locations){
    console.log("Map View Populated");
    // Google maps stuff
    // MAYBE THE MAPVIEW IS THE SAME AS CATVIEW - new instance created with each change in province/species list.
    // TODO: Brainstorm: WHAT DOES THE MAP REQUIRE, OUTSIDE OF ITSELF?
    // - mapDiv from DOM
    // - maybe the start point
    // - allLocations - all listed/ shown locations
    // ANY TIME the province list is altered or selected, a new Map(locations) is called.
    console.log(locations);
    var self = this;

    self.markersList = ko.observableArray([]);

    // Initialize map and markers outside of viewMap function, and then call viewMap.
    var startPoint = model.mapData.mapStartPoint;
    // var allLocations = model.mapData.allLocations;
    var mapDiv = document.getElementById('map');

    var map = new google.maps.Map(mapDiv, startPoint);
    var searchService = new google.maps.places.PlacesService(map);
    var infowindow = new google.maps.InfoWindow();

    // For each location, create a map marker.
    for (var i = 0; i < locations.length; i++ ){
        var position = locations[i].location;
        var title = locations[i].title;

        var marker = new google.maps.Marker({
            position: position,
            title: title,
            map: map,
            cursor: "pointer",
            animation: google.maps.Animation.DROP
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
        self.markersList.push(marker);
    }

    // nearby places search
};
