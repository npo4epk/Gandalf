'use strict';

;(function () {

    angular
        .module('gandalf.core.project', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.project.create',
            'gandalf.project.tables',
            'gandalf.project.setting',
            'gandalf.project.history'

        ]);

})();

