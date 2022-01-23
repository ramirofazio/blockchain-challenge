import React from 'react';
import surveyjson from '../survey-sample.json'
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Survey() {


    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>{surveyjson.title}</h1>
            <img src={surveyjson.image} width="25%" />
            <Link to="/trivia" style={{ textDecoration: "none" }}>
                <Button variant='outlined'>Start!</Button>
            </Link>
        </Box>
    );
}

export default Survey;