import { getDateInRegexp } from './date';

describe('Unit Test: getDateInRegexp', () => {
  it('出力の形式が正しいか', () => {
    expect(getDateInRegexp('2022-05-30T15:02:35.597+00:00')).toEqual('2022-05-30');
  });
  it('出力の形式が正しいか', () => {
    expect(getDateInRegexp('2022-06-01T00:00:00+00:00')).toEqual('2022-06-01');
  });
  it('年月日が先頭でない場合はundefinedを返す', () => {
    expect(getDateInRegexp('1234567-2022-06-01T00:00:00+00:00')).toBeUndefined();
  });
  it('月日などの0が省略されている場合はundefinedを返す', () => {
    expect(getDateInRegexp('2022-6-1T00:00:00+00:00')).toBeUndefined();
  });
});
