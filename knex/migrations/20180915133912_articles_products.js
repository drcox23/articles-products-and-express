
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('articles', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.string('author').notNullable();
  }),

  knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name');
    table.integer('price');
    table.integer('inventory');

  })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('articles'),
    knex.schema.dropTable('merchants')
  ])
  
};

  