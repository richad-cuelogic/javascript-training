
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8081 });

server.start(function () {
    console.log('Server running at:', server.info.uri);
});


var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connection.once('connected', function() {
  console.log("Database connected successfully")
});

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  created_at: Date,
  updated_at: Date
});
// on every save, add the date
userSchema.pre('save', function(next) {
  var currentDate = new Date();
    this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var User = mongoose.model('User', userSchema);

var rd = new User({
  name: 'Richa Dagar',
  username: 'rd@gmail.com',
  password: 'password',
  admin:true,
  location:'Viman Nagar'
});

rd.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

module.exports = User;