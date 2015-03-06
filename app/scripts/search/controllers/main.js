define([
  'angular',
  'jquery',
  'search/module',
  'angular-google-maps',
  'bootstrap'
],
function (angular,$, SearchModule) {
  'use strict';

  SearchModule.controller('MainController',
    [
      '$scope',
      '$log',
      '$timeout',
      'uiGmapGoogleMapApi',
      'GoogleMapFactory',
      function ($scope,$log, $timeout, GoogleMapApi, GoogleMapFactory) {
        //Variable Initialization
        angular.extend($scope, {
          map: {
            control: {},
            center: GoogleMapFactory.default.center,
            zoom: GoogleMapFactory.default.zoom,
            dragging: false,
            bounds: {},
            markers: [],
            idkey: 'place_id',
            events: {
              idle: function (map) {

              },
              dragend: function(map) {
                // //update the search box bounds after dragging the map
                // var bounds = map.getBounds();
                // var ne = bounds.getNorthEast();
                // var sw = bounds.getSouthWest();
                // $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
                // //$scope.searchbox.options.visible = true;
              }
            }
          },
          // selected: {
          //   options: {
          //     visible:false
          //   },
          //   templateurl:'window.tpl.html',
          //   templateparameter: {}
          // },
          searchbox: {            
            template:'searchbox.tpl.html',
            options: {
              autocomplete: true,
              types: ['(cities)'],
              componentRestrictions: {country: 'es'}
            },
            events: {
              place_changed: function (autocomplete){

                var place = autocomplete.getPlace();

                if (place.address_components) {

                  var newMarkers = [];
                  var bounds = new google.maps.LatLngBounds();

                  var marker = {
                    id:place.place_id,
                    place_id: place.place_id,
                    name: place.address_components[0].long_name,
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng(),
                    options: {
                      visible:false
                    },
                    templateurl:'window.tpl.html',
                    templateparameter: place,
                    icon: 'http://sharpeye.bytesauce.com/images/markers/star.png'
                  };

                  newMarkers.push(marker);

                  bounds.extend(place.geometry.location);

                  $scope.map.center.latitude = place.geometry.location.lat();
                  $scope.map.center.longitude = place.geometry.location.lng();
                  $scope.map.zoom = GoogleMapFactory.default.zoom;

                  // $scope.map.bounds = {
                  //   northeast: {
                  //     latitude: bounds.getNorthEast().lat(),
                  //     longitude: bounds.getNorthEast().lng()
                  //   },
                  //   southwest: {
                  //     latitude: bounds.getSouthWest().lat(),
                  //     longitude: bounds.getSouthWest().lng()
                  //   }
                  // };

                  _.each(newMarkers, function(marker) {
                    marker.closeClick = function() {
                      $scope.selected.options.visible = false;
                      marker.options.visble = false;
                      return $scope.$apply();
                    };
                    marker.onClicked = function() {
                      $scope.selected.options.visible = false;
                      $scope.selected = marker;
                      $scope.selected.options.visible = true;
                    };
                  });

                  $scope.map.markers = newMarkers;
                } else {
                  // The user pressed enter in the input
                  // without selecting a result from the list
                  // Let's get the list from the Google API so that
                  // we can retrieve the details about the first result
                  // and use it (just as if the user had actually selected it)
                  var autocompleteService = new google.maps.places.AutocompleteService();
                  autocompleteService.getPlacePredictions(
                    {
                      'input': place.name,
                      'offset': place.name.length,
                      'componentRestrictions': {'country': 'es'},
                      'types': ['(cities)']
                    },
                    function listentoresult(list, status) {
                      if(list === null || list.length === 0) {
                        // There are no suggestions available.
                        // The user saw an empty list and hit enter.
                        $log.log('No results');
                      } else {
                        // Here's the first result that the user saw
                        // in the list. We can use it and it'll be just
                        // as if the user actually selected it
                        // themselves. But first we need to get its details
                        // to receive the result on the same format as we
                        // do in the AutoComplete.
                        var placesService = new google.maps.places.PlacesService(document.getElementById('inputEmail'));
                        placesService.getDetails(
                          {'reference': list[0].reference},
                          function detailsresult(detailsResult, placesServiceStatus) {
                            // Here's the first result in the AutoComplete with the exact
                            // same data format as you get from the AutoComplete.
                            $log.log('Selected first element ', detailsResult);
                            $timeout(function(){
                              $scope.map.center.latitude = detailsResult.geometry.location.lat();
                              $scope.map.center.longitude = detailsResult.geometry.location.lng();
                            },100);
                          }
                        );
                      }
                    });
                }
              }
            }
          }
        });

        GoogleMapApi.then(function(maps) {
          maps.visualRefresh = true;
          $scope.defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(40.82148, -73.66450),
            new google.maps.LatLng(40.66541, -74.31715)
          );


          $scope.map.bounds = {
            northeast: {
              latitude:$scope.defaultBounds.getNorthEast().lat(),
              longitude:$scope.defaultBounds.getNorthEast().lng()
            },
            southwest: {
              latitude:$scope.defaultBounds.getSouthWest().lat(),
              longitude:-$scope.defaultBounds.getSouthWest().lng()
            }
          };
          $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());
        });


        //Better to use angular-ui-bootstrap .
        //But lets wait to be fully compatible with angular 1.3
        //So hallo hallo $jquery, herzliche willkommen!
        $scope.$on('$viewContentLoaded', function(){
          $('#homeTab').tab('show');
        });
      }
    ]
  );
});
