'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {

        $stateProvider
            .state('project', {
                abstract: true,
                url: '/project',
                template: '<ui-view></ui-view>'
            })
            .state('project.create', {
                url: '/create',
                template: '<p>project create</p>'
            })
            .state('sign.history', {
                url: '/history',
                template: '<p>project history</p>'
            })
            .state('project.setting', {
                url: '/setting',
                template: '<p>project setting</p>'
            })
            .state('project.list', {
                url: '/setting',
                template: '<p>project setting</p>'
            });

    };

})();