'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .controller('profileCtrl', profileCtrl);

    profileCtrl.$inject = ['$state', '$sessionStorage', 'profileAuthService', 'profileDataService'];

    function profileCtrl($state, $sessionStorage, profileAuthService, profileDataService) {

        var self = this;

        self.product = function () {
            debugger;
            alert('product11111');
            self.hero();
        };

    }

})();

