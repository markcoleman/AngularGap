
angulargap.controller("NotificationsController", function ($scope, NotificationService) {

    $scope.showAlert = function () {
        NotificationService.alert("You caused an alert.", "Alert", "Ok", function () {
            $scope.message = "You clicked it!"
        })
    };
    $scope.showConfirm = function () {
        NotificationService.confirm("Do you like this?", "Please Confirm"
            , [
                {
                    title: "No",
                    buttonAction: function () {
                        $scope.message = ":-(";
                    }
                },
                {
                    title: "Yes",
                    buttonAction: function () {
                        $scope.message = ":-)";
                    }
                }
            ]
        );
    };
    $scope.showPrompt = function () {
        NotificationService.prompt("Please enter your name", "Enter Name",
            [
                {title: "Cancel",
                    buttonAction: function (input) {
                        $scope.message = input;
                    }

                },
                {title: "Ok",
                    buttonAction: function (input) {
                        $scope.message = input;
                    }

                }
            ]);
    };
    $scope.causeBeep = function(){
        NotificationService.beep();
    };
    $scope.causeVibrate = function(){
        NotificationService.vibrate();
    };
});