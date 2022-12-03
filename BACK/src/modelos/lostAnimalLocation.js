const mongoose = require("mongoose");
const { Schema } = mongoose;

const lostLocationSchema = new Schema({
  tipo: { 
    type:String,
    required: false,
},
  longitude: String,
  latitude: String,
  imagen: {
        type: String,
        required: false,
    },
});

const lostLocationModel = mongoose.model("lostlocation", lostLocationSchema);
module.exports = lostLocationModel;
