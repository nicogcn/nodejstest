var express = require('express');
var router = express.Router();
//Importmo modulo controlador
var controller = require("./controller");
//Declaro las acciones para el modulo 

//Traer todos -getall
//Aqui '/' significa persons
router.get('/',controller.getAllPersons);

//treaer por nombre -id
router.get('/:id',controller.getPersonById);

//crear -create
router.post('/',controller.createPerson);
//modificar - update
router.put('/:id',controller.updatePerson);

//eliminar -delete
router.delete('/:id',controller.deletePerson);

module.exports = router;
