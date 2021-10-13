const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('AuthorizationUser');
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({success:false, message: 'Access token not found'});
    }
    try{
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error){
        console.log(error);
        return res.status(403).send({success:false, message: 'Invalid server error'});
    }
}
module.exports = verifyToken;