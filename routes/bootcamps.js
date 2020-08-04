const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).send({success: true, msg: 'Show all Bootcamps'});
});
router.get('/:id',(req, res)=>{
    res.status(200).send({success: true, msg: `Show Bootcamps ${req.params.id}`});
});
router.post('/',(req, res)=>{
    res.status(200).send({success: true, msg: 'Create New Bootcamps'});
});
router.put('/:id',(req, res)=>{
    res.status(200).send({success: true, msg: `Update Bootcamps ${req.params.id}`});
});
router.delete('/:id',(req, res)=>{
    res.status(200).send({success: true, msg: `Delete Bootcamps ${req.params.id}`});
});

module.exports = router;