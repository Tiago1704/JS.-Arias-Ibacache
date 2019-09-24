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
 let getDatos = (id) => {
   return new Promise ((resolve, reject) =>{
     let empleadoDB = empleados.find(empleado => empleado.id === id)
     let salarioDB = salarios.find(salario => salario.id === id)

     if (!empleadoDB && !salarioDB){
       reject ('No existe el empleado con el ID' + id)
     } else {
       resolve (salarioDB);
     }
   })
 }

console.log(getDatos(2));
