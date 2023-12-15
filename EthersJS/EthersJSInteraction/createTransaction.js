const {ethers} = require ('ethers');
const InfuraID = 'df3074c5878c41ffadad5040d7b08329';
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${InfuraID}`)
const Address1 = '0x4405aA12f15BEb1C7af85bd68aa1f89CDBBc0CAa'
const Address2 = '0x00954daD9F16fB218B2E696666C8766CBba47d93'
const TransferAmount = '0.025';


const PrivateKey1 = 'f86a48e510e53f1a195eee6736f70cd221ac9f51990700e00fb7e1070478316a';
const Wallet1 = new ethers.Wallet(PrivateKey1, provider);

const main = async() => {
    const BeforeBal1 = ethers.utils.formatEther(await provider.getBalance(Address1));
    const BeforeBal2 = ethers.utils.formatEther( await provider.getBalance(Address2));
    console.log(`Balance before transaction of ${Address1} is ${BeforeBal1} \nBalance of ${Address2} is ${BeforeBal2} `) 

    const tx = await Wallet1.sendTransaction({
        to: Address2, 
        value: ethers.utils.parseEther(TransferAmount)
    })

    await tx.wait();
    console.log(`Transaction Information: ${tx}`);

    const AfterBal1 = ethers.utils.formatEther(await provider.getBalance(Address1));
    const AfterBal2 = ethers.utils.formatEther(await provider.getBalance(Address2));

    console.log(`Balance after transaction of ${Address1} is ${AfterBal1} \nBalance of ${Address2} is ${AfterBal2} `)

}

main();

