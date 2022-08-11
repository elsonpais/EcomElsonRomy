const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser")

// Route Imports
const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoutes')
const orderRoute = require('./routes/orderRoute');

app.use(express.json());
app.use(cookieParser())

app.use('/api/v1',productsRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);
// Middleware for errors
app.use(errorMiddleware);

module.exports = app;