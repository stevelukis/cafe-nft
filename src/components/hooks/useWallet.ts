import { useState } from "react";

export const useWallet = () => {
    const { ethereum } = window;
    const [currentAccount, setCurrentAccount] = useState<string | null>(ethereum.selectedAddress);

    // @ts-ignore
    ethereum.on("accountsChanged", ([newAccount]) => {
        console.log("accountsChanged: ", newAccount);
        setCurrentAccount(newAccount);
    })

    return { currentAccount, setCurrentAccount};
}