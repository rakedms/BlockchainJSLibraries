const express = require('express')
const ethers = require('ethers');
const app = express()

app.get('/wallet', async function (req, res) {
    const API_Key = 'df3074c5878c41ffadad5040d7b08329';
const network = 'homestead'

const provider = new ethers.providers.InfuraProvider(network, API_Key);
const BlockNo = await provider.getBlockNumber();

console.log(BlockNo);

const wallet = ethers.Wallet.createRandom();
const address = () => wallet.address;

console.log(`new wallet address ${address}`);

    res.send({address})
})
app.get('/hello', async function (req, res){
    console.log("req received")
    res.send({message:"reply from node.js"})
})
app.listen(8000)