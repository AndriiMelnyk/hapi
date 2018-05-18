const mongoose = require('mongoose');
//get the Schema class
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    city: String,
    address: String,
    age: Number,
    isDeveloper: Boolean
});

module.exports = mongoose.model('User', UserSchema);