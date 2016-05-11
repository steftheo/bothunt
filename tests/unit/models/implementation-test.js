import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation', 'Unit | Model | implementation', {
  // Specify the other units that are required for this test.
  needs: ['model:bot', 'model:platform']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
