const { Client } = require('pg');

async function getConection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'gabriel',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConection;
