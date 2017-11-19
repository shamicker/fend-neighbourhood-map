
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

    // Set the initial current province and display the map.
    self.currentProvince = null;
    self.setProvinceColor = ko.observable( null );
    var previousProvince = currentProvince;

    // the user's provincial search query
    self.provinceSearch = ko.observable('');

    // Creates a list of shown locations
    self.shownLocations = ko.computed(function(){
        var currprov = currentProvince;
        var query = self.provinceSearch();
        var shown = model.mapData.allLocations.filter(function(location){
            return location.title.toLowerCase().indexOf(query) >= 0;
        });

        if (shown.length < 1){
            self.setProvince( currprov );
        } else if ( shown.length === 1 && currprov === null ){
            self.setProvince(shown[0]);
        } else if (shown.length > 1 && currprov ){
            self.setProvince( currprov );
        }

        return shown;
    });


    MapView( shownLocations() );

    // A function that switches the current province when clicked.
    self.setProvince = function(provinceClicked){

        // if current != null --> close current
        if ( currentProvince !== null ) {
            currentProvince.infowindow.close();
            currentProvince.marker.icon.fillColor = defaultIcon;
            currentProvince.marker.setMap(provinceClicked.marker.map);
            previousProvince = currentProvince;
        }

        // if clicked province was already the current province, deselect it
        if ( currentProvince === provinceClicked ) {
            currentProvince = null;
            setProvinceColor( currentProvince );
            previousProvince = provinceClicked;

        } else if ( currentProvince === null || provinceClicked != currentProvince ){
        // finally, if current == null OR if clicked != current, open clicked
            provinceClicked.marker.icon.fillColor = selectedIcon;
            provinceClicked.marker.setMap(provinceClicked.marker.map);

            // update previous and currentProvince
            currentProvince = provinceClicked;
            setProvinceColor( currentProvince );

            // open infowindow
            openInfowindow(provinceClicked);
        }
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
