import { FastifyInstance } from 'fastify';

import { sleep } from '../helpers';

export const setupRoutes = (app: FastifyInstance) => {
  app.get('/products', async () => {
    await sleep();
    return [
      { id: 1, name: 'Resurrection Handwash', brand: { name: 'Aesop' }, price: 39.99 },
      { id: 2, name: 'Marvis Whitening mint tooth paste', brand: { name: 'Marvis' }, price: 9.95 },
    ];
  });
};
