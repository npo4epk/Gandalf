'use strict';

;(function () {

    angular
        .module('gandalf.profile.sign-up')
        .controller('signUpCtrl', signUpCtrl);


    signUpCtrl.$inject = ['$state', 'profileAuthService', 'profileDataService'];

    function signUpCtrl($state, profileAuthService, profileDataService) {

        var self = this;

        self.profile = {};
        self.signUp = _signUp;

        function _signUp(profile) {

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



        };

    };
    
})();

