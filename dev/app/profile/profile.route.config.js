'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {

        $stateProvider
            .state('profile', {
                abstract: true,
                url: '/profile',
                template: '<ui-view></ui-view><ul class="bubbles"><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li></ul>'
            })
            .state('profile.sign-in', {
                url: '/sign-in',
                template: '<sign-in></sign-in>',
                data: {
                    'noLogin': true
                }
            })
            .state('profile.sign-up', {
                url: '/sign-up',
                template: '<sign-up></sign-up>',
                data: {
                    'noLogin': true
                }
            });

    };


})();