import React from 'react'
import { useSelector } from 'react-redux'
import { Box, useMediaQuery, useTheme, makeStyles } from '@material-ui/core'

import arrow from '../../assets/arrow.png'

import Survey from '../survey/Survey.js'

const useStyles = makeStyles((theme) => ({
  container: {
    animation: `$container 1500ms ${theme.transitions.easing.easeInOut}`,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'flex-end',
    width: '87vw',
    height: '10vh'
  },
  h3: {
    display: 'flex',
    width: '100vw',
    position: 'fixed',
    justifyContent: 'flex-end',
    marginRight: '4rem',
    marginTop: '3rem',
    fontSize: '1.5rem',
    color: '#000'
  },
  img: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    width: '8rem'
  },
  mobileContainer: {
    animation: `$container 2000ms ${theme.transitions.easing.easeInOut}`,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'flex-end',
    width: '83vw',
    height: '10vh'
  },
  '@keyframes container': {
    from: {
      opacity: 0,
      transform: 'translatey(-100%)'
    },
    to: {
      opacity: 1,
      transform: 'translatey(0)'
    }
  },
  mobileH3: {
    display: 'flex',
    width: '100vw',
    position: 'fixed',
    justifyContent: 'flex-end',
    marginRight: '2.5rem',
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#000'
  },
  mobileImg: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    width: '5rem'
  }

}))
function Home () {
  const classes = useStyles()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const walletHomeText = useSelector((state) => state.walletHomeText)
  if (!isMobile) {
    return (
      <Box>
        {walletHomeText !== 'Wallet Conexion Successfully'
          ? (
            <Box className={classes.container} >
              <h3 className={classes.h3}>{walletHomeText}</h3>
              <img src={arrow} alt="" className={classes.img} />
            </Box>)
          : null
        }
        <Survey />
      </Box >
    )
  } else {
    return (
      <Box>
        {walletHomeText !== 'Wallet Conexion Successfully'
          ? (
            <Box className={classes.mobileContainer} >
              <h3 className={classes.mobileH3}>{walletHomeText}</h3>
              <img src={arrow} alt="" className={classes.mobileImg} />
            </Box>)
          : null
        }
        < Survey />
      </Box >
    )
  }
}

export default Home
