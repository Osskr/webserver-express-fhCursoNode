const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers/helpers')


//Heroku

const port = process.env.PORT || 3000;

//un middleware es un callback que se va a ejecutar siempre sin importar que url esta tratando de acceder la
// el cliente
//con este middleware estamos especificando cual es el folder que nosotros queremos que sea publico
app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



//al utilizar un template engine podemos renderizar la pagina 
//utiliando render en vez de send
app.get('/', (req, res)  => {

    // res.send(salida)
    res.render('home')
})

app.get('/about', (req, res)  => {

    // res.send(salida)
    res.render('about')
})

 

 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
})

 