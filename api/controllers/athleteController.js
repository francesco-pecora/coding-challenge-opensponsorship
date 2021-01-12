const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", async (req, res) => {
    try {
        let athletes = await db.Athlete.find({});
        return res.send(athletes);
    }
    catch(error) {
        // Generic error message for server-side error
        return res.status(500).json({
            error: error.toString(),
        });
    };
});


router.get("/:id", async (req, res) => {
    try {
        let athlete = await db.Athlete.findById(req.params.id);
        return res.send(athlete);
    }
    catch(error) {
        // Generic error message for server-side error
        return res.status(500).json({
            error: error.toString(),
        });
    }
})


router.post("/", async (req, res) => {
    try {
        // changing structure of sports to have array
        // of strings instead of array of objects
        req.body.sports.forEach((sport, idx) => {
            req.body.sports[idx] = sport.sport;
        });
        let newAthlete = await db.Athlete.create(req.body);
        return res.send(newAthlete);
    }
    catch(error) {
        // Generic error message for server-side error
        return res.status(500).json({
            error: error.toString(),
        });
    };
});

module.exports = router;