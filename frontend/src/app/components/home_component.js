APP.controller('controladorInicio', function ($scope, $http) {
    let req = {
        method : 'GET',
        url : URL + LISTAR_EMPLEADOS
    };
    $http(req)
    .then((res)=>{
        $scope.listaEmpleados = res.data;
    })
    .catch((err)=>{
        alert('No Funciona!: ' + err);
    });
});