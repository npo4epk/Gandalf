'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .factory('accessService', accessService);

    accessService.$inject = ['$sessionStorage', '$state'];

    function accessService($sessionStorage, $state) {

        return {
            profileCheck: _profileCheck
        };

        function _profileCheck(event, toState, toParams, fromState, fromParams) {
            if (toState.data === undefined) {
                if (!$sessionStorage.authId ) {
                    event.preventDefault();
                    $state.go('profile.sign-in');
                }
            }
        }

    }

})();