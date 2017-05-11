'use strict';

;(function () {

    angular
        .module('gandalf.sign')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {

        $stateProvider
            .state('sign', {
                abstract: true,
                url: '/sign',
                template: '<ui-view></ui-view>'
            })
            .state('sign.in', {
                url: '/in',
                template: '<sign-in></sign-in>',
                data: {
                    'noLogin': true
                }
            })
            .state('sign.up', {
                url: '/up',
                template: '<sign-up></sign-up>',
                data: {
                    'noLogin': true
                }
            });

    };


})();