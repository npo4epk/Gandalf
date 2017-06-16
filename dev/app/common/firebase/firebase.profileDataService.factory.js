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
            getList: _getList,
            addRecord: _addRecord
        };

        function _getList() {
            return _userArr.$loaded();
        };

        function _addRecord(profile) {
            return _userArr.$add(profile);
        };

    };

})();
