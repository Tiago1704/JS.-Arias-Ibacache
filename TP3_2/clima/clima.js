
//Acá usamos las key que generamos en OpenWeathermap.org, debes crear tu perfil y entrar acá https://home.openweathermap.org/api_keys, pegarla al lado de lng

const axios = require('axios')

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b78fcd1e4685d366e74b58b1f0e5cc84&units=metric`)

    return resp.data.main.temp

}

module.exports = {
    getClima
}
