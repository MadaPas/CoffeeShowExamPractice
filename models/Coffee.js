const { Model } = require('objection');

const Category = require('./Category');
const User = require('./User');

class Coffee extends Model {
    static tableName = 'coffees';

    static relationMappings = {
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'coffees.categoryId',
                to: 'categories.id'
            }
        },
        user: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
                from: 'coffees.id',
                through: {
                    from: "users_coffees.coffeeId",
                    to: "users_coffees.userId"
                },
                to: 'users.id'
            }
        }

    }
}

module.exports = Coffee;