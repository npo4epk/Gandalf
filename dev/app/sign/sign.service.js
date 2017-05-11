'use strict';

;(function () {

    angular
        .module('gandalf.sign')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {

        var firebaseAuthObject = $firebaseAuth();

        return  {
            firebaseAuthObject: firebaseAuthObject,
            firebaseSignIn: _firebaseSignIn,
            firebaseSignUp: _firebaseSignUp,
            firebaseSignOut: _firebaseSignOut
        };

        function _firebaseSignIn(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        };

        function _firebaseSignUp(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        };

        function _firebaseSignOut() {
            return firebaseAuthObject.$signOut();
        };

    };
    
})();

