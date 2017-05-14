'use strict';

;(function () {

    angular
        .module('gandalf.profile', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.profile.sign-in',
            'gandalf.profile.sign-up'

        ]);
    
})();

