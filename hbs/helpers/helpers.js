const hbs = require('hbs');

//helpers hbs

hbs.registerHelper('getYear',()=> {

    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto)=>{
//solo para capitalizar , sirve de ejemplo nada mas de como usar el helper con parametro
    let palabras = texto.split(' ')
    palabras.forEach ( (palabra,idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() +  palabra.slice(1).toLowerCase()
    })

    return palabras.join(' ')
})

