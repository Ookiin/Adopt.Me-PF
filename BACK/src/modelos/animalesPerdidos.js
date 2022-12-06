const mongoose = require ('mongoose');
const{ Schema }= mongoose;

const AnimalPerdidoSchema = new Schema ({
    perro:{
        type: Boolean,
        require: true,
    },
    gato: {
        type:Boolean,
        require: true
    },    
    estado: {
        type: Array,
        required: false,
    },
    tama: {
        type: Array,
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
    },
    imagen: {
        type:String,
        required: false,
    }

})
const AnimalesPerdidosModel = mongoose.model('animalesperdidos', AnimalPerdidoSchema)
module.exports = AnimalesPerdidosModel;
