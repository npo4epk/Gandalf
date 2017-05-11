'use strict';

;(function () {

    angular
        .module('gandalf.sign.in')
        .component('signIn', {
            templateUrl: 'app/sign/in/views/in.template.html',
            controller: SignInCtrl
        });

    // SignInCtrl.$inject = ['authService'];

    function SignInCtrl() {

    };
    
})();

