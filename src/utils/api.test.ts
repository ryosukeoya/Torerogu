import { getDataSpecifiedDate } from '~/utils/api';

test('指定した日付のデータで抽出されたものが返り値として返る', () => {
  const testData = [{ date: '2021-02-22' }, { date: '2022-04-23' }, { date: '2022-04-24' }, { date: '2022-04-25' }];

  expect(getDataSpecifiedDate(testData, new Date('2022-04-24'))).toEqual([{ date: '2022-04-24' }]);
});
