import React from 'react';
import surveyjson from '../survey-sample.json'
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Survey() {

    return (
        <Box sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "65vh"
        }}>
            <Box sx={{
                backgroundColor: "#ffffff40",
                display: "flex",
                flexDirection: "column",
                borderRadius: "3rem",
                alignItems: "center",
                padding: "2rem",
                width: "25vw"
            }}>

                <h1 style={{ fontSize: "5vh", textAlign: "center" }}>{surveyjson.title}</h1>
                <img src={surveyjson.image} width="200vw" style={{ marginBottom: "2rem" }} />
                <Link to="/trivia" style={{ textDecoration: "none" }}>
                    <Button style={{ width: "10rem", border: "2px solid #000", borderRadius: "2rem" }}>Start!</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Survey;