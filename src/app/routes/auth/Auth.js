const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/AuthMiddleware.js');

const AuthController = require('../../controllers/auth/AuthController.js')

router.post('/login', AuthController.onLogin);

router.post('/register/customer', AuthController.onCustomerRegister);

router.post('/register/employee', auth.verifyTokenAdmin, AuthController.onEmployeeRegister);

router.get('/profile/:username', AuthController.getProfile);

router.put('/profile/:username', AuthController.editProfile);

module.exports = router;