angular.
module('apiaggApp').
config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    var dashboardState = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.template.html'
    }
    var feedState = {
        name: 'feed',
        url: '/feed',
        templateUrl: 'feed/feed.template.html'
    }

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'login/login.template.html'
    }
    var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: 'login/register.template.html'
    }

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'https://clips.twitch.tv/**'
    ]);

    $stateProvider.state(dashboardState);
    $stateProvider.state(feedState);
    $stateProvider.state(loginState);
    $stateProvider.state(registerState);

    // Route to login on startup
    $urlRouterProvider.when('', '/dashboard');

    // Fear the unknown
    $urlRouterProvider.otherwise('/404');
});