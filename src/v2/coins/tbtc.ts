const Btc = require('./btc');
import bitcoin = require('bitgo-utxo-lib');

class Tbtc extends Btc {

  constructor() {
    super(bitcoin.networks.testnet);
  }

  getChain() {
    return 'tbtc';
  }

  getFullName() {
    return 'Testnet Bitcoin';
  }

}

module.exports = Tbtc;
