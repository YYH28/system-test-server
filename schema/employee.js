const Sequelize = require("sequelize");
const sequelize = require('../config/db');
module.exports = (sequelize, DateType) => {
	return sequelize.define('employee', {
		id: {
			type: DateType.INTEGER,
			unique: true,
			//主键
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
		},
		name: DateType.STRING,
		sex: DateType.STRING,
		education: DateType.STRING,
		telephone: DateType.STRING,
		birth: DateType.STRING,
		status: DateType.BOOLEAN
	}, {
		freezeTableName: true,
		timestamps: false
	});
}