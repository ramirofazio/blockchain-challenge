import React from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import surveyjson from '../survey-sample.json';



function Results() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const results = useSelector((state) => state.results);
    const trivias = surveyjson.questions

    if (!isMobile) {

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
                        <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>{`Your Answer: ${results[0][0]}`}</h3>
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
                        <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>{`Your Answer: ${results[0][1]}`}</h3>
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
                        <h3 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}> {`Your Answer: ${results[0][2]}`}</h3>
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
    } else {

        return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "90vh",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3rem"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    width: "100vw",
                    marginBottom: "-15rem",
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "70vw",
                        height: "10vh",
                        borderRadius: "2.5rem",
                        padding: "1rem",
                        backgroundColor: "#ffffff40",
                        marginBottom: "1rem"
                    }}>
                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            marginTop: "-1rem",
                        }}>
                            <h2 style={{ fontSize: "1.2rem", borderBottom: "2px solid #000" }}>{trivias[0].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginRight: "3rem"
                            }}>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>Your Answer</h3>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>{results[0][0]}</h3>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.2rem"
                                }}>Answer</h4>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.5rem"
                                }}>{trivias[0].answer}</h4>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "70vw",
                        height: "10vh",
                        borderRadius: "2.5rem",
                        padding: "1rem",
                        backgroundColor: "#ffffff40",
                        marginBottom: "1rem"
                    }}>
                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            marginTop: "-1rem",
                        }}>
                            <h2 style={{ fontSize: "1.2rem", borderBottom: "2px solid #000" }}>{trivias[1].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginRight: "3rem"
                            }}>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>Your Answer</h3>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>{results[0][1]}</h3>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.2rem"
                                }}>Answer</h4>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.5rem"
                                }}>{trivias[1].answer}</h4>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "70vw",
                        height: "10vh",
                        borderRadius: "2.5rem",
                        padding: "1rem",
                        backgroundColor: "#ffffff40",
                        marginBottom: "1rem"
                    }}>
                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            marginTop: "-1rem",
                        }}>
                            <h2 style={{ fontSize: "1.2rem", borderBottom: "2px solid #000" }}>{trivias[2].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginRight: "3rem"
                            }}>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>Your Answer</h3>
                                <h3 style={{
                                    textAlign: "center",
                                    marginTop: "-0.2rem",
                                    fontSize: "1rem"

                                }}>{results[0][2]}</h3>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.2rem"
                                }}>Answer</h4>
                                <h4 style={{
                                    textAlign: "center",
                                    color: "#555",
                                    marginRight: "0.5rem",
                                    marginTop: "-0.5rem"
                                }}>{trivias[2].answer}</h4>
                            </Box>
                        </Box>
                    </Box>

                </Box >

                <Button style={{
                    marginTop: "15rem",
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
}

export default Results;