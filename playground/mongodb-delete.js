//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to Mdb server');
  }
  console.log('Connected to Mdb server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5a89a1168d8ce7dfabf2639e")})
    .then((result) => {
      console.log(result);
    });

  //db.close();
});
