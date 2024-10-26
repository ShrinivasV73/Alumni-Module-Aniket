// models/Alumni.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import sequelize instance

const AlumniRouter = require('../routes/Alumni_Routes.js');

const Alumni = sequelize.define(
	'Alumni',
	{
		alumni_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			defaultValue: 1230
		},
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique: true
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		middle_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		phone_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},

		enrollment_no: {
			type: DataTypes.STRING,
			allowNull: false
		},
		diploma_program: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'Diploma'
		},
		department: {
			type: DataTypes.STRING,
			allowNull: false
		},
		admission_year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		passing_year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

		alumni_status: {
			type: DataTypes.STRING
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false
		},

		profile_photo: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		tableName: 'Alumni',
		timestamps: true
	}
);

module.exports = Alumni;
