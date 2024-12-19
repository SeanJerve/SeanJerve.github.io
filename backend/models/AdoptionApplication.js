const mongoose = require("mongoose");

const AdoptionApplicationSchema = new mongoose.Schema({
    petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },
    status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("AdoptionApplication", AdoptionApplicationSchema);
