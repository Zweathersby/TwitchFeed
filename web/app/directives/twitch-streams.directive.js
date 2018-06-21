app.directive('trackUser', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/trackUser.html',

    link: function(scope, element, attrs) {
      scope.buttonText = "Track",
      scope.tracking = false,

      scope.track = function() {

        element[0].querySelector('.btn').classList.toggle('btn-danger');
        element[0].querySelector('.btn').classList.toggle('btn-success');
        if(scope.tracking) {
          scope.buttonText = "Track";
          scope.tracking = false;
        }
        else {
          scope.buttonText = "Untrack";
          scope.tracking = true;
        }
      }
    }
  };
});
