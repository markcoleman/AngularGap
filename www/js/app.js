var angulargap = angular.module("angulargap", []);

angulargap.config(['$routeProvider', function ($routeProvider) {
    console.log('setup routes');
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/notifications', {
            templateUrl: 'notifications.html',
            controller: 'NotificationsController'
        })
        .when('/inAppBrowser', {
            templateUrl: 'in-app-browser.html',
            controller: 'InAppBrowserController'
        })
        .otherwise(
        {
            redirectTo: '/home'
        });
}]);
