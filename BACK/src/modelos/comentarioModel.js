const mongoose = require("mongoose");
const { Schema } = mongoose;

const comentarioModelSchema = new Schema({
  titulo: {
    type: String,
    require: true,
  },
  contenido: {
    type: String,
    require: true,
  }
});

const comentarioModel = mongoose.model("comentario", comentarioModelSchema);
module.exports = comentarioModel;
