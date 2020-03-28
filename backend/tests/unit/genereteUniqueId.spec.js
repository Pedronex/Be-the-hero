const genereteUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = genereteUniqueId();

    expect(id).toHaveLength(8);
  })
});