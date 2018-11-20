/* eslint-disable no-console */
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = '1siub1uo23hioq23o12';
const currentBlockData = [
  {
    amount: 10,
    sender: '123saudihuaisd',
    recipient: '12312hsad'
  },
  {
    amount: 30,
    sender: '123saudihuaisd',
    recipient: '12312hsad'
  },
  {
    amount: 50,
    sender: '123saudihuaisd',
    recipient: '12312hsad'
  }
];

const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
