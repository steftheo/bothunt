import { moduleForModel, test } from 'ember-qunit';

moduleForModel('end-user', 'Unit | Model | end user', {
  // Specify the other units that are required for this test.
  needs: ['model:like', 'model:bot']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
