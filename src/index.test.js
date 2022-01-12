import getLocationData from './index';

describe('getLocationData', () => {
  it('should return relevant seperator and currency if valid code passed', () => {
    expect(getLocationData('ja-JP')).toEqual({
      currency: '￥',
      separator: ',',
    });
  });

  it('should return US seperator and currency if non val;id code passed', () => {
    expect(getLocationData(null)).toEqual({
      separator: '.',
      currency: '$',
    });
  });
});
