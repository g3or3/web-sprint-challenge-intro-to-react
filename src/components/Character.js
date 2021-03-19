// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    color: #2e557c;
    border: solid 5px;
    background: #fffdfa;
    margin: 2% auto;
    width: 40%;
    padding: 2% 0 2%;

    h1 {
        margin: 3%;
        font-family: 'starjedi';
    }

    p {
        display: inline-block;
        margin: 5px;
    }

    span {
        font-weight: bold;
        text-transform: capitalize;
    }

    div {
        text-align: center;
        color: #443e3e;
    }
`

const Character = function({character}) {
    const [currCharacter, setCurrCharacter] = useState(null)
    
    const fixedAttributes = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender']

    function showDetails(character) {
        currCharacter === null ? setCurrCharacter(character) : setCurrCharacter(null)
    }

    return (
    <StyledCharacter onClick = {() => {showDetails(character)}}>
        <h1>{character["name"]}</h1>
        {currCharacter && fixedAttributes.map(attribute => {
            return (
                <div key = {attribute}>
                <span>{attribute}: </span>
                <p>{character[attribute]}</p>
                </div>
            )
        })}
    </StyledCharacter>
    )
}

export default Character
