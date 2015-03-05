define(['angular','search/module'],function(angular, SearchModule){
  'use strict';

  SearchModule.factory('GoogleMapFactory',[
    function(){

      return {
        default : {
          zoom : 13,
          center : angular.copy({latitude: 41.383991, longitude: 2.19940,}) //Barcelona Capital :)
        }
      };
    }
  ]);


  return SearchModule;
});
