import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styles for a sketchy, black-and-white theme
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

const PastelBlueButton = styled(ActionButton)({
    backgroundColor: "#B3E5FC",
    "&:hover": {
        backgroundColor: "#81D4FA",
    },
});

const DonationForm = () => {
    const [donation, setDonation] = useState({
        amount: "",
        name: "",
        email: "",
        frequency: "one-time",
        method: "credit-card",
    });
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonation({ ...donation, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true); // Open the dialog on submit
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRedirect = () => {
        setOpen(false);
        switch (donation.method) {
            case "credit-card":
                window.location.href = "https://www.example.com/credit-card"; // Replace with the actual URL
                break;
            case "paypal":
                window.location.href = "https://www.paypal.com";
                break;
            case "bank-transfer":
                window.location.href = "https://www.example.com/bank-transfer"; // Replace with the actual URL
                break;
            default:
                break;
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Title variant="h4" gutterBottom align="center">
                Make a Donation
            </Title>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Box mb={2}>
                    <TextField
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={donation.name}
                        onChange={handleChange}
                        required
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
                        value={donation.email}
                        onChange={handleChange}
                        required
                    />
                </Box>

                {/* Donation Amount Field */}
                <Box mb={2}>
                    <TextField
                        label="Donation Amount"
                        name="amount"
                        type="number"
                        variant="outlined"
                        fullWidth
                        value={donation.amount}
                        onChange={handleChange}
                        required
                    />
                </Box>

                {/* Donation Frequency */}
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Donation Frequency</InputLabel>
                        <Select
                            name="frequency"
                            value={donation.frequency}
                            onChange={handleChange}
                            label="Donation Frequency"
                            required
                        >
                            <MenuItem value="one-time">One-Time</MenuItem>
                            <MenuItem value="monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Donation Method */}
                <Box mb={2}>
                    <FormControl component="fieldset">
                        <Typography variant="subtitle1" gutterBottom>
                            Select Donation Method:
                        </Typography>
                        <RadioGroup
                            name="method"
                            value={donation.method}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="credit-card"
                                control={<Radio />}
                                label="Credit Card"
                            />
                            <FormControlLabel
                                value="paypal"
                                control={<Radio />}
                                label="PayPal"
                            />
                            <FormControlLabel
                                value="bank-transfer"
                                control={<Radio />}
                                label="Bank Transfer"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {/* Submit Button */}
                <Box>
                    <PastelBlueButton
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Donate
                    </PastelBlueButton>
                </Box>
            </form>

            {/* Dialog for Confirmation */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Donation</DialogTitle>
                <DialogContent>
                    <Typography>
                        Thank you, {donation.name}! You selected a{" "}
                        {donation.frequency} donation of ${donation.amount} via{" "}
                        {donation.method === "credit-card"
                            ? "Credit Card"
                            : donation.method === "paypal"
                            ? "PayPal"
                            : "Bank Transfer"}
                        . Click "Proceed" to complete the donation.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleRedirect} color="primary">
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default DonationForm;
