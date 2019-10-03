//Acá usamos city-geo-location lookup, la encontramos en rapid api (buscala en google, rata). Descargamos el jdk y lo instalamos con npm, luego copiamos la key que aparece en el código de ahí. 

const axios = require('axios')


const getLugarLatLng = async(dir) => {

    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: {'x-rapidapi-key':'53f38c676emsh29e209a4140784fp19714fjsn0ce2be31d38c'}
    })
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }

}

    module.exports = {
        getLugarLatLng
    }
