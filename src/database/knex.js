const config = require('../utils/config');

module.exports = require('knex')(config.database);
