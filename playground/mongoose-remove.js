const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('5acbd713d011dcc02088fe41').then((todo) => {
  console.log(todo);
});
