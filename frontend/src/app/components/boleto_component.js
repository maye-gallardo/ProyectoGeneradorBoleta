APP.controller('controladorBoleta', function ($scope, $http) {
    $scope.fecha = new Fecha();
    $scope.generarBoletas = ()=>{
        let date = $scope.fecha;
        let req = {
            method : 'POST',
            url: URL + LISTAR_BOLETAS,
            data : JSON.stringify(date)
        };
        $http(req)
        .then((res)=>{
            $scope.listadeBoletas = res.data;
            if($scope.listadeBoletas.length === 0)
            {
                $scope.boletasNoDisponibles = true;
            }else{
                $scope.boletasNoDisponibles = false;
            }
        })
        .catch((err)=>{
            alert('No Funciona!: ' + err);
        });
    }

});