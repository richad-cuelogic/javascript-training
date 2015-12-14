var Joi = require('joi'),
    Boom = require('boom'),
    Common = require('./common'),
    Config = require('../config/config'),
    Jwt = require('jsonwebtoken'),
    User = require('../model/user').User;

var privateKey = Config.key.privateKey;
exports.create = {
    validate: {
        payload: {
            username: Joi.string().email().required(),
            password: Joi.string().required(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required()
        }
    },
    handler: function(request, reply) {
        //request.payload.password = Common.encrypt(request.payload.password);
        request.payload.scope = "Customer";
        User.saveUser(request.payload, function(err, user) {
            if (!err) {
                var tokenData = {
                    username: user.username,
                    scope: [user.scope],
                    id: user._id
                };
                Jwt.sign(tokenData, privateKey);
              reply("User registered");
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("Please provide another user email"));
                } else reply(Boom.forbidden(err)); // HTTP 403
            }
        });
    }
};

exports.login = {
    validate: {
        payload: {
            username: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
    handler: function(request, reply) {
        User.findUser(request.payload.username, function(err, user) {
            if (!err) {
                if (user === null) return reply(Boom.forbidden("Invalid username or password"));
                //if (Common.encrypt(request.payload.password) === user.password) {

                    //if(!user.isVerified) return reply("Your email address is not verified. please verify your email address to proceed");

                    var tokenData = {
                        username: user.username,
                        scope: [user.scope],
                        id: user._id
                    };
                    var res = {
                        username: user.username,
                        scope: user.scope,
                        token: Jwt.sign(tokenData, privateKey)
                    };

                    user.lastlogin_at = new Date();
                   // user.lastlogin_at.setDate(fivedayBackDate.getDate()-6);
                         User.updateLastLogin(user, function(err, user){
                            if (err) {
                                console.error(err);
                                //return reply(Boom.badImplementation(err));
                            }
                            console.log("Last login successfully updated");

                        });

                    reply(res);
                //} else reply(Boom.forbidden("Invalid username or password"));
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("Please provide another user email"));
                } else {
                        console.error(err);
                        return reply(Boom.badImplementation(err));
                } 
            }
        });
    }
};

exports.userList = {
        handler: function(request, reply) {
            User.userList(function(err, user) {
                 if (!err) {
                      return reply(user);                  
                 }
                else{
                     return reply(Boom.badImplementation(err));
                }
            });
        }
};

exports.updateUser = {
        validate: {
            payload: {
                firstname: Joi.string().required(),
                lastname: Joi.string().required()
            }
        },
        handler: function(request, reply) {        
                request.payload.username = 'abdul@cuelogic.co.in';
                 User.updateUser(request.payload, function(err, user){
                    if (err) {
                        console.error(err);
                        return reply(Boom.badImplementation(err));
                    }
                    return reply("Profile sucessfully updated");

                });                      
        }
};

exports.lastLogin = {
         handler: function(request, reply) {
            User.lastLogin(function(err, user) {
                 if (!err) {
                      return reply(user);                  
                 }
                else{
                     return reply(Boom.badImplementation(err));
                }
            });
        }
};