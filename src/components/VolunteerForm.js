import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { styled } from '@mui/material/styles';

// Custom styles for a sketchy, black-and-white theme
const Title = styled(Typography)({
    fontFamily: "'Roboto', sans-serif", // Consistent business font
    fontSize: '2.5rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    textDecoration: 'underline dashed black', // Sketchy underline
});

// Pastel Button Colors with Black Font Color
const ActionButton = styled(Button)({
    fontFamily: "'Roboto', sans-serif", // Consistent font
    color: 'black', // Font color set to black
    border: '2px dashed black', // Sketchy border effect
    '&:hover': {
        borderColor: 'black', // Darken border on hover
    },
});

// Pastel Green Button
const PastelGreenButton = styled(ActionButton)({
    backgroundColor: '#A8E6CF', // Pastel Green
    '&:hover': {
        backgroundColor: '#81C784', // Darker shade of green on hover
    },
});

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        availability: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}, for signing up as a volunteer!`);
        // Add backend functionality here if needed.
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Title variant="h4" gutterBottom align="center">
                Volunteer Sign-Up
            </Title>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Box mb={2}>
                    <TextField
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                        InputProps={{
                            style: { borderColor: 'black' },
                        }}
                    />
                </Box>

                {/* Email Field */}
                <Box mb={2}>
                    <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Box>

                {/* Availability Field */}
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Availability</InputLabel>
                        <Select
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            label="Availability"
                            required
                        >
                            <MenuItem value="Weekdays">Weekdays</MenuItem>
                            <MenuItem value="Weekends">Weekends</MenuItem>
                            <MenuItem value="Anytime">Anytime</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Message Field */}
                <Box mb={2}>
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                </Box>

                {/* Submit Button */}
                <Box>
                    <PastelGreenButton
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Volunteer
                    </PastelGreenButton>
                </Box>
            </form>
        </Container>
    );
};

export default VolunteerForm;
