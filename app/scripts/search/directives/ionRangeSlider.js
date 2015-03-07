define(['angular','search/module', 'ionRangeSlider'],function(angular, SearchModule){
  'use strict';

  SearchModule.directive('ionSlider',[ function(){
    return {
      restrict: 'A',
      scope: {
        ngModel : '='
      },
      compile :  function (tElement, tAttributes) {
        return {
          post: function postLink($scope, $element, attributes){
            $element.ionRangeSlider({
              onFinish: function (data) {
                  $scope.$apply(function () {
                      $scope.ngModel = data.fromNumber;
                  });
              }
            });
          }
        };
      }
    };
  }]);
  return SearchModule;
});
