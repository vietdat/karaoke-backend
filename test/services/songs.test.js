const assert = require('assert');
const app = require('../../src/app');

describe('\'Songs\' service', () => {
  it('registered the service', () => {
    const service = app.service('songs');

    assert.ok(service, 'Registered the service');
  });
});
