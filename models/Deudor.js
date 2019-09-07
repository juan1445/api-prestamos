const { Schema, model } = require('mongoose');

const DeudorSchema = new Schema({
    nombre: String,
    celular: Number,
    apodo: String,
    valorPrestamo: Number,
    interes: Number,
    calcularInteres: Number,
    created_since: { type: Date, default: Date.now }
});

module.exports = model('Deudor',DeudorSchema);