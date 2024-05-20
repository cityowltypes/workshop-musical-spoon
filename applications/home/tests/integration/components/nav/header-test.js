import { module, test } from 'qunit';
import { setupRenderingTest } from 'home/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav/header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Nav::Header />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Nav::Header>
        template block text
      </Nav::Header>
    `);

    assert.dom().hasText('template block text');
  });
});
