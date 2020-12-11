
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments().comment('unique');
        tbl.text('name', 128).notNullable().unique();
        tbl.text('description', 128);
        tbl.boolean('completed').notNullable().defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects');
};
