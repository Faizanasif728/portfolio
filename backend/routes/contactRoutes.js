const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// POST /api/contact - handle contact/feedback submission
router.post('/', submitContact);

module.exports = router;
