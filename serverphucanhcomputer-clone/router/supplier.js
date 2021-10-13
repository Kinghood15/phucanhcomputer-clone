const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');
const verifyToken = require('../middleware/authUserAdmin');

router.get('/', verifyToken, async (req, res) => {
    try {
        const suppliers = await Supplier.find({  }).populate('userAdmin',['usernameAdmin']);
        res.json({success: true, suppliers});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
router.get('/supplier', async (req, res) => {
    try {
        const suppliers = await Supplier.find({  }).select('nameSupplier').select('ImageLogoSupplier');
        res.json({success: true, suppliers});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router POST api/posts
// @desc Create a new post
// @access private
router.post('/themnhacungcap',verifyToken, async(req, res) => {
    const { nameSupplier,ImageLogoSupplier, addressSupplier, emailSupplier, phonenumberSupplier } = req.body
    if(!nameSupplier ){
        return res.status(400).json({ success: false, message: ' Input name supplier is required '});
    }
    if(!ImageLogoSupplier ){
        return res.status(400).json({ success: false, message: ' Input Image logo supplier is required '});
    }
    if(!addressSupplier ){
        return res.status(400).json({ success: false, message: ' Input address supplier is required '});
    }
    if(!emailSupplier ){
        return res.status(400).json({ success: false, message: ' Input email supplier is required '});
    }
    if(!phonenumberSupplier ){
        return res.status(400).json({ success: false, message: ' Input phonenumber supplier is required '});
    }
    const supplier = await Supplier.findOne({nameSupplier:nameSupplier});
    if(supplier){
        return res.status(400).json({success: false, message:'Supplier already taken'})
    }
    try{

        const newSupplier = new Supplier({
            nameSupplier,
            ImageLogoSupplier,
            addressSupplier,
            emailSupplier,
            phonenumberSupplier,
            userAdmin:req.userAdminId
        });
        await newSupplier.save();
        res.json({ success: true, message:'Supplier added successfully' , supplier: newSupplier });

    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})
// @router PUT api suppliers
// @desc Update a supplier
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const { nameSupplier,ImageLogoSupplier, addressSupplier, emailSupplier, phonenumberSupplier } = req.body
    if(!nameSupplier ){
        return res.status(400).json({ success: false, message: ' Input name supplier is required '});
    }
    if(!ImageLogoSupplier ){
        return res.status(400).json({ success: false, message: ' Input Image logo supplier is required '});
    }
    if(!addressSupplier ){
        return res.status(400).json({ success: false, message: ' Input address supplier is required '});
    }
    if(!emailSupplier ){
        return res.status(400).json({ success: false, message: ' Input email supplier is required '});
    }
    if(!phonenumberSupplier ){
        return res.status(400).json({ success: false, message: ' Input phonenumber supplier is required '});
    }
    const supplier = await Supplier.findOne({nameSupplier:nameSupplier});

    try {
        if(supplier){
            let updatedSupplier = {
                nameSupplier,
                ImageLogoSupplier,
                addressSupplier,
                emailSupplier,
                phonenumberSupplier
            };
            const supplierUpdateCondition = { _id:req.params.id};
            updatedSupplier = await Supplier.findOneAndUpdate(supplierUpdateCondition, updatedSupplier, {new:true});
            //User not authorised to update supplier
            if(!updatedSupplier) return res.status(401).json({success:false,message:'Supplier not found or user not authorised'});
            else return res.json({ success:true,message:'Update well',supplier:updatedSupplier});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router DELETE api suppliers
// @desc Delete a supplier
// @access private
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const supplierUpdateCondition = {
            _id:req.params.id
        }
        deleteSupplier = await Supplier.findOneAndDelete(supplierUpdateCondition, {new:true});
        //User not authorised to update supplier
        if(!deleteSupplier) return res.status(401).json({success:false,message:'Supplier not found or user not authorised'});
        else return res.json({ success:true,message:'Delete well',supplier:deleteSupplier});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
module.exports = router;