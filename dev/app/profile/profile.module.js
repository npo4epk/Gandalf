'use strict';

;(function () {

    angular
        .module('gandalf.profile', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.profile.signIn',
            'gandalf.profile.signUp'

        ]);
    
})();

