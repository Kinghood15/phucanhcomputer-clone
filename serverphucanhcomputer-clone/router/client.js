const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const User = require('../models/User');
const verifyToken = require('../middleware/authUser');
// @router PUT api/Client
// @desc Update a Client
// @access private
router.put('/:id',verifyToken, async (req, res) => {
    const { nameClient, addressClient, phonenumberClient } = req.body;
    try {
        let updatedClient = {
            nameClient, 
            addressClient, 
            phonenumberClient
        };
        const ClientUpdateCondition = {
            _id:req.params.id
        }
        updatedClient = await Client.findOneAndUpdate(ClientUpdateCondition, updatedClient, {new:true});
        //Client not authorised to update post
        if(!updatedClient ) return res.status(401).json({success:false,message:'Client not found or Client not authorised'});
        else return res.json({ success:true,message:'Update well',client:updatedClient});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
// @router DELETE api/Client
// @desc Delete a Client
// @access private
router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const ClientUpdateCondition = {
            _id:req.params.id
        }
        const UserDeleteCondition = {user:req.userId}
        deleteUser = await User.findOneAndDelete(UserDeleteCondition, {new:true});
        deleteClient = await Client.findOneAndDelete(ClientUpdateCondition, {new:true});
        //Client not authorised to update client
        if(!deleteClient) return res.status(401).json({success:false,message:'Client not found or Client not authorised'});
        else return res.json({ success:true,message:'Delete well',client:deleteClient});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:'Internal Server error'});
    }
})
module.exports = router;