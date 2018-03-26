'use strict';

;(function () {

    angular
        .module('gandalf')
        .run(stateChange);

    stateChange.$inject = ['$rootScope', '$transitions', '$state',
                           'fsf'];

    function stateChange($rootScope, $transitions, $state, fsf) {

        $rootScope.$state = $state;
        $rootScope.hhhh = true;

        $transitions.onStart({ }, function(trans) {
            debugger;
            // var $transitions$ = $transitions;
            // var $state = trans.router.stateService;
            // accessService.profileCheck($state);
            // $(".page-loading").removeClass("hidden");
            // MyController.dada1();

            var $state = trans.router.stateService;
            var a$rootScope = trans.injector().get('$rootScope');
            a$rootScope.hhhh = true;
            debugger;
            // $rootScope.hhhh = true;

            return true;

        });

        $transitions.onFinish({ }, function(trans) {
            debugger;
            // var $transitions$ = $transitions;
            // var $state = trans.router.stateService;
            // accessService.profileCheck($state);
            // $(".page-loading").addClass("hidden");
            // MyController.dada2();
            // $rootScope.hhhh = false;
            return true;
        });

        $transitions.onSuccess({ }, function(trans) {
            debugger;

            // var $transitions$ = $transitions;
            // var $state = trans.router.stateService;
            // accessService.profileCheck($state);
            // $(".page-loading").addClass("hidden");
            $rootScope.hhhh = false;

        });

    }

})();