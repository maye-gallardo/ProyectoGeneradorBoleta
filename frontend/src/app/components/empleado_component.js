APP.controller('controladorEmpleado', function ($scope, $http) {
    $scope.empleado = new Empleado();
    $scope.guardarEmpleado = ()=>{
        let empleado = $scope.empleado;
        let req = {
            method : 'POST',
            url: URL + CREAR_EMPLEADO,
            data : JSON.stringify(empleado)
        };
        $http(req)
        .then((res)=>{
            window.location.replace('/');
        })
        .catch((err)=>{
            alert('No Funciona!: ' + err);
        });
    }  
});