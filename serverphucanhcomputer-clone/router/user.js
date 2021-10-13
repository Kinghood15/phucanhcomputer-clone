const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Client = require('../models/Client');
const verifyToken = require('../middleware/authUser');

// @router GET api
// @desc Check if the user id logged in.
// @access public
router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if(!user){
            return res.status(400).json({success:false,message:'User not found'});
        }
        res.json({success:true,message:'User successfully',user:user});

    }catch (e) {
        console.log(error.message); 
        res.status(500).json({ success:false,message:'Internal Server Error',error:error.message});
    }
})
//  @router GET api
// @desc register user
// @access public
router.post('/register', async(req, res) => {
    const { username, password, nameClient, addressClient, phonenumberClient } = req.body;
    if(!username || !password || !nameClient || !addressClient || !phonenumberClient){
        return res.status(400).json({success: false, message:'Missing name,address,phone number, username or password failed'});
    }
    try {
        const phonenumberClients = await Client.findOne({phonenumberClient:phonenumberClient});
        if(phonenumberClients){
            return res.status(400).json({success: false, message:'Phone number already taken'})
        }
        const newClient = new Client({
            nameClient,
            addressClient,
            phonenumberClient
        })
        const user = await User.findOne({username: username});
        if(user){
            return res.status(400).json({success: false, message:'Username already taken'})
        }
        await newClient.save();
        const hashCodePassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password:hashCodePassword,
            client:newClient._id
        });
        await newUser.save();
        const accessToken = jwt.sign({userId:newUser._id},process.env.ACCESS_TOKEN_SECRET);
        res.json({success:true,message:'User created successfully', accessToken});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success:false,message:'Internal Server Error',error:error.message});
    }
    
})

//  @router GET api
// @desc login user
// @access public
router.post('/login', async(req, res) => {
    const {username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({success: false, message:'Missing username and/or password failed'});
    }
    else{
        try {
            const user = await User.findOne({username: username});
            if(!user){
                return res.status(400).json({success: false, message:'Incorrect username or password'});
            }
            const passwordValid = await argon2.verify(user.password,password);
            if(!passwordValid){
                return res.status(400).json({ success: false, message:'Incorrect username or password'});
            }
            accessToken = jwt.sign({userId: user._id},process.env.ACCESS_TOKEN_SECRET);
            res.json({ success: true, message:'User logged in successfully',accessToken:accessToken,username:user.username});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success:false,message:'Internal Server Error',error:error.message});
        }
    }
})
module.exports = router;