import { Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import surveyjson from '../survey-sample.json';


function Trivias() {
    const [counter, setCounter] = useState(0);

    const trivias = surveyjson.questions
    if (counter === trivias.length) return (
        <Link to='/results'>
            <Button variant='outlined'>See Results</Button>
        </Link>
    )
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <h2>
                    {trivias[counter].text}
                </h2>
                <img src={trivias[counter].image} alt='' />
                {
                    trivias[counter].options.map((opt, index) => {
                        return (
                            <Box key={index}>
                                <FormControlLabel

                                    control={
                                        <Checkbox />
                                    }
                                    label={opt.text} />
                            </Box>
                        )
                    })}
                {setTimeout(() => {
                    setCounter(counter + 1)
                }, trivias[counter].lifetimeSeconds * 1000)}
            </Box>
        </Box>
    );
}

export default Trivias;