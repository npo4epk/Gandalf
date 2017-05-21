'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .controller('rootCtrl', rootCtrl);

    function rootCtrl() {
        var self = this;


        self.profileSingIn = {
            profileTitleText: 'Sign In',
            submitAction: _SingIn,
            userName: false,
            inputSubmitValue: 'Sign In',
            profileText: 'Don\'t have an account?',
            profileLink: 'profile.sign-up',
            profileLinkText: 'Sign Up'
        };

        self.profileSingUp = {
            profileTitleText: 'Sign Up',
            submitAction: _SingUp,
            userName: true,
            inputSubmitValue: 'Sign Up',
            profileText: 'Already have an account?',
            profileLink: 'profile.sign-in',
            profileLinkText: 'Sign In'
        };

        self.profileThank = {
            profileTitleText: 'Registration completed successfully!',
            profileText: 'Have a nice work!',
            profileLink: 'profile.sign-in',
            profileLinkText: 'Sign In',
            thank: true
        };


        function _SingIn(user) {
            alert("SingIn");
        }

        function _SingUp(user) {
            alert("SingIn");
        }


    };



})();

