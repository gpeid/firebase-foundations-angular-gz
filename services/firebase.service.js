(function(){
    'use strict';

    angular
        .module('app')
        .factory('firebaseService', firebaseService);

    firebaseService.$inject = ['$firebaseAuth'];

    function firebaseService($firebaseAuth){
        //create firebase instance
        var reference = new Firebase('https://blinding-torch-7769.firebaseio.com/');

        //configure firebase auth service
        var auth = $firebaseAuth(reference);

        var firebaseServiceObject = {
            reference: reference,
            auth: auth
        };

        return firebaseServiceObject;

    }
})();