import React from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';



function Results() {

    const results = useSelector((state) => state.results);
    console.log(results[0][0])

    return (
        <Box sx={{ width: "100%", outline: "1px solid red" }}>
            <p>{results[0][0]}</p>
            <p>{results[0][1]}</p>
            <p>{results[0][2]}</p>
        </Box>
    );
}

export default Results;