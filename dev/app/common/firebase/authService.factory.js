'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {

        var _authArr = $firebaseAuth();

        return  {
            signIn: _signIn,
            signUp: _signUp,
            signOut: _signOut
        };

        function _signIn(profile) {
            return _authArr.$signInWithEmailAndPassword(profile.email, profile.password);
        }

        function _signUp(profile) {
            return _authArr.$createUserWithEmailAndPassword(profile.email, profile.password);
        }

        function _signOut() {
            return _authArr.$signOut();
        }
        
    }

})();
