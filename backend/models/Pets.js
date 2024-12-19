const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    size: { type: String },
    healthStatus: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    type: { type: String, default: "Unknown" }, // Add this line
    available: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false }
});

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;
