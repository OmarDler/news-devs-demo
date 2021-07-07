const express = require('express');
require('dotenv').config({ path: './.env' });
const linksRouter = require('./routes/links');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/links', linksRouter);

module.exports = app;
