'use strict';

;(function () {

    angular
        .module('gandalf.preloader')
        .factory('fsf', fsf)
        .directive('preloader', preloader);

    preloader.$inject = ['$rootScope', '$state', '$http'];

    function preloader($rootScope, $state, $http) {
        return {
            restrict: 'AE',
            replace: false,
            transclude: true,
            templateUrl: 'app/common/preloader/views/preloader.template.html',
            // bindings: { trans: '<' },
            controller: MyController,
            link: function (scope, element, attrs) {

                // scope.loading = function() {
                //     return $http.pendingRequests.length;
                // };
                //
                // scope.$watch(scope.loading, function(ajax) {
                //     debugger;
                //     console.log(ajax);
                //     if (ajax) {
                //         attrs.$set('style', 'display:block');
                //     } else {
                //         attrs.$set('style', 'display:none');
                //     }
                //     // I use "attrs.$set('style')" for no ngShow dependency ... just <div preloader></div>
                // });


                debugger;
                var self_ = this;
                angular.element(element.children()[0]).addClass('niiii');
                // var aaaa = $state;
                // var bbbb = $transition;
                // // var cccc = $transition$;
                debugger;

                var _preloader = angular.element(element.children()[0]);

                this.stop = function () {
                    alert('stop');
                };



                debugger;
                var element = element;


                // var unregister = $rootScope.$state.transition.onFinish({ }, function(trans, element) {
                //     element.addClass('herr');
                //     // var $transitions$ = $transitions;
                //     // var $state = trans.router.stateService;
                //     // accessService.profileCheck($state);
                //     // $(".page-loading").addClass("hidden");
                //
                //
                // });
                //
                // var unregiste1r = $state.transition.onFinish({ }, function(trans, element) {
                //     element.addClass('herr');
                //     // var $transitions$ = $transitions;
                //     // var $state = trans.router.stateService;
                //     // accessService.profileCheck($state);
                //     // $(".page-loading").addClass("hidden");
                //
                //
                // });

            }
        }
    }

    MyController.$inject = ['$rootScope'];

    function MyController($rootScope) {

        // $rootScope.hhhh = true;
        //
        // setTimeout(function () {
        //     console.log('false');
        //     $rootScope.hhhh = false;
        // }, 0);

        var self = this;
        var a = this.$transition$;
        debugger;

        self.dada1 = function (){
            alert('11111');
        };

        self.dada2 = function (){
            alert('222222');
        };

    }


    function fsf() {

        return  {
            open: _open,
            close: _close
        };

        function _open() {
            return true;
        };

        function _close() {
            return false;
        };

    };

})();
