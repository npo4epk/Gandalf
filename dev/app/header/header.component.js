'use strict';

;(function () {

    angular
        .module('gandalf.header')
        .component('pageHeader', {
            templateUrl: 'app/header/views/header.template.html',
            controller: 'headerCtrl',
            bindings: {
                getUserData: '<',
                getTablesData: '<'
            }
        });

})();