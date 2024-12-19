const express = require("express");
const Pets = require("../models/Pets");
const cloudinary = require('../config/cloudinary'); // Cloudinary config
const upload = require('../config/multer'); // Multer setup
const router = express.Router();

// Get all pets
router.get("/", async (req, res) => {
    try {
        const pets = await Pets.find();
        res.json(pets);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get featured pets
router.get('/featured', async (req, res) => {
    try {
        const featuredPets = await Pets.find({ isFeatured: true });
        console.log("Featured Pets:", featuredPets);
        res.json(featuredPets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new pet with image upload
router.post("/", upload.single('image'), async (req, res) => {
    try {
        let imageUrl = '';
        
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'malou-pets',
            });
            imageUrl = result.secure_url; // Cloudinary URL of the uploaded image

            
        }

        const newPet = new Pets({
            name: req.body.name,
            age: req.body.age,
            size: req.body.size,
            healthStatus: req.body.healthStatus,
            description: req.body.description,
            photoUrl: imageUrl, // Save the image URL in photoUrl field
            available: req.body.available,
            isFeatured: req.body.isFeatured,
        });

        await newPet.save();
        res.status(201).json(newPet); // Return the saved pet data
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Update a pet
router.put("/:id", async (req, res) => {
    try {
        const updatedPet = await Pets.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPet);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete a pet
router.delete("/:id", async (req, res) => {
    try {
        await Pets.findByIdAndDelete(req.params.id);
        res.json({ message: "Pet deleted" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
