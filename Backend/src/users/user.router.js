const router = require('express').Router();
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').JWT_SECRET;

router.post('/admin', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter both username and password' });
    }
    try{
     const adminUser = await User.findOne({ username });
     if(!adminUser){
        return res.status(404).json({ message: 'Admin not found' });
     }
     if(adminUser.password !== password){
        return res.status(401).json({ message: 'Invalid password' });
     }

     const token = jwt.sign({ id: adminUser._id },jwtSecret, { expiresIn: '1h' });

     return res.status(200).json({
        message: 'Admin authenticated successfully',
        token,
        user: {
            id: adminUser._id,
            username: adminUser.username,
            role: adminUser.role
        }
     });

    }catch(err){
        console.error('Error creating admin user:', err);
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;