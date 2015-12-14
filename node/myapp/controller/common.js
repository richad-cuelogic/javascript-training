//var nodemailer = require("nodemailer"),
var   Config = require('../config/config'),
    bcrypt = require('bcrypt'),
    algorithm = 'aes-256-ctr';

var privateKey = Config.key.privateKey;

// create reusable transport method (opens pool of SMTP connections)
console.log(Config.email.username+"  "+Config.email.password);
/*var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: Config.email.username,
        pass: Config.email.password
    }
});
*/
exports.decrypt = function(password) {
    return decrypt(password);
};

exports.encrypt = function(password) {
    return encrypt(password);
};

exports.sentMailVerificationLink = function(user,token) {
    var from = Config.email.accountName+" Team<" + Config.email.username + ">";
    var mailbody = "<p>Thanks for Registering on "+Config.email.accountName+" </p><p>Please verify your email by clicking on the verification link below.<br/><a href='http://"+Config.server.host+":"+ Config.server.port+"/"+Config.email.verifyEmailUrl+"/"+token+"'>Verification Link</a></p>"
    mail(from, user.username , "Account Verification", mailbody);
};

exports.sentMailForgotPassword = function(user) {
    var from = Config.email.accountName+" Team<" + Config.email.username + ">";
    var mailbody = "<p>Your "+Config.email.accountName+"  Account Credential</p><p>username : "+user.userName+" , password : "+decrypt(user.password)+"</p>"
    mail(from, user.username , "Account password", mailbody);
};


// method to decrypt data(password) 
function decrypt(password) {


    return password;
}

// method to encrypt data(password)
function encrypt(password) {
    bcrypt.genSalt(10, function(err, salt) {
          if (err) return next(err);
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) return next(err);
           password = hash;            
          });
          
    });
    return password;
}

function mail(from, email, subject, mailbody){
    var mailOptions = {
        from: from, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        //text: result.price, // plaintext body
        html: mailbody  // html body
    };
/*
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.error(error);
        }
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
    */
}