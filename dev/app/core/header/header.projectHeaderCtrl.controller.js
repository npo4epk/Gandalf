'use strict';

;(function () {

    angular
        .module('gandalf.core.header')
        .controller('projectHeaderCtrl', projectHeaderCtrl);

    projectHeaderCtrl.$inject = ['$stateParams'];

    function projectHeaderCtrl($stateParams) {
        debugger;
        console.log('Project header');
    };
    
})();

