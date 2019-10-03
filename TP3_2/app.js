
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async( direccion ) => {


    try {
        const coords = await lugar.getLugarLatLng( direccion );
        console.log(coords);
        const temp   = await clima.getClima( coords.lat, coords.lng );
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
