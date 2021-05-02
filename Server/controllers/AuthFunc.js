require('dotenv').config()
const express =  require('express');
const appRouter = express.Router();
const usersBL = require('../models/usersBL');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const { NativeError } = require('mongoose');



      
module.exports = appRouter;
