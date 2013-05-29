angulargap.factory("NotificationService", function ($rootScope) {

    function getButtonLabels(buttons){
        var buttonTitles = [];

        angular.forEach(buttons, function(value){
            buttonTitles.push(value.title);
        });
        return buttonTitles;
    }

    return {
        alert: function (message, title, buttonText, buttonAction) {
            navigator.notification.alert(message,
                function () {
                    $rootScope.$apply(function () {
                        buttonAction();
                    })
                },
                title,
                buttonText);
        },
        confirm: function (message, title, buttons) {

            var buttonLabels = getButtonLabels(buttons);

            navigator.notification.confirm(
                message,
                function (buttonIndex) {
                    $rootScope.$apply(function () {
                        buttons[buttonIndex - 1].buttonAction();
                    });
                },
                title,
                buttonLabels
            );
        },
        prompt : function(message, title, buttons){
            var buttonLabels = getButtonLabels(buttons);
            navigator.notification.prompt(
                message,
                function (results) {
                    $rootScope.$apply(function () {
                        buttons[results.buttonIndex - 1].buttonAction(results.input1);
                    });
                },
                title,
                buttonLabels
            );
        },
        beep : function(){
            navigator.notification.beep();
        },
        vibrate : function(){
            navigator.notification.vibrate();
        }

    }
});