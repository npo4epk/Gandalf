'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .service('accessService', accessService);

    accessService.$inject = ['$sessionStorage', '$state'];

    function accessService($sessionStorage, $state) {

        this.profileCheck = function (event, toState, toParams, fromState, fromParams) {
            debugger;
            if (toState.data === undefined) {
                debugger;
                if (!$sessionStorage.authId ) {
                    event.preventDefault();
                    $state.go('profile.sign-in');
                }
            }
        };

    };

})();