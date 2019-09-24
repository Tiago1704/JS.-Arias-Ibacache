let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre : "Tiago",
    id
}

if (id === 20){
  callback('El usuario con id' + id + 'no existe en la Base de datos');
}else {
  callback(null, usuario);
}
}


getUsuarioById(20, (err, usuario) => {
  if (err){
    return console.log(err);
  }

  console.log('Usuario de base de datos', usuario);
});
