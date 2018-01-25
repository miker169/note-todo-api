const {ObjectID} = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = "5a69a35b5c18abc0ef4854e511";
//
// if(! ObjectID.isValid(id)) {
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// });

// Todo.findById(id).then(todo => {
//     if(!todo){
//         console.log('ID not found');
//     }
//     console.log('Todos', todo)
// }).catch(err => {
//     console.log(err);
// }) ;


let id = "5a69b21fe0c25a0812dd86c0";

if(!ObjectID.isValid(id)){
  return console.log('id is not valid');
}

User.findById(id)
  .then((user) => {
    if(!user) {
      return console.log('User not found');
    }
    console.log('User', JSON.stringify(user, undefined,2));
  }).catch(err => {
    console.log(err);
})

