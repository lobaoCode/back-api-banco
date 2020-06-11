const express = require('express');
const UserController = require('../src/controller/UserController');
const routes = express.Router();
const cors = require('cors');

routes.get('/users', cors(), UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);

module.exports = routes;
