'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'users', 
        { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: true
          },
          saldo:{
            type: Sequelize.DOUBLE,
            defaultValue: 0.0,
            allowNull: true
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
        });
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');  
  }
};
