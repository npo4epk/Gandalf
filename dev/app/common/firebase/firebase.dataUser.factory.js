'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('dataUser', dataUser);

    dataUser.$inject = ['firebase', '$firebaseArray'];

    function dataUser(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _userRef = _ref.child('Profiles'),
            _userArr = $firebaseArray(_userRef);

        return  {
            userRef: _userRef,
            userArr: _userArr,
            getProfile: _getProfile,
            addUser: _addProfile
        };

        function _getProfile(userDataId) {
            return _userArr.$getRecord(userDataId);
        }

        function _getAllProfiles() {
            return _userArr.$loaded();
        };

        function _addProfile(user) {
            return _userArr.$add(user);
        };

        function _eidtProfiles() {

        }


    };

})();
