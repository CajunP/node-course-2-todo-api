var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});


// var otherTodo = new Todo({text: "Practicar kanji"});
//
// otherTodo.save().then((doc) => {
//   console.log('Saved todo',doc);
// }, (e) => {
//   console.log('Unable to save todo',e);
// });

// User

var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
});


var newUser = new User({email:"ivalasojarazo@gmail.com"});

newUser.save().then((doc) => {
  console.log("Saved user", doc);
}, (e) => {
  console.log("Unable to save user", e);
});
