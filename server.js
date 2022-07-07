var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan')
mongoose.Promise = global.Promise;

const sequelize = require('./dbConnection')
const {StudentModel,TeacherModel} = require('./api/model/index')

//RELATIONS:
//1 to many relation between user and article
TeacherModel.hasMany(StudentModel,{
  onDelete: 'CASCADE'
})
StudentModel.belongsTo(TeacherModel)

app.use(cors({}))
app.use(morgan('dev'))
const sync = async () => await sequelize.sync({alter:true})
sync()
app.use(bodyParser.json());

var routes = require('./api/route');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server started on: ' + port);
