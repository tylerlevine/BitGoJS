import * as Promise from 'bluebird';
import * as should from 'should';

const TestV2BitGo = require('../../../lib/test_bitgo');

describe('Virtual Token:', function() {
  let bitgo;

  before(function() {
    bitgo = new TestV2BitGo({ env: 'test' });
    bitgo.initializeTestVars();
  });

  it('should not instantiate coin interface before loading client constants', function() {
    (() => bitgo.coin('mycrappytoken')).should.throw('Coin or token type mycrappytoken not supported or not compiled');
  });

  it('should wait for client constants before instantiating coin', Promise.coroutine(function *() {
    const promise = bitgo.token('terc');
    should(promise).be.instanceOf(Promise);
    const erc = yield promise;
    const BaseCoin = require('../../../../src/v2/baseCoin');
    erc.should.be.instanceOf(BaseCoin);
    erc.type.should.equal('terc');
    erc.tokenContractAddress.should.equal('0x945ac907cf021a6bcd07852bb3b8c087051706a9');
  }));

});
