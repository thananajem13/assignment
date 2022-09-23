import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export let productModel = sequelize.define('Product',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER, 
        allowNull:false
    },
})