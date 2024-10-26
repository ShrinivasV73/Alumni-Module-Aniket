// models/EmploymentStatus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import sequelize instance

const EmploymentStatus = sequelize.define(
	'EmploymentStatus',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		alumni_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Alumni',
				key: 'alumni_id'
			}
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		designation: {
			type: DataTypes.STRING,
			allowNull: false
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		experience_in_years: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		industry: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: 'EmploymentStatus',
		timestamps: true
	}
);

module.exports = EmploymentStatus;
