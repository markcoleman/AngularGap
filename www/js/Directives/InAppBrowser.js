angulargap.directive("openExternal", function($window){
    return{
        restrict: 'E',
        scope: {
            url : "=",
            exit : "&",
            loadStart : "&",
            loadStop : "&",
            loadError: "&"
        },
        replace:true,
        transclude: true,
        template:"<button class='btn' ng-click='openUrl()'><span ng-transclude></span></button>",
        controller: function($scope){

            var wrappedFunction = function(action){
                return function(){
                    $scope.$apply(function(){
                        action();
                    });
                }
            };
            var inAppBrowser;
            $scope.openUrl = function(){
                inAppBrowser = $window.open($scope.url, '_blank', 'location=yes');
                console.log("did it");
                if($scope.exit instanceof Function){
                    inAppBrowser.addEventListener('exit', wrappedFunction($scope.exit));
                }
                if($scope.loadStart instanceof Function){
                    inAppBrowser.addEventListener('loadstart', wrappedFunction($scope.loadStart));
                }
                if($scope.loadStop instanceof Function){
                    inAppBrowser.addEventListener('loadstop', wrappedFunction($scope.loadStop));
                }
                if($scope.loadError instanceof Function){
                    inAppBrowser.addEventListener('loaderror', wrappedFunction($scope.loadError));
                }
            };
            $scope.$on("$destroy", function(){
                if(inAppBrowser != null){

                    inAppBrowser.removeEventListener('exit', wrappedFunction($scope.exit));

                    if($scope.exit){
                        inAppBrowser.removeEventListener('exit', wrappedFunction($scope.exit));
                    }
                    if($scope.loadStart){
                        inAppBrowser.removeEventListener('loadstart', wrappedFunction($scope.loadStart));
                    }
                    if($scope.loadStop){
                        inAppBrowser.removeEventListener('loadstop', wrappedFunction($scope.loadStop));
                    }
                    if($scope.loadError){
                        inAppBrowser.removeEventListener('loaderror', wrappedFunction($scope.loadError));
                    }
                }

            });
        }
    };
});