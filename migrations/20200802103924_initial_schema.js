exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('username').unique().notNullable();
            table.string('email').unique().notNullable();
            table.string('password').notNullable();

            table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('categories', table => {
            table.increments('id');
            table.string('category').unique().notNullable();
        })
        .createTable('coffees', (table) => {
            table.increments('id');
            table.string('coffee_name').unique().notNullable();
            table.text('description');
            table.integer('price');
            table.string('weight');
            table.string('picture');
            table.string('size');

            table.integer('category_id').unsigned().notNullable();
            table.foreign('category_id').references('categories.id');

        })
        .createTable('users_coffees', table => {
            table.integer("user_id").unsigned().notNullable();
            table.foreign("user_id").references("users.id");

            table.integer("coffee_id").unsigned().notNullable();
            table.foreign("coffee_id").references("coffees.id");
        });

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users_coffees')
        .dropTableIfExists('coffees')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');

};