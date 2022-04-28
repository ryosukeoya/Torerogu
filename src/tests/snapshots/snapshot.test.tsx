// import { render } from '@testing-library/react';
import Home from '../../pages/home/index.p';
import { renderApolloMockedProvider } from '~/tests/mocks/renders/renderApolloMockedProvider';
import { getTrainingOneTypeMock } from '~/tests/mocks/datum/getTrainingOneTypeMock';

const wrapProvider = () => renderApolloMockedProvider({ ui: <Home />, mocks: [getTrainingOneTypeMock] });

it('ホームページのDOM要素の出力が変わっていない', () => {
  // const { container } = render(<Home />);
  const { container } = wrapProvider();
  expect(container).toMatchSnapshot();
});
