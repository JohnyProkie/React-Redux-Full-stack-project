var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var validator = require('validator');
const MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb+srv://Philip:Philip09@cluster0-gmwrs.mongodb.net/test';



function validateInput(data) {
	let errors = {};


	if (validator.isEmpty(data.username)) {
		errors.username = 'This is required'
	}
	if (validator.isEmpty(data.password)) {
		errors.password = 'This is required'
	}
	if (data.password !== 'heslo') {
		errors.login = 'Heslo does not match to Username'
	}
	if (data.username !== 'Petr') {
		errors.login = 'Heslo does not match to Username'
	}

	return {
		errors,

	}
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

app.use(bodyParser.json());

MongoClient.connect(url, function(err, db) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Spolecnost Inc 34", address: "Dalnice 37 34" };
  dbo.collection("customers").insertOne({ name: "Dum Inc 34", address: "Dira 37 34" }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
  var resultArray = [];
  var count = 0;
  var cursor = dbo.collection("customers").find();
  cursor.forEach(function(doc, err){
  	count++
  	console.log(" Projizdime pres kazdy");
  	resultArray.push(doc);
  }, function(){
  	console.log("count")
  	console.log(count)
  	console.log("resultArray")
  	console.log(resultArray)
  });
});

app.get('/data', function(req, res, next) {
  res.json([
  	{id: 1, username: "Odpoved Data Express"  },
  	{id: 2, username: "?else"  }
  	]);
});


app.get('/users', function(req, res, next) {
  res.json([
  	{id: 1, username: "Clean from Express"  },
  	{id: 2, username: "somebody?else"  }
  	]);
});


app.post('/api/users',function(req , res, next){
	setTimeout(() => {
  console.log("ozvalo se api/users");
  console.log(req.body);

  const { errors } = validateInput(req.body)

  if (isEmpty(errors)) {
  	console.log('zadny error');
  	res.json({ success: true })
  } else {console.log(' je tam error');
  	res.status(400).json(errors);
  }

  
  console.log(errors)
  }, 500 );
});


app.post('/post',function(req,res, next){
  console.log("ozvalo se port router.post POST");
  console.log(req.body);
  console.log("definovani pujckz POST");


var transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	auth: {
		type: "login",
		user: 'ihoskovecpetr@gmail.com',
		pass: 'frumencius'		
	}
})

var mailOptions = {
	from: 'PetrHoskovec <ihoskovecpetr@gmail.com>',
	to: 'hoskovectest@gmail.com',
	subject: 'Nodemailer Test',
	text: 'Hello Philipiny!'
}

transporter.sendMail(mailOptions, function(err, res){
	if(err){
		console.log('Error');
		console.log(err);
	} else {
		console.log('Email Sent');
	}
	})

});


app.listen(3001);
console.log('Running Express on 3001');
