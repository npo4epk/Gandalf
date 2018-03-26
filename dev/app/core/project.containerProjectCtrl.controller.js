'use strict';

;(function () {

    angular
        .module('gandalf.core')
        .controller('containerProjectCtrl', containerProjectCtrl);

    containerProjectCtrl.$inject = ['$state', '$stateParams', '$sessionStorage', 'ngDialog', 'authService', 'userService', 'projectService'];

    function containerProjectCtrl($state, $stateParams, $sessionStorage, ngDialog, authService, userService, projectService) {

        // var self = this;
        //
        // self.projectId = $stateParams.projectId;
        //
        // self.showMenu = self.projectId !== 'create';
        // self.signOut = _signOut;
        // self.menuListProject = null;
        //
        // self.isActive = isActive;
        //
        // function isActive(id) {
        //     return self.projectId === id;
        // }
        //
        // profileDataService.getList()
        //     .then(function (pro) {
        //         debugger;
        //         self.proName = pro.$getRecord($sessionStorage.dataId).profileName;
        //         self.proEmail = pro.$getRecord($sessionStorage.dataId).email;
        //     })
        //     .catch(function (error) {
        //         debugger;
        //     })
        //
        //
        // dataBaseService.getList()
        //     .then(function (list) {
        //         self.projectName = list.$getRecord(self.projectId).Info.name;
        //     })
        //     .catch(function (error) {
        //         debugger;
        //     })
        //
        //
        //
        // dataBaseService.getList()
        //     .then(function (listProject) {
        //         var menuListProject = [];
        //         if (listProject.length) {
        //             for (var i = 0; listProject.length > i; i++) {
        //                 if (listProject[i].authId === $sessionStorage.authId && listProject[i].dataId === $sessionStorage.dataId) {
        //                     menuListProject.push(listProject[i]);
        //                 }
        //             }
        //         }
        //         debugger;
        //         self.menuListProject = menuListProject;
        //     })
        //     .catch(function (error) {
        //         debugger;
        //     });
        //
        //
        //
        // function _signOut($event) {
        //     $event.preventDefault();
        //
        //     profileAuthService.signOut()
        //         .then(function () {
        //             debugger;
        //             delete $sessionStorage.authId;
        //             delete $sessionStorage.dataId;
        //             $state.go('profile.sign-in');
        //         })
        //         .catch(function (error) {
        //             debugger;
        //         });
        // }
        //
        // self.openDialog = function () {
        //     var dddd = ngDialog.open({
        //         template: 'app/project/views/edit-profile.html',
        //         className: 'ngdialog-overlay',
        //         appendClassName: 'dialog',
        //         plain: false,
        //         overlay: !true,
        //         showClose: false,
        //
        //         resolve: {
        //             data: function depFactory (profileDataService) {
        //
        //                 return profileDataService.getList()
        //                     .then(function (pro) {
        //                         return pro.$getRecord($sessionStorage.dataId);
        //                     })
        //                     .catch(function (error) {
        //                        return console.log(error);
        //                     })
        //
        //             }
        //         },
        //         controller: dialogCtrl,
        //         controllerAs: 'vm'
        //     });
        //
        //     debugger;
        //     self.dialogId = dddd.id;
        // };
        //
        // dialogCtrl.$inject = ['data'];
        //
        // function dialogCtrl(data) {
        //     var vm = this;
        //     vm.profile = {
        //         username: data.profileName,
        //         firstname: data.firstName,
        //         lastname: data.lastName
        //     };
        //
        //
        //     vm.saveDialog = function (profile) {
        //         ngDialog.close(self.dialogId );
        //     };
        // }
        //
        //
        //

    }

})();

