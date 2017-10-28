
// viewModel translates between model and view and DOM.
var Translators = function(){
    console.log("Translators Begun");
    var self = this;

    self.infoBefore = model.mapData.infoWindowContent.before;
    self.infoAfter = model.mapData.infoWindowContent.after;
    var defaultIcon = model.mapData.iconColour.default;
    var selectedIcon = model.mapData.iconColour.selected;

    // LOCATION STUFF
    // Location - Observable data

    // TODO: if using database, need to push allLocations from database
    // Creates a list of shown locations
    self.shownLocations = ko.observableArray([]);
    // self.icon = ko.observable(defaultIcon);

    // Populates the shown locations
    model.mapData.allLocations.forEach(function(location){
        self.shownLocations.push( location );
        // can I push latlng to another array, here, for the map points to read?
    });

    // Set the initial current province and display the map.
    self.currentProvince = ko.observable(null);
    self.provinceIsSelected = ko.observable(false);
    MapView( shownLocations() );

    // A function that switches the current province when clicked.
    self.setProvince = function(provinceClicked){
        // If something is previously selected, close infowindow and default marker.
        if (currentProvince() !== null) {
            currentProvince().infowindow.close();
            currentProvince().marker.icon.fillColor = defaultIcon;
            currentProvince().marker.setMap(provinceClicked.marker.map);
        }

        // update to selected marker.
        provinceClicked.marker.icon.fillColor = selectedIcon;
        provinceClicked.marker.setMap(provinceClicked.marker.map);

        // update currentProvince
        currentProvince(provinceClicked);
        provinceIsSelected(true);

        // open infowindow
        openInfowindow(provinceClicked);
    }

    self.filterProvinces = function(){
        console.log("Provinces filtering");
    }

    // This function changes marker colour, sets infowindow content & opens infowindow.
    // It is called when a marker is clicked, AND when the matching province-list-item is selected.
    self.openInfowindow = function(provinceClicked){
        provinceClicked.infowindow.setContent(infoBefore + provinceClicked.title + infoAfter);
        provinceClicked.infowindow.open(map, provinceClicked.marker);
    }

    // SPECIES STUFF

    // This is the viewModel for the species' area in the menu list.
    self.speciesViewModel = function(){
        console.log("speciesViewModel");
    }
};


// ko.applyBindings( staticView() );
