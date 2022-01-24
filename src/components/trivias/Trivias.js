import React, { useState } from 'react';
import { Link } from "react-router-dom"

import { Box, Button } from '@material-ui/core';
import surveyjson from '../survey-sample.json';
import { useDispatch } from 'react-redux';
import { triviaFinished } from '../../redux/actions/index.js';


function Trivias() {
    const dispatch = useDispatch()

    const trivias = surveyjson.questions

    const [counter, setCounter] = useState(0);
    const [results, setRestults] = useState({
        0: null,
        1: null,
        2: null
    })

    const handleOnChange = (opt) => {
        if (counter === 0) {
            setRestults({
                ...results,
                0: opt,
            })
        } else if (counter === 1) {
            setRestults({
                ...results,
                1: opt,
            })
        } else if (counter === 2) {
            setRestults({
                ...results,
                2: opt,
            })
        }
    }

    if (counter === trivias.length) {
        const newResults = [results]
        dispatch(triviaFinished(newResults))

        return (
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
    }

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


            }}>

                <h2 style={{ fontSize: "5vh", textAlign: "center" }}>
                    {trivias[counter].text}
                </h2>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "3rem",

                }}>
                    <img src={trivias[counter].image} alt='' width="250vw" height="250vw" style={{
                        display: "flex",
                        borderRadius: "2rem",
                        objectFit: "cover",
                    }} />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "-1rem"
                    }}>
                        {
                            trivias[counter].options.map((opt, index) => {
                                return (
                                    <Button
                                        key={index}
                                        style={{
                                            border: "1px solid #000",
                                            marginTop: "1rem"
                                        }}
                                        onClick={() => handleOnChange(opt.text)}
                                    >
                                        {opt.text}
                                    </Button>

                                )
                            })}
                    </Box>
                </Box>
            </Box>
            {
                setTimeout(() => {
                    setCounter(counter + 1)

                }, trivias[counter].lifetimeSeconds * 1000)
            }
        </Box >
    );
}

export default Trivias;