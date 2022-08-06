const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

const productsRoute = require('./routes/productsRoute');

app.use(express.json());

app.use('/api/v1',productsRoute);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;