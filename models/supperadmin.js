'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supperadmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  supperadmin.init({
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        comment: "รหัส",
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: "ชื่อ",
    },
    sername: {
      type: DataTypes.STRING,
      allowNull:true,
      comment: "ชื่อ",
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        comment: "อีเมล",
    },
    password: {
        type: DataTypes.TEXT,
        allowNull:true,
        comment: "รหัสผ่าน",
    },
    position: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: "ตำแหน่ง",
    },
    status: {
      type: DataTypes.NUMBER,
      allowNull:true,
      comment: "สถานะ",
    },
    imge: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: "รูป",
    },
    }, {
      sequelize,
      tableName: 'supperadmin',
      collateName: 'supperadmin',
      timestamps: false
    });
    return supperadmin;
};