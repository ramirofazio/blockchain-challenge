import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ethers } from 'ethers'

import {
  useMediaQuery,
  useTheme,
  AppBar,
  Typography,
  Toolbar,
  Button,
  Box
} from '@material-ui/core'

import HomeIcon from '@mui/icons-material/Home'
import metamaskLogo from '../../assets/metamask-logo.png'

import { walletHomeText } from '../../redux/actions/index'
import QuizAbi from './QuizAbi.json'

function Metamask () {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const dispatch = useDispatch()

  const [userWallet, setUserWallet] = useState(null)
  const [userNetwork, setUserNetwork] = useState(null)
  const [userBalance, setUserBalance] = useState(null)

  console.log(userWallet)

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      // console.log('MetaMask Here!');
      getUserNetwork()
      dispatch(walletHomeText('Wallet Conexion Successfully'))

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChangedHandler(result[0])
          getAccountBalance(result[0])
          getQuizBalance()
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      console.log('Need to install MetaMask')
    }
  }

  const accountChangedHandler = (newAccount) => {
    setUserWallet(newAccount)
    getAccountBalance(newAccount.toString())
  }

  const getAccountBalance = (account) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then(balance => {
        // console.log('balance: ', balance)
        setUserBalance(ethers.utils.formatEther(balance))
      })
      .catch(error => {
        console.log(error)
      })
  }

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload()
  }

  const getUserNetwork = () => {
    const network = window.ethereum.networkVersion
    // console.log(network, 'im network')
    if (network !== '3') {
      console.log('no Rapsnet network. Network id: ', network)
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x3' }]
      })
    } else {
      console.log('valid network')
      setUserNetwork(`${network}, Rapsnet`)
    }
  }

  const getQuizBalance = async () => {
    const contractAddress = '0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03'

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // console.log(provider)
    const contract = new ethers.Contract(contractAddress, QuizAbi, provider)
    // console.log(contract)
    const balance = await contract.balanceOf(contract.address)
    // console.log(ethers.utils.formatEther(balance));
    const formattedBalance = ethers.utils.formatEther(balance)
    setUserBalance(formattedBalance)
  }

  window.ethereum.on('accountsChanged', accountChangedHandler)
  window.ethereum.on('chainChanged', chainChangedHandler)

  if (!isMobile) {
    return (
      <AppBar position='relative' style={{ backgroundColor: '#ff7f00' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
            <Link to="/">
              <HomeIcon fontSize='large'
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: '#FDF1D6' }} />
            </Link>
            {/* <Typography variant='h6'>
                            Address: {userWallet}
                        </Typography> */}
            <Box sx={{ display: 'flex' }}>
              <Typography variant='h6' style={{ color: '#FDF1D6', marginRight: '1rem' }}>
                QUIZ Balance:
              </Typography>
              <Typography variant='h6' style={{ color: '#000' }}>
                {userBalance}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography variant='h6' style={{ color: '#FDF1D6', marginRight: '1rem' }}>
                Network:
              </Typography>
              <Typography variant='h6' style={{ color: '#000' }}>
                {userNetwork}
              </Typography>
            </Box>
            <Button onClick={() => connectWalletHandler()} style={{ color: '#FDF1D6' }}>
              <img src={metamaskLogo} alt="" width="35rem" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar >)
  } else {
    return (
      <AppBar position='relative' style={{ backgroundColor: '#ff7f00' }}>
        <Toolbar>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            alignItems: 'center'
          }}>
            <Link to="/">
              <HomeIcon fontSize='large'
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: '#FDF1D6' }} />
            </Link>
            {/* <Typography variant='h6'>
                            Address: {userWallet}
                        </Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>

                <Typography variant='h6' style={{
                  fontSize: '1rem',
                  color: '#FDF1D6',
                  marginRight: '1rem'
                }}>
                  QUIZ Balance:
                </Typography>
                <Typography variant='h6' style={{ fontSize: '1rem', color: '#000' }}>
                  {userBalance}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>

                <Typography variant='h6' style={{
                  fontSize: '1rem',
                  color: '#FDF1D6',
                  marginRight: '1rem'
                }}>
                  Network:
                </Typography>
                <Typography variant='h6' style={{ fontSize: '1rem', color: '#000' }}>
                  {userNetwork}
                </Typography>
              </Box>
            </Box>
            <Button onClick={() => connectWalletHandler()} style={{ color: '#FDF1D6' }}>
              <img src={metamaskLogo} alt="" width="35rem" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar >
    )
  }
}

export default Metamask
