'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {

        $stateProvider
            .state('project', {
                abstract: true,
                url: '/project',
                template: '<div ui-view></div>'
            })
            .state('project.project-id', {
                abstract: true,
                url: '/:projectId',
                template: '<container-project class="project-container"></container-project>'
            })
            .state('project.project-id.create', {
                url: '/new',
                template: '<create-project class="create-project"></create-project>'
            })
            .state('project.project-id.tables', {
                url: '/tables',
                template: '<p style="color: #fff;">!!!!!!!!!!!Tables project</p>'
            })
            .state('project.project-id.setting', {
                url: '/setting',
                template: '<p style="color: #fff;">!!!!!!!!!!!SETTING project</p>'
            })
            .state('project.project-id.history', {
                url: '/history',
                template: '<p style="color: #fff;">!!!!!!!!!!!HISTORY project</p>'
            });
            // .state('project.project-id.table', {
            //     abstract: true,
            //     url: '/table',
            //     template: '<ui-view></ui-view>'
            // })
            // .state('project.project-id.table.create', {
            //     url: '/create',
            //     template: '<table-create></table-create>'
            // })
            // .state('project.project-id.table.table-id', {
            //     abstract: true,
            //     url: '/:tabletId',
            //     template: '<ui-view></ui-view>'
            // })
            // .state('project.project-id.table.table-id.edit', {
            //     url: '/edit',
            //     template: '<table-edit></table-edit>'
            // });

    };

})();