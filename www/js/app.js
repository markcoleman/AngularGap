var angulargap = angular.module("angulargap", []);

angulargap.config(['$routeProvider', function ($routeProvider) {
    console.log('setup routes');
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController',
            activeTab: "home"
        })
        .when('/notifications', {
            templateUrl: 'notifications.html',
            controller: 'NotificationsController',
            activeTab: "notifications"
        })
        .when('/inAppBrowser', {
            templateUrl: 'in-app-browser.html',
            controller: 'InAppBrowserController',
            activeTab: "inappbrowser"
        })
        .when('/contacts', {
            templateUrl: 'contacts.html',
            controller: 'ContactsController',
            activeTab: "contacts"
        })
        .otherwise(
        {
            redirectTo: '/home'
        });
}]);
