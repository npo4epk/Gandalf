'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(appRoute);

    appRoute.$inject = ['$urlRouterProvider'];

    function appRoute($urlRouterProvider) {

        $urlRouterProvider.otherwise("/profile/sign-in");

    };

})();