exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_coffees').del()
    .then(function () {
      return knex('coffees').del();
    })
    .then(function () {
      return knex('categories').del();
    })
    .then(function () {
      return knex('users').del();
    })

};