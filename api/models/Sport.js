const mongoose = require("mongoose");

const Sport = mongoose.model(
    "Sport",
    mongoose.Schema({
        name: String,
        athletes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Athlete",
            }
        ],
    })
);

module.exports = Sport;