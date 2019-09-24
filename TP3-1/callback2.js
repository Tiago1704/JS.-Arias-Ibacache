let empleados = [{
  id: 1,
  nombre : 'Angel'
},{
  id : 2,
  nombre: "Belen"
},{
  id : 3,
  nombre: 'Tiago'
}];

let salarios = [{
  id : 1,
  salario: 1000
},{
  id : 2,
  salario : 2000
}];

//let getEmpleado = (id, callback) => {
//  let empleadoDB = empleados.find(empleado => empleado.id === id)


//if (!empleadoDB){
//  callback('No existe el empleado con el id: ' + id);
//}else {
//  callback(null, empleadoDB);
//}
//}


let getDatos = (id, callback) => {
  let empleadoDB = empleados.find (empleado => empleado.id === id)
  let SalarioDB = salarios.find (salario => salario.id === id)

  if (!SalarioDB && !EmpleadosDB){
    callback('No existe ese empleado: ' + id);
  }else {
    callback(null, SalarioDB, empleadoDB);
  }

}



getDatos(2, (err, empleado, salario) => {
  if (err){
    return console.log(err);
  }
  console.log(empleado);
  console.log(salario);
})
