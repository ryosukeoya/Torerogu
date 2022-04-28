import { render } from '@testing-library/react';
import Home from '../../pages/home/index.p';
import { wrapApolloMockedProvider } from '~/tests/mocks/providers/wrapApolloMockedProvider';
import { getTrainingOneTypeMock } from '~/tests/mocks/getTrainingOneTypeMock';

const wrapProvider = () => wrapApolloMockedProvider({ ui: <Home />, mocks: [getTrainingOneTypeMock] });

it('ホームページのDOM要素の出力が変わっていない', () => {
  // const { container } = render(<Home />);
  const { container } = wrapProvider();
  expect(container).toMatchSnapshot();
});
