const { ethers, Wallet } = require('ethers');
const InfuraID = 'df3074c5878c41ffadad5040d7b08329';
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${InfuraID}`);
const contractAddress = '0xfeDE991e6F6Ba2D578baB1B638251ABaf38842c8';
const contractABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const Address1 = '0x00954daD9F16fB218B2E696666C8766CBba47d93';
const PrivateKey1 = 'd5661198df1326071910533292c4560f61fb138ab777c11238064149dc96df6d';
const Address2 = '0x00954daD9F16fB218B2E696666C8766CBba47d93';

const main = async () => {
    const wallet1 = new ethers.Wallet(PrivateKey1, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    

    const BeforeBal1 = await contract.balanceOf(Address1);
    const BeforeBal2 = await contract.balanceOf(Address2);

    console.log(`Balances of accounts are ${BeforeBal1} MTK and ${BeforeBal2} MTK`);

    const tx = await contract.connect(wallet1).transfer(Address2, '20');
    await tx.wait();

    const AfterBal1 = await contract.balanceOf(Address1);
    const AfterBal2 = await contract.balanceOf(Address2);

    console.log(`Balances of accounts are ${AfterBal1} MTK and ${AfterBal2} MTK`);
};

main();
