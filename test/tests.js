const funcs = require('./funcs');

module.exports = [
  {
    subject: funcs.add,
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
