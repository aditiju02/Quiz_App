const { mongoose } = require('mongoose')
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const OptSchema = new Schema({
    Opt: String,
    sno: Number,
})

const Opt = mongoose.model('Opt', OptSchema)

module.exports = Opt;