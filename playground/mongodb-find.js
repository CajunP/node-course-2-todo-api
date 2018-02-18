//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to Mdb server');
  }
  console.log('Connected to Mdb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a89864fc9d725163cc929a6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Chulio', age:23})
    .toArray()
    .then((docs) => {

      if (docs.length === 0) {
        return console.log('The user does not exist in this db');
      }
      console.log('Users');
      console.log(JSON.stringify(docs,undefined, 2));
    }, (err) => {
      console.log('Unable to fetch users', err);
    });
  //db.close();
});
