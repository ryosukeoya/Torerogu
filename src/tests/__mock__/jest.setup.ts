import '@testing-library/jest-dom/extend-expect';
import { server } from '~/tests/__mock__/server';

// リクエストのインターセプト
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
