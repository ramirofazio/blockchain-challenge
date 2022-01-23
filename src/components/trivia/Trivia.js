import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button, ImageList } from '@material-ui/core'

function Trivia({ text, img, time, options }) {
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(true)
    }, [])
    //console.log(text, img, time, options)

    return (
        <Modal
            open={modal}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "50%",
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <Button variant="outlined" onClick={() => setModal(!modal)} color='secondary'>
                    Exit Trivia
                </Button>
                <Typography color="secondary">
                    {text}
                </Typography>
                <img src={img} alt='' width="50%" height="50%" />
            </Box>
        </Modal>

    );
}

export default Trivia;