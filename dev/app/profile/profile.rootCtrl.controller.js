'use strict';

;(function () {

    angular
        .module('gandalf.profile')
        .controller('rootCtrl', rootCtrl);

    function rootCtrl() {
        var self = this;

        self.product1 = function () {
            alert('productПЕРВЫЙЦ');
        };
    };



})();

