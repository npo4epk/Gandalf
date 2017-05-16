'use strict';

;(function () {

    angular
        .module('gandalf.profile', [

            // Third party modules.
            'ui.router',
            'ngStorage',

            // Custom modules.
            'gandalf.profile.sign-in',
            'gandalf.profile.sign-up'

        ]);
    
})();

