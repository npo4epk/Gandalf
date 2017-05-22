'use strict';

;(function () {

    angular
        .module('gandalf.core')
        .controller('projectCtrl', projectCtrl);

    projectCtrl.$inject = ['$stateParams'];

    function projectCtrl($stateParams) {
        debugger;
        console.log('projectCtrl');
    }

})();

