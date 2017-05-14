'use strict';

;(function () {

    angular
        .module('gandalf', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.firebase',
            'gandalf.profile',
            'gandalf.core'

        ]);

})();

