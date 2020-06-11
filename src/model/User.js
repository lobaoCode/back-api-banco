const  {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            saldo: DataTypes.DOUBLE
        },
        {
            freezeTableName: true,
            tableName: 'users',
            sequelize
        })
    }
}

module.exports = User;