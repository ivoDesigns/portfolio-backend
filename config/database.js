module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
// Postgress
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: 'entropy-database-do-user-8370476-0.b.db.ondigitalocean.com',
//         port: '25060',
//         database: 'ivaylo-portfolio',
//         username: 'doadmin',
//         password: 'gz725v8w9vsw7d5u',
//         ssl: {
//           rejectUnauthorized: false,
//         }
//       },
//       options: {
//         ssl: true,
//       },
//     }
//   }
// })
