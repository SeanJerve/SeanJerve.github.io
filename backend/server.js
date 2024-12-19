const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const petRoutes = require("./routes/pets");
const dotenv = require("dotenv");
const Pets = require("./models/Pets"); // Import the Pet model
const cloudinary = require('./config/cloudinary'); // Cloudinary config
const upload = require('./config/multer'); // Multer setup

dotenv.config();
connectDB(); // Connect to MongoDB using MONGO_URI

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/pets", petRoutes);

// Featured Pets Route
app.get('/api/pets/featured', async (req, res) => {
    try {
        const featuredPets = await Pets.find({ isFeatured: true }); // Only fetch featured pets
        res.json(featuredPets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Image Upload Route
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        // Upload the image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'malou-pets', // Specify a folder for organization in Cloudinary
        });

        // Send the uploaded image URL back as a response
        res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to Malou Pet Haven API");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

