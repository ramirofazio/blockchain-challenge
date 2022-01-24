import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import surveyjson from '../survey-sample.json';



function Results() {

    const results = useSelector((state) => state.results);
    const trivias = surveyjson.questions


    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: "100vw",
                height: "50vh",
                marginBottom: "-10rem",
            }}>
                {/* <p>{results[0][0]}</p>
            <p>{results[0][1]}</p>
        <p>{results[0][2]}</p> */}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "15vw",
                    height: "25vh",
                    borderRadius: "2.5rem",
                    padding: "2rem",
                    backgroundColor: "#ffffff40",
                }}>
                    <h2>{trivias[0].text}</h2>
                    <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>{`Your Answer: ${"hola"}`}</h3>
                    <h4 style={{
                        color: "#555"
                    }}>{`Answer: ${trivias[0].answer}`}</h4>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "15vw",
                    height: "25vh",
                    borderRadius: "2.5rem",
                    padding: "2rem",
                    backgroundColor: "#ffffff40",
                }}>
                    <h2>{trivias[1].text}</h2>
                    <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>{`Your Answer: ${"hola"}`}</h3>
                    <h4 style={{
                        color: "#555"
                    }}>{`Answer: ${trivias[1].answer}`}</h4>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "15vw",
                    height: "25vh",
                    borderRadius: "2.5rem",
                    padding: "2rem",
                    backgroundColor: "#ffffff40",
                }}>
                    <h2>{trivias[2].text}</h2>
                    <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}> {`Your Answer: ${"hola"}`}</h3>
                    <h4 style={{
                        color: "#555"
                    }}>{`Answer: ${trivias[2].answer}`}</h4>
                </Box>
            </Box >

            <Button style={{
                marginTop: "10rem",
                width: "15rem",
                height: "3rem",
                border: "2px solid #000",
                borderRadius: "2rem",
                fontSize: "1.5rem"
            }}>
                Submit Quiz!
            </Button>

        </Box >
    );
}

export default Results;