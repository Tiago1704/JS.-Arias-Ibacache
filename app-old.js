const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})

    let salida = {
        nombre: 'Tito',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida))
    res.end();
})

.listen(8080);

console.log('Escuchando el purdto 8080');
