var angulargap = angular.module("angulargap", []);

angulargap.config(['$routeProvider', function ($routeProvider) {
    console.log('setup routes');
    $routeProvider.
        when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).
        when('/notifications', {
            templateUrl: 'notifications.html',
            controller: 'NotificationsController'
        }).
        otherwise(
        {
            redirectTo: '/home'
        });
}]);