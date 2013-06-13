angulargap.controller("NavController", function ($scope, $route) {
    console.log("nav start");
    $scope.$route = $route;

    console.log("nav end");
});