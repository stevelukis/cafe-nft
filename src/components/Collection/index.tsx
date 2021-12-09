import React from 'react';
import { useContract } from "../hooks/useContract";

type Props = {
    currentAccount?: string
}

const Collection: React.FC<Props> = ({ currentAccount }) => {
    const { tokenList } = useContract(currentAccount);
    return (
        <div>
            {tokenList}
        </div>
    )
}

export default Collection;