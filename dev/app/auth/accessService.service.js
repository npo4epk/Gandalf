'use strict';

;(function () {

    angular
        .module('gandalf.auth')
        .factory('accessService', accessService);

    accessService.$inject = ['$sessionStorage'];

    function accessService($sessionStorage) {

        return {
            profileCheck: _profileCheck
        };

        function _profileCheck($state) {
            debugger;
            if (!$sessionStorage.authId) {
                return $state.go("sign-in");
            }
        }
    }

})();