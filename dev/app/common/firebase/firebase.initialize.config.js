'use strict';

;(function () {

    angular
        .module('gandalf.firebase')
        .config(initialize);

    function initialize() {

        firebase.initializeApp({
            apiKey:            'AIzaSyA-DdKJVnwgPPH5ubcnGGAkt0aiII9AWmk',
            authDomain:        'gandalf-93fbc.firebaseapp.com',
            databaseURL:       'https://gandalf-93fbc.firebaseio.com',
            projectId:         'gandalf-93fbc',
            storageBucket:     'gandalf-93fbc.appspot.com',
            messagingSenderId: '203904867278'
        });

    };

})();

