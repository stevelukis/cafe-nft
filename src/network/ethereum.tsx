import Web3 from 'web3';

import abi from '../contracts/abi.json';
import { AbiItem } from "web3-utils";

const rpcURL: string | undefined = process.env.REACT_APP_API_URL;
const web3 = new Web3(rpcURL!!);
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
const contract = new web3.eth.Contract(abi as AbiItem[], contractAddress);

export const getBalance = async (address: string) => {
    let balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}

export const getTotalSupply = async () => {
    return await contract.methods.totalSupply().call();
}

export const getMaxSupply = async () => {
    return await contract.methods.maxSupply().call();
}

export const buyNFT = async () => {
    const { ethereum } = window;
    const transactionParams = {
        to: contractAddress,
        from: ethereum.selectedAddress,
        value: web3.utils.toHex(web3.utils.toWei('0.05', 'ether')),
        gasLimit: web3.utils.toHex(3000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
        data: contract.methods.mint(1).encodeABI()
    };
    const txHash: string = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParams]
    })
    console.log(txHash);
    return txHash;
}
