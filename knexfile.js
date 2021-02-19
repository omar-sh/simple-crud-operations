module.exports = {
  migrations: {
    directory: './src/database/migrations',
  },
  development: {
    migrations: {
      directory: './src/database/migrations',
    },
    "client": "mysql",
    "connection": {
      "host": "db",
      "user": "user",
      "password": "password",
      "database": "db",
      "port": 3306
    }
  },
  client: 'mysql'
};
