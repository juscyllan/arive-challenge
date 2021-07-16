import { initServer } from './server';

async function main() {
  const port = parseInt(process.env.PORT ?? '4000', 10);
  const app = await initServer();

  app.listen(port, '0.0.0.0');
}

main().catch(err => {
  console.error('Unexpected error:');
  console.error(err);
  process.exit(1);
});
