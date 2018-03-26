'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .factory('projectService', projectService);

    projectService.$inject = ['firebase', '$firebaseArray'];

    function projectService(firebase, $firebaseArray) {

        var _ref = firebase.database().ref(),
            _projectsRef = _ref.child('Projects'),
            _projectsArr = $firebaseArray(_projectsRef);

        return  {
            getList: _getList
        };

        function _getList() {
            return _projectsArr.$loaded();
        }

    }

})();
