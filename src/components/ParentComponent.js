import React, { useState } from "react";
import FilterBar from "./FilterBar";
import PetList from "./PetList";

const ParentComponent = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        type: "",
        size: "",
    });

    // Handle search changes
    const handleSearch = (newSearch) => {
        setSearch(newSearch); // Update search state
    };

    // Handle filter changes
    const handleFilter = (newFilters) => {
        setFilters(newFilters); // Update filters state
    };

    return (
        <div>
            {/* Pass search and filters to FilterBar */}
            <FilterBar onSearch={handleSearch} onFilter={handleFilter} />

            {/* Pass search and filters as props to PetList */}
            <PetList search={search} filters={filters} />
        </div>
    );
};

export default ParentComponent;
