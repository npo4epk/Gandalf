'use strict';

;(function () {

    angular
        .module('gandalf.project')
    .directive("dropdown", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var m = angular.element(element.find(".dropdown")[0]);
                var t = angular.element(element.find(".dropdown-open")[0]);
                var b = angular.element(document.getElementsByTagName("body"));
                t.on("click", function(e) {
                    debugger;
                    console.log("click!");
                    var c = function(e) {
                        debugger;
                        if(m.hasClass("open")) {
                            m.removeClass("open");
                            m.slideUp();
                            t.removeClass("active");
                            b.unbind("click", c);
                        } else {
                            m.addClass("open");
                            t.addClass("active");
                            m.slideDown();
                        }
                    }
                    if(!m.hasClass("open"))
                        b.bind("click", c);
                });
            }
        };
    })
        .controller('containerProjectCtrl', containerProjectCtrl);

    containerProjectCtrl.$inject = ['$state', '$stateParams', '$sessionStorage', 'ngDialog', 'profileAuthService', 'profileDataService', 'dataBaseService'];

    function containerProjectCtrl($state, $stateParams, $sessionStorage, ngDialog, profileAuthService, profileDataService, dataBaseService) {

        var self = this;

        self.projectId = $stateParams.projectId;

        self.showMenu = self.projectId !== 'create';
        self.signOut = _signOut;
        self.menuListProject = null;

        self.isActive = isActive;

        function isActive(id) {
            return self.projectId === id;
        }

        profileDataService.getList()
            .then(function (pro) {
                debugger;
                self.proName = pro.$getRecord($sessionStorage.dataId).profileName;
                self.proEmail = pro.$getRecord($sessionStorage.dataId).email;
            })
            .catch(function (error) {
                debugger;
            })


        dataBaseService.getListProject()
            .then(function (list) {
                self.projectName = list.$getRecord(self.projectId).Info.name;
            })
            .catch(function (error) {
                debugger;
            })



        dataBaseService.getListProject()
            .then(function (listProject) {
                var menuListProject = [];
                if (listProject.length) {
                    for (var i = 0; listProject.length > i; i++) {
                        if (listProject[i].authId === $sessionStorage.authId && listProject[i].dataId === $sessionStorage.dataId) {
                            menuListProject.push(listProject[i]);
                        }
                    }
                }
                debugger;
                self.menuListProject = menuListProject;
            })
            .catch(function (error) {
                debugger;
            });



        function _signOut($event) {
            $event.preventDefault();

            profileAuthService.signOut()
                .then(function () {
                    debugger;
                    delete $sessionStorage.authId;
                    delete $sessionStorage.dataId;
                    $state.go('profile.sign-in');
                })
                .catch(function (error) {
                    debugger;
                });
        }
            
        
        
        self.openDialog = function () {
            ngDialog.open({
                template: 'app/project/views/edit-profile.html',
                className: 'ngdialog-theme-default dialog',
                plain: false,
                showClose: false,
                controller: dialogCtrl,
                controllerAs: 'vm'
            });
        }

        dialogCtrl.$inject = ['$scope'];

        function dialogCtrl($scope) {
            debugger;
            var self = this;
            $scope.email = 'emailll';
            self.user = 'asas';
        }


    }

})();

