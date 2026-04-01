import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const App = () => {
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            // Check if the browser has metamask installed
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            } else {
                alert('Please install MetaMask!');
            }
        };

        initWeb3();
    }, []);

    return (
        <div>
            <h1>Web3 Integration</h1>
            {account ? <p>Connected Account: {account}</p> : <p>Connecting...</p>}
        </div>
    );
};

export default App;