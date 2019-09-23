const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const DeudorSchema = new Schema({
    nombre: String,
    identificacion: String,
    celular: Number,
    valorPrestamo: Number,
    correo:String,
    contraseña: String,
    created_since: { type: Date, default: Date.now }
});

// nos permite cifrar la contraseña
DeudorSchema.methods.encryptPassword = async (contraseña) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(contraseña, salt);
    return hash
};

// comparar la contraseña

DeudorSchema.methods.matchPassword = async function (contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
};

module.exports = model('Deudor',DeudorSchema);