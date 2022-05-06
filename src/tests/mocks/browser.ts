import { setupWorker } from 'msw';
import { handlers } from './handlers/handler';

export const worker = setupWorker(...handlers);
