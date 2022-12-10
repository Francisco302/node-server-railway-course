require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs');

var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Francisco Sanchez',
        titulo: 'curso de node '
    });
})


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Francisco Sanchez',
        titulo: 'curso de node '
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Francisco Sanchez',
        titulo: 'curso de node '
    })
})
/*


app.get('/hola-mundo', (req, res) => {
    res.send('Hello World! Nueva ruta')
})

app.get('*', (req, res) => {
    res.send('Pagina  no encontrada')
})
 */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})