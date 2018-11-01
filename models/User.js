const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select:false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;
