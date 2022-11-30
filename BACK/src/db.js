require('dotenv').config();
const mongoose = require ('mongoose');
const {PASSWORD, DB_DEPLOY} = process.env;

const uri = DB_DEPLOY
/* const uri = `mongodb+srv://noesneda:${PASSWORD}@proyecto.hbyeplt.mongodb.net/?retryWrites=true&w=majority` */

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, console.log('DB is conected'))
