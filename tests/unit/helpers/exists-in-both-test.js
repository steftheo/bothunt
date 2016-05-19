import { existsInBoth } from 'bothunt/helpers/exists-in-both';
import { module, test } from 'qunit';

module('Unit | Helper | exists-in-both');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = existsInBoth([[42], [42]]);

  assert.equal(result, true);
});
