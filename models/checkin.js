'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  checkin.init({
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        autoIncrement: true,
        comment: "รหัส",
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull:false,
        comment: "รหัส",
        primaryKey: true
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull:false,
        comment: "ละติจูด",
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull:false,
        comment: "ลองติจูด",
    },
    time_in: {
        type: DataTypes.DATE,
        allowNull:false,
        comment: "วัน-เวลา",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull:false,
      comment: "สถานะ",
  },
    }, {
        sequelize,
        tableName: 'checkin',
        collateName: 'checkin',
        timestamps: false
    });
    return checkin;
};