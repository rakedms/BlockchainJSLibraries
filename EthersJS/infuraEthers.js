import {ethers} from 'ethers';

const APIKey = 'df3074c5878c41ffadad5040d7b08329';
const Network = 'homestead'; 

const provider = new ethers.providers.InfuraProvider(Network, APIKey);
const BlockNumber = await provider.getBlockNumber();

console.log(BlockNumber);

//ethers.js version 5.2