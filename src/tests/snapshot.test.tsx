import { render } from '@testing-library/react';
import Home from '../pages/home/index.p';
import { wrapApolloMockedProvider } from '~/tests/__mock__/providers/wrapApolloMockedProvider';
import { getTrainingOneTypeMock } from '~/tests/__mock__/getTrainingOneTypeMock';

const wrapProvider = () => wrapApolloMockedProvider({ ui: <Home />, mocks: [getTrainingOneTypeMock] });

it('ホームページのUIが変わっていない', () => {
  // const { container } = render(<Home />);
  const { container } = wrapProvider();
  expect(container).toMatchSnapshot();
});
