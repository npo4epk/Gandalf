'use strict';

;(function () {

    angular
        .module('gandalf', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.firebase',
            'gandalf.bubbles',
            'gandalf.preloader',
            'gandalf.auth',
            'gandalf.header',
            'gandalf.core'

        ]);

})();

