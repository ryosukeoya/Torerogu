import { setupServer } from 'msw/node';
import { handlers } from './handlers/handler';

export const server = setupServer(...handlers);
