'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .service('accessService', accessService);

    accessService.$inject = ['$sessionStorage', '$state'];

    function accessService($sessionStorage, $state) {

        this.profileCheck = function (event, toState, toParams, fromState, fromParams) {
            if (toState.data === undefined) {
                if (!$sessionStorage.authId) {
                    event.preventDefault();
                    $state.go('profile.sign-up');
                }
            }
        };

    };

})();