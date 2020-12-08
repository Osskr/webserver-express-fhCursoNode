//web server
//para crear un server
const http = require('http')

//creamos el servidor

http.createServer((req,res)=>{

    res.writeHead(200, {'Content-type': 'application/json'})

    const salida = {

        nombre:'osskr',
        edad:'32',
        msg:'Hola mundo perri'
    }
    res.write(JSON.stringify(salida))
    res.end()

    

}).listen(8080)

//.liste especifica el puerto donde esta escuchando el servidor

console.log('escuchando en el puerto 8080')