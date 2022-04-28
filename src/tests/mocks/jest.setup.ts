import '@testing-library/jest-dom/extend-expect';
import { server } from '~/tests/mocks/server';

// リクエストのインターセプト
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
