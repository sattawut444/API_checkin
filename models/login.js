'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  login.init({
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        autoIncrement: true,
        comment: "รหัส",
        primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:true,
      comment: "หรัส",
    },
    date_login: {
        type: DataTypes.DATE,
        allowNull:true,
        comment: "เวลา-เข้าสู่ระบบ",
    },
    date_logout: {
        type: DataTypes.DATE,
        allowNull:true,
        comment: "เวลา-ออกจากสู่ระบบ",
    },
    period: {
        type: DataTypes.NUMERIC,
        allowNull:true,
        comment: "ระยะเวลา-ใช้งานระบบ",
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull:false,
        comment: "สถานะ",
    },
    }, {
      sequelize,
      tableName: 'login',
      collateName: 'login',
      timestamps: false
  });
  return login;
};