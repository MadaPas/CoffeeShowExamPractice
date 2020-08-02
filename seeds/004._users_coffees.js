exports.seed = function (knex) {
  return knex("users").select().then(users => {
    return knex("coffees").select().then(coffees => {
      return knex("users_coffees").insert([{
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Costa Rica Reserve Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Ethiopia Yirgacheffe Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Tanzania Peaberry Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Sumatra Black Satin Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Kenya AA Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Earl Grey Tea").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Iced Tea Blend").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Masala Chai Tea").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Formosa Oolong Tea").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Rooibos 'African Red Bush' Herbal Tea").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Sencha Kyoto Cherry Rose Tea").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Apricot Supreme Tisane").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "UK - Blueberry Flavored Tea").id
        },

        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Espresso").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Caffe Latte").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Frappuccino").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cafe Mocha").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Caramel Macchiato").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Turkish Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Americano").id
        }, 
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Irish Coffee").id
        }, 
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cafe Cubano").id
        }, 
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cappuccino").id
        }, 
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cortado").id
        }, 
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Plain Coffee").id
        }, 
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Espresso").id
        }, 
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Double-Espresso").id
        }, 
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Red-Eye").id
        }, 
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Black-Eye").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Americano").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Long-Black").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Macchiato").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Long-Macchiato").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Cortado").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Breve").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Cappuccino").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Flat-White").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Caffee-Latte").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Mocha").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Vienna").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Affogato").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Cafe-au-Lait").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Special-Iced-Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cold-Brew").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Turkish-Coffee-Strong").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Caffe Latte Small").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Espresso Black").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Cappuccino Steamed Milk").id
        },
        {
          user_id: users.find(user => user.username == "user").id,
          coffee_id: coffees.find(coffee => coffee.name == "Viennal Coffee").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Caf' Mocha").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Double Caramel Macchiato").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Original Coffee with Milk").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Refreshing Brew").id
        },
        {
          user_id: users.find(user => user.username == "user1").id,
          coffee_id: coffees.find(coffee => coffee.name == "Frappe").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Freakshake").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Iced Latte").id
        },
        {
          user_id: users.find(user => user.username == "user2").id,
          coffee_id: coffees.find(coffee => coffee.name == "Iced Mocha").id
        }

      ]);
    });
  });
};