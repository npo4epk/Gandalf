'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('dataBase', dataBase);

    dataBase.$inject = ['firebase', '$firebaseArray'];

    function dataBase(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _projectsRef = _ref.child('Projects'),
            _projectsArr = $firebaseArray(_projectsRef);

        return  {
            projectsRef: _projectsRef,
            projectsArr: _projectsArr,
            getProject: _getProject,
            addProject: _addProject
        };

        function _getProject() {
            return _projectsArr.$loaded();
        };

        function _addProject() {
            return _projectsArr.$add({

            });
        };



    };

})();
