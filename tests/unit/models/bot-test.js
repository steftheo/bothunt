import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bot', 'Unit | Model | bot', {
  // Specify the other units that are required for this test.
  needs: ['model:end-user', 'model:implementation']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
