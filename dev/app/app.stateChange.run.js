'use strict';

;(function () {

    angular
        .module('gandalf')
        .run(stateChange);

    stateChange.$inject = ['$rootScope', 'accessService'];

    function stateChange($rootScope, accessService) {

        $rootScope.$on('$stateChangeStart', stateChangeStartFunction);

        function stateChangeStartFunction(event, toState, toParams, fromState, fromParams) {
            accessService.profileCheck(event, toState, toParams, fromState, fromParams);
        };

    };

})();