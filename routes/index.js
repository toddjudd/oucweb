const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Do work here
router.get('/', siteController.welcome);

module.exports = router;