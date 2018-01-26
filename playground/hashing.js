const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123ab!';

// bcrypt.genSalt(15, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$15$ZKofsRN95vfv9WlqptvkT.g497sm2tPxq1QXYPqWIsRZGPUkLUm9m';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

//
// var data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc')
//
// console.log(decoded);
// const message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash : ${hash}`);
//
// var data = {
//   id: 4
// };
//
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// if(resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//   console.log('Data was changed. Do not trust');
// }