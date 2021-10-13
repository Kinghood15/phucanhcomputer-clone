const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const verifyToken = require('../middleware/authUserAdmin');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({ }).populate('userAdmin',['usernameAdmin']).find({}).populate('categoryproduct',['nameCategoryProduct']).find({}).populate('supplierinvoice',['codeproduct','quanlityDetails','importprice']);
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
router.get('/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id).populate('categoryproduct',['nameCategoryProduct']).find({}).populate('supplierinvoice',['codeproduct']).select('-userAdmin');
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
router.get('/categoryProductId/:id', async (req, res) => {
    try {
        const products = await Product.find({categoryproduct:req.params.id}).populate('categoryproduct',['nameCategoryProduct']).find({}).populate('supplierinvoice',['codeproduct']);
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
router.get('/ProductId/quanlityDetails/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id).populate('supplierinvoice',['quanlityDetails']).select('-userAdmin').select('-categoryproduct').select('-priceProduct').select('-remarkProduct').select('-descriptionProduct').select('-versionProduct').select('-modelProduct').select('-ImageurlProductBefore').select('-ImageurlProductAfter').select('-ImageurlProductIn').select('-ImageurlProductAfter').select('-ImageurlProduct').select('-originCategoryProduct').select('-nameProduct').select('-_id');
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router POST api product
// @desc Create a new product
// @access private
router.post('/themsanpham',verifyToken, async(req, res) => {
    const { nameProduct, originCategoryProduct,ImageurlProduct,ImageurlProductIn,ImageurlProductBefore,ImageurlProductAfter, modelProduct, versionProduct , descriptionProduct , remarkProduct,priceProduct ,categoryProductId, supplierInvoiceId} = req.body;
    if(!modelProduct ){
        return res.status(400).json({ success: false, message: ' Input model product is required '});
    }if(!descriptionProduct){
        return res.status(400).json({ success: false, message: ' Input description product is required '});
    }if(!originCategoryProduct ){
        return res.status(400).json({ success: false, message: ' Input origin category product is required '});
    }if(!ImageurlProduct){
        return res.status(400).json({ success: false, message: ' Input image product is required '});
    }if(!nameProduct){
        return res.status(400).json({ success: false, message: ' Input name product is required '});
    }
    if(!priceProduct){
        return res.status(400).json({ success: false, message: ' Input priceProduct is required '});
    }
    if(!categoryProductId){
        return res.status(400).json({ success: false, message: ' Input categoryProductId is required '});
    }
    if(!supplierInvoiceId){
        return res.status(400).json({ success: false, message: ' Input supplierInvoiceId is required '});
    }
    try{
        const newProduct = new Product({
            nameProduct, 
            originCategoryProduct,
            ImageurlProduct,
            ImageurlProductIn,
            ImageurlProductAfter,
            ImageurlProductBefore,
            modelProduct,
            versionProduct,
            descriptionProduct,
            remarkProduct,
            priceProduct,
            categoryproduct: categoryProductId,
            supplierinvoice: supplierInvoiceId,
            userAdmin:req.userAdminId
        });
        await newProduct.save();
        res.json({ success: true, message:'Product added successfully' , product: newProduct });
    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})

// @router PUT api Product
// @desc Update a Product
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const { nameProduct, originCategoryProduct,ImageurlProduct,ImageurlProductIn,ImageurlProductBefore,ImageurlProductAfter, modelProduct, versionProduct , descriptionProduct , remarkProduct,priceProduct ,categoryProductId, supplierInvoiceId} = req.body
    if(!modelProduct ){
        return res.status(400).json({ success: false, message: ' Input model product is required '});
    }if(!descriptionProduct){
        return res.status(400).json({ success: false, message: ' Input description product is required '});
    }if(!originCategoryProduct ){
        return res.status(400).json({ success: false, message: ' Input origin category product is required '});
    }if(!ImageurlProduct){
        return res.status(400).json({ success: false, message: ' Input image product is required '});
    }if(!nameProduct){
        return res.status(400).json({ success: false, message: ' Input name product is required '});
    }if(!priceProduct){
        return res.status(400).json({ success: false, message: ' Input priceProduct is required '});
    }if(!categoryProductId){
        return res.status(400).json({ success: false, message: ' Input categoryProductId is required '});
    }if(!supplierInvoiceId){
        return res.status(400).json({ success: false, message: ' Input supplierInvoiceId is required '});
    }
    try{
        let updatedProduct = new Product({
            nameProduct, 
            originCategoryProduct,
            ImageurlProduct,
            ImageurlProductIn,
            ImageurlProductAfter,
            ImageurlProductBefore,
            modelProduct,
            versionProduct,
            descriptionProduct,
            remarkProduct,
            priceProduct,
            categoryproduct: categoryProductId,
            supplierinvoice: supplierInvoiceId
        });
        const ProductUpdateCondition = { _id:req.params.id };
        updatedProduct = await Product.findOneAndUpdate(ProductUpdateCondition, updatedProduct, {new:true});
        //User not authorised to update product
        if(!updatedProduct) return res.status(401).json({success:false,message:'Product not found or user not authorised'});
        else return res.json({ success:true,message:'Updated product',product:updatedProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error', error:error.message});
    }
})
// @router DELETE api product
// @desc Delete a product
// @access private
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const ProductUpdateCondition = { _id:req.params.id ,userAdmin:req.userAdminId }
        deleteProduct = await Product.findOneAndDelete(ProductUpdateCondition, {new:true});
        //User not authorised to update product
        if(!deleteProduct) return res.status(401).json({success:false,message:'Product deleted false'});
        else return res.json({ success:true,message:'Deleted product successfully',product:deleteProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})

module.exports = router;