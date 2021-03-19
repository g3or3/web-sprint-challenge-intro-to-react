// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    color: #2e557c;
    border: solid 5px;
    background: white;
    margin: 2% auto;
    width: 75%;
    box-sizing: border-box;

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
    }

    div {
        padding-left: 2%;
        text-align: left;
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
                <div>
                <span>{attribute}: </span>
                <p key = {attribute}>{character[attribute]}</p>
                </div>
            )
        })}
    </StyledCharacter>
    )
}

export default Character
