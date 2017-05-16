'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('profileAuthService', profileAuthService);

    profileAuthService.$inject = ['$firebaseAuth'];

    function profileAuthService($firebaseAuth) {

        var _authObject = $firebaseAuth();

        return  {
            signIn: _signIn,
            signUp: _signUp,
            signOut: _signOut
        };

        function _signIn(profile) {
            return _authObject.$signInWithEmailAndPassword(profile.email, profile.password);
        };

        function _signUp(profile) {
            return _authObject.$createUserWithEmailAndPassword(profile.email, profile.password);
        };

        function _signOut() {
            return _authObject.$signOut();
        };
        
    };

})();
