const express = require('express');
const route = express.Router();
const { signUp, login } = require('../controller/controller')

route.post('/new', signUp);
route.post('/login', login)
module.exports = route;