angular.module("Estrutura-Inicial")
    .controller('LoginController', LoginController);

function LoginController($location, $scope, $ionicPopup) {
    var vm = this;

    vm.doLogin = function() {
		console.log(vm.login);
		console.log(vm.pass);

		if(!vm.login || !vm.pass){
			Meteor.logout();
			fail($ionicPopup);
			return;
		}
		Meteor.loginWithPassword(vm.login, vm.pass, function(error) {
			console.log(error);

			if(!error){
	        	$location.path('/einstein/first-page');
			}else {
				fail($ionicPopup);
			}
		});
    }

	function fail($ionicPopup){
		$ionicPopup.alert({
			title: 'Usuário ou senha incorretos!',
			template: 'Por favor tente novamente'
		});
	}

}
