function avisoMuerte() {
    console.log("%cEste jugador ha sido derrotado", "color: red");
}

function avisoSP() {
    console.log("%cSin sp suficientes", "color: orange");
}

function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function(objetivo) {
        if (this.pv > 0 && objetivo.pv > 0) {
            if (this.sp >= 10) {
                this.sp = this.sp - 10;
                objetivo.pv = 100;
                console.log("%c" + objetivo.name + " ha sido curado", "color: green");
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.regenerarSP = function() {
        if (this.pv > 0) {
            this.sp = 100;
            console.log("%cSP regenerados al maximo", "color: blue");
        } else {
            avisoMuerte();
        }
    };
    this.tirarFlecha = function(objetivo) {
        if (this.pv > 0) {
            if (this.sp >= 50) {
                this.sp = this.sp - 50;
                objetivo.pv = objetivo.pv - 25;
                console.log(
                    "%c" + objetivo.nombre + " recibio 25 puntos de daño",
                    "color: purple"
                );
                if (objetivo.pv <= 0) {
                    console.log(
                        "%c" + objetivo.nombre + " ha sido derrotado ",
                        "color: red"
                    );
                }
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.estado = function(objetivo) {
        if (objetivo.pv > 0) {
            console.log(
                "Estado de " +
                objetivo.nombre +
                ":  pv => " +
                objetivo.pv +
                " sp => " +
                objetivo.sp
            );
        } else {
            avisoMuerte();
        }
    };
}

var orco = new Jugador("Orco");
var legolas = new Jugador("Legolas^");