const { mongoose} = require('mongoose')
// import { Ques } from '../schemas/questions'
// const Ques = require('./questions')
var Schema = mongoose.Schema;
const OptSchema = new mongoose.Schema({
    Opt: String,
    sno: Number
});

const Opt = mongoose.model('Opt', OptSchema)

const QuesSchema = new mongoose.Schema({
    sno: Number,
    que: String,
    ans: String,
    type: String,
    active: Boolean,
    option_arr: [OptSchema]
    // option_arr: [{type: Schema.ObjectId, ref: 'Opt'}]
})

const Ques = mongoose.model('Ques', QuesSchema)

var schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const QuizSchema = new Schema({
    id: Number,
    name: String,
    code: String,
    // question_arr: [QuesSchema]
     quiz_data: [QuesSchema]
    // quiz_data: [{type: Schema.ObjectId, ref: 'Ques'}]
})

const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = Quiz;
module.exports = Ques;
module.exports = Opt;
// module.exports = Opt;
// module.exports = Ques;