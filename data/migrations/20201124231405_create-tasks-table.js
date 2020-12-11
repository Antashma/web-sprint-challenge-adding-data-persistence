
exports.up = function(knex) {
    return knex.schema
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.text('description', 128)
            .notNullable();
          tbl.text('notes', 128);
          tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
      });
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('tasks');
  };
  