'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .component('sign', {
            templateUrl: 'app/profile/views/sign.template.html',
            controller: 'signCtrl',
            bindings: {
                submitAction: '&',
                formTitle: '@'
            }
        });

})();

