module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'dpg-c331drs64ckgv36fekng'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_ah59'),
        username: env('DATABASE_USERNAME', 'strapi_ah59_user'),
        password: env('DATABASE_PASSWORD', 'Xicy40FbQdbVD83uFoWNi1dlqkpuFjlY'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});