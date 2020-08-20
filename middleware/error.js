const ErrorResponse = require("../utils/errorResponse");

const errorHandler = function errorHandler (err, req, res, next) {
    let error = { ...err };
    error.message = err.message;

    console.error(err.stack.red);

    console.log(err.name);
    if( err.name === 'CastError') {
        message = `Bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500);
    res.json({
        success: false,
        message: error.message || 'Server Error!'
    })
  }

  module.exports = errorHandler;