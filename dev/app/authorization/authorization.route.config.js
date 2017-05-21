'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {

        $stateProvider
            .state('profile', {
                abstract: true,
                url: '/profile',
                template: '<root></root>'
            })
            .state('profile.sign-in', {
                url: '/sign-in',
                template: '<profile profile="$ctrl.profileSingIn"</profile>',

                data: {
                    'noLogin': true
                }
            })
            .state('profile.sign-up', {
                url: '/sign-up',
                template: '<profile profile="$ctrl.profileSingUp"</profile>',
                data: {
                    'noLogin': true
                }
            })
            .state('profile.thank', {
                url: '/thank',
                template: '<profile profile="$ctrl.profileThank"</profile>',
                data: {
                    'noLogin': true
                }
            });
    }

})();