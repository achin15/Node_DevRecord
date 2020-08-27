const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middleware/async');

// @desc        Get All Bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
   
        const bootcamp = await Bootcamp.find();

        res.status(400).json({
            success: true,
            count: bootcamp.length,
            data: bootcamp
        });    
})

// @desc        Get Bootcamp by Id
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
})

// @desc        Create New Bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true, 
            data: bootcamp,
            msg: 'Bootcamp has been Added Successfully'
        });       
})

// @desc        Update Bootcamp by Id
// @route       PUT /api/v1/bootcamps
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true, 
            data: bootcamp,
            msg: 'Bootcamp has been Updated Successfully'
        });
    } catch (err) {
        // res.status(400).json({
        //     success: false,
        // });
        next(err);
    }   
}

// @desc        Delete Bootcamp by Id
// @route       DELETE /api/v1/bootcamps
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true, 
            msg: 'Bootcamp has been Deleted Successfully'
        });
    } catch (err) {
        // res.status(400).json({
        //     success: false
        // });
        next(err);
    }   
}    
