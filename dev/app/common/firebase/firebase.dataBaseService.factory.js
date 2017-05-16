'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('dataBaseService', dataBaseService);

    dataBaseService.$inject = ['firebase', '$firebaseArray'];

    function dataBaseService(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _projectsRef = _ref.child('Projects'),
            _projectsArr = $firebaseArray(_projectsRef);

        return  {
            projectsArr: _projectsArr
        };

    };

})();
