var app = angular.module("exercicio2", []);


        app.controller("exercicio2_controlador", function($scope){
            $scope.dados = [
                {nome: "Joao", nota: 10},
                {nome: "Martim", nota: 20},
                {nome: "Francisco", nota: 20},
                {nome: "Pedro", nota: 20}
            ]
        })