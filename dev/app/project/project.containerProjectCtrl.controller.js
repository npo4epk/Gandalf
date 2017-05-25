'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .controller('containerProjectCtrl', containerProjectCtrl);

    containerProjectCtrl.$inject = ['$state', '$stateParams', '$sessionStorage', 'ngDialog', 'profileAuthService'];

    function containerProjectCtrl($state, $stateParams, $sessionStorage, ngDialog, profileAuthService) {

        var self = this;

        self.projectId = $stateParams.projectId;
        self.showMenu = self.projectId !== 'create';
        self.toggleClassOpen = _toggleClassOpen;
        self.signOut = _signOut;

        function _toggleClassOpen($event) {

            $event.preventDefault();

            var elem = angular.element(document.querySelector('body')),
                target = angular.element($event.target);

            while (target[0] !== elem[0]) {
                if (target[0].tagName === 'A') {
                    var parent = angular.element(target[0]).parent();
                    if ( parent.length ) {
                        angular.element(parent[0]).toggleClass('open');
                    }
                    return;
                }
                target = angular.element(target[0]).parent();
            }

        }

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
            
        
        
        self.dia = function () {
            ngDialog.open({ template: 'app/project/views/edit-profile.html',
                            className: 'ngdialog-theme-default dialog',
                            showClose: false,
                            controller: ['$scope', function($scope) {
                                var self = this;
                                self.user = 'asas'
                            }],
                            controllerAs: 'vm'
            });
        }


        self.ddSelectOptions = [
            {
                text: 'Option1',
                value: 'a value'
            },
            {
                text: 'Option2',
                value: 'another value',
                someprop: 'somevalue'
            },
            {
                // Any option with divider set to true will be a divider
                // in the menu and cannot be selected.
                divider: true
            },
            {
                // Any divider option with a 'text' property will
                // behave similarly to a divider and cannot be selected.
                divider: true,
                text: 'divider label'
            },
            {
                // Example of an option with the 'href' property
                text: 'Option4',
                href: '#option4'
            }
        ];

        self.ddSelectSelected = {}; // Must be an object



    }

})();

