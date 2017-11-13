const expect = require('chai').expect;
const paratest = require('../../src/paratest');
const tests = require('../tests');

paratest("mocha", tests, (actual, expected) => {
  expect(actual).to.deep.equal(expected);
});
