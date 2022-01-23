import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useMediaQuery, useTheme, AppBar, Typography, Toolbar, Button, Box } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Metamask() {


    const [defaultAccount, setDefaultAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [userNetwork, setUserNetwork] = useState(null)

    if (errorMessage !== null) console.log("errorMsj Metamask 18", errorMessage)

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            //console.log('MetaMask Here!');
            getUserNetwork()

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected!');
                    getAccountBalance(result[0]);
                    getQuizBalance();
                })
                .catch(error => {
                    setErrorMessage(error.message);

                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => {
                //console.log('balance: ', balance)
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    const getUserNetwork = () => {
        let network = window.ethereum.networkVersion;
        // console.log(network, 'im network')
        if (network !== "3") {
            console.log('no Rapsnet network. Network id: ', network)
            setErrorMessage('Invalid Network! Changing.')
            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x3' }],
            });
        } else {
            console.log("valid network")
            setUserNetwork(`${network}, Rapsnet`)
        }
    }

    const getQuizBalance = async () => {
        const jsonAbi = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_cooldownSeconds",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "answers",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "cooldownSeconds",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "lastSubmittal",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_cooldownSeconds",
                        "type": "uint256"
                    }
                ],
                "name": "setCooldown",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_surveyId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_answerIds",
                        "type": "uint256[]"
                    }
                ],
                "name": "submit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        const contractAddress = "0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03";

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //console.log(provider)
        const contract = new ethers.Contract(contractAddress, jsonAbi, provider);
        //console.log(contract)
        const balance = await contract.balanceOf(contract.address);
        //console.log(ethers.utils.formatEther(balance));
        const formattedBalance = ethers.utils.formatEther(balance);
        setUserBalance(formattedBalance);
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (!isMobile) {
        return (
            <AppBar position='relative'>
                <Toolbar>
                    <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                        <Typography variant='h6'>
                            Address: {defaultAccount}
                        </Typography>

                        <Typography variant='h6'>
                            QUIZ Balance: {userBalance}
                        </Typography>

                        <Typography variant='h6'>
                            Network: {userNetwork}
                        </Typography>
                        <Button variant="outlined" onClick={() => connectWalletHandler()}>{connButtonText}</Button>
                    </Box>
                </Toolbar>
            </AppBar>)
    } else {

        return (
            <Box sx={{ width: "100%"}}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Button variant="outlined">Your Account</Button>
                            <Button variant="outlined" onClick={() => connectWalletHandler()}>{connButtonText}</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );

    }




}

export default Metamask;