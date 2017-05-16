'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('profileDataService', profileDataService);

    profileDataService.$inject = ['firebase', '$firebaseArray'];

    function profileDataService(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _userRef = _ref.child('Profiles'),
            _userArr = $firebaseArray(_userRef);

        return  {
            userArr: _userArr,
            getRecord: _getRecord,
            addRecord: _addRecord
        };

        function _getRecord(profileDataId) {
            return _userArr.$getRecord(profileDataId);
        };

        function _addRecord(profile) {
            return _userArr.$add(profile);
        };

    };

})();
