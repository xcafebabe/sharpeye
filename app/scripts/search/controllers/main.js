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
      'uiGmapGoogleMapApi',
      function ($scope,$log,GoogleMapApi) {
        angular.extend($scope, {
          selected: {
            options: {
              visible:false
            },
            templateurl:'window.tpl.html',
            templateparameter: {}
          },
          map: {
            control: {},
            center: {
              latitude: 40.74349,
              longitude: -73.990822
            },
            zoom: 12,
            dragging: false,
            bounds: {},
            markers: [],
            idkey: 'place_id',
            events: {
              idle: function (map) {

              },
              dragend: function(map) {
                //update the search box bounds after dragging the map
                var bounds = map.getBounds();
                var ne = bounds.getNorthEast();
                var sw = bounds.getSouthWest();
                $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
                //$scope.searchbox.options.visible = true;
              }
            }
          },
          searchbox: {
            template:'searchbox.tpl.html',
            options: {
              autocomplete:true,
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
                    templateparameter: place
                  };

                  newMarkers.push(marker);

                  bounds.extend(place.geometry.location);

                  $scope.map.bounds = {
                    northeast: {
                      latitude: bounds.getNorthEast().lat(),
                      longitude: bounds.getNorthEast().lng()
                    },
                    southwest: {
                      latitude: bounds.getSouthWest().lat(),
                      longitude: bounds.getSouthWest().lng()
                    }
                  };

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
                  console.log("do something else with the search string: " + place.name);
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
