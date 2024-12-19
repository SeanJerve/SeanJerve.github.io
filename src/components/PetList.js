import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    fontFamily: "'Roboto', sans-serif",
    marginTop: '2rem', 
    display: 'flex',
    justifyContent: 'flex-start',
});

const Title = styled('h2')({
    fontFamily: "'Roboto', sans-serif",
    fontSize: '2rem',
    color: 'black',
    marginBottom: '2rem',
    fontWeight: 'bold',
});

const Row = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'flex-start',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '2rem', // Extra space at the bottom
    '@media (max-width: 600px)': {
        flexDirection: 'column', // Stack items vertically on small screens
        alignItems: 'flex', // Center items horizontally
    },
});

const PetList = ({ search, filters }) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/pets")
            .then((response) => {
                let filteredPets = response.data;
    
                // Apply search filter
                if (search) {
                    filteredPets = filteredPets.filter((pet) =>
                        pet.name.toLowerCase().includes(search.toLowerCase())
                    );
                }
    
                // Normalize the values for type and size
                filteredPets = filteredPets.filter((pet) => {
                    const petType = pet.type?.trim().toLowerCase();
                    const petSize = pet.size?.trim().toLowerCase();
                    const filterType = filters.type?.trim().toLowerCase();
                    const filterSize = filters.size?.trim().toLowerCase();
    
                    return (
                        (filterType ? petType === filterType : true) &&
                        (filterSize ? petSize === filterSize : true)
                    );
                });
    
                console.log("Filtered pets after applying filters and search:", filteredPets);
                setPets(filteredPets);
            })
            .catch((error) => console.error("Error fetching pets:", error));
    }, [search, filters]);
    

    return (
        <Container>
            <div>
                <Title>Available Pets for Adoption</Title>
                <Row>
                    {pets.length > 0 ? (
                        pets.map((pet) => (
                            <div key={pet._id}>
                                <PetCard pet={pet} /> {/* Pass pet details to PetCard */}
                            </div>
                        ))
                    ) : (
                        <p>No pets match your criteria.</p>
                    )}
                </Row>
            </div>
        </Container>
    );
};

export default PetList;
