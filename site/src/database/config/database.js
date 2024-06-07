const dotenv = require('dotenv').config();
module.exports = {
development: {
  username: dotenv.parsed.DB_USERNAME,
  password: dotenv.parsed.DB_PASS,
  database: dotenv.parsed.DB_DATABASE,
  host: dotenv.parsed.DB_HOST,
  dialect: "mysql",
  timezone: '-03:00',
},
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql",
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
    },
  };