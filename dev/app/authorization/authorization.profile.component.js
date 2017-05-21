'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .component('profile', {
            templateUrl: 'app/authorization/views/profile.template.html',
            controller: 'profileCtrl',
            bindings: {
                profile: '='
            }
        });

})();

