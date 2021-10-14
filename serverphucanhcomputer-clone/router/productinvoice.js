const express = require('express');
const router = express.Router();
const ProductInvoice = require('../models/ProductInvoice');
const verifyToken = require('../middleware/authUserAdmin');
const Client = require('../models/Client');
router.get('/', verifyToken, async (req, res) => {
    try {
        const productInvoices = await ProductInvoice.find({ }).populate('userAdmin',['usernameAdmin']).find({ }).populate('product',['nameProduct','originCategoryProduct','modelProduct','versionProduct','priceProduct']).find({ }).populate('client',['nameClient','addressClient','phonenumberClient']);
        res.json({success: true, productInvoices});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router POST api ProductInvoice
// @desc Create a new ProductInvoice 
// @access private
router.post('/hoadonsanphamClient', async(req, res) => {
    const {nameClient,addressClient,phonenumberClient, ImageurlProductInvoice,totalpriceProductInvoice, quanlityProductInvoice, remarkProductInvoice , productId} = req.body;
    if( !nameClient  ){
        return res.status(400).json({ success: false, message: ' Input nameClient is required '});
    }
    if(  !addressClient   ){
        return res.status(400).json({ success: false, message: ' Input address Client is required '});
    }
    if(  !phonenumberClient   ){
        return res.status(400).json({ success: false, message: ' Input phone number Client is required '});
    }
    if(  !totalpriceProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input total price Product Invoice is required '});
    }
    if(  !quanlityProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input quanlity Product Invoice is required '});
    }
    if( !productId  ){
        return res.status(400).json({ success: false, message: ' Input product Id is required '});
    }
    try{
        const phonenumberClients = await Client.findOne({phonenumberClient:phonenumberClient});
        if(phonenumberClients){
            return res.status(400).json({success: false, message:'Phone number already taken'})
        }
        const newClient = new Client({
            nameClient,
            addressClient,
            phonenumberClient
        })
        await newClient.save();
        const newProductInvoice = new ProductInvoice({ 
            ImageurlProductInvoice,
            quanlityProductInvoice,
            totalpriceProductInvoice, 
            remarkProductInvoice,
            product: productId,
            client:newClient._id
        });
        await newProductInvoice.save();
        res.json({ success: true, message:'Product Invoice added successfully' , productInvoice: newProductInvoice });
    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})

// @router POST api ProductInvoice
// @desc Create a new ProductInvoice 
// @access private
router.post('/hoadonsanpham',verifyToken, async(req, res) => {
    const { ImageurlProductInvoice,totalpriceProductInvoice, quanlityProductInvoice, remarkProductInvoice , productId , clientId} = req.body;
    if( !ImageurlProductInvoice  ){
        return res.status(400).json({ success: false, message: ' Input Image url Product Invoice is required '});
    }
    if(  !totalpriceProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input total price Product Invoice is required '});
    }
    if(  !quanlityProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input quanlity Product Invoice is required '});
    }
    if( !productId  ){
        return res.status(400).json({ success: false, message: ' Input product Id is required '});
    }
    if(  !clientId ){
        return res.status(400).json({ success: false, message: ' Input client Id is required '});
    }
    try{
        const newProductInvoice = new ProductInvoice({
            
            ImageurlProductInvoice,
            quanlityProductInvoice,
            totalpriceProductInvoice, 
            remarkProductInvoice,
            userAdmin: req.userAdminId,
            product: productId,
            client:clientId
        });
        await newProductInvoice.save();
        res.json({ success: true, message:'Product Invoice added successfully' , productInvoice: newProductInvoice });
    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})

// @router PUT api ProductInvoice
// @desc Update a ProductInvoice
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const { ImageurlProductInvoice, quanlityProductInvoice,  totalpriceProductInvoice, remarkProductInvoice,productId , clientId } = req.body;
    if( !ImageurlProductInvoice  ){
        return res.status(400).json({ success: false, message: ' Input Image url Product Invoice is required '});
    }
    if(  !totalpriceProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input total price Product Invoice is required '});
    }
    if(  !quanlityProductInvoice   ){
        return res.status(400).json({ success: false, message: ' Input quanlity Product Invoice is required '});
    }
    if( !productId  ){
        return res.status(400).json({ success: false, message: ' Input product Id is required '});
    }
    if(  !clientId ){
        return res.status(400).json({ success: false, message: ' Input client Id is required '});
    }
    try{
        let updateProductInvoice = {
            ImageurlProductInvoice,
            quanlityProductInvoice,
            totalpriceProductInvoice, 
            remarkProductInvoice,
            productId,
            clientId
        };
        const ProductInvoiceUpdateCondition = { _id:req.params.id  }
        updateProductInvoice = await ProductInvoice.findOneAndUpdate(ProductInvoiceUpdateCondition, updateProductInvoice, {new:true});
        //User not authorised to update productinvoice
        if(!updateProductInvoice) return res.status(401).json({success:false,message:'Product invoice updated false'});
        else return res.json({ success:true,message:'Updated Product Invoice',productInvoice:updateProductInvoice});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router DELETE api ProductInvoice
// @desc Delete a ProductInvoice
// @access private
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const ProductInvoiceUpdateCondition = { _id:req.params.id }
        deleteProductInvoice = await ProductInvoice.findOneAndDelete(ProductInvoiceUpdateCondition, {new:true});
        //User not authorised to delete productinvoice
        if(!deleteProductInvoice) return res.status(401).json({success:false,message:'Product Invoice deleted false'});
        else return res.json({ success:true,message:'Deleted Product Invoice successfully',productInvoice:deleteProductInvoice});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})


module.exports = router;
