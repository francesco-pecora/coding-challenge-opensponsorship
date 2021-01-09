const express = require('express');
const router = express.Router();

// loading each controller
const athleteController = require('./athleteController.js');

// mounting controllers into a unique router
router.use('/athlete', athleteController);

module.exports = router;