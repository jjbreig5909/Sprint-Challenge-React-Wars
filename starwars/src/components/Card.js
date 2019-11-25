import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StarWarsCard = () => {
    return (
        <Card />
            

    );
};
export default StarWarsCard;