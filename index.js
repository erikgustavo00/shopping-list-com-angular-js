var app = angular.module('shoppingList', []);
app.controller('myControl',($scope)=>{
    $scope.produtos = []
    $scope.addItem = ()=>{
        $scope.textodeerro = '';
        if(!$scope.item){return;}
        if($scope.produtos.indexOf($scope.item) == -1){
            $scope.produtos.push($scope.item);
        }else{
            $scope.textodeerro = 'este produto já esta na lista!';
        }
    }
    $scope.removerItem = (prod)=>{
        $scope.textodeerro = '';
        $scope.produtos.splice(prod, 1);
    }

})