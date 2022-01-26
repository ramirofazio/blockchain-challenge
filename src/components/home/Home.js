import React from 'react';
import { useSelector } from 'react-redux';

import arrow from '../../assets/arrow.png';

import Survey from '../survey/Survey.js';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';

function Home() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const walletHomeText = useSelector((state) => state.walletHomeText)
    if (!isMobile) {

        return (
            <Box>
                {walletHomeText !== "Wallet Conexion Successfully"
                    ? (
                        <Box sx={{
                            display: "flex",
                            position: "fixed",
                            justifyContent: "flex-end",
                            width: "87vw",
                            height: "10vh"
                        }}>
                            <h3 style={{
                                display: "flex",
                                width: "100vw",
                                position: "fixed",
                                justifyContent: "flex-end",
                                marginRight: "4rem",
                                marginTop: "3rem",
                                fontSize: "1.5rem",
                                color: "#000"
                            }}>{walletHomeText}</h3>
                            <img src={arrow} alt="" style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "fixed",
                                width: "8rem",
                            }} />
                        </Box>) : null}
                <Survey />
            </Box>
        );
    } else {
        return (
            <Box>
                {walletHomeText !== "Wallet Conexion Successfully"
                    ? (
                        <Box sx={{
                            display: "flex",
                            position: "fixed",
                            justifyContent: "flex-end",
                            width: "83vw",
                            height: "10vh"
                        }}>
                            <h3 style={{
                                display: "flex",
                                width: "100vw",
                                position: "fixed",
                                justifyContent: "flex-end",
                                marginRight: "2.5rem",
                                marginTop: "1.5rem",
                                fontSize: "1rem",
                                color: "#000"
                            }}>{walletHomeText}</h3>
                            <img src={arrow} alt="" style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "fixed",
                                width: "5rem",
                            }} />
                        </Box>) : null}
                <Survey />
            </Box>
        );
    }
}

export default Home;