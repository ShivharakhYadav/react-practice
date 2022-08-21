const express = require('express');
const route = express.Router();
const { signUp, login } = require('../controller/controller')

route.post('/signup', signUp);
route.post('/login', login)
module.exports = route;