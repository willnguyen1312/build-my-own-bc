const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

const nodeAddress = uuid()
  .split('-')
  .join('');

const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', (req, res) => {
  res.json(bitcoin);
});

app.post('/transaction', (req, res) => {
  const { amount, sender, recepient } = req.body;
  const blockIndex = bitcoin.createNewTransaction(amount, sender, recepient);

  res.json({
    note: `Transaction will be added in block ${blockIndex}.`
  });
});

app.get('/mine', (req, res) => {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock.hash;
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock.index + 1
  };

  const nonce = bitcoin.proofOfWork();

  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  bitcoin.createNewTransaction(12.5, 'abc123', nodeAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: 'New block mined successfully',
    block: newBlock
  });
});

app.get('*', (req, res) => {
  res.send('Hola!!!');
});

app.listen(3000, () => console.log('Server running in http://localhost:3000'));
