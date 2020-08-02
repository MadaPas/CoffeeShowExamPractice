exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([{
      username: "user",
      email: "user@user-area.com",
      password: "$2b$12$0kYCD..VQ/ABkSagZON8SeZAQ1lAVGwxtvWDmYq9mYjOr.6C1qrZG"
    }, //password
    {
      username: "user1",
      email: "user1@user-area.com",
      password: "$2b$12$d5bpORb4QcvTIvpRLtO5f.seGn47pJF09hV3IDS/MNoQ1QNncIKpW"
    }, //password1
    {
      username: "user2",
      email: "user2@user-area.com",
      password: "$2b$12$TN9ULfqm3UChAa7el16WseyPJjKHt3IfHUlbjdl6X6XPlfNuTymz."
    } //password2
  ]);

};