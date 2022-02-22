'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        name: {
        type: Sequelize.STRING
        },
        phone: {type: Sequelize.STRING
        },
        address: {
        type: Sequelize.STRING
        },
        image: {
        type: Sequelize.STRING
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        }
        });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer');
  }
};