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
                template: '<root></root>'
            })
            .state('profile.sign-in', {
                url: '/sign-in',
                template: '<sign submit-action="$ctrl.product1()" form-title="Sign In"></sign>',
                data: {
                    'noLogin': true
                }
            });


        // $stateProvider
        //     .state('profile', {
        //         abstract: true,
        //         url: '/profile',
        //         template: '<ui-view></ui-view><ul class="bubble1s"><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li><li class="bubbles__item"></li></ul>',
        //         controller: function($scope){
        //             var self = $scope;
        //             $scope.testaaaa = function () {
        //                 debugger;
        //                 alert('dadad');
        //             };
        //         }
        //     })
        //     .state('profile.sign-in', {
        //         url: '/sign-in',
        //         // template: '<aas hero="$resolve.user"></aas>',
           //         data: {
        //             'noLogin': true
        //         }
        //         // resolve: {
        //         //     user: function() { return '$ctrl.heros()'; }
        //         // }
        //     })
        //     .state('profile.sign-up', {
        //         url: '/sign-up',
        //         template: '<aas hero="$ctrl.heros()"></aas>',
        //         data: {
        //             'noLogin': true
        //         }
        //     });
        //     // .state('profile.thank', {
        //     //     url: '/thank',
        //     //     template: '<thank></thank>',
        //     //     data: {
        //     //         'noLogin': true,
        //     //         'state': 'thank'
        //     //     }
        //     // });

    };


})();