'use strict';

;(function () {

    angular
        .module('gandalf.core', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.core.header',
            'gandalf.core.project',
            'gandalf.core.table'

        ]);

})();

