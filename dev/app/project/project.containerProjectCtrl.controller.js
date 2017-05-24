'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .controller('containerProjectCtrl', containerProjectCtrl);

    containerProjectCtrl.$inject = ['$state', '$stateParams', '$sessionStorage', 'profileAuthService'];

    function containerProjectCtrl($state, $stateParams, $sessionStorage, profileAuthService) {

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

    }

})();

