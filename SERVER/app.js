const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');




app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());