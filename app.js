var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Quiz_app');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()

// app.use(express.static('../src/index.html'));//set the static path 


// app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(express.static('../dist/angular-directory'));
app.use(express.static('../src/index.html'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('src/index.html',{root:__dirname})
}).listen(3000)


app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var cpass =req.body.cpassword;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"cpass":cpass,
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	// return res.redirect('signup_success.html');
    res.sendFile(__dirname + '/createquiz');
})

// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// // return res.redirect('index.html');
// // return res.redirect('src/index.html');
// res.sendFile(__dirname + '/src/index.html');
// }).listen(3000)


// console.log("server listening at port 3000");
