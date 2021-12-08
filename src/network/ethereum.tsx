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
