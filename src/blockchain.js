/* eslint-disable func-names */
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlackHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce,
    hash,
    previousBlackHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function(
  amount,
  sender,
  recepient
) {
  const newTransaction = {
    amount,
    sender,
    recepient
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock().index + 1;
};

module.exports = Blockchain;
