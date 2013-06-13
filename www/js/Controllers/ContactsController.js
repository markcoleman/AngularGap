angulargap.controller("ContactsController", function ($scope, ContactService) {


    $scope.contacts = [];

    $scope.contact = {};

    $scope.findContact = function () {
        console.log($scope.filter);
        ContactService.find($scope.filter).then(function (contacts) {
            $scope.contacts = contacts;
        }, function (error) {
            console.log(error);
        });
    };

    $scope.edit = function (contact) {
        $scope.contact = contact;
    };

    $scope.create = function () {
        $scope.contact = ContactService.create();
        $scope.action = 'create'
    };

    $scope.save = function () {
        $scope.contact.save();
    };

});