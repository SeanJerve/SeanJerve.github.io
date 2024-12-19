import React, { useState } from "react";
import PetList from "../components/PetList";
import AdoptionForm from "../components/AdoptionForm";
import FilterBar from "../components/FilterBar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const AdoptionPageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "auto",
    padding: "0 12rem",
    maxWidth: "2000px",
    gap: "1rem",
    height: "100vh", // Prevent page scroll
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column", // Stack layout on smaller screens
        padding: "0 3rem", // Adjusted padding for medium screens
    },
    [theme.breakpoints.down("md")]: {
        padding: "0 1rem", // Further reduce padding on smaller screens
    },
    [theme.breakpoints.down("sm")]: {
        padding: "0.5rem", // Even smaller padding on extra small screens
    },
}));

const PetListContainer = styled(Box)(() => ({
    flex: 1,

    Height: "100%",
    overflow: "auto", // Scrollable section for pets
    paddingRight: "1rem",
    paddingBottom: "2rem",
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center the pet list vertically and horizontally
}));

const FixedFormContainer = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "2rem",
    flexShrink: 0,
    width: "400px", // Default width for larger screens
    [theme.breakpoints.down("lg")]: {
        width: "100%", // Full width on medium and smaller screens
        position: "relative", // Remove sticky positioning
        top: "0", // Remove sticky top positioning
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%", // Full width on small screens
        top: "0", // Ensure form stays in the flow on very small screens
    },
}));

const AdoptionPage = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        type: "",
        age: "",
        size: "",
        availability: "",
    });

    const handleSearch = (value) => setSearch(value);
    const handleFilter = (filterValues) => setFilters(filterValues);

    return (
        <AdoptionPageContainer>
            {/* Left Section: FilterBar and PetList */}
            <Box sx={{ flex: 1 }}>
                <FilterBar onSearch={handleSearch} onFilter={handleFilter} />
                <PetListContainer>
                    <PetList search={search} filters={filters} />
                </PetListContainer>
            </Box>

            {/* Fixed Adoption Form on the Right */}
            <FixedFormContainer>
                <AdoptionForm />
            </FixedFormContainer>
        </AdoptionPageContainer>
    );
};

export default AdoptionPage;
