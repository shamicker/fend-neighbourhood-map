
// viewModel translates between model and view and DOM.
var Translators = function(){
    console.log("Translators Begun");
    var self = this;

    self.infoBefore = model.mapData.infoWindowContent.before;
    self.infoAfter = model.mapData.infoWindowContent.after;

    // LOCATION STUFF
    // Location - Observable data

    // TODO: if using database, need to push allLocations from database
    // Creates a list of shown locations
    self.shownLocations = ko.observableArray([]);

    // Populates the shown locations
    model.mapData.allLocations.forEach(function(location){
        self.shownLocations.push( location );
        // can I push latlng to another array, here, for the map points to read?
    });

    // Set the initial current province and display the map.
    self.currentProvince = ko.observable(null);
    self.provinceIsSelected = ko.observable(false);
    new MapView( this.shownLocations() );

    // A function that switches the current province when clicked.
    self.setProvince = function(provinceClicked){
        self.currentProvince(provinceClicked);
        self.provinceIsSelected(true);

        // Display the selected province in the map.
        // new MapView( [provinceClicked] );
        openInfowindow(provinceClicked.marker, provinceClicked.infowindow);
    }

    self.filterProvinces = function(){
        console.log("Provinces filtering");
    }

    // This function opens an info window.
    // It is called when a marker is clicked, AND when the matching province-list-item is selected.
    self.openInfowindow = function(marker, infowindow){
        infowindow.setContent(infoBefore + marker.title + infoAfter);
        infowindow.open(map, marker);
    }

    // SPECIES STUFF

    // This is the viewModel for the species' area in the menu list.
    self.speciesViewModel = function(){
    }
};


// ko.applyBindings( staticView() );
