module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user:  process.env.DB_USER??"root",
      password: process.env.DB_PASS??"Codeaz123$%BD",
      database: process.env.DB_NAME??"allergeat",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user:  process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user:  process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },
};