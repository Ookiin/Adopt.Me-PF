const mongoose = require("mongoose");
const { Schema } = mongoose;

const comentarioModelSchema = new Schema({
  comentario: {
    type: String,
    required: false,
  },
});

const comentarioModel = mongoose.model("comentario", comentarioModelSchema);
module.exports = comentarioModel;
