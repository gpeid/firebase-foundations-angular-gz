(function () {

    'use strict';

    angular
        .module('app')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['firebaseService'];

    function AuthController(firebaseService) {
        var vm = this;

        vm.newUser = {
            email: '',
            password: ''
        };

        vm.register = register;

        function register(user) {
            return firebaseService.auth.$createUser(user)
                .then(function (registeredUser) {
                    console.log(registeredUser);
                })
                .catch(function (error) {
                    console.log(error);

                });
        }
    }

})();