'use strict';

;(function () {

    angular
        .module('gandalf')
        .config(route);

    route.$inject = ['$urlRouterProvider', '$stateProvider'];

    function route($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/sign-in');

        $stateProvider
            .state('sign-in', {
                url: '/sign-in',
                views: {
                    content: {
                        component: 'auth'
                    }
                },
                resolve: {
                    dataAuth: function () {
                        return {
                            title: 'Sign In',
                            text:  'Don\'t have an account?',
                            link: 'Sign Up',
                            state: 'sign-up',
                            submitAction: 'SingIn'
                        }
                    }
                }

            })
            .state('sign-up', {
                url: '/sign-up',
                views: {
                    content: {
                        component: 'auth'
                    }
                },
                resolve: {
                    dataAuth: function () {
                        return {
                            title: 'Sign Up',
                            text:  'Already have an account?',
                            link: 'Sign In',
                            state: 'sign-in',
                            submitAction: 'SingUp'
                        }
                    }
                }
            })
            .state('thank', {
                url: '/thank',
                views: {
                    content: {
                        component: 'auth'
                    }
                },
                resolve: {
                    dataAuth: function () {
                        return {
                            title: 'Registration completed successfully!',
                            text:  'Have a nice work!',
                            link: 'Sign In',
                            state: 'sign-in'
                        }
                    }
                }
            })
            .state('projectId', {
                url: '/:projectId/tables',
                views: {
                    header: {
                        component: 'pageHeader'
                    },
                    content: {
                        component: 'projectCreate'
                    }
                },
                resolve: {
                    getUserData: ['$state', '$sessionStorage', 'userService', function ($state, $sessionStorage, userService) {
                        return userService.getList()
                            .then(function (data) {
                                if (data.$getRecord($sessionStorage.dataId)) {
                                    return data.$getRecord($sessionStorage.dataId);
                                }
                            })
                            .catch(function (error) {
                                $state.go('sign-in');
                            })
                    }],
                    getTablesData: ['$state', '$stateParams', 'projectService', function ($state, $stateParams, projectService) {
                        return projectService.getList()
                            .then(function (data) {

                                var name = null,
                                    id   = null;

                                if (data.$getRecord($stateParams.projectId)) {
                                    name = data.$getRecord($stateParams.projectId).Info.name;
                                    id = data.$getRecord($stateParams.projectId).$id;
                                }
                                return {
                                    data: data,
                                    name : name,
                                    id: id
                                };
                            })
                            .catch(function (error) {
                                $state.go('sign-in');
                            })
                    }]
                }
            })
            .state('project-create', {
                url: '/project/create',
                views: {
                    header: {
                        component: 'pageHeader'
                    },
                    content: {
                        component: 'projectCreate'
                    }
                },
                resolve: {
                    dataAuth: function () {
                        return {
                            title: 'Registration completed successfully!',
                            text:  'Have a nice work!',
                            link:  'Sign In',
                            state: 'sign-in'
                        }
                    },
                    getUserData: ['$state', '$sessionStorage', 'userService', function ($state, $sessionStorage, userService) {
                        return userService.getList()
                            .then(function (data) {
                                if (data.$getRecord($sessionStorage.dataId)) {
                                    return data.$getRecord($sessionStorage.dataId);
                                }
                            })
                            .catch(function (error) {
                                $state.go('thank');
                            })
                    }],
                    getTablesData: ['$state', '$stateParams', 'projectService', function ($state, $stateParams, projectService) {
                        return projectService.getList()
                            .then(function (data) {

                                var name = null,
                                    id   = null;

                                if (data.$getRecord($stateParams.projectId)) {
                                    name = data.$getRecord($stateParams.projectId).Info.name;
                                    id = data.$getRecord($stateParams.projectId).$id;
                                }
                                return {
                                    data: data,
                                    name : name,
                                    id: id
                                };
                            })
                            .catch(function (error) {
                                $state.go('sign-in');
                            })
                    }]
                }
            })
    }

})();