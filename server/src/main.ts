import { initServer } from './server';

async function main() {
  initServer();
}

main().catch(err => {
  console.error('Unexpected error:');
  console.error(err);
  process.exit(1);
});
