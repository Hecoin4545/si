// In order to hash the password 
const {v4:uuidv4} = require('uuid')

// importing requires 
const User = require('../models/user');
const {getUser , setUser} = require('../service/auth');

// Function 
async function handleUserSignup(req , res){
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        await User.create({
            username: name,
            email,
            password
        });
        return res.status(200).json({ message: "Signup successful" });
    } catch (err) {
        return res.status(500).json({ error: "Signup failed" });
    }
}


async function handleUserSignin(req,res){
    const {email , password} = req.body;

    if(!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }
    try {
        const user = await User.findOne({
            email,
            password
        });
        if(!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = setUser(user);
        res.cookie('uid', token);
        return res.status(200).json({ message: "Signin successful" });
    } catch (err) {
        return res.status(500).json({ error: "Signin failed" });
    }
}


async function handleUserLogOut(req,res){
    res.clearCookie("uid").redirect('/signin')
}

module.exports = {
    handleUserSignup,
    handleUserSignin,
    handleUserLogOut
}