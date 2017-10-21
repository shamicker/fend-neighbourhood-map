
// the data
var model = {
    text: {
        title: "Map of My Neighbourhood (of the World), eh?",
        instructions: "For each province or territory in Canada, this map can show information" +
        " on over 70,000 of the plant and animal species of US and Canada.",
        provinceSearch: "Use this box to filter through the provinces and territories.",
        speciesSearch: "Search for a species!\n  You can use common or scientific names.\n  `*` is a wildcard.",
        footer: "Footer here."
    },
    mapStartPoint: {
            center: {lat: 56.130366, lng: -106.346771},
            zoom: 3
    },
    provinces: [
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
};

// the octopus
// Get model data and translate into viewable data.
var octopusViewModel = function(){
    var self = this;

    // static data
    self.title = model.text.title;
    self.subtitle = model.text.subtitle;
    self.instructions = model.text.instructions;
    self.provinceSearch = model.text.provinceSearch;
    self.speciesSearch = model.text.speciesSearch;
    self.footer = model.text.footer;

    // observable data
    self.provinceNames = [];
    model.provinces.forEach(function(province){
        self.provinceNames.push( province.title );
    });

    // Set the initially current province.
    self.currentProvince = ko.observable(null);
    self.provinceIsSelected = ko.observable(false);

    // Behaviours
    // A function that switches the current province when clicked.
    self.setProvince = function(provinceClicked){
        self.currentProvince(provinceClicked);
        self.provinceIsSelected(true);
    }
};

// on screen display
// Google maps stuff
var mapView = {
    // Initialize map and markers outside of viewMap function, and then call viewMap.
    init: function(){
        var startPoint = model.mapStartPoint;
        var mapDiv = document.getElementById('map');

        var map = new google.maps.Map(mapDiv, startPoint);
        var markers = [];

        this.viewMap(map, markers);
    },
    viewMap: function(map, markers){
        var provinces = model.provinces;
        var markerProperties = model.markerProperties;

        // For each location, create a map marker.
        for (var i = 0; i < provinces.length; i++ ){
            var position = provinces[i].location;
            var title = provinces[i].title;

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
var listView = function(listed){
};


ko.applyBindings( octopusViewModel() );

