const { Connection, LAMPORTS_PER_SOL, Keypair } = require('@solana/web3.js')
const { Contract, publicKeyToHex } = require('@solana/solidity')
const { readFileSync } = require('fs')

const fs = require('fs');
;(async function () {
let rawdata = fs.readFileSync('keypair.json');
let kp = JSON.parse(rawdata);

const ERC20_ABI = JSON.parse(readFileSync('./build/ERC20.abi', 'utf8'))
const connection = new Connection(
    "https://api.devnet.solana.com",
    'confirmed'
)


const arr = Object.values(kp._keypair.secretKey)
const secret = new Uint8Array(arr)
const payer = Keypair.fromSecretKey(secret)
// fs.writeFileSync('./keypair.json', JSON.stringify())
const contract = new Contract(connection,"82bd2bacc9673f9d6be4c64b94510b01384c8b7bf8ce03e9b08ae71247e96744","69b17b884ee806da3edcc7bb3cf3b85e49b8b9996b0fd34e684726f8f3af7585",ERC20_ABI,Keypair.fromSecretKey(secret)  );
const symb = await contract.symbol();
console.log(symb)
})();