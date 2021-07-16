import Fastify from 'fastify';

export const initServer = async () => {
  const app = Fastify({ logger: true });

  const modules = await Promise.all([import('./domain/category'), import('./domain/product')]);
  for (const mod of modules) mod.setupRoutes(app);

  return app;
};
