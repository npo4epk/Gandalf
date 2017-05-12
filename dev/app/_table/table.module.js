'use strict';

;(function () {

    angular
        .module('gandalf.table', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.table.create',
            'gandalf.table.edit',
            'gandalf.table.list'

        ]);
    
})();

