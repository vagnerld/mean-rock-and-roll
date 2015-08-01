// public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController',
	function($resource, $scope) {
		$scope.contatos = [];
		$scope.filtro = '';
		var Contato = $resource('/contatos/:id');
		function buscaContatos() {
			Contato.query(
				function(contatos) {
					$scope.contatos = contatos;
				},
				function(erro) {
					console.log("Não foi possível obter a lista de contatos");
					console.log(erro);
				}
			);
		}
		buscaContatos();
	});