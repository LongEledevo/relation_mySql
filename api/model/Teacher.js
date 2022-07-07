const {DataTypes} = require('sequelize')
const sequelize = require('../../dbConnection')

const TeacherModel = sequelize.define('Teacher',{
    MaGV : {
        type: DataTypes.STRING,
        allowNull: false ,
        primaryKey: true  
    },
    TenGV: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = TeacherModel