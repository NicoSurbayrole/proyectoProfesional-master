const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Categories extends Model {}

Categories.init(
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
{sequelize:db, modelName:"categories",});

module.exports = Categories;