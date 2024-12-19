// In your PetForm.js or similar file for posting pets
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";

const PetForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        size: "",
        healthStatus: "",
        description: "",
        available: true,
        isFeatured: false,
    });

    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("age", formData.age);
        formDataToSubmit.append("size", formData.size);
        formDataToSubmit.append("healthStatus", formData.healthStatus);
        formDataToSubmit.append("description", formData.description);
        formDataToSubmit.append("available", formData.available);
        formDataToSubmit.append("isFeatured", formData.isFeatured);
        if (imageFile) {
            formDataToSubmit.append("image", imageFile);
        }

        axios.post("http://localhost:5000/api/pets", formDataToSubmit)
            .then((response) => {
                console.log("Pet uploaded successfully:", response.data);
                alert("Pet uploaded successfully!");
            })
            .catch((error) => {
                console.error("Error uploading pet:", error);
                alert("Error uploading pet!");
            });
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Health Status"
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input type="file" onChange={handleImageChange} />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default PetForm;
