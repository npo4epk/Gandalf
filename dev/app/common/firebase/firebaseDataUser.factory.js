'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('firebaseDataUser', firebaseDataUser);

    firebaseDataUser.$inject = ['firebase', '$firebaseArray'];

    function firebaseDataUser(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _refArr = $firebaseArray(ref),
            _userRef = ref.child('Profiles'),
            _userArr = $firebaseArray(userRef);

        return  {
            userRef: _userRef,
            userArr: _userArr,
            getUser: _getUser,
            addUser: _addUser
        };

        function _getUser() {
            return _userArr.$loaded();
        };

        function _addUser() {
            return _userArr.$add({

            });
        };



    };

})();
