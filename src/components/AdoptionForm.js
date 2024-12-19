import React, { useState } from "react";
import { TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { styled } from '@mui/material/styles';

// Custom styles for a sketchy, black-and-white theme
const Title = styled(Typography)({
    fontFamily: "'Roboto', sans-serif", 
    fontSize: '1.9em',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    textDecoration: 'underline dashed black',
});

// Pastel Button Colors with Black Font Color
const ActionButton = styled(Button)({
    fontFamily: "'Roboto', sans-serif", 
    color: 'black',
    border: '2px dashed black', 
    '&:hover': {
        borderColor: 'black', 
    },
});

// Pastel Green Button
const SubmitButton = styled(ActionButton)({
    backgroundColor: '#A8E6CF', 
    '&:hover': {
        backgroundColor: '#81C784', 
    },
});

// Custom Styled Text Field
const StyledTextField = styled(TextField)({
    marginBottom: '1rem', 
});

const AdoptionForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        petName: "",
        reason: "",
        frequency: "one-time",
        actionType: "adopt",  // Action type to track adoption or donation
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form Submitted:", formData);
        alert(`Your ${formData.actionType === "adopt" ? "adoption" : "donation"} application has been submitted. Thank you!`);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '5rem 0' }}>
            <Box sx={{
                width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '2rem',
                borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '3px solid #000'
            }}>
                <Title variant="h4" gutterBottom>
                    Adopt or Donate a Pet
                </Title>

                <form onSubmit={handleSubmit}>
                    {/* Action Type Selection (Adopt or Donate) */}
                    <Box mb={2}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                name="actionType"
                                value={formData.actionType}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="adopt" control={<Radio />} label="Adopt" />
                                <FormControlLabel value="donate" control={<Radio />} label="Donate" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    {/* Conditional Fields Based on Action Type */}
                    <StyledTextField
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <StyledTextField
                        label="Your Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <StyledTextField
                        label="Pet Name"
                        name="petName"
                        variant="outlined"
                        fullWidth
                        value={formData.petName}
                        onChange={handleChange}
                        required
                    />
                    
                    {/* Conditional reason field */}
                    {formData.actionType === "adopt" ? (
                        <StyledTextField
                            label="Why Do You Want to Adopt?"
                            name="reason"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <StyledTextField
                            label="Pet Description (for donation)"
                            name="reason"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    )}

                    {/* Frequency Field (Only for Adoption) */}
                    {formData.actionType === "adopt" && (
                        <Box mb={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Adoption Frequency</InputLabel>
                                <Select
                                    name="frequency"
                                    value={formData.frequency}
                                    onChange={handleChange}
                                    label="Adoption Frequency"
                                    required
                                >
                                    <MenuItem value="one-time">One-Time</MenuItem>
                                    <MenuItem value="monthly">Monthly</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    )}

                    {/* Submit Button */}
                    <Box>
                        <SubmitButton type="submit" variant="contained" fullWidth>
                            Submit
                        </SubmitButton>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AdoptionForm;
