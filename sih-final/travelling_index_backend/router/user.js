const express = require('express');
const {handleUserSignin , handleUserSignup , handleUserLogOut} = require('../controllers/user');

const router = express.Router();

// Routes
router.post('/signup' , handleUserSignup);
router.post('/signin' , handleUserSignin);
router.get('/logout' , handleUserLogOut);

module.exports = router;