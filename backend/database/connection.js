const { Sequelize } = require('sequelize');

const ENV_VARAIBLES = require('dotenv').config().parsed;

const sequelize = new Sequelize(
	ENV_VARAIBLES.DB_NAME,
	ENV_VARAIBLES.DB_USERNAME,
	ENV_VARAIBLES.DB_PASSWORD,
	{
		host: ENV_VARAIBLES.DB_HOST,
		port: ENV_VARAIBLES.DB_PORT,
		dialect: 'mysql'
	}
);

// console.log(sequelize);

module.exports = sequelize;
