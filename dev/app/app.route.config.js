'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(route);

    route.$inject = ['$urlRouterProvider', '$sessionStorageProvider'];

    function route($urlRouterProvider, $sessionStorageProvider) {
        // debugger;
        if($sessionStorageProvider.get('authId')) {
            //TODO
            $urlRouterProvider.otherwise('/project/1/tables');
        } else {
            // debugger;
            $urlRouterProvider.otherwise('/profile/sign-in');
        }
    };

})();