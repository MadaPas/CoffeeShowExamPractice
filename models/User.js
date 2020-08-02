const { Model } = require('objection');

const Coffee = require('./Coffee.js');

class User extends Model {
    static tableName = 'users';

    static relationMappings = {
        coffee: {
            relation: Model.ManyToManyRelation,
            modelClass: Coffee,
            join: {
                from: 'users.id',
                through: {
                    from: "users_coffees.userId",
                    to: "users_coffees.coffeeId"
                },
                to: 'coffees.id'
            }
        }
    }

}

module.exports = User;