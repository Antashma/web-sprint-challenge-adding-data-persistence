
exports.up = function(knex) {
    return knex.schema
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.text('name', 128).notNullable().unique();
          tbl.text('description', 128);
      });
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('resources');
  };
  