const mongoose = require('mongoose');

const Athlete = mongoose.model(
    "Athlete",
    new mongoose.Schema({
        name: String,
        birthDate: Date,
        location: String,
        gender: String,
        team: String,
        sports: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Sport",
            }
        ],
        about: String,
        interests: String,
        image: String
    })
);

module.exports = Athlete;