const express = require('express');
const path = require('path');
const favicon = require('server-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

//db connection
const db = require('./helper/db.js')();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');