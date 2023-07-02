// Imports
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('ejs');
require('dotenv').config();

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res)=> {
    res.status(404).send('<h1>ERROR 404, PAGINA NO ENCONTRADA</h1>');
})

// Starting the server
app.listen(45635, () => console.log('Server on port xxxx'));