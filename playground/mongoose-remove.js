const {ObjectID} = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');


Todo.findByIdAndRemove('5a68f932dcd1e3057056b7c6').then((todo) => {
  console.log(todo);
});



