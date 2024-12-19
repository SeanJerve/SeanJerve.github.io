import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';

// Styled components for the sketchy theme
const SectionTitle = styled(Typography)(() => ({
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1.8rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textDecoration: 'underline dashed black', // Sketchy underline
}));

const SectionContent = styled(Typography)(() => ({
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1.2rem',
    color: 'black',
    marginBottom: '1.5rem',
    textAlign: 'justify',
}));

const SketchyCard = styled(Card)(() => ({
    border: '4px dashed black', // Sketchy border
    boxShadow: 'none',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const OperationalHours = styled(Typography)(() => ({
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1.2rem',
    color: 'black',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
}));

const AboutUs = () => {
    useEffect(() => {
        // Disable horizontal scroll
        document.body.style.overflowX = 'hidden';

        // Clean up on unmount to restore normal behavior
        return () => {
            document.body.style.overflowX = '';
        };
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            {/* Replace Welcome text with Image */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <img 
                    src="/assets/mphtitle300x.png"  
                    alt="Malou Pet Haven" 
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>

            {/* About Us Section */}
            <Box sx={{ mb: 5 }}>
                <SectionTitle>Who We Are</SectionTitle>
                <SectionContent>
                    Malou Pet Haven is a sanctuary committed to rescuing, rehabilitating, and rehoming animals in need. 
                    Founded in love and compassion, we aim to provide a second chance to abandoned and mistreated pets. 
                    Our goal is to ensure every animal finds a forever home where they are cherished and cared for.
                </SectionContent>
                <SectionContent>
                    Over the years, we've successfully rescued and rehomed hundreds of pets thanks to the 
                    unwavering support of our volunteers, donors, and adopters.
                </SectionContent>
            </Box>

            {/* Mission Section */}
            <Box sx={{ mb: 5 }}>
                <SectionTitle>Our Mission</SectionTitle>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <SectionContent>
                            <strong>Rescue:</strong> Provide immediate help and medical care to abandoned and injured animals.
                        </SectionContent>
                        <SectionContent>
                            <strong>Rehabilitate:</strong> Offer a safe haven for pets to recover physically and emotionally.
                        </SectionContent>
                        <SectionContent>
                            <strong>Rehome:</strong> Match pets with loving families who will give them a new beginning.
                        </SectionContent>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SketchyCard>
                            <CardMedia
                                component="img"
                                height="400"
                                image="/assets/rescue.png" // Replace with a real image of pets being rescued
                                alt="Rescue mission"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    A glimpse of our rescue operations.
                                </Typography>
                            </CardContent>
                        </SketchyCard>
                    </Grid>
                </Grid>
            </Box>

            {/* Location Map Section */}
            <Box sx={{ mb: 5 }}>
                <SectionTitle>Our Location</SectionTitle>
                {/* Map image */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        height: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        border: '4px dashed black', // Adding dashed border
                        borderRadius: '8px', // Optional: round the corners of the border
                        padding: '10px', // Optional: space between image and border
                    }}
                >
                    <img
                        src="/assets/mapa.png"
                        alt="Location Map"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
            </Box>

            {/* Operational Hours Section */}
            <Box sx={{ mb: 5 }}>
                <SectionTitle>Operational Hours</SectionTitle>
                <OperationalHours>
                    <strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM
                </OperationalHours>
                <OperationalHours>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </OperationalHours>
                <OperationalHours>
                    <strong>Sunday:</strong> Closed
                </OperationalHours>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ mb: 5 }}>
                <SectionTitle>What People Say</SectionTitle>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <SketchyCard>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    "Life-changing!"
                                </Typography>
                                <Typography variant="body2">
                                    Adopting from Malou Pet Haven was the best decision we ever made. Our new family 
                                    member has brought so much joy to our lives!
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                                    - Jane Doe, Pet Parent
                                </Typography>
                            </CardContent>
                        </SketchyCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SketchyCard>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    "A sanctuary of hope."
                                </Typography>
                                <Typography variant="body2">
                                    The care and dedication of the team are truly inspiring. They give these animals the 
                                    love and hope they deserve.
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                                    - John Smith, Volunteer
                                </Typography>
                            </CardContent>
                        </SketchyCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SketchyCard>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    "Forever grateful."
                                </Typography>
                                <Typography variant="body2">
                                    Malou Pet Haven gave our pet a second chance, and for that, we will always be grateful.
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                                    - The Perez Family, Adopters
                                </Typography>
                            </CardContent>
                        </SketchyCard>
                    </Grid>
                </Grid>
            </Box>

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h5" color="black" gutterBottom>
                    Join Us in Making a Difference!
                </Typography>
                <Typography variant="body1" color="black" gutterBottom>
                    Whether through adoption, volunteering, or donations, you can be a part of our mission to 
                    create a better world for animals.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
