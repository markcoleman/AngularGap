angulargap.controller("InAppBrowserController", ["$scope", function($scope){
    $scope.url = "http://www.google.com";
    $scope.actions = [];
    $scope.closeBrowser = function(){
        $scope.actions.push("Closed Browser");
    };
    $scope.loadStart = function(){
        $scope.actions.push("Load Start");
    }   ;
    $scope.loadStop = function(){
        $scope.actions.push("Load Stop");
    };
    $scope.loadError = function(){
        $scope.actions.push("Load Error");
    };
}]);