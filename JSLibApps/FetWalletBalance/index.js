const ethers = require('ethers');

const API_Key = 'df3074c5878c41ffadad5040d7b08329';
const network = 'homestead';

async function main() {
    const provider = new ethers.providers.InfuraProvider(network, API_Key);
    const BlockNo = await provider.getBlockNumber();
    console.log(BlockNo);

    const wallet = ethers.Wallet.createRandom();
    const address = await wallet.getAddress(); // Use await here

    console.log(`new wallet address ${address}`);
}

main();
