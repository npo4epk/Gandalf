'use strict';

;(function () {

    angular
        .module('gandalf.auth')
        .component('auth', {
            templateUrl: 'app/auth/views/auth.template.html',
            controller: 'authCtrl',
            bindings: {
                dataAuth: '<'
            }
        });

})();

