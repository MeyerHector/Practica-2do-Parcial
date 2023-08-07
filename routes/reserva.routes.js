// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    obtenerReservas,
    crearReserva,
    viewObtenerReservas,
    viewCrearReserva,
    obtenerReserva,
    actualizarReserva,
    viewActualizarReserva
} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

router.get('/', viewObtenerReservas);


// Formulario para crear una reserva

router.get('/nueva-reserva', (req, res)=> {
    res.render('crear-reserva');
});
// Formulario para actualizar una reserva

router.get('/editar-reserva/:id', viewActualizarReserva);

// =========================

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', obtenerReservas);
router.get('/api/reservas/:id', obtenerReserva)
// Crear una reserva
router.post('/api/reservas', crearReserva);
 
// Actualizar una reserva
router.put('/api/reservas/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', );

 
 module.exports = router;