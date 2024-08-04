const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('./../models/user');
const { json } = require('express');
// const list = require('./../models/list');

//Sign IN
router.post('/register' , async (req  ,res) => {
    try
    {
        const {email , username , password} = req.body;
        const hashPassword = bcrypt.hashSync(password);
        const user = new User({email , username , password : hashPassword});
        await user.save().then(() => res.status(200).json({message : "Sign Up Successful"}));
    }
    catch(error)
    {
        res.status(200).json({
            message : "User already Exists..."
        });
    }
});

//Log IN
router.post('/login' , async (req , res) => {
    try
    {
        const user = await User.findOne({email : req.body.email});
        if(!user)
        {
            res.status(200).json({
                message : "Please Sign Up First"
            }); 
        };
        const isPasswordCorr = bcrypt.compareSync(req.body.password , user.password);
        if(!isPasswordCorr) 
        {
            res.status(200).json({
                message : "Password is Incorrect"
            });
        };
        const {password , ...others} = user._doc;
        res.status(200).json({others});
    }
    catch(error)
    {
        console.log(error);
    }
})

module.exports = router;