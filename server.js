const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bootcamps = require('./routes/bootcamps');


// Load env vars
dotenv.config({path: './config/config.env'});

// connect to database
connectDB();

const app = express();

// Dev logs Info
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Mount Router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`)
);

// Handle unhandle Promise rejection

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(()=> process.exit(1));
});