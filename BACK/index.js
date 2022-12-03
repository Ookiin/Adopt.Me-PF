const express = require("express");
const cors = require("cors");
const animalRutas = require("../BACK/src/rutas/animales");
const usuarioRutas = require("../BACK/src/rutas/usuarios");
const pagosPayPalRutas = require("../BACK/src/rutas/pagosPayPal");
const pagosMercadoPago = require("../BACK/src/rutas/mercadoPago");
const animalPerdidoRutas = require("../BACK/src/rutas/animalesPerdidos");
const pagosStripes = require("../BACK/src/rutas/stripes");

const morgan = require("morgan");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const locationRutas = require("../BACK/src/rutas/locations");


//inicializacion
const app = express();
require("../BACK/src/db");
require("./src/passport/local-auth");
app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(express.json());

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  session({
    secret: "mysecretsession",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("mysecretsession"));
app.use(passport.initialize());
app.use(passport.session());
require("./src/passport/local-auth");

app.use("/animales", animalRutas);
app.use("/animalesPerdidos", animalPerdidoRutas);
app.use("/usuarios", usuarioRutas);
app.use("/pagos", pagosPayPalRutas);
app.use("/pagosMp", pagosMercadoPago);
app.use("/location", locationRutas);
app.use("/payment", pagosStripes);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
