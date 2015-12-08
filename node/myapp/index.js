var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


///////////////////////////////////////////////////

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/my_database_name';

MongoClient.connect(url, function (err, db) {
	//check db connection
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    var collection = db.collection('users');
    // create collection in mongo
    var user1 = {name: 'admin', age: 32, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'user', age: 22, roles: ['user']};
    var user3 = {name: 'superadmin', age: 42, roles: ['super-admin', 'admin', 'moderator', 'user']};
    //insert in db
    collection.insert([user1, user2, user3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted documents into the "users" collection. The documents inserted with "_id" are:', result);
      }
     	//db.close();
    });

    //find from db
    collection.find({name: 'user'}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      db.close();
    });
     
  }
});