import Service1 from './service1';

describe('Service1', () => {
  it('execute should return "test"', () => {
    const service1 = new Service1();
    const result = service1.execute();
    expect(result).toBe('test');
  });
});
