const assert = require('assert');
const app = require('../../src/app');

describe('\'Invoice\' service', () => {
  it('registered the service', () => {
    const service = app.service('invoice');

    assert.ok(service, 'Registered the service');
  });
});
