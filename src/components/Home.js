import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid, Container, Box } from "@mui/material";
import PetCard from "./PetCard";
import { styled } from '@mui/material/styles';

// Pastel Button Colors with Black Font Color
const ActionButton = styled(Button)({
    fontFamily: "'Roboto', sans-serif",
    color: 'black',
    border: '2px dashed black',
    '&:hover': {
        borderColor: 'black',
    },
});

// Pastel Blue
const PastelBlueButton = styled(ActionButton)({
    backgroundColor: '#B3E5FC',
    '&:hover': {
        backgroundColor: '#81D4FA',
    },
});

const Home = () => {
    const [featuredPets, setFeaturedPets] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedPets = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pets/featured"); // Updated port
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setFeaturedPets(data);
            } catch (err) {
                console.error("Error fetching featured pets:", err);
                setError("Failed to load featured pets. Please try again later.");
            }
        };

        fetchFeaturedPets();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 0, mb: 0, padding: 0, overflow: 'hidden' }}> {/* Set overflow to hidden and remove padding */}
            {/* Replace Title with an Image */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0 }}>
                <img 
                    src="/assets/mphtitle300x.png"  
                    alt="Malou Pet Haven" 
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>

            {/* Action Buttons */}
            <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 0, marginBottom: 0 }}>
                <Grid item xs={12} md={4}>
                    <Link to="/donation" style={{ textDecoration: 'none' }}>
                        <PastelBlueButton variant="contained" fullWidth>
                            Make a Donation
                        </PastelBlueButton>
                    </Link>
                </Grid>
            </Grid>

            {/* Featured Pets Section */}
            <Box sx={{ mt: 0, mb: 0, padding: 0, overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0, overflow: 'hidden' }}>
                    <img 
                        src="/assets/featured.png"  // Replace with your image path
                        alt="Featured Pets for Adoption"
                        style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                </Box>

                <Grid container spacing={3} sx={{ padding: 0, marginTop: 0 }}>
                    {error ? (
                        <Typography variant="body1" color="error" align="center" sx={{ width: '100%' }}>
                            {error}
                        </Typography>
                    ) : featuredPets.length > 0 ? (
                        featuredPets.map((pet) => (
                            <Grid item xs={12} sm={6} md={4} key={pet._id}>
                                <PetCard pet={pet} />
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1" align="center" sx={{ width: '100%' }}>
                            No featured pets at the moment.
                        </Typography>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
