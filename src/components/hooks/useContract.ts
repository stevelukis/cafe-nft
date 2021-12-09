import { useEffect, useState } from "react";
import { getToken } from "../../network/ethereum";

export const useContract = (address?: string) => {
    const [tokenList, setTokenList] = useState<number[] | null>(null);

    useEffect(() => {
        const fetchTokenList = async (address: string) => {
            const fetchedTokenList = await getToken(address);
            console.log(fetchedTokenList);
            setTokenList(fetchedTokenList);
        }
        if (address) {
            fetchTokenList(address!!);
        }
    }, [address])

    return { tokenList };
}