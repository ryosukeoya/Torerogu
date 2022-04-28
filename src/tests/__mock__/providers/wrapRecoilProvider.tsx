import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

export const wrapRecoilProvider = (children: ChildNode) => {
  return render(<RecoilRoot>{children}</RecoilRoot>);
};
