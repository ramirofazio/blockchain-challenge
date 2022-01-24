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
                <Button style={{ width: "20vw", height: "15vh", fontSize: "2rem", color: "#000", border: "2px solid #000", borderRadius: "5rem" }}>See Results</Button>
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
            justifyContent: "center",

        }}>
            <Box sx={{
                backgroundColor: "#ffffff40",
                borderRadius: "3rem",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50vw",
                height: "50vh",
                padding: "2.5rem",

                outline: "1px solid red"

            }}>

                <h2 style={{ fontSize: "5vh", textAlign: "center" }}>
                    {trivias[counter].text}
                </h2>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",

                    outline: "1px solid blue"
                }}>
                    <img src={trivias[counter].image} alt='' width="250vw" height="250vw" style={{
                        display: "flex",
                        borderRadius: "2rem",
                        objectFit: "cover",
                        marginBottom: "1.5rem",
                        justifyContent: "space-around"
                    }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {
                            trivias[counter].options.map((opt, index) => {
                                return (
                                    <Box key={index} sx={{ marginBottom: "2rem" }} >
                                        <FormControlLabel
                                            control={
                                                <Checkbox />
                                            }
                                            label={opt.text}
                                        />
                                    </Box>
                                )
                            })}
                    </Box>
                </Box>
            </Box>
            {setTimeout(() => {
                setCounter(counter + 1)
            }, trivias[counter].lifetimeSeconds * 1000)}
        </Box>
    );
}

export default Trivias;