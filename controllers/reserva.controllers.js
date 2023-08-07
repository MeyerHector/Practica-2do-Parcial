const ctrl = {};
const Reserva = require('../models/Reserva.js');

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

ctrl.renderObtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })
        return res.render('index', {
            reservas
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        });
    }    
}

ctrl.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })
        return res.json(reservas);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        });
    }

}
// Obtener una reserva

ctrl.obtenerReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.json(reserva);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        });
    }
}

// Crear una reserva

ctrl.viewCrearReserva = async (req, res) => {

    try {
        return res.render('crear-reserva');
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la reserva'
        });
    }
}

ctrl.crearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        dni,
        fechaIda,
        fechaVuelta
    } = req.body;
    try {
        const reserva = await Reserva.create({
            nombre,
            apellido,
            dni,
            fechaIda,
            fechaVuelta
        });
        return res.json(reserva);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la reserva'
        });
    }
}
// Actualizar una reserva

ctrl.viewActualizarReserva = async (req, res) => {
        return res.render('editar-reserva');
}

ctrl.actualizarReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        dni,
        fechaIda,
        fechaVuelta
    } = req.body;
    try {
        const reserva = await Reserva.update({
            nombre,
            apellido,
            dni,
            fechaIda,
            fechaVuelta
        }, {
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(reserva);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al actualizar la reserva'
        });
    }
}

// Eliminar una reserva de forma lógica

module.exports = ctrl;