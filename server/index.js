const express = require('express')
const app = express()
const session = require('express-session')
const bodyPserser = require('body-parser')
const mongoose = require('mongoose')
const Quiz1 = require('./schemas/quiz2')
// import { Quiz } from './schemas/quiz'
const Quiz = require('./schemas/quiz')
const Ques = require('./schemas/quiz')
const Opt = require('./schemas/quiz')

id = 0;
app.use(session({
    secret: 'aditijayantraoujalambkar',
    saveUnintialized: false,
    resave: false,
}))

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/quizapp')
.then(()=> console.log('No error'))

const User = require('./schemas/user')
const { async } = require('rxjs')
// const createdquiz = require("./schemas/user");

app.use(bodyPserser.json())

app.post('/api/register', async (req, res)=> {
    const {name, password, email} = req.body
    console.log(req.body)
    const user = new User({
        name,
        email,
        password
    })

    const result = await user.save()
    console.log(result)

    if(!result){
        console.log("Not saved")
        res.json({
            success: false,
        })
    }
    else{

        console.log("Registered.")
        res.json({
            success: true,
        })

    }

})

app.post('/api/login', async (req, res)=> {
    const {password, email} = req.body
    console.log(req.body)
    const resp = await User.findOne({email, password})

    if(!resp){
        console.log("Not found")
        res.json({
            success: false,
        })
    }
    else{
        console.log("Found.")
        res.json({
            success: true,
        })
        req.session.user = email
        req.session.save()
    }
})

app.get('/api/data', async(req, res)=>{
    const quote = await User.findOne({email: req.session.email})
    if(!quote){
        res.json({
            status: false,
            message: 'User was deleted'
        })
        return 
    }

    res.json({
        status: true,
        email: req.session.user,
        quote
    })
})

app.get('/api/isloggedin', (req, res)=>{
    res.json({
        status: !!req.session.user
    })
})

app.get('/api/logout', (req, res)=>{
    req.session.eamil = undefined
    req.session.save()
    req.session.destroy
    res.json({
        success: true
    })
})


  app.get('/api/stat', async(req, res)=>{

    res.json({
        status: true,
        email: req.session.email,
    })
})

app.get('/api/getquiz', async (req, res)=> {

    res.set({
        	'Access-control-Allow-Origin': '*'
        	});
            
    Quiz1.find()
    .then(result=>{
        res.status(200).json({
            result
        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });
})


app.post('/api/addquiz', async (req, res)=> {
    const {quiz_data, code, name} = req.body
    console.log(req.body)
    id=id+1;

    var quiz = new Quiz1({
        id,
        quiz_data,
        code,
        name
    })

    const result = await quiz.save()
    console.log(result)

    if(!result){
        console.log("Not saved")
        res.json({
            success: false,
        })
    }
    else{

        console.log("Saved")
        res.json({
            success: true,
        })
    }

})

app.listen(3000, () => {
    console.log(`Server listening at 3000`)
  })