const { Schema, model } = require('mongoose');
const DeudorSchema = new Schema({
    nombre: {type: String, require:true},
    apodo: {type: String, require:true},
    celular: {type: Number, require:true},
    valorPrestamo: {type: Number, require:true},
    
})

module.exports = model('Deudor', DeudorSchema);