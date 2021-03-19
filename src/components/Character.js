// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    color: black;
    border: solid 5px;
    background: white;
    margin: 2% auto;
    width: 70%;
    box-sizing: border-box;

    h1 {
        margin: 1%;
        font-family: 'starjedi';
    }

    p {
        margin: 2px;
        padding: 1% 2%;
        text-align: left;
        display: block;
    }
`

const Character = function({character}) {
    const [currCharacter, setCurrCharacter] = useState(null)
    
    const fixedAttributes = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'films']

    function showDetails(character) {
        currCharacter === null ? setCurrCharacter(character) : setCurrCharacter(null)
    }

    return (
    <StyledCharacter onClick = {() => {showDetails(character)}}>
        <h1>{character["name"]}</h1>
        {currCharacter && fixedAttributes.map(attribute => {
            return <p key = {attribute}>{`${attribute}: ${character[attribute]}`}</p>
        })}
    </StyledCharacter>
    )
}

export default Character
