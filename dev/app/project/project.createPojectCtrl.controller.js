'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .controller('createPojectCtrl', createPojectCtrl);

    createPojectCtrl.$inject = ['$stateParams'];

    function createPojectCtrl($stateParams) {
        // debugger;
        console.log('Project createt');
    }

})();

