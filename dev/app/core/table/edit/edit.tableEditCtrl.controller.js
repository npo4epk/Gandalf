'use strict';

;(function () {

    angular
        .module('gandalf.table.edit')
        .controller('tableEditCtrl', tableEditCtrl);

    tableEditCtrl.$inject = ['$stateParams'];

    function tableEditCtrl($stateParams) {
        console.log('projectId', $stateParams.projectId);
        console.log('tabletId', $stateParams.tabletId);
        console.log('Project edit table');
    };
    
})();

