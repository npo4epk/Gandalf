'use strict';

;(function () {

    angular
        .module('gandalf.profile.sign-up')
        .controller('thankCtrl', thankCtrl);

    thankCtrl.$inject = ['$log'];

    function thankCtrl($log) {

        $log.log('This is thank!');

    };
    
})();

