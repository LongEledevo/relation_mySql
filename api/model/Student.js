const {DataTypes} = require('sequelize')
const sequelize = require('../../dbConnection')

const StudentModel = sequelize.define('Student',{
    MaSV : {
        type: DataTypes.STRING,
        allowNull: false ,
        primaryKey: true  
    },
    TenSV: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Diachi: {
        type: DataTypes.STRING,
    }
})

module.exports = StudentModel