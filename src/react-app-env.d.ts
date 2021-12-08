/// <reference types="react-scripts" />
interface Window {
    ethereum: any;
}

declare module "abi.json" {
    const abi: AbiItem[]
}