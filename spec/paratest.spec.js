const paratest = require('../src/paratest');

function add(x, y) {
  return x+y;
}

const tests = [
  {
    subject: add,
    cases: [
      {
        name: "works",
        args: [1, 2],
        result: 3
      }, {
        name: "works with floats",
        args: [1.0, 2],
        result: 3.0
      }
    ]
  }
];

paratest("paratest", tests);
