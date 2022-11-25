const { mongoose } = require('mongoose')
const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User;