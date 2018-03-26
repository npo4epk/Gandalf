'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('userService', userService);

    userService.$inject = ['firebase', '$firebaseArray'];

    function userService(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _userRef = _ref.child('Profiles'),
            _userArr = $firebaseArray(_userRef);

        return  {
            getList: _getList,
            addRecord: _addRecord
        };

        function _getList() {
            return _userArr.$loaded();
        }

        function _addRecord(user) {
            return _userArr.$add(user);
        }

    }

})();
