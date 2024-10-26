// sync.js
require('dotenv').config();
const sequelize = require('./database/connection');

const authenticateDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Database connection has been established successfully.');

		// await sequelize.sync({ alter: true }); // Use alter or force: true carefully
		// console.log('All models were synchronized successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	} finally {
		// await sequelize.close();
	}
};

authenticateDB();
