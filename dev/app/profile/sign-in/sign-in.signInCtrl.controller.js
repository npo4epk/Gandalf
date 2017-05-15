'use strict';

;(function () {

    angular
        .module('gandalf.profile.sign-in')
        .controller('signInCtrl', signInCtrl);

    signInCtrl.$inject = ['$state', 'dataUser'];

    function signInCtrl($state, dataUser) {

      console.log('Sign-in');

      var self = this;

      self.sub = function () {

          // dataBase.getProject().then(function (e) {
          //     var a = e;
          //     var arr = [];
          //     for (var i = 0; a.length > i; i++) {
          //       if ( a[i].Info.userId === 'YbeekrrG8bhK5pJkw5Pm8fOg7ab2') {
          //           arr.push(a[i]);
          //       }
          //     };
          //
          //     debugger
          //
          // });

          // dataUser.getProfile('KjSjklmp4Zpa1q28XHB').then(function (e) {
          //     debugger;
          // });

          var a = dataUser.getProfile('-KjSjklmp4Zpa1q28XHB');
          debugger;


      }

    };
    
})();

