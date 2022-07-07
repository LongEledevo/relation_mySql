module.exports = function(app){
    const StudentController = require('../controller/StudentControler')



    app.route('/Student')
       .post(StudentController.createStudent)
}