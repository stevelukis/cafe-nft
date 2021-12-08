import { useEffect, useState } from "react";
import { getBalance } from "../../network/ethereum";

export const useWallet = () => {
    const { ethereum } = window;
    const [currentAccount, setCurrentAccount] = useState<string | null>(ethereum.selectedAddress);
    const [balance, setBalance] = useState('0');

    // @ts-ignore
    ethereum.on("accountsChanged", ([newAccount]) => {
        console.log("accountsChanged: ", newAccount);
        setCurrentAccount(newAccount);
    })

    useEffect(() => {
        if (currentAccount) {
            const fetchBalance = async () => {
                const balance = await getBalance(currentAccount!!);
                setBalance(balance);
            }

            fetchBalance();
        }
    }, [currentAccount])

    return { currentAccount, setCurrentAccount, balance, setBalance };
}