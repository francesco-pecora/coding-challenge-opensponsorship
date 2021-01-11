const mongoose = require('mongoose');

const Athlete = mongoose.model(
    "Athlete",
    new mongoose.Schema({
        name: String,
        birthDate: Date,
        location: String,
        gender: String,
        team: String,
        sports: [String],
        about: String,
        interests: String,
        image: String
    })
);

module.exports = Athlete;