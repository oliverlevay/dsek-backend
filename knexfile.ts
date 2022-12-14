// Update with your config settings.

import type { Knex } from 'knex';

interface Configs {
  [key: string]: Knex.Config
}

const defaults: Knex.Config = {
  client: 'pg',
  version: process.env.POSTGRES_VERSION,
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    connectionString: process.env.DATABASE_URL,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

const configs: Configs = {
  development: {
    ...defaults,
  },
  production: {
    ...defaults,
  },
  test: {
    ...defaults,
    version: '14',
    connection: {
      host: 'localhost',
      port: 9999,
      user: 'user',
      password: 'password',
      database: 'dsek',
    },
  },
};

export default configs;
