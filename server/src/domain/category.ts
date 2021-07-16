import { FastifyInstance } from 'fastify';

export const setupRoutes = (app: FastifyInstance) => {
  app.get('/category/:id', async () => ({
    name: 'Personal Care',
    subCategories: [
      { name: 'Shampoo', id: 'shampo--o', productIds: [123123, 123123, 123123] },
      { name: 'Handwash', id: 'hand-wash', productIds: [123123, 123123, 123123] },
    ],
  }));
};
