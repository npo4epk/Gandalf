'use strict';

;(function () {

    angular
        .module('gandalf.profile.sign-in')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$state', '$sessionStorage', 'profileAuthService', 'profileDataService'];

    function signInCtrl($state, $sessionStorage, profileAuthService, profileDataService) {

        var self = this;

        self.profile = {};
        self.signIn = _signIn;

        function _signIn(profile) {
            profileAuthService.signIn(profile)
                .then(function (token) {
                    $sessionStorage.authId = token.uid;
                    $sessionStorage.dataId = '';

                    var listDataProfile = profileDataService.userArr;

                    for (var i = 0; listDataProfile.length > i; i++) {
                        if (listDataProfile[i].authId === $sessionStorage.authId) {
                            $sessionStorage.dataId = listDataProfile[i].$id;
                        }
                    };

                    $state.go('project.project-id.tables', {projectId: 1});

                })
                .catch(function (error) {
                    //TODO
                    debugger;
                });
        }

    }
    
})();

