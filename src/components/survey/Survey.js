import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Button } from '@material-ui/core';

import surveyjson from '../survey-sample.json'

function Survey() {

    const walletHomeText = useSelector((state) => state.walletHomeText)

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

                {walletHomeText === "Wallet Conexion Successfully"
                    ?
                    <Link to="/trivia" style={{ textDecoration: "none" }}>
                        <Button style={{ width: "10rem", border: "2px solid #000", borderRadius: "2rem", fontSize: "1.5rem" }}>Start!</Button>
                    </Link>
                    :
                    null}

            </Box>
        </Box>
    );
}

export default Survey;