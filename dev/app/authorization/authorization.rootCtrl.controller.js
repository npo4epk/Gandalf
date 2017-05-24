'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .controller('rootCtrl', rootCtrl);

    rootCtrl.$inject = ['$rootScope', '$state', '$sessionStorage', 'profileAuthService', 'profileDataService'];

    function rootCtrl($rootScope, $state, $sessionStorage, profileAuthService, profileDataService) {

        var self = this,
            _profileSingUp = {
                profileTitleText: 'Sign Up',
                submitAction: _SingUp,
                userName: true,
                inputSubmitValue: 'Sign Up',
                profileText: 'Already have an account?',
                profileLink: 'profile.sign-in',
                profileLinkText: 'Sign In'
            },
            _profileSingIn = {
                profileTitleText: 'Sign In',
                submitAction: _SingIn,
                userName: false,
                inputSubmitValue: 'Sign In',
                profileText: 'Don\'t have an account?',
                profileLink: 'profile.sign-up',
                profileLinkText: 'Sign Up'
            },
            _profileThank = {
                profileTitleText: 'Registration completed successfully!',
                profileText: 'Have a nice work!',
                profileLink: 'profile.sign-in',
                profileLinkText: 'Sign In',
                thank: true
            };

        self.profileSingIn = _profileSingIn;
        self.profileSingUp = _profileSingUp;
        self.profileThank = _profileThank;

        function _SingIn(user) {
            debugger;
            profileAuthService.signIn(user)
                .then(function (token) {
                    debugger;
                    $sessionStorage.authId = token.uid;
                    $sessionStorage.dataId = '';

                    var listDataProfile = profileDataService.userArr;

                    for (var i = 0; listDataProfile.length > i; i++) {
                        if (listDataProfile[i].authId === $sessionStorage.authId) {
                            $sessionStorage.dataId = listDataProfile[i].$id;
                        }
                    }
                    ;

                    $state.go('project.project-id.tables', {projectId: 1});

                })
                .catch(function (error) {
                    debugger;
                });
        }

        function _SingUp(user) {

            profileAuthService.signUp(profile)
                .then(function (ref) {
                    debugger;
                    profile.authId = ref.uid;
                    profile.firstName = '';
                    profile.lastName = '';

                    delete profile.password;

                    profileDataService.addRecord(profile)
                        .then(function (ref) {
                            debugger;
                            $state.go('profile.thank');
                        })
                        .catch(function (error) {
                            debugger;
                        });

                })
                .catch(function (error) {
                    debugger;
                });

        }

    };



})();

