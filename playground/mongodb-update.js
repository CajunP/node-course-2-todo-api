//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to Mdb server');
  }
  console.log('Connected to Mdb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a89c850d522ce8298440791")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a8988231846e71ba821b1b9")
  },{
    $set:{
      name: "Julian"
    },
    $inc:{
      age: 1
    }

  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
