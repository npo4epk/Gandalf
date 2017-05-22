'use strict';

;(function () {

    angular
        .module('gandalf.authorization')
        .controller('profileCtrl', profileCtrl);

    function profileCtrl() {

        var self = this;
        self.submitForm = _submitForm;

        function _submitForm(user) {
            self.profile.submitAction(user);
        }

    }

})();

