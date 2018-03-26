'use strict';

;(function () {

    angular
        .module('gandalf.bubbles')
        .directive('bubbles', bubbles);
    
    function bubbles() {
        return {
            restrict: 'AE',
            templateUrl: 'app/common/bubbles/views/bubbles.template.html'
        }
    }

})();

