// the data
var model = {
    text: {
        title: "Map of My Neighbourhood (of the World), eh?",
        instructions: "For each province or territory in Canada, this map can show information" +
        " on over 70,000 of the plant and animal species of US and Canada.",
        provinceFilter: "Use this box to filter through the provinces and territories.",
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
        iconColour: {
            default: "#77FF33",
            selected: "#F93A0B"
        },
        allLocations: [
            {title: "British Columbia", location: {lat: 53.726668, lng: -127.647621}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Alberta", location: {lat: 53.933271, lng: -116.576504}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Saskatchewan", location: {lat:52.939916, lng: -106.450864}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Manitoba", location: {lat: 53.760861, lng: -98.813876}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Ontario", location: {lat: 51.253775, lng:-85.323214}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Quebec", location: {lat:52.939916, lng: -73.549136}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "New Brunswick", location: {lat: 46.565316, lng: -66.461916}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Nova Scotia", location: {lat: 44.681987, lng: -63.744311}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Prince Edward Island", location: {lat: 46.510712, lng: -63.416814}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Newfoundland", location: {lat: 53.135509, lng: -57.660436}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Yukon", location: {lat: 64.282327, lng: -135.000000}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Northwest Territories", location: {lat: 64.825544, lng: -124.845733}, marker: {}, infowindow: {}, selected: false, icon: {}},
            {title: "Nunavut", location: {lat:70.299771, lng:-83.107577}, marker: {}, infowindow: {}, selected: false, icon: {}}
        ]
    }
};