'use strict';

;(function () {

    angular
        .module('gandalf.project', [

            // Third party modules.
            'ui.router',

            // Custom modules.
            'gandalf.project.create',
            'gandalf.project.history',
            'gandalf.project.list',
            'gandalf.project.setting'

        ]);

})();

