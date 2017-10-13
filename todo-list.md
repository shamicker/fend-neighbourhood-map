# Neighbourhood TODO List

## RUBRIC
#### Interface Design
[ ] Responsiveness
  - all application components render on-screen in a responsive manner.

[ ] Usability
  - all app components are usable across modern desktop, tablet, and phone browsers.

#### App Functionality
[ ] Filter Locations
  - includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

[ ] List View
  - A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
  - Clicking a location on the list displays unique information about the location, and animates its associated map marker.
  - List functionality is responsive and runs error free.

[ ] Map and Markers
  - Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
  - Clicking a marker displays unique information about a location in either an `infoWindow` or `DOM` element.
  - Markers should animate when clicked (eg. bouncing, colour change).
  - Any additional custom functionality provided in the app functions error-free.

#### App Architecture
[ ] Proper Use of `Knockout`
  - Code is properly separated based upon `Knockout` best practices
  - `Knockout` should not be used to handle the Google Maps API.
  - There are at least 5 location in the model. These may be hard-coded or retrieved from a data API.

#### Asynchronous Data Usage
[ ] Asynchronous API Requests
  - Application utilizes the `Google Maps API` and at least 1 non-Google 3rd party API.
  - All data requests are retrieved in an asynchronous manner.

[ ] Error Handling
  - Data requests that fail are handled gracefully using common fallback techniques.

#### Location Details Functionality
[ ] Additional Location Data
  - Functionality providing additional data about a location is providd and sourced from a 3rd party API. Information can be provided either in the markers' `infoWindow`, or in an `HTML` element in the `DOM`.
  - Provide attribution for the source of additional data, on screen AND in your README.

[ ] Error Free
  - Application runs without errors.

[ ] Usability
  - Functionality is presented in a usable and responsive manner.

#### Documentation
[ ] `README`
  - A `README` file is included detailing all steps required to successfully run the application.

[ ] Comments
  - Comments are present and effectively explain longer code procedures.

[ ] Code Quality
  - Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html).
  - If build tools (Grunt/Gulp) are used, both source and production code are submitted in the same repo in separate directories, usually named `src` and `dist`.


## From Project Details

- [x] Download Knockout framework.
  KO should not do anything that is specifically map-related (creating markers, tracking marker click events, making the map, refreshing the map, etc):
  - [ ] Tracking click events on list items SHOULD be handled with KO.
  - [ ] Creating your markers as part of your VM is allowed/recommended. Do NOT create them as KO observables.

- [ ] All data APIs should load asynchronously.
- [ ] All data API errors should be handled gracefully (with a message saying there's an error).
- [ ] Add a full-screen map.  The map API should only be called once!
- [x] Get a Google Maps API key.
- [ ] Display map markers identifying at least 5 locations. Display these by default.
- [ ] Implement a list view of the locations.
- [ ] Provide a filter option that uses an input field to filter:
  - [ ] the list view
  - [ ] the map markers displayed by default
- [ ] Both these views (list and map markers) should update accordingly in real time. It can be a text input or a dropdown menu.
- [ ] Provide extra info when a map maker or list entry is clicked. StreetView and Places don't count.
- [ ] Provide attribution to the data sources/APIs you use.
- [ ] Animate a map marker when either the list item or the map marker is selected.
- [ ] Open an infoWindow with the extra 3rd party API info when either a location is selected from the list view or its map marker is directly selected. You can also populate a DOM element with this info, but still open an infoWindow, even with minimal info.
- [ ] The app's interface should be intuitive to use!! Selecting a location via list item or map marker should cause the marker to be animated to indicate that the location has been selected, and associated info window should open above the map marker with extra info.
- [ ] MOBILE RESPONSIVE

