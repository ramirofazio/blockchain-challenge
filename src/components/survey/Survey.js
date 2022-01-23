import React, { useState } from 'react';
import surveyjson from '../survey-sample.json'
import Trivia from '../trivia/Trivia.js'
import { Box, Button } from '@material-ui/core';

function Survey() {

    const [start, setStart] = useState(false)

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>{surveyjson.title}</h1>
            <img src={surveyjson.image} width="25%" />
            <Button
                variant='outlined'
                onClick={() => setStart(!start)} >Start!</Button>
            {start ? <Trivia /> : null}
        </Box>
    );
}

export default Survey;