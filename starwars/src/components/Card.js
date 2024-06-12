import React from "react";
import styled from "styled-components";




const Card = styled.div`
  background: gray;
  opacity: .7;
  color: black;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto 20px auto;
`;

const Name = styled.h2`
    color: black;
    font-weight: 800;

`;

const InfoSection = styled.div`
    display: flex;
    width: 90%;
    margin: 0px auto 10px auto;
    justify-content: space-between;
    opacity: 1;

`;

const Info = styled.div`
    font-size: 18px; 
    font-weight: 600;
    color: black;
    opacity: 1;

`;

const StarWarsCard = ({character}) => {
    return (
        <Card>
            <Name>{character.name}</Name>
            <InfoSection>
                <Info>Birth Year: {character.birth_year}</Info>
                <Info>Mass: {character.mass}</Info>
            </InfoSection>
            <InfoSection>
                <Info>Eye Color: {character.eye_color}</Info>
                <Info>Skin Color: {character.skin_color}</Info>
            </InfoSection>

        </Card>
            

    );
};
export default StarWarsCard;