exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([{
      username: "user",
      email: "user@user-area.com",
      password: "password"
    }, //password
    {
      username: "user1",
      email: "user1@user-area.com",
      password: "user_pass1"
    }, //user_pass1
    {
      username: "user2",
      email: "user2@user-area.com",
      password: "user_pass2"
    } //user_pass2
  ]);

};