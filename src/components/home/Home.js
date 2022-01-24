import React from 'react';
import Survey from '../survey/Survey.js';
import { Box } from '@material-ui/core';
import arrow from '../../assets/arrow.png'
import { useSelector } from 'react-redux';

function Home() {

    const walletHomeText = useSelector((state) => state.walletHomeText)

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
}

export default Home;