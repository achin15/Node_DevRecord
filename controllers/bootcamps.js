// @desc        Get All Bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).send({success: true, msg: 'Show all Bootcamps'});
}

// @desc        Get Bootcamp by Id
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).send({success: true, msg: `Show Bootcamps ${req.params.id}`});
}

// @desc        Create New Bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).send({success: true, msg: 'Create New Bootcamps'});
}

// @desc        Update Bootcamp by Id
// @route       PUT /api/v1/bootcamps
// @access      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).send({success: true, msg: `Update Bootcamps ${req.params.id}`});
}

// @desc        Delete Bootcamp by Id
// @route       DELETE /api/v1/bootcamps
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).send({success: true, msg: `Delete Bootcamps`});
}    
