const { mongoose } = require('mongoose')
// import { Opt } from './options'
const Opt = require('./options')
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const QuesSchema = new Schema({
    sno: Number,
    que: String,
    ans: String,
    type: String,
    active: Boolean,
    option_arr: [{type: Schema.ObjectId, ref: 'Opt'}]
})

const Ques = mongoose.model('Ques', QuesSchema)

module.exports = Ques;