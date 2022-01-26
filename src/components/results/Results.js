import React from 'react';
import { Box, Button, useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import surveyjson from '../survey-sample.json';

const useStyle = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
    },
    resultsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",

        width: "100vw",
        height: "50vh",
        marginBottom: "-10rem",

        animation: `$resultsContainer 1500ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes resultsContainer": {
        from: {
            opacity: 0,
            transform: "translatey(-10%)"
        },
        to: {
            opacity: 1,
            transform: "translatey(0)"

        }
    },
    infoContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "15vw",
        height: "25vh",
        borderRadius: "2.5rem",
        padding: "2rem",
        backgroundColor: "#ffffff40",
    },
    h3: {
        marginTop: "2.5rem",
        marginBottom: "2rem"
    },
    h4: {
        color: "#555",
    },
    submitBtn: {
        marginTop: "10rem",
        width: "15rem",
        height: "3rem",
        border: "2px solid #000",
        borderRadius: "2rem",
        fontSize: "1.5rem",

        animation: `$submitBtn 6000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes submitBtn": {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,

        }
    },
    mobileContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem"
    },
    mobileResultsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexWrap: "wrap",

        width: "100vw",
        marginBottom: "-15rem",

        animation: `$mobileResultsContainer 1500ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes mobileResultsContainer": {
        from: {
            opacity: 0,
            transform: "translatey(-10%)"
        },
        to: {
            opacity: 1,
            transform: "translatey(0)"

        }
    },
    mobileInfoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70vw",
        height: "10vh",
        borderRadius: "2.5rem",
        padding: "1rem",
        backgroundColor: "#ffffff40",
        marginBottom: "1rem"
    },
    mobileH2Container: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "-1rem",
    },
    mobileH2: {
        fontSize: "1.2rem",
        borderBottom: "2px solid #000"
    },
    mobileH3Container: {
        display: "flex",
        flexDirection: "column",
        marginRight: "3rem"
    },
    mobileH3Title: {
        textAlign: "center",
        marginTop: "-0.2rem",
        fontSize: "1rem"
    },
    mobileH3: {
        textAlign: "center",
        marginTop: "-0.2rem",
        fontSize: "1rem"
    },
    mobileH4Container: {
        display: "flex",
        flexDirection: "column",
    },
    mobileH4Title: {
        textAlign: "center",
        color: "#555",
        marginRight: "0.5rem",
        marginTop: "-0.2rem"
    },
    mobileH4: {
        textAlign: "center",
        color: "#555",
        marginRight: "0.5rem",
        marginTop: "-0.5rem"
    },
    mobileSubmitBtn: {
        marginTop: "15rem",
        width: "15rem",
        height: "3rem",
        border: "2px solid #000",
        borderRadius: "2rem",
        fontSize: "1.5rem",

        animation: `$mobileSubmitBtn 6000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes mobileSubmitBtn": {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,

        }
    },

}))

function Results() {
    const classes = useStyle();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const results = useSelector((state) => state.results);
    const trivias = surveyjson.questions

    if (!isMobile) {

        return (
            <Box className={classes.container}>

                <Box className={classes.resultsContainer}>

                    <Box className={classes.infoContainer}>
                        <h2>{trivias[0].text}</h2>
                        <h3 className={classes.h3}>{`Your Answer: ${results[0][0]}`}</h3>
                        <h4 className={classes.h4}>{`Answer: ${trivias[0].answer}`}</h4>
                    </Box>

                    <Box className={classes.infoContainer}>
                        <h2>{trivias[1].text}</h2>
                        <h3 className={classes.h3}>{`Your Answer: ${results[0][1]}`}</h3>
                        <h4 className={classes.h4}>{`Answer: ${trivias[1].answer}`}</h4>
                    </Box>

                    <Box className={classes.infoContainer}>
                        <h2>{trivias[2].text}</h2>
                        <h3 className={classes.h3}> {`Your Answer: ${results[0][2]}`}</h3>
                        <h4 className={classes.h4}>{`Answer: ${trivias[2].answer}`}</h4>
                    </Box>

                </Box >

                <Button className={classes.submitBtn} onClick={() => alert("se valida el contrato :)")}>
                    Submit Quiz!
                </Button>

            </Box >
        );
    } else {

        return (
            <Box className={classes.mobileContainer}>

                <Box className={classes.mobileResultsContainer}>

                    <Box className={classes.mobileInfoContainer}>
                        <Box className={classes.mobileH2Container}>
                            <h2 className={classes.mobileH2}>{trivias[0].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box className={classes.mobileH3Container}>
                                <h3 className={classes.mobileH3Title}>Your Answer</h3>
                                <h3 className={classes.mobileH3}>{results[0][0]}</h3>
                            </Box>
                            <Box className={classes.mobileH4Container}>
                                <h4 className={classes.mobileH4Title}>Answer</h4>
                                <h4 className={classes.mobileH4}>{trivias[0].answer}</h4>
                            </Box>
                        </Box>
                    </Box>

                    <Box className={classes.mobileInfoContainer}>
                        <Box className={classes.mobileH2Container}>
                            <h2 className={classes.mobileH2}>{trivias[1].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box className={classes.mobileH3Container}>
                                <h3 className={classes.mobileH3Title}>Your Answer</h3>
                                <h3 className={classes.mobileH3}>{results[0][1]}</h3>
                            </Box>
                            <Box className={classes.mobileH4Container}>
                                <h4 className={classes.mobileH4Title}>Answer</h4>
                                <h4 className={classes.mobileH4}>{trivias[1].answer}</h4>
                            </Box>
                        </Box>
                    </Box>

                    <Box className={classes.mobileInfoContainer}>
                        <Box className={classes.mobileH2Container}>
                            <h2 className={classes.mobileH2}>{trivias[2].text}</h2>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box className={classes.mobileH3Container}>
                                <h3 className={classes.mobileH3Title}>Your Answer</h3>
                                <h3 className={classes.mobileH3}>{results[0][2]}</h3>
                            </Box>
                            <Box className={classes.mobileH4Container}>
                                <h4 className={classes.mobileH4Title}>Answer</h4>
                                <h4 className={classes.mobileH4}>{trivias[2].answer}</h4>
                            </Box>
                        </Box>
                    </Box>

                </Box >

                <Button className={classes.mobileSubmitBtn} onClick={() => alert("se valida el contrato :)")}>
                    Submit Quiz!
                </Button>

            </Box >
        );
    }
}

export default Results;