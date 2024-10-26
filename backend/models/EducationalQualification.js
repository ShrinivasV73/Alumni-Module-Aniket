// models/EducationalQualification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import sequelize instance

const EducationalQualification = sequelize.define(
	'EducationalQualification',
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
		admission_year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		passing_year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		educational_program: {
			type: DataTypes.STRING,
			allowNull: false
		},
		department_or_specialization: {
			type: DataTypes.STRING,
			allowNull: false
		},
		institute_or_college: {
			type: DataTypes.STRING,
			allowNull: false
		},
		university_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: 'EducationalQualification',
		timestamps: true
	}
);

module.exports = EducationalQualification;
