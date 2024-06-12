import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./Card";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ButtonContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const PageButtonNext = styled.button`
    width: 100px;
    height: 50px;
    margin: 5px 5px;
    background: black;
    color: white;
`;

const PageButtonPrevious = styled.button`
    width: 100px;
    height: 50px;
    margin: 5px 5px;
    background: black;
    color: white;
`;

export default function StarWarsList () {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState('https://swapi.co/api/people');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');

    function getCharactersNext () {
        setPage(nextPage);
    };

    function getCharactersPrevious() {
        if(previousPage===null){
            alert("Can't go back any more!")
        }
        else{
        setPage(previousPage);
        }
    };


    useEffect(() => {
        axios
            .get(page)
            .then(response => {
                // console.log(response);
                const characterList= response.data.results;
                setNextPage(response.data.next);
                setPreviousPage (response.data.previous);
                setCharacters(characterList);
            })
            .catch(error => {
                console.log("Sorry, didn't work", error);
            });
    }, [page]);

    return (

        <Container>
            {characters.map(character => {
                return <StarWarsCard character = {character} key={character.id} />;
            })}

            <ButtonContainer>
                <PageButtonPrevious onClick={getCharactersPrevious}>Previous Page</PageButtonPrevious>
                <PageButtonNext onClick={getCharactersNext}>Next Page</PageButtonNext>
            </ButtonContainer>
        </Container>
        


        );
    
}