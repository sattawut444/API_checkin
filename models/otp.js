'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class otp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  otp.init({
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull:false,
        comment: "รหัส",
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull:false,
        comment: "รหัส",
        primaryKey: true
    },
    otp: {
        type: DataTypes.STRING,
        allowNull:false,
        comment: "รหัส-otp",
    },
    ref: {
        type: DataTypes.STRING,
        allowNull:false,
        comment: "กองรหัส",
    },
    status: {
        type: DataTypes.STRING,
        allowNull:false,
        comment: "สถานะ",
    },
    
    }, {
        sequelize,
        tableName: 'otp',
        collateName: 'otp',
        timestamps: false
    });
    return otp;
};