import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { triviaFinished } from '../../redux/actions/index.js'
import { Box, Button, useTheme, useMediaQuery, makeStyles } from '@material-ui/core'

import surveyjson from '../survey-sample.json'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    width: '100vw',
    justifyContent: 'center'
  },
  triviaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    height: '50vh',

    backgroundColor: '#ffffff40',
    borderRadius: '3rem',
    padding: '2.5rem',

    animation: `$triviaContainer 1500ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes triviaContainer': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  imgContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '3rem'
  },
  img: {
    display: 'flex',
    borderRadius: '2rem',
    objectFit: 'cover'
  },
  optContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-1rem'
  },
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    width: '100vw',
    justifyContent: 'center'
  },
  mobileTriviaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60vw',
    height: '50vh',

    backgroundColor: '#ffffff40',
    borderRadius: '3rem',
    padding: '2rem',

    animation: `$mobileTriviaContainer 1500ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes mobileTriviaContainer': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  mobileImgContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mobileImg: {
    display: 'flex',
    borderRadius: '2rem',
    objectFit: 'cover'
  },
  mobileOptContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem',
    marginRight: '-1rem'
  },
  resultsBtnContainer: {
    display: 'flex',
    width: '100vw',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultsBtn: {
    width: '40vw',
    height: '10vh',

    fontSize: '2rem',
    color: '#000',
    border: '2px solid #000',
    borderRadius: '5rem',

    animation: `$resultsBtn 1500ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes resultsBtn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  mobileResultsBtnContainer: {
    display: 'flex',
    width: '100vw',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mobileResultsBtn: {
    width: '70vw',
    height: '10vh',

    fontSize: '2rem',
    color: '#000',
    textAlign: 'center',
    border: '2px solid #000',
    padding: '2rem',
    borderRadius: '5rem',

    animation: `$mobileResultsBtn 1500ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes mobileResultsBtn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }

}))

function Trivias () {
  const classes = useStyle()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const dispatch = useDispatch()

  const trivias = surveyjson.questions

  const [counter, setCounter] = useState(0)
  const [results, setRestults] = useState({
    0: 'No Results',
    1: 'No Results',
    2: 'No Results'
  })

  const handleOnChange = (opt) => {
    if (counter === 0) {
      setRestults({
        ...results,
        0: opt
      })
    } else if (counter === 1) {
      setRestults({
        ...results,
        1: opt
      })
    } else if (counter === 2) {
      setRestults({
        ...results,
        2: opt
      })
    }
  }

  if (counter === trivias.length) {
    const newResults = [results]
    dispatch(triviaFinished(newResults))

    if (!isMobile) {
      return (
                <Box className={classes.resultsBtnContainer}>
                    <Link to='/results' style={{ textDecoration: 'none' }}>
                        <Button className={classes.resultsBtn}>See Results</Button>
                    </Link>
                </Box>
      )
    } else {
      return (
                <Box className={classes.mobileResultsBtnContainer}>
                    <Link to='/results' style={{ textDecoration: 'none' }}>
                        <Button className={classes.mobileResultsBtn}>See Results</Button>
                    </Link>
                </Box >
      )
    }
  }

  if (!isMobile) {
    return (
            <Box className={classes.container}>

                <Box className={classes.triviaContainer}>

                    <h2 style={{ fontSize: '5vh', textAlign: 'center' }}>
                        {trivias[counter].text}
                    </h2>
                    <Box className={classes.imgContainer}>
                        <img src={trivias[counter].image} alt='' width="250vw" height="250vw" className={classes.img} />
                        <Box className={classes.optContainer}>
                            {
                                trivias[counter].options.map((opt, index) => {
                                  return (
                                        <Button
                                            key={index}
                                            style={{
                                              border: '1px solid #000',
                                              marginTop: '1rem'
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
    )
  } else {
    return (
            <Box className={classes.mobileContainer}>

                <Box className={classes.mobileTriviaContainer}>

                    <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>
                        {trivias[counter].text}
                    </h2>
                    <Box className={classes.mobileImgContainer}>
                        <img src={trivias[counter].image} alt='' width="200vw" height="200vw" className={classes.mobileImg} />
                        <Box className={classes.mobileOptContainer}>
                            {
                                trivias[counter].options.map((opt, index) => {
                                  return (
                                        <Button
                                            key={index}
                                            style={{
                                              border: '1px solid #000',
                                              marginRight: '1rem'
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
    )
  }
}

export default Trivias
