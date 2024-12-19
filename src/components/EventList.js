import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Container, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import { styled } from '@mui/material/styles';

// Updated event data with images and brief descriptions
const events = [
    { id: 1, title: "Adoption Day", date: "2024-07-15", location: "Shelter Grounds", info: "Find your forever friend at our adoption event!", image: "/assets/1.png" },
    { id: 2, title: "Fundraising Gala", date: "2024-08-10", location: "Community Hall", info: "An elegant evening to support our shelter.", image: "/assets/2.png" },
    { id: 3, title: "Pet Training Workshop", date: "2024-09-05", location: "Downtown Park", info: "Learn essential pet training tips from experts.", image: "/assets/3.png" },
    { id: 4, title: "Volunteer Orientation", date: "2024-09-20", location: "Shelter Office", info: "Join our team and make a difference!", image: "/assets/4.png" },
    { id: 5, title: "Pet Costume Parade", date: "2024-10-31", location: "City Plaza", info: "Dress your pets in their best costumes!", image: "/assets/5.png" },
    { id: 6, title: "Winter Blanket Drive", date: "2024-11-15", location: "Shelter Grounds", info: "Donate blankets to keep animals warm this winter.", image: "/assets/6.png" },
    { id: 7, title: "Holiday Adoption Fair", date: "2024-12-10", location: "Community Center", info: "Celebrate the holidays with a new furry friend.", image: "/assets/7.png" },
    { id: 8, title: "Spring Cleanup Day", date: "2025-03-25", location: "Local Park", info: "Help clean up and beautify our parks for pets.", image: "/assets/8.png" },
    { id: 9, title: "Animal Wellness Checkup", date: "2025-04-12", location: "Shelter Clinic", info: "Get a free health checkup for your pet.", image: "/assets/9.png" },
    { id: 10, title: "Summer Adoption Festival", date: "2025-06-20", location: "Beachfront Park", info: "Enjoy summer fun while adopting a pet.", image: "/assets/10.png" },
];

// Custom styles for a sketchy, black-and-white theme
const Title = styled(Typography)({
    fontFamily: "'Roboto', sans-serif",
    fontSize: '2.5rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    textDecoration: 'underline dashed black',
    '@media (max-width: 600px)': {
        fontSize: '1.8rem', // Smaller title font size for mobile
        marginBottom: '1.5rem',
    },
});

const EventCard = styled(Card)({
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '4px dashed black',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 600px)': {
        flexDirection: 'column', // Stack content vertically
        width: '100%', // Take full width of container
        alignItems: 'center', // Center all content
    },
});

const EventImage = styled('img')({
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginLeft: '2rem',
    '@media (max-width: 600px)': {
        width: '100px', // Smaller image size
        height: '100px',
        marginLeft: '0', // Remove horizontal margin
        marginTop: '1rem', // Add spacing above the image
    },
});

const RegisterButton = styled(Button)({
    backgroundColor: '#B3E5FC',
    color: 'black',
    border: '2px dashed black',
    width: '300px',
    '&:hover': {
        backgroundColor: '#81D4FA',
    },
    '@media (max-width: 600px)': {
        width: '80%', // Reduce button width for smaller screens
        marginTop: '1rem', // Add spacing above button
    },
});

const EventList = () => {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleRegisterClick = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedEvent(null);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5, overflowX: 'hidden' }}>
            <Title variant="h4" gutterBottom>
                Upcoming Events
            </Title>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                    gap: 3,
                    '@media (max-width: 600px)': {
                        gridTemplateColumns: '1fr', // Single column for small screens
                        gap: 2,
                    },
                }}
            >
                {events.map((event) => (
                    <EventCard key={event.id}>
                        <CardContent sx={{ flex: 1, textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {event.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {event.date} at {event.location}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {event.info}
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <RegisterButton
                                    onClick={() => handleRegisterClick(event)}
                                    variant="contained"
                                >
                                    Register Now
                                </RegisterButton>
                            </Box>
                        </CardContent>
                        <EventImage src={event.image} alt={event.title} />
                    </EventCard>
                ))}
            </Box>

            {/* Registration Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register for {selectedEvent?.title}</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        type="email"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            alert(`You have registered for ${selectedEvent?.title}!`);
                            handleClose();
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default EventList;
