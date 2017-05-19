'use strict';

;(function () {

    angular
        .module('gandalf.project.create')
        .controller('projectCreateCtrl', projectCreateCtrl);

    projectCreateCtrl.$inject = ['$log', '$sessionStorage', 'profileDataService'];

    function projectCreateCtrl($log, $sessionStorage, profileDataService) {

        debugger;
        $log.log('Project create!');

        var self = this;
        // self.profile = {};

        profileDataService.getList().then(function (list) {

            for( var i = 0; list.length > i; i++ ) {
                debugger;
                if ( list[i].$id === $sessionStorage.dataId ) {
                    self.profile = list[i];
                }
            }

        });

        debugger;


    };
    
})();

