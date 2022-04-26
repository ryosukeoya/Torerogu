import { render } from '@testing-library/react';
import Home from '../pages/home/index.p';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
