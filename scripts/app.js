var tennis = angular.module('tennis', []);

tennis.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
