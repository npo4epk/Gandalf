'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(route);

    route.$inject = ['$urlRouterProvider', '$sessionStorageProvider'];

    function route($urlRouterProvider, $sessionStorageProvider) {
        $urlRouterProvider.otherwise('/profile/sign-in');
    };

})();