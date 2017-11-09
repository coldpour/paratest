# paratest
parameterize your javascript tests

what if you never had to write a describe block again? what would you do with all the extra time saved?

## usage
require `paratest` in your spec file and give it an array of tests to run

```js
const paratest = require('paratest');
const compute = require('../src/compute');

const tests = [
  {
    subject: compute.sum,
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
  }, {
    subject: compute.mult,
    cases: [
      {
        name: "works",
        args: [1, 2],
        result: 2
      }, {
        name: "works with floats",
        args: [1.0, 2],
        result: 2.0
      }
    ]
  }
];

paratest("compute", tests);
```
