exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      return knex('categories').del();
    })
    .then(function () {
      return knex('plants').del();
    })

};