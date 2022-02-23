import { render } from '@testing-library/react';
import Home from '../src/pages/index.p';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
