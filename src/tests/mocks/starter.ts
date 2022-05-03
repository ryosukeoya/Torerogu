export {};

if (process.env.NODE_ENV === 'development') {
  const mockServer = () => import('~/tests/mocks/worker');
  mockServer();
}
