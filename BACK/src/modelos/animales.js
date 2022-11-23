const mongoose = require('mongoose');
const {Schema} = mongoose;

const AnimalSchema = new Schema({
    especie: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: false,
    },
    estado: {
        type: String,
        required: false,
    },
    tamaño: {
        type: String,
        required: false,
    },
    peso: {
        type: Number,
        required: false,
    },
    localidad: {
        type: String,
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
    },
    castrado: {
        type: Boolean,
        required: false,
    },
    vacunado: {
        type: String,
        required: false,
    },  
    imagen: {
        type: String,
        required: false,
    },  
});

const AnimalModel = mongoose.model('animales', AnimalSchema)
module.exports = AnimalModel;
