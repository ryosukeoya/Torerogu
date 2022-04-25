import { renderHook } from '@testing-library/react-hooks';
import { useIsActive } from './index';

describe('useIsActive', () => {
  test('出力形式が正しいか', () => {
    expect(renderHook(() => useIsActive(true, 1, 1)).result.current).toBe(true);
    expect(renderHook(() => useIsActive(true, 0, 1)).result.current).toBe(false);
    expect(renderHook(() => useIsActive(false, 1, 1)).result.current).toBe(false);
    expect(renderHook(() => useIsActive(false, 0, 1)).result.current).toBe(false);
  });
});
