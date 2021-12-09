import { useEffect, useState } from "react";
import { getToken, getTokenUri } from "../../network/ethereum";

type tokenMetadata = {
    name: string,
    description: string,
    image: string,
    edition: number
}

export const useContract = (address?: string) => {
    const [loading, setLoading] = useState(false);
    const [tokenList, setTokenList] = useState<number[]>([]);
    const [tokenMetadataList, setTokenMetadataList] = useState<tokenMetadata[]>([]);

    useEffect(() => {
        const fetchTokenMetadata = async (tokenId: number) => {
            const tokenUri = await getTokenUri(tokenId);
            const response = await fetch(tokenUri);
            const json: tokenMetadata = await response.json();
            return json
        }

        const fetchTokenList = async (address: string) => {
            setTokenList([]);
            setTokenMetadataList([]);

            const fetchedTokenList = await getToken(address);
            setTokenList(fetchedTokenList);

            let tml: tokenMetadata[] = [];
            for (const tokenId of fetchedTokenList) {
                tml.push(await fetchTokenMetadata(tokenId));
            }
            setTokenMetadataList(tml);
            setLoading(false);
        }

        if (address) {
            setLoading(true);
            fetchTokenList(address!!);
        }
    }, [address])

    return { tokenList, tokenMetadataList, loading };
}