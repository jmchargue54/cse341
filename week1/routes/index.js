const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.personName);

module.exports = routes;