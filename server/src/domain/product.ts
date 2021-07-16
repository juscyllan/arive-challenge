import { FastifyInstance } from 'fastify';

export const setupRoutes = (app: FastifyInstance) => {
  app.get('/product', async () => [
    { id: 1, name: 'Resurrection Handwash', brand: { name: 'Aesop' }, price: 39.99 },
    { id: 2, name: 'Marvis Whitening mint tooth paste', brand: { name: 'Marvis' }, price: 9.95 },
  ]);
};
