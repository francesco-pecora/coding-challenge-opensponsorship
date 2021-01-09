const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", async (req, res) => {
    try {
        let athletes = await db.Athlete.find({});
        res.send(athletes);
    }
    catch(error) {
        // Generic error message for server-side error
        res.status(500).json({
            error: error.toString(),
        });
    };
});

router.post("/", async (req, res) => {
    try {
        let newAthlete = await db.Athlete.create(req.body);
        res.send(newAthlete);
    }
    catch(error) {
        // Generic error message for server-side error
        res.status(500).json({
            error: error.toString(),
        });
    };
});

module.exports = router;