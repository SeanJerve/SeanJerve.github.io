import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";

// Custom styles for the navbar
const NavbarContainer = styled("nav")({
    backgroundColor: "white",
    boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
    borderTop: "4px solid black", // Keep the top border
    borderBottom: "4px solid black", // Keep the bottom border
    borderLeft: "none", // Remove the left border
    borderRight: "none", // Remove the right border
    fontFamily: "'Roboto', sans-serif",
    marginTop: "20px",
    padding: "5px 0",
    width: "100vw",
    maxWidth: "100vw",
});

const NavbarBrand = styled(Link)({
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "& img": {
        height: "70px",
        width: "auto",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
});

const NavItem = styled(Link)({
    margin: "0 10px",
    "& img": {
        width: "100px",
        height: "50px",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)", // Slight zoom on hover
        },
    },
});

// Styled Hamburger Icon
const HamburgerIcon = styled("button")({
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "30px",
    "&:focus": {
        outline: "none",
    },
    "@media (max-width: 768px)": {
        display: "block", // Show the hamburger on small screens
    },
});

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <NavbarContainer className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                {/* Navbar Brand with Logo */}
                <NavbarBrand to="/">
                    <img src="/assets/mphlogo.png" alt="Malou Pet Haven" />
                </NavbarBrand>

                {/* Hamburger Icon */}
                <HamburgerIcon onClick={toggleNavbar}>
                    &#9776; {/* Hamburger icon */}
                </HamburgerIcon>

                <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        {/* Home */}
                        <li className="nav-item">
                            <NavItem to="/">
                                <img
                                    src="/assets/homebutton.png"
                                    alt="Home"
                                    title="Home"
                                />
                            </NavItem>
                        </li>

                        {/* Adoption */}
                        <li className="nav-item">
                            <NavItem to="/adoption">
                                <img
                                    src="/assets/adoptbutton.png"
                                    alt="Adoption"
                                    title="Adoption"
                                />
                            </NavItem>
                        </li>

                        {/* Donation */}
                        <li className="nav-item">
                            <NavItem to="/donation">
                                <img
                                    src="/assets/donatebutton.png"
                                    alt="Donation"
                                    title="Donation"
                                />
                            </NavItem>
                        </li>

                        {/* Events */}
                        <li className="nav-item">
                            <NavItem to="/events">
                                <img
                                    src="/assets/eventsbutton.png"
                                    alt="Events"
                                    title="Events"
                                />
                            </NavItem>
                        </li>

                        {/* About */}
                        <li className="nav-item">
                            <NavItem to="/about">
                                <img
                                    src="/assets/aboutbutton.png"
                                    alt="About"
                                    title="About"
                                />
                            </NavItem>
                        </li>
                    </ul>

                    {/* Volunteer Button */}
                    <NavItem to="/volunteer">
                        <img
                            src="/assets/volunteerbutton.png"
                            alt="Volunteer"
                            title="Volunteer"
                            style={{
                                width: "200px",
                                height: "50px",
                            }}
                        />
                    </NavItem>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
