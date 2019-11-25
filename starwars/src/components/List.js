import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./Card";
import styled from "styled-components";

export default function StarWarsList () {


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("Sorry, didn't work", error);
            });
    }, []);

    return (
        <div>
        </div>
    );

}