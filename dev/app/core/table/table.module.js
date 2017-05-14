'use strict';

;(function () {

    angular
        .module('gandalf.core.table', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.table.create',
            'gandalf.table.edit'

        ]);

})();

