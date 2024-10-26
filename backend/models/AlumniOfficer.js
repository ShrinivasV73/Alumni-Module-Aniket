// models/AlumniOfficer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js'); // Import sequelize instance

const AlumniOfficer = sequelize.define(
	'AlumniOfficer',
	{
		officer_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		uuid: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			allowNull: false,
			unique: true
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		phone_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		institute_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		tableName: 'AlumniOfficer',
		timestamps: false
	}
);

module.exports = AlumniOfficer;
