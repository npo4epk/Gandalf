'use strict';

;(function () {

    angular
        .module('gandalf.profile.sign-in')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$state'];

    function signInCtrl($state) {

      console.log('Sign-in');

      var self = this;

      self.sub = function () {
          $state.go('project.create');
      }

    };
    
})();

