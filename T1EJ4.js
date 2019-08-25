
            var Edad = prompt("Edad", "ingrese su edad");
                sexo = prompt("Sexo", "ingrese su sexo");

          switch (sexo) {
            case 'mujer' :
              if (Edad > 65){
                alert('Esta mujer se puede retirar');
              }
              else {
                alert ('No se puede retirar')
              }
            case 'hombre' :
              if (Edad > 70){
                alert('Este hombre se puede retirar')
              }
              else {
                alert ('No se puede retirar')
              }

              break;
            default:
            alert('No se puede retirar');

          }
