
var Hapi   = require('hapi');
var bcrypt = require('bcrypt');
var jwt    = require("jsonwebtoken");

var server = new Hapi.Server();
server.connection({ port: 8081 });

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/authenticate/{user?}/{password}',
    handler: function (request, reply) {
        var user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
        reply('Hello ' + user + '!');
    }
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

userSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
    this.created_at = currentDate;  
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
          if (err) return next(err);
          bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;            
          });
    });
    next();
});

var User = mongoose.model('User', userSchema);

var rd = new User({
  name: 'Richa Dagar',
  username: 'richadagar@gmail.com',
  password: 'password1',
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