angulargap.controller("ContactsController", function ($scope, ContactService) {

    $scope.state = "find";

    $scope.contacts = [];

    $scope.contact = {};

    $scope.findContact = function (contactSearch) {
        ContactService.find(contactSearch).then(function (contacts) {
            $scope.contacts = contacts;
        }, function (error) {
            console.log(error);
        });
    };

    $scope.edit = function (contact) {
        $scope.state="create";
        $scope.contact = contact;
    };

    $scope.cancel = function(){
        $scope.state="find";
        $scope.contact = null;
    };

    $scope.showFindContact = function(){
        $scope.state="find";
        $scope.contact = null;
        $scope.contacts = [];
    };

    $scope.showCreateContact = function () {
        $scope.state = 'create';
        $scope.contact = ContactService.create();
    };
    $scope.back = function(){
        $scope.state="find";
    };
    $scope.view = function(contact){
        $scope.state="view";
        $scope.contact = contact;

    };
    $scope.save = function () {
        $scope.contact.save();
    };

});