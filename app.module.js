(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'firebase'
        ])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];


    function configFunction($routeProvider) {
        $routeProvider.when('/auth', {

            templateUrl: 'auth/auth.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });

    }

    //run arbitrary angular code with run() block
    // .run(function(){
    // 	console.log('in app module')
    // });
})();