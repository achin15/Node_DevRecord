const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const bootcamps = require('./routes/bootcamps');


// Load env vars
dotenv.config({path: './config/config.env'});

// connect to database
connectDB();

const app = express();

// Body Paser
app.use(express.json());

// Dev logs Info
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Mount Router
app.use('/api/v1/bootcamps', bootcamps);

// Use Middleware error handler
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)
);

// Handle unhandle Promise rejection

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(()=> process.exit(1));
});