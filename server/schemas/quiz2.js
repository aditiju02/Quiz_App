const { mongoose } = require('mongoose')

const Quiz1Schema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    quiz_data: []
})

const Quiz1 = mongoose.model('Quiz1', Quiz1Schema)

module.exports = Quiz1;