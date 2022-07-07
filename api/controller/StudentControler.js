const {StudentModel} = require('../model/index')
const sequelize = require('../../dbConnection');



const createStudent = (req,res) => {
    const {MaSV , TenSV , Diachi} = req.body
    console.log(MaSV , TenSV , Diachi);
    sequelize.transaction(async(t)=>{
        const options = { transaction: t, raw: true };
        const newStudent = await StudentModel.create({
            MaSV:MaSV,
            TenSV: TenSV,
            Diachi:Diachi
        },options);
        res.json(newStudent)
    })
}



module.exports = {
    createStudent
}