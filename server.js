const express = require('express');
const dotenv = require('dotenv');
// Routes File
const bootcamps = require('./routes/bootcamps');
// Load env vars
dotenv.config({path: './config/config.env'});

const app = express();
// Mount Router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;

app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`)
);