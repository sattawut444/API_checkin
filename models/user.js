'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        autoIncrement: true,
        comment: "รหัส",
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "ชื่อ",
    },
    sername: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "นามสกุล",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "อีเมล",
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "รหัสผ่าน",
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: true,
        comment: "อายุ",
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "ตำแหน่ง",
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "วันเกิด",
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: true,
        comment: "เบอร์",
    },
    status: {
      type: DataTypes.NUMBER,
      allowNull: false,
      comment: "สถานะ",
  },
    imge: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "รูป",
    },
    }, {
      sequelize,
      tableName: 'user',
      collateName: 'user',
      timestamps: false
    });
    return user;
};