const adminController = require('../controllers/adminController');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Admin dashboard route with authentication check
router.get('/admin', authMiddleware, adminController.getAdminDashboard);

module.exports = router;