const express = require('express');
const router = express.Router();
const CategoryProduct = require('../models/CategoryProduct');
const verifyToken = require('../middleware/authUserAdmin');

router.get('/', async (req, res) => {
    try {
        const categoryProducts = await CategoryProduct.find({ }).populate('userAdmin',['usernameAdmin']);
        res.json({success: true, categoryProducts});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
router.get('/categoryProduct/:id', async (req, res) => {
    try {
        const categoryProductFindbyId = await CategoryProduct.findById(req.params.id).select('nameCategoryProduct');
        res.json({success: true, categoryProductFindbyId});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router POST api category product
// @desc Create a new category product
// @access private
router.post('/themdanhmucsp',verifyToken, async(req, res) => {
    const { nameCategoryProduct  } = req.body;
    if(!nameCategoryProduct){
        return res.status(400).json({ success: false, message: ' Input is required '});
    }
    const categoryProductCheck = await CategoryProduct.findOne({ nameCategoryProduct: nameCategoryProduct});
    if(categoryProductCheck){
        return res.status(400).json({success: false, message:'Category product already taken'})
    }
    try{
        const newCategoryProduct = new CategoryProduct({
            nameCategoryProduct,
            userAdmin: req.userAdminId
        });
        await newCategoryProduct.save();
        res.json({ success: true, message:'Category product added successfully' , categoryProduct: newCategoryProduct });
    }catch(e){
        console.log(e.message);
        return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
})
// @router PUT api category product
// @desc Update a  category product
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const { nameCategoryProduct  } = req.body;
    if(!nameCategoryProduct){
        return res.status(400).json({ success: false, message: ' Input is required '});
    }
    const categoryProductCheck = await CategoryProduct.findOne({ nameCategoryProduct: nameCategoryProduct});
    if(categoryProductCheck){
        return res.status(400).json({success: false, message:'Category product already taken'})
    }
    try {
        let updatedCategoryProduct = {
            nameCategoryProduct
        };
        const CategoryProductUpdateCondition = { _id:req.params.id }
        updatedCategoryProduct = await CategoryProduct.findOneAndUpdate(CategoryProductUpdateCondition, updatedCategoryProduct, {new:true});
        //User not authorised to update post
        if(!updatedCategoryProduct) return res.status(401).json({success:false,message:'Category product not updated '});
        else return res.json({ success:true,message:'Updated category product',categoryProduct:updatedCategoryProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router DELETE api  category product
// @desc Delete a  category product
// @access private
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const CategoryProductUpdateCondition = { _id:req.params.id }
        deleteCategoryProduct = await CategoryProduct.findOneAndDelete(CategoryProductUpdateCondition, {new:true});
        //User not authorised to update post
        if(!deleteCategoryProduct) return res.status(401).json({success:false,message:'Category product not found or user not authorised'});
        else return res.json({ success:true,message:'Deleted category product',categoryProduct:deleteCategoryProduct});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})


module.exports = router;