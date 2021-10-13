const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const UserAdmin = require('../models/UserAdmin');
const verifyToken = require('../middleware/authUserAdmin');

// @router GET api
// @desc Check if the user id logged in.
// @access public
router.get('/', verifyToken, async (req, res) => {
    try {
        const userAdmin = await UserAdmin.findById(req.userAdminId).select('-password')
        if(!userAdmin){
            return res.status(400).json({success:false,message:'User not found'});
        }
        res.json({success:true,message:'User successfully',userAdmin:userAdmin});

    }catch (e) {
        console.log(error.message); 
        res.status(500).json({ success:false,message:'Internal Server Error',error:error.message});
    }
})
//  @router GET api
// @desc register usernameAdmin
// @access public
router.post('/register', async(req, res) => {
    const { usernameAdmin, passwordAdmin } = req.body;
    if(!usernameAdmin || !passwordAdmin){
        return res.status(400).json({success: false, message:'Missing username and/or password failed'});
    }
    try {
        const userAdmin = await UserAdmin.findOne({usernameAdmin: usernameAdmin});
        if(userAdmin){
            return res.status(400).json({success: false, message:'Username already taken'})
        }
        const hashCodePassword = await argon2.hash(passwordAdmin);
        const newUserAdmin = new UserAdmin({
            usernameAdmin,
            passwordAdmin:hashCodePassword
        });
        await newUserAdmin.save();
        const accessToken = jwt.sign({userAdminId:newUserAdmin._id},process.env.ACCESS_TOKEN_SECRET);
        res.json({success:true,message:'User created successfully',accessToken});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success:false,message:'Internal Server Error',error:error.message});
    }
    
})

//  @router GET api
// @desc login usernameAdmin
// @access public
router.post('/login', async(req, res) => {
    const {usernameAdmin, passwordAdmin } = req.body;
    if(!usernameAdmin || !passwordAdmin){
        return res.status(400).json({success: false, message:'Missing username and/or password failed'});
    }
    else{
        try {
            const userAdmin = await UserAdmin.findOne({usernameAdmin});
            if(!userAdmin){
                return res.status(400).json({success: false, message:'Incorrect username or password',usernameAdmin,passwordAdmin});
            }
            const passwordAdminValid = await argon2.verify(userAdmin.passwordAdmin,passwordAdmin);
            if(!passwordAdminValid){
                return res.status(400).json({ success: false, message:'Incorrect username or password'});
            }
            accessToken = jwt.sign({userAdminId: userAdmin._id},process.env.ACCESS_TOKEN_SECRET);
            res.json({ success: true, message:'User logged in successfully', accessToken});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success:false, message:'Internal Server Error',error:error.message});
        }
    }
})
module.exports = router;