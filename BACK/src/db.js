require('dotenv').config();
const mongoose = require ('mongoose');
const {PASSWORD} = process.env;

const uri = `mongodb+srv://noesneda:${PASSWORD}@proyecto.hbyeplt.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, console.log('DB is conected'))
