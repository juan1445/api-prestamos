const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombre: String,
    contraseña: String,
    created_since: { type: Date, default: Date.now }
});

module.exports = model('User',UserSchema);