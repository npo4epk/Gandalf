'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .config(profileRoute);

    profileRoute.$inject = ['$stateProvider'];

    function profileRoute($stateProvider) {

        $stateProvider
            .state('profile', {
                abstract: true,
                url: '/profile',
                template: '<ui-view></ui-view>'
            })
            .state('profile.signIn', {
                url: '/sign-in',
                template: '<sign-in></sign-in>',
                data: {
                    'noLogin': true
                }
            })
            .state('profile.signUp', {
                url: '/sign-up',
                template: '<sign-up></sign-up>',
                data: {
                    'noLogin': true
                }
            });

    };


})();