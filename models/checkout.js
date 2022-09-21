'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  checkout.init({
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        autoIncrement: true,
        comment: "รหัส",
        primaryKey: true
    },
    checkin_id: {
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
    time_out: {
      type: DataTypes.DATE,
      allowNull:true,
      comment: "สถานที่",
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull:false,
    comment: "สถานะ",
},
    }, {
        sequelize,
        tableName: 'checkout',
        collateName: 'checkout',
        timestamps: false
    });
    return checkout;
};