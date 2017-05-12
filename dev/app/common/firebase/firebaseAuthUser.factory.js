'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('firebaseAuthUser', firebaseAuthUser);

    firebaseAuthUser.$inject = ['$firebaseAuth'];

    function firebaseAuthUser($firebaseAuth) {

        var _authObject = $firebaseAuth();

        return  {
            authObject: _authObject,
            signIn: _signIn,
            signUp: _signUp,
            signOut: _signOut
        };

        function _signIn(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        };

        function _signUp(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        };

        function _signOut() {
            return firebaseAuthObject.$signOut();
        };

    };

})();
