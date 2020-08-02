exports.seed = function (knex) {
  // Inserts seed entries
  return knex('categories').insert([{
      id: 1,
      category: "Hot Coffee Drinks"
    },
    {
      id: 2,
      category: "Cold Coffee Drinks"
    },
    {
      id: 3,
      category: "Tea-Packs"
    },
    {
      id: 4,
      category: "Coffee-Beans"
    },
    {
      id: 5,
      category: "Original Coffee Collection"
    },
    {
      id: 6,
      category: "Special Coffee Collection"
    }

  ]);
}