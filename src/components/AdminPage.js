import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
    Typography,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
    Box,
    Container,
    Card,
    CardContent,
} from "@mui/material";
import { getPets, addPet, deletePet } from "../services/api";

// Reuse styled components for consistency
const Title = styled(Typography)({
    fontFamily: "'Roboto', sans-serif",
    fontSize: "2.5rem",
    color: "black",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    textDecoration: "underline dashed black",
});

const ActionButton = styled(Button)({
    fontFamily: "'Roboto', sans-serif",
    color: "black",
    border: "2px dashed black",
    "&:hover": {
        borderColor: "black",
    },
});

// Pastel-themed buttons
const PastelGreenButton = styled(ActionButton)({
    backgroundColor: "#A8E6CF",
    "&:hover": {
        backgroundColor: "#81C784",
    },
});

const PastelBlueButton = styled(ActionButton)({
    backgroundColor: "#B3E5FC",
    "&:hover": {
        backgroundColor: "#81D4FA",
    },
});

const AdminPage = () => {
    const [pets, setPets] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        size: "",
        healthStatus: "",
        description: "",
        available: true,
        isFeatured: false,
    });
    const [image, setImage] = useState(null);

    // Hardcoded events
    const [events, setEvents] = useState([
        { id: 1, title: "Adoption Day", date: "2024-07-15", location: "Shelter Grounds" },
        { id: 2, title: "Fundraising Gala", date: "2024-08-10", location: "Community Hall" },
    ]);

    const [eventFormData, setEventFormData] = useState({
        title: "",
        date: "",
        location: "",
    });

    const [editEventId, setEditEventId] = useState(null); // State to track which event is being edited

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            const data = await getPets();
            setPets(data);
        } catch (error) {
            console.error("Error fetching pets:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPet(formData, image);
            fetchPets();
            setFormData({
                name: "",
                age: "",
                size: "",
                healthStatus: "",
                description: "",
                available: true,
                isFeatured: false,
            });
            setImage(null);
        } catch (error) {
            console.error("Error adding pet:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletePet(id);
            fetchPets();
        } catch (error) {
            console.error("Error deleting pet:", error);
        }
    };

    const handleEventInputChange = (e) => {
        const { name, value } = e.target;
        setEventFormData({
            ...eventFormData,
            [name]: value,
        });
    };

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editEventId) {
                // Update existing event
                setEvents(events.map((event) =>
                    event.id === editEventId
                        ? { ...event, ...eventFormData }
                        : event
                ));
            } else {
                // Add new event
                setEvents([...events, { ...eventFormData, id: events.length + 1 }]);
            }
            setEventFormData({ title: "", date: "", location: "" });
            setEditEventId(null); // Reset edit state
        } catch (error) {
            console.error("Error adding or editing event:", error);
        }
    };

    const handleDeleteEvent = (id) => {
        try {
            setEvents(events.filter((event) => event.id !== id));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    const handleEditEvent = (event) => {
        setEventFormData({
            title: event.title,
            date: event.date,
            location: event.location,
        });
        setEditEventId(event.id); // Set the event as being edited
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Title variant="h3" gutterBottom>
                Admin Dashboard
            </Title>

            {/* Pet Management Section */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" gutterBottom>
                    Add a New Pet
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Size"
                                name="size"
                                value={formData.size}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Health Status"
                                name="healthStatus"
                                value={formData.healthStatus}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                variant="outlined"
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.available}
                                        onChange={handleInputChange}
                                        name="available"
                                    />
                                }
                                label="Available"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.isFeatured}
                                        onChange={handleInputChange}
                                        name="isFeatured"
                                    />
                                }
                                label="Featured"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input type="file" onChange={handleImageChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <PastelGreenButton type="submit" fullWidth>
                                {editEventId ? "Edit Event" : "Add Pet"}
                            </PastelGreenButton>
                        </Grid>
                    </Grid>
                </form>
            </Box>

            <Typography variant="h5" gutterBottom>
                Existing Pets
            </Typography>
            <Grid container spacing={3}>
                {pets.map((pet) => (
                    <Grid item xs={12} sm={6} md={4} key={pet._id}>
                        <Box
                            sx={{
                                p: 2,
                                border: "2px dashed black",
                                borderRadius: "8px",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h6">{pet.name}</Typography>
                            <Typography variant="body1">{pet.size}</Typography>
                            <PastelBlueButton
                                onClick={() => handleDelete(pet._id)}
                                sx={{ mt: 2 }}
                                fullWidth
                            >
                                Delete
                            </PastelBlueButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Event Management Section */}
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5" gutterBottom>
                    Add or Edit Event
                </Typography>
                <form onSubmit={handleEventSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Event Title"
                                name="title"
                                value={eventFormData.title}
                                onChange={handleEventInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Date"
                                name="date"
                                type="date"
                                value={eventFormData.date}
                                onChange={handleEventInputChange}
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Location"
                                name="location"
                                value={eventFormData.location}
                                onChange={handleEventInputChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PastelGreenButton type="submit" fullWidth>
                                {editEventId ? "Edit Event" : "Add Event"}
                            </PastelGreenButton>
                        </Grid>
                    </Grid>
                </form>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
                Existing Events
            </Typography>

            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item xs={12} sm={6} key={event.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{event.title}</Typography>
                                <Typography>{event.date}</Typography>
                                <Typography>{event.location}</Typography>
                                <PastelBlueButton
                                    onClick={() => handleEditEvent(event)}
                                    sx={{ mt: 2 }}
                                    fullWidth
                                >
                                    Edit Event
                                </PastelBlueButton>
                                <PastelBlueButton
                                    onClick={() => handleDeleteEvent(event.id)}
                                    sx={{ mt: 2 }}
                                    fullWidth
                                >
                                    Delete Event
                                </PastelBlueButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AdminPage;
