'use strict';

;(function () {

    angular
        // .module('gandalf.profile.sign-in')
        .module('gandalf.profile')
        .component('signIn', {
            templateUrl: 'app/profile/sign-in/views/profile.sign-in.template.html',
            controller: 'signInCtrl',
            bindings: {
                hero: '&'
            }
        });

})();

