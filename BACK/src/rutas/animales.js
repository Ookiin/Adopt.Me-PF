
const express = require("express");
const { get } = require("mongoose");
require("../db");
//const AnimalModel = require("../modelos/animales");
const router = express.Router();
const infoAnimal = require("../controllers/animalInfo");

router.post("/", postAnimal);

router.get("/", getAnimales);

router.get('/localidad', getLocalidad); 

router.get('/tama', getTamaño);

router.get('/edad', getEdad); 

router.get('/perro', getPerros);

router.get('/nombre-perro', getPerrosByName);  


router.get('/gato', getGatos);

router.get('/nombre-gato', getGatosByName); 


router.get("/:id", getDetalleAnimal);

router.put("/:id", putAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
