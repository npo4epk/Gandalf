'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .controller('signCtrl', signCtrl);

    signCtrl.$inject = ['$state', '$sessionStorage', 'profileAuthService', 'profileDataService'];

    function signCtrl($state, $sessionStorage, profileAuthService, profileDataService) {

        var self = this;

        self.product = function () {
            debugger;
            alert('product11111');
            self.hero();
        };

    };



})();

