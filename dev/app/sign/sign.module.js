'use strict';

;(function () {

    angular
        .module('gandalf.sign', [

            // Third party modules.
            'ui.router',

            // Modules Firebase
            'firebase',

            // Custom modules.
            'gandalf.sign.in',
            'gandalf.sign.up'

        ]);
    
})();

