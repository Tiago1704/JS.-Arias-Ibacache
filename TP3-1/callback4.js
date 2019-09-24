/*Genere	el	manejo	del	async	para	que	me	devuelva
un	salario	ingresado	por	id,
también	deberá	manejar	el	error,
en	caso	de	que	no	se	encuentre	el	id
dentro	de	la	base	de	datos	local.	*/
let empleados = [{
  id : 1,
  nombre : "Tiago"
},{
  id : 2,
  nombre : 'Belen'
}, {
  id : 3,
  nombre : "Angel"
}];

let salarios = [{
  id : 1,
  salario : 1000
}, {
  id : 2,
  salario : 2000
}];

//let getEmpleado = async (id) => {
  //let empleadoDB = empleados.find(empleado => empleado.id === id)

  //if (!empleadoDB){
    //throw new Error ('No existe el empleado con el id : ' + id)
  //} else {
    //return empleadoDB;
  //}
//}

/*let getSalario = (id) => {
  return new Promise ((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    let salarioDB = salarios.find(salario => salario.id === id)

    if (!empleadoDB && !salarioDB){
      reject ('No existe el empleado con el ID' + id)
    } else {
      resolve (salarioDB);
    }
  })

  async function asynCall(){
    console.log('Acá anda el calling');
    var result = await getSalario();
    console.log(result);
  }

  asynCall(4);
}*/

/*async function getsalario(id){
  try{
    let salarioDB = salarios.find(salario => salario.id === id)
    if (!salarioDB){
      reject ('No existe relación entre ese salario y ese id' + id)
    }else {
    console.log(salarioDB);
    }
  }*/

  //Las cosas comentadas ahí arriba son mis pruebas y errores, los quise probar con promesas y otras cosas, pero no hacen falta.
async function getSalario(id){
    let salarioDB = await salarios.find(salario => salario.id === id)
    if (!salarioDB){
      console.log('No existe esa relación : ' + id)
    }else {
      console.log(salarioDB);
    }
  }
  getSalario(4);
