import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Box, Button, useMediaQuery, useTheme, makeStyles } from '@material-ui/core'

import surveyjson from '../survey-sample.json'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    height: '75vh'
  },
  surveyContainer: {
    backgroundColor: '#ffffff40',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    width: '25vw',
    height: '45vh',

    animation: `$surveyContainer 2000ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes surveyContainer': {
    from: {
      opacity: 0,
      transform: 'translatey(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translatey(0)'
    }
  },
  h1: {
    fontSize: '5vh',
    textAlign: 'center'
  },
  startBtn: {
    width: '10rem',
    border: '2px solid #000',
    borderRadius: '2rem',
    fontSize: '1.5rem',

    animation: `$startBtn ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes startBtn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  mobileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  mobileSurveyContainer: {
    backgroundColor: '#ffffff40',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3rem',
    alignItems: 'center',
    padding: '2rem',
    width: '50vw',
    height: '45vh',

    animation: `$mobileSurveyContainer 2000ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes mobileSurveyContainer': {
    from: {
      opacity: 0,
      transform: 'translatey(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translatey(0)'
    }
  },
  mobileH1: {
    fontSize: '2.5rem',
    textAlign: 'center'
  },
  mobileStartBtn: {
    width: '10rem',
    border: '2px solid #000',
    borderRadius: '2rem',
    fontSize: '1rem',

    animation: `$mobileStartBtn ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes mobileStartBtn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
}))

function Survey () {
  const classes = useStyle()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const walletHomeText = useSelector((state) => state.walletHomeText)

  if (!isMobile) {
    return (
            <Box className={classes.container}>
                <Box className={classes.surveyContainer}>

                    <h1 className={classes.h1}>{surveyjson.title}</h1>
                    <img src={surveyjson.image} width="200vw" style={{ marginBottom: '2rem' }} />

                    {walletHomeText === 'Wallet Conexion Successfully'
                      ? <Link to="/trivia" style={{ textDecoration: 'none' }}>
                            <Button className={classes.startBtn}>Start!</Button>
                        </Link>
                      : null}

                </Box>

            </Box >
    )
  } else {
    return (
            <Box className={classes.mobileContainer}>
                <Box className={classes.mobileSurveyContainer}>

                    <h1 className={classes.mobileH1}>{surveyjson.title}</h1>
                    <img src={surveyjson.image} width="170vw" style={{ marginBottom: '1rem' }} />

                    {walletHomeText === 'Wallet Conexion Successfully'
                      ? <Link to="/trivia" style={{ textDecoration: 'none' }}>
                            <Button className={classes.mobileStartBtn}>Start!</Button>
                        </Link>
                      : null}

                </Box>
            </Box >
    )
  }
}

export default Survey
