module.exports = function test(name, tests, assert) {
  return describe(name, () => {
    tests.forEach(test => {
      describe(test.subject.name, () => {
        test.cases.forEach(c => {
          it(c.name, () => {
            if(assert) {
              assert(test.subject(...c.args), c.result);
            } else {
              expect(test.subject(...c.args)).toEqual(c.result);
            }
          });
        });
      });
    });
  });
};
