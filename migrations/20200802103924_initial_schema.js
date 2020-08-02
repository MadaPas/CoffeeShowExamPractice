exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments('id').notNullable();
        table.string('username').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();

        table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    })
    .createTable('categories', table => {
        table.increments('id').unique().notNullable();
        table.string('category').unique().notNullable() 
    })
    .createTable('coffees', (table) => {
        table.increments('id');
        table.string('name').unique().notNullable();
        table.text('description');
        table.integer('price');
        table.string('weight');
        table.string('picture');
        table.string('size');

        table.integer('category_id').notNullable();
        table.foreign('category_id').references('categories.id');

        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('coffees')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
  
};