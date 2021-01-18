import facebookConfig from '../facebook-config';

describe('When aplication is initialized', () => {
  test('Should return an appId config', () => {
    const sut = facebookConfig.appId;
    expect(typeof (sut)).toBe('string');
  });
});
