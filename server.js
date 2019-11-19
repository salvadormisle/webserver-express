const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

//Express HBS Engine

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo, con Express.')

//     let salida = {
//         nombre: 'Salvador',
//         edad: 48,
//         url: req.url
//     }
//     console.log(salida);
//     res.send(salida);
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'salvaDor sLemAn mIsle romeo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});