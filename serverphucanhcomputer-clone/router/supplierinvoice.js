const express = require('express');
const router = express.Router();
const SupplierInvoice = require('../models/SupplierInvoice');
const verifyToken = require('../middleware/authUserAdmin');

router.get('/', verifyToken, async (req, res) => {
    try {
        const supplierInvoices = await SupplierInvoice.find({ }).populate('userAdmin',['usernameAdmin']).find({ }).populate('supplier',['nameSupplier']);
        res.json({success: true, supplierInvoices});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router POST api/supplier Invoice
// @desc Create a new supplier invoice
// @access private
router.post('/them-hdncc',verifyToken, async(req, res) => {
    const { nameSupplierInvoice,ImageUrlSupplierInvoice, createAtSupplierInvoice, codeproduct , quanlityDetails, importprice, supplierId  } = req.body;
    if(!nameSupplierInvoice){
        return res.status(400).json({ success: false, message: ' Input name supplier invoice is required '});
    }
    if(!codeproduct){
        return res.status(400).json({ success: false, message: ' Input code product supplier invoice is required '});
    }
    if(!quanlityDetails){
        return res.status(400).json({ success: false, message: ' Input quanlity details supplier invoice is required '});
    }
    if(!importprice){
        return res.status(400).json({ success: false, message: ' Input import price supplier invoice is required '});
    }
    if(!supplierId){
        return res.status(400).json({ success: false, message: ' Input id supplier invoice is required'});
    }
    try{

        const newSupplierInvoice = new SupplierInvoice({
            nameSupplierInvoice,
            ImageUrlSupplierInvoice,
            createAtSupplierInvoice,
            codeproduct,
            quanlityDetails,
            importprice,
            supplier: supplierId,
            userAdmin:req.userAdminId
        });
        await newSupplierInvoice.save();
        res.json({ success: true, message:'Supplier Invoice added successfully' , supplierInvoice: newSupplierInvoice });
    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})
// @router PUT api suppliersinvoice
// @desc Update a supplierinvoice
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const {nameSupplierInvoice,ImageUrlSupplierInvoice, createAtSupplierInvoice, codeproduct , quanlityDetails, importprice, supplierId  } = req.body;
    if(!nameSupplierInvoice){
        return res.status(400).json({ success: false, message: ' Input name supplier invoice is required '});
    }
    if(!codeproduct){
        return res.status(400).json({ success: false, message: ' Input code product supplier invoice is required '});
    }
    if(!quanlityDetails){
        return res.status(400).json({ success: false, message: ' Input quanlity details supplier invoice is required '});
    }
    if(!importprice){
        return res.status(400).json({ success: false, message: ' Input import price supplier invoice is required '});
    }
    if(!supplierId){
        return res.status(400).json({ success: false, message: ' Input id supplier invoice is required'});
    }
    try {
        let updatedSupplierInvoice = {
            nameSupplierInvoice,
            ImageUrlSupplierInvoice,
            createAtSupplierInvoice,
            codeproduct,
            quanlityDetails,
            importprice,
            supplierId
        };
        const supplierinvoiceUpdateCondition = { _id:req.params.id, supplier: supplierId }
        updatedSupplierInvoice = await SupplierInvoice.findOneAndUpdate(supplierinvoiceUpdateCondition, updatedSupplierInvoice, {new:true});
        //User not authorised to update post
        if(!updatedSupplierInvoice) return res.status(401).json({success:false,message:'Supplier invoice not found or user not authorised'});
        else return res.json({ success:true,message:'Updated supplier invoice',supplierInvoice:updatedSupplierInvoice});
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
        const supplierinvoiceUpdateCondition = { _id:req.params.id }
        deleteSupplierInvoice = await SupplierInvoice.findOneAndDelete(supplierinvoiceUpdateCondition, {new:true});
        //User not authorised to update post
        if(!deleteSupplierInvoice) return res.status(401).json({success:false,message:'Supplier invoice not found or user not authorised'});
        else return res.json({ success:true,message:'Deleted supplier invoice',supplierInvoice:deleteSupplierInvoice});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
module.exports = router;