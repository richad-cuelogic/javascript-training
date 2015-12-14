var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    db = require('../config/db').db,
    bcrypt = require('bcrypt');
autoIncrement.initialize(db);

/**
 * @module  User
 * @description contain the details of Attribute
 */

var User = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },
    created_at: Date,

    updated_at: Date,
    lastlogin_at : Date,
    scope: {
        type: String,
        enum: ['Customer'],
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }


});

User.pre('save', function(next) {
    //console.log("pre save");
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


User.plugin(autoIncrement.plugin, {
    model: 'user',
    field: '_id'
});

User.statics.saveUser = function(requestData, callback) {
    this.create(requestData, callback);
};

User.statics.updateUser = function(user, callback) {
   // user.save(callback);
    this.update({username : user.username}, { firstname: user.firstname ,lastname :user.lastname }, false, callback)

};
User.statics.updateLastLogin = function(user, callback) {
   // user.save(callback);
    this.update({username : user.username}, { lastlogin_at : user.lastlogin_at}, false, callback)

};
User.statics.findUser = function(username, callback) {
    this.findOne({
        username: username
    }, callback);
};

User.statics.findUserByIdAndUserName = function(id, username, callback) {
    this.findOne({
        username: username,
        _id: id
    }, callback);
};

User.statics.userList = function(callback) {
    this.find({}, callback);
};

User.statics.lastLogin = function(callback) {
    var fivedayBackDate= new Date();
    fivedayBackDate.setDate(fivedayBackDate.getDate()-5);
    this.find({lastlogin_at :  {$lt: fivedayBackDate}}, callback);
};

var user = mongoose.model('user', User);

/** export schema */
module.exports = {
    User: user
};