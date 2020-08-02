const credentials = require("./config/mysqlCredentials.js");
const { knexSnakeCaseMappers } = require('objection');

//console.log(credentials);

module.exports = {
  
  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password
    },
    ...knexSnakeCaseMappers()
  }

};