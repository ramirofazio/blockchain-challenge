import React, { useState } from 'react';
import { Link } from "react-router-dom"

import { Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import surveyjson from '../survey-sample.json';
import { height } from '@mui/system';


function Trivias() {

    const [counter, setCounter] = useState(0);

    const trivias = surveyjson.questions

    if (counter === trivias.length) return (
        <Box sx={{
            display: "flex",
            width: "100vw",
            height: "90vh",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Link to='/results' style={{ textDecoration: "none" }}>
                <Button variant='outlined' style={{ width: "20vw", height: "15vh", fontSize: "2rem" }}>See Results</Button>
            </Link>
        </Box>
    )

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh",
            width: "100vw",
            justifyContent: "center"
        }}>
            <Box sx={{
                backgroundColor: "#ffffff40",
                borderRadius: "3rem",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50vw",
                height: "50vh"
            }}>

                <h2 style={{ fontSize: "5vh", textAlign: "center" }}>
                    {trivias[counter].text}
                </h2>
                <img src={trivias[counter].image} alt='' width="250vw" height="250vw" style={{
                    borderRadius: "2rem",
                    objectFit: "cover",
                    marginBottom: "1.5rem"
                }} />
                <Box sx={{
                    display: "flex"
                }}>
                    {
                        trivias[counter].options.map((opt, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox />
                                    }
                                    label={opt.text}
                                />
                            )
                        })}
                </Box>
            </Box>
            {setTimeout(() => {
                setCounter(counter + 1)
            }, trivias[counter].lifetimeSeconds * 1000)}
        </Box>
    );
}

export default Trivias;