'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(routes);

    routes.$inject = ['$urlRouterProvider'];

    function routes($urlRouterProvider) {

        $urlRouterProvider.otherwise("/profile/sign-in");

    };

})();