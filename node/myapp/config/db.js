var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connection.once('connected', function() {
  console.log("Database connected successfully")
});
/* Delete database*/
/*
mongoose.connection.on('open', function(){
    db.connection.db.dropDatabase(function(err, result){
        console.log("Database dropped");
    });
});
*/
/*--Delete database--*/
exports.mongoose = mongoose;  
exports.db = db;  