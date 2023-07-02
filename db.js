const {Sequelize, Datatypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });

const conexionDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexion a la base de datos exitosa');
    } catch (error) {
        console.log('Error al conectar a la base de datos', error);
    }
}

module.exports = {
    conexionDB,
    sequelize,
    Datatypes
};