const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').JWT_SECRET;

const verifyAdminToken = (req, res, next) =>{
    const token = req.headers['authorization'];
    if(!token)return res.status(401).json({message: 'Unauthorized'});
    jwt.verify(token, jwtSecret, (err,user)=>{
        if(err)return res.status(500).json({message: 'Failed to authenticate token'});
        req.user = user;
        next();
    })
}

module.exports = {verifyAdminToken};