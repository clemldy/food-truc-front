import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | food_trucks', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:food-trucks');
    assert.ok(route);
  });
});
