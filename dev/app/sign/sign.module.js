'use strict';

;(function () {

    angular
        .module('gandalf.sign', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.sign.in',
            'gandalf.sign.up'

        ]);
    
})();

