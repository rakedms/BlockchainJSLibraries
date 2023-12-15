const {ethers} = require ('ethers');
const InfuraID = 'df3074c5878c41ffadad5040d7b08329';
const address = '0x00954daD9F16fB218B2E696666C8766CBba47d93'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${InfuraID}`);

const bal = async() =>{
    const Balance = await provider.getBalance(address);
    console.log(`Balance of ${address} is ${ethers.utils.formatEther(Balance)} ETH`)
}

bal();