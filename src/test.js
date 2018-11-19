/* eslint-disable no-console */
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(892348, '123123123', 'adsfsghw');

bitcoin.createNewTransaction(100, 'NAMdadasd', 'NGUYENasdsada');

bitcoin.createNewBlock(123123, 'asdasd123d', '98ehnioufnoaiu');

bitcoin.createNewTransaction(10, 'NAMdadasd', 'NGUYENasdsada');
bitcoin.createNewTransaction(20, 'NAMdadasd', 'NGUYENasdsada');
bitcoin.createNewTransaction(30, 'NAMdadasd', 'NGUYENasdsada');

bitcoin.createNewBlock(789, 'asdasd123d', '98ehnioufnoaiu');

console.log(bitcoin.chain[2]);
