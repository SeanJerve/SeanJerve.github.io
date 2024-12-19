import React from "react";
import { styled } from '@mui/material/styles';

const CardContainer = styled('div')({
    width: '15rem',
    border: '2px solid black', 
    borderRadius: '10px',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)', 
    fontFamily: "'Roboto', sans-serif", 
    backgroundColor: 'white',
    marginBottom: '1.5rem',
    margin: 'auto',
});

const CardImg = styled('img')({
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
});

const CardBody = styled('div')({
    padding: '1rem',
});

const CardTitle = styled('h5')({
    fontFamily: "'Roboto', sans-serif", 
    fontSize: '1.2rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
});

const CardText = styled('p')({
    fontFamily: "'Roboto', sans-serif", 
    fontSize: '1rem',
    color: 'black',
    marginBottom: '0.5rem',
});

const PetCard = ({ pet }) => {
    return (
        <CardContainer>
            <CardImg src={pet.photoUrl || "https://via.placeholder.com/150"} alt={pet.name} />
            <CardBody>
                <CardTitle>{pet.name}</CardTitle>
                <CardText>{pet.description}</CardText>
                <CardText><strong>Age(months):</strong> {pet.age}</CardText>
                <CardText><strong>Size:</strong> {pet.size}</CardText>
                <CardText><strong>Type:</strong> {pet.type || "Not Specified"}</CardText>
            </CardBody>
        </CardContainer>
    );
};

export default PetCard;
