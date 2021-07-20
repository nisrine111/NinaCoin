const{Blockchain, transaction}=require("./blockchain");
const EC=require("elliptic").ec;
const ec=new EC("secp256k1");

const myKey = ec.keyFromPrivate('e7547b47b361297efb879e3c1effc821dffd65c19ffe95dd010fbc6e69f42658');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const ninacoin = new Blockchain();

// Mine first block
ninacoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new transaction(myWalletAddress, 'address2', 47);
tx1.signTransaction(myKey);
ninacoin.addTransaction(tx1);

// Mine block
ninacoin.minePendingTransactions(myWalletAddress);


console.log();
console.log(`Balance of nisrine is ${ninacoin.getBalanceAdress(myWalletAddress)}`);

console.log();
console.log('Blockchain valid?', ninacoin.isChainValid());