const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



var id2 = '5a89df93c23ffc0c1cff7aef';
var id = '5acba16e983751f0096b5b31';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// }) ;
//

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(id2).then((user) => {
  if (!user) {
    console.log('User not found');
  }
  console.log('User by Id' , user);
}, (e) => {
  console.log(e);
});
