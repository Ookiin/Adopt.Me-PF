const mongoose = require("mongoose");
const { Schema } = mongoose;

const likesModelSchema = new Schema({
  likes: {
    type: Number
  }
});

const likesModel = mongoose.model("likes", likesModelSchema);
module.exports = likesModel;
