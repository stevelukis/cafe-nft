import { useEffect, useState } from "react";
import { getToken } from "../../network/ethereum";

export const useContract = (address?: string) => {
    const [tokenList, setTokenList] = useState<number[] | null>(null);

    useEffect(() => {
        const fetchTokenList = async (address: string) => {
            const fetchedTokenList = await getToken(address);
            setTokenList(fetchedTokenList);
        }
        if (address) {
            fetchTokenList(address!!);
        }
    }, [address])

    return { tokenList };
}