
exports.up = function(knex) {
  return knex.schema
      .createTable('employees', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.date('date_of_joining').notNullable();
        table.string('department', 255).notNullable();
        table.float('salary', ).notNullable();
      })
};

exports.down = function(knex) {
  
};
