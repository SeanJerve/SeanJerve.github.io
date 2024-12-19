import React, { useState } from "react";
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Search Bar and Filter Elements
const SearchBar = styled(TextField)(({
    marginBottom: "1rem",
    marginTop: "1rem",
    width: "150px", // Smaller width for search bar
    borderRadius: "5px",
    backgroundColor: "white",
}));

const FilterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "0.5rem", // Reduced gap between filters
    marginTop: "1rem", // Added margin on top
    alignItems: "center", // Align elements in the center vertically
    flexWrap: "nowrap", // Prevent wrapping to keep everything on the same line
    justifyContent: "flex-start", // Align items to the left
    borderBottom: "2px dashed black", // Dashed border at the bottom
    paddingBottom: "0", // Padding for some spacing below the content
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column", // Stack filters vertically on small screens
        alignItems: "stretch", // Stretch the items to fill the width
    },
}));

const StyledSelect = styled(Select)(() => ({
    minHeight: "20px",
    minWidth: "80px", // Set minimum width for select
    backgroundColor: "white",
    "& .MuiInputBase-root": {
        borderRadius: "5px", // Border radius for inputs inside select
    },
}));

const ApplyButton = styled(Button)(({ theme }) => ({
    maxHeight: "50px",
    minHeight: "20px",
    backgroundColor: "#FFEB3B", // Yellow background
    color: "black",
    border: "2px dashed black",
    "&:hover": {
        backgroundColor: "#FFDA00", // Slightly darker yellow for hover
    },
    width: "150px", // Set fixed width for the button
    padding: "8px", // Reduced padding for compactness
    marginLeft: "31rem", // Add some space between the button and other elements
    [theme.breakpoints.down("sm")]: {
        marginLeft: "0", // Remove margin on small screens
        width: "100%", // Make the button full width on small screens
    },
}));

const FilterBar = ({ onSearch, onFilter }) => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        type: "",
        size: "",
    });

    const handleInputChange = (e) => {
        setSearch(e.target.value); // Update search state
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value }); // Update filter state
    };

    const handleApply = () => {
        if (onSearch && onFilter) {
            onSearch(search); // Trigger the search callback
            onFilter(filters); // Trigger the filter callback
        } else {
            console.error("onSearch or onFilter is not passed as a prop.");
        }
    };

    return (
        <Box>
            {/* FilterBar (horizontal layout) */}
            <FilterContainer>
                {/* Search Bar */}
                <SearchBar
                    placeholder="Search..."
                    variant="outlined"
                    value={search}
                    onChange={handleInputChange}
                />

                {/* Filters */}
                <FormControl variant="outlined" size="small">
                    <InputLabel>Type</InputLabel>
                    <StyledSelect name="type" value={filters.type} onChange={handleFilterChange} label="Type">
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="dog">Dog</MenuItem>
                        <MenuItem value="cat">Cat</MenuItem>
                        <MenuItem value="hamster">Hamster</MenuItem>
                        <MenuItem value="bird">Bird</MenuItem>
                        <MenuItem value="turtle">Turtle</MenuItem>
                    </StyledSelect>
                </FormControl>

                <FormControl variant="outlined" size="small">
                    <InputLabel>Size</InputLabel>
                    <StyledSelect name="size" value={filters.size} onChange={handleFilterChange} label="Size">
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="small">Small</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="large">Large</MenuItem>
                    </StyledSelect>
                </FormControl>

                {/* Apply Button */}
                <ApplyButton onClick={handleApply}>Apply Filters</ApplyButton>
            </FilterContainer>
        </Box>
    );
};

export default FilterBar;
