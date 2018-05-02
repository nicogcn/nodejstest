
//Declaro las personas
var persons = ["Ximena", "Nicolás", "Cristian"];

//Metodos de acceso

//TODAS PERSONAS
exports.getAllPersons = function(req, res) {
    res.status(200).json(persons);
};
//PERSONA POR ID (index del array)
exports.getPersonById = function(req, res) {
    res.status(200).json(persons[req.params.id]);
};
//crear persona
exports.createPerson = function(req, res) {
    persons.push(req.query.name);
    res.status(201).send();
};
//modificar persona
exports.updatePerson = function(req, res) {
    persons[req.params.id] = req.query.name;
    res.status(200).send();
};
//eliminar persona
exports.deletePerson = function(req, res) {
    persons.splice(req.params.id, 1);
    res.status(204).send();
};
