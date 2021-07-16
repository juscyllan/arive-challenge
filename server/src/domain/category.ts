import { FastifyInstance } from 'fastify';

import { sleep } from '../helpers';

export const setupRoutes = (app: FastifyInstance) => {
  app.get('/categories/:id', async () => {
    await sleep();
    return {
      id: 1,
      name: 'Personal Care',
      subCategories: [
        { name: 'Shampoo', id: 'shampo--o', productIds: [123123, 123123, 123123] },
        { name: 'Handwash', id: 'hand-wash', productIds: [123123, 123123, 123123] },
      ],
    };
  });
};
