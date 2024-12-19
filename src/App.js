import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdoptionPage from "./pages/AdoptionPage";
import DonationPage from "./pages/DonationPage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";  // Import the AboutUsPage
import VolunteerPage from "./pages/VolunteerPage";  // Import the VolunteerPage
import AdminPage from "./components/AdminPage";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/adoption" element={<AdoptionPage />} />
                <Route path="/donation" element={<DonationPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/about" element={<AboutUsPage />} />  {/* Update the route to AboutUsPage */}
                <Route path="/volunteer" element={<VolunteerPage />} />  {/* Update the route to VolunteerPage */}
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
