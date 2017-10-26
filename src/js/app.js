
// the data
var model = {
    text: {
        title: "Map of My Neighbourhood (of the World), eh?",
        instructions: "For each province or territory in Canada, this map can show information" +
        " on over 70,000 of the plant and animal species of US and Canada.",
        provinceSearch: "Use this box to filter through the provinces and territories.",
        speciesSearch: "Search for a species!\n  You can use common or scientific names.\n  `*` is a wildcard.",
        natureserveAcknowledgement: "This information is provided by NatureServe (www.natureserve.org) and its network of natural heritage member programs, a leading source of information about rare and endangered species, and threatened ecosystems."
    },
    natureServe: {
        key: "b68c931e-0647-4dc3-bbfe-04139e176a51",
        nameSearchUrl: "https://services.natureserve.org/idd/rest/ns/v1/globalSpecies/list/nameSearch",
    },
    mapData: {
        mapStartPoint: {
                center: {lat: 56.130366, lng: -106.346771},
                zoom: 3
        },
        infoWindowContent: {
            before: '<div id="content"><h3 class="content-heading">',
            after: '</h3></div>'
        },
        allLocations: [
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
        ]
    }

};

// Get model data and translate into viewable data.
var provinceListView = function(){
    var self = this;

    // static data
    self.title = model.text.title;
    self.subtitle = model.text.subtitle;
    self.instructions = model.text.instructions;
    self.provinceSearch = model.text.provinceSearch;

    // Observable data
    // TODO: if using database, need to push allLocations from database
    self.provinceNamesListed = ko.observableArray([]);
    model.mapData.allLocations.forEach(function(location){
        self.provinceNamesListed.push( location.title );
        // can I push latlng to another array, here, for the map points to read?
    });

    // Set the initial current province.
    self.currentProvince = ko.observable(null);
    self.provinceIsSelected = ko.observable(false);

    // Behaviours
    // A function that switches the current province when clicked.
    self.setProvince = function(provinceClicked){
        self.currentProvince(provinceClicked);
        self.provinceIsSelected(true);
        console.log(provinceClicked);

        // TODO: link up marker & infowindow to here so that openInfoWindow can be called properly!
        mapView.openInfowindow(marker, infowindow);
    }

    self.filterProvinces = function(){

    }

};

// This is the viewModel for the species' area in the menu list.
var natureListView = function(){
    var self = this;

    // static data
    self.speciesSearch = model.text.speciesSearch;
    self.acknowledgement = model.text.natureserveAcknowledgement;

}

// on screen display
// Google maps stuff
var mapView = {
    init: function(){
        // Initialize map and markers outside of viewMap function, and then call viewMap.
        var startPoint = model.mapData.mapStartPoint;
        var infowindow = new google.maps.InfoWindow();

        var mapDiv = document.getElementById('map');

        var map = new google.maps.Map(mapDiv, startPoint);
        var searchService = new google.maps.places.PlacesService(map);
        var markers = [];

        var allLocations = model.mapData.allLocations;

        // For each location, create a map marker.
        for (var i = 0; i < allLocations.length; i++ ){
            var position = allLocations[i].location;
            var title = allLocations[i].title;

            var marker = new google.maps.Marker({
                position: position,
                title: title,
                map: map,
                cursor: "pointer",
                animation: google.maps.Animation.DROP
            });

            // add listener for each marker to open infowindow
            marker.addListener('click', (function(markerCopy, infowindowCopy){
                return function(){
                    mapView.openInfowindow(markerCopy, infowindowCopy);
                }
            })(marker, infowindow));

            // add each marker to the list of markers
            markers.push(marker);
        }
    },

    // This function should open an info window.
    // It is called when a marker is clicked, AND when the matching province-list-item is selected.
    openInfowindow: function(marker, infowindow){
        console.log(infowindow);
        console.log(marker);

        var infoBefore = model.mapData.infoWindowContent.before;
        var infoAfter = model.mapData.infoWindowContent.after;

        infowindow.setContent(infoBefore + marker.title + infoAfter);
        infowindow.open(map, marker);
    }

    // nearby places search
}


ko.applyBindings( provinceListView() );

