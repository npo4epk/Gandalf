'use strict';

;(function () {

    angular
        .module('gandalf.auth')
        .controller('authCtrl', authCtrl);

    authCtrl.$inject = ['$rootScope', '$state', '$sessionStorage', 'toaster',
                        'authService', 'userService', 'projectService'];

    function authCtrl($rootScope, $state, $sessionStorage, toaster, authService, userService, projectService) {

        var self = this;

        self.$state = $state;
        self.SingIn = _SingIn;
        self.SingUp = _SingUp;

        function _SingIn(user) {

            var toasterId = toaster.pop({
                type: 'success',
                title: 'Authorization!',
                body: 'Please wait.....',
                timeout: 0,
                showCloseButton: false
            });

            authService.signIn(user)
                .then(function (token) {
                    $sessionStorage.authId = token.uid;

                    userService.getList()
                       .then(function (data) {

                           for (var i = 0; data.length > i; i++) {
                               if (data[i].authId === $sessionStorage.authId) {
                                   $sessionStorage.dataId = data[i].$id;
                               }
                           }

                           projectService.getList()
                               .then(function (data) {
                                   var createProject = true;
                                   if (data.length) {
                                       for (var i = 0; data.length > i; i++) {
                                           if (data[i].authId === $sessionStorage.authId && data[i].dataId === $sessionStorage.dataId) {
                                               createProject = false;
                                               toaster.clear(toasterId);
                                               $state.go('projectId', {projectId: data[i].$id});
                                               break;
                                           }
                                       }
                                   }
                                   if (createProject) {
                                       toaster.clear(toasterId);
                                       $state.go('project.project-id.create', {projectId: 'create'});
                                   }
                               })
                               .catch(function (error) {
                                   toaster.clear(toasterId);
                                   toaster.pop({
                                       type: 'error',
                                       title: 'Error!',
                                       body: error.message,
                                       timeout: 5000,
                                       showCloseButton: false
                                   });
                               });
                       })

                })
                .catch(function (error) {
                    toaster.clear(toasterId);
                    toaster.pop({
                        type: 'error',
                        title: 'Error!',
                        body: error.message,
                        timeout: 5000,
                        showCloseButton: false
                    });
                });
        }

        function _SingUp(user) {

            var toasterId = toaster.pop({
                type: 'success',
                title: 'Registration!',
                body: 'Please wait.....',
                timeout: 0,
                showCloseButton: false
            });

            authService.signUp(user)
                .then(function (ref) {
                    user.authId = ref.uid;
                    user.firstName = '';
                    user.lastName = '';
                    delete user.password;

                    userService.addRecord(user)
                        .then(function (ref) {
                            toaster.clear(toasterId);
                            $state.go('thank');
                        })
                })
                .catch(function (error) {
                    toaster.clear(toasterId);
                    toaster.pop({
                        type: 'error',
                        title: 'Error!',
                        body: error.message,
                        timeout: 5000,
                        showCloseButton: false
                    });
                });

        }

    }

})();

