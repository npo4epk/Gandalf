'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(route);

    route.$inject = ['$urlRouterProvider'];

    function route($urlRouterProvider) {

        $urlRouterProvider.otherwise("/profile/sign-in");

    };

})();