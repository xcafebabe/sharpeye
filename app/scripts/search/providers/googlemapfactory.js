define(['angular','search/module'],function(angular, SearchModule){
  'use strict';

  SearchModule.factory('GoogleMapFactory',[
    function(){

      var barcelonaCoordinates = {
        latitude: 41.383991,
        longitude: 2.19940,        
        icon: 'http://sharpeye.bytesauce.com/images/markers/star.png'
      };

      return {
        default : {
          zoom : 13,
          center : angular.copy(barcelonaCoordinates), //because factory is singleton. I use angular.copy to return always a new object
          markers : angular.copy([
            angular.extend({},barcelonaCoordinates,{id: 'sharpEyeRadar', place_id: 'sharpEyeRadar'})
          ]),
          searchTerm : 'Barcelona, Spain'
        }
      };
    }
  ]);


  return SearchModule;
});
