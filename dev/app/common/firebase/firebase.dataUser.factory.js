'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('dataUser', dataUser);

    dataUser.$inject = ['firebase', '$firebaseArray'];

    function dataUser(firebase, $firebaseArray) {

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
