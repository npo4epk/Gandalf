'use strict';

;(function () {

    angular
        .module('gandalf.core')
        .controller('contentCtrl', contentCtrl);

    contentCtrl.$inject = ['$stateParams'];

    function contentCtrl($stateParams) {
        debugger;
        console.log('HEAD');

        this.getClass = function () {
            return "z-height";
        }
    }

})();

