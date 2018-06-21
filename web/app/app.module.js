var app = angular.module('apiaggApp', [
    'ui.router',
    'ngAnimate',
    'mgcrea.ngStrap',
    'twitchList'
]);

app.component('twitchStreams', {
    templateUrl: 'dashboard/twitch-list.template.html',
    controller: function TwitchController($http) {
      var self = this;
    }
  });

app.filter('replace', [function () {

    return function (input, from, to) {

      if(input === undefined) {
        return;
      }

      var regex = new RegExp(from, 'g');
      return input.replace(regex, to);

    };
}]);

app.filter('trustThisUrl', ["$sce", function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val) + '&autoplay=false';
        };
    }]);
