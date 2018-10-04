var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var validator = require('validator');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var path = require("path");
mongoose.Promise = global.Promise;
var _ = require("underscore");


var url = 'mongodb+srv://Philip:Philip09@cluster0-gmwrs.mongodb.net/test';
mongoose.connect(url);
var Schema = mongoose.Schema;
mongoose.set('debug', true);


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.use(bodyParser.json());


///
const Sub3_Menu = new mongoose.Schema({

  id_sub3: {type: Number},
  name_sub3: {type: String},
  date_sub3: {type: String},
  state_sub3: {type: Boolean},
  poznamka_sub3: {type: String},
});

const Sub2_Menu = new mongoose.Schema({

  id_sub2: {type: Number},
  name_sub2: {type: String},
  date_sub2: {type: String},
  state_sub2: {type: Boolean},
  poznamka_sub2: {type: String},
  subinfo_sub2: [Sub3_Menu]
});

const Sub_Menu = new mongoose.Schema({

  name_sub: {type: String},
  date_sub: {type: String},
  state_sub: {type: Boolean},
  priradit_sub: {type: Boolean},
  poznamka_sub: {type: String},
  subinfo_sub: [Sub2_Menu]
});

const Main_Menu = new mongoose.Schema({

  name: {type: String},
  date: {type: String},
  state: {type: Boolean},
  poznamka: {type: String},
  subinfo: [Sub_Menu]   
});

const PhiliCollection = mongoose.model('Phil', Main_Menu)

function Add(name, date, poznamka) {
console.log("Add P AKCE")

  PhiliCollection.create({ name: name , date: date, state: false , poznamka: poznamka, 
  	'subinfo.0.name_sub': 'Nabídka', 'subinfo.0.date_sub': '2018-09-29', 'subinfo.0.poznamka_sub': "Poznamka první", 'subinfo.0.state_sub': true,
  	'subinfo.1.name_sub': 'Job Order + Rámcová smlouva + Plná moc', 'subinfo.1.state_sub': false, 'subinfo.1.priradit_sub': true,
  	'subinfo.2.name_sub': 'Hlášenka', 'subinfo.2.state_sub': false,
  	'subinfo.3.name_sub': 'Platba 1. 50%', 'subinfo.3.state_sub': false, 'subinfo.3.priradit_sub': true,
	'subinfo.4.name_sub': 'Výběr zaměstnance', 'subinfo.4.state_sub': false,
											'subinfo.5.state_sub': false,
	'subinfo.6.name_sub': 'Letenka', 'subinfo.6.state_sub': false,
	'subinfo.7.name_sub': 'Biometrie', 'subinfo.7.state_sub': false,
	'subinfo.8.name_sub': 'Platba 2. 50%', 	'subinfo.8.state_sub': false, 'subinfo.8.priradit_sub': true,
	'subinfo.5.subinfo_sub.0.name_sub2': '', 				'subinfo.5.subinfo_sub.0.state_sub2': true, 		'subinfo.5.subinfo_sub.0.id_sub2': 31,
	'subinfo.5.subinfo_sub.1.name_sub2': 'Podání žádosti', 	'subinfo.5.subinfo_sub.1.state_sub2': false, 		'subinfo.5.subinfo_sub.1.id_sub2': 32,
	'subinfo.5.subinfo_sub.2.name_sub2': 'Žádost o nostrifikace','subinfo.5.subinfo_sub.2.state_sub2': true, 	'subinfo.5.subinfo_sub.2.id_sub2': 33,
	'subinfo.5.subinfo_sub.3.name_sub2': 'Potvrzení nostrifikace do', 'subinfo.5.subinfo_sub.3.state_sub2': true, 'subinfo.5.subinfo_sub.3.id_sub2': 34,
	'subinfo.5.subinfo_sub.4.name_sub2': 'Rozhoduje do', 	'subinfo.5.subinfo_sub.4.state_sub2': true, 		'subinfo.5.subinfo_sub.4.id_sub2': 35,
	'subinfo.5.subinfo_sub.5.name_sub2': 'Rozhodnuto', 		'subinfo.5.subinfo_sub.5.state_sub2': true, 		'subinfo.5.subinfo_sub.5.id_sub2': 36,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.0.name_sub3': '2x fotgrafie', 'subinfo.5.subinfo_sub.0.subinfo_sub2.0.state_sub3': false, 	'subinfo.5.subinfo_sub.0.subinfo_sub2.0.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.0.id_sub3': 31,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.1.name_sub3': 'Smlouva', 		'subinfo.5.subinfo_sub.0.subinfo_sub2.1.state_sub3': true, 'subinfo.5.subinfo_sub.0.subinfo_sub2.1.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.1.id_sub3': 32,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.2.name_sub3': 'Cestovní doklad', 'subinfo.5.subinfo_sub.0.subinfo_sub2.2.state_sub3': true, 	'subinfo.5.subinfo_sub.0.subinfo_sub2.2.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.2.id_sub3': 33,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.3.name_sub3': 'Ubytování', 		'subinfo.5.subinfo_sub.0.subinfo_sub2.3.state_sub3': true,	'subinfo.5.subinfo_sub.0.subinfo_sub2.3.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.3.id_sub3': 34,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.4.name_sub3': 'Zdravotní pojištění', 'subinfo.5.subinfo_sub.0.subinfo_sub2.4.state_sub3': true, 	'subinfo.5.subinfo_sub.0.subinfo_sub2.4.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.4.id_sub3': 35,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.5.name_sub3': 'Vzdělání', 		'subinfo.5.subinfo_sub.0.subinfo_sub2.5.state_sub3': true, 'subinfo.5.subinfo_sub.0.subinfo_sub2.5.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.5.id_sub3': 36, 'subinfo.5.subinfo_sub.0.subinfo_sub2.5.state_pozadovano_sub3': true,
	'subinfo.5.subinfo_sub.0.subinfo_sub2.6.name_sub3': 'Rejstřík trestů', 'subinfo.5.subinfo_sub.0.subinfo_sub2.6.state_sub3': true, 	'subinfo.5.subinfo_sub.0.subinfo_sub2.6.date_sub3': '', 'subinfo.5.subinfo_sub.0.subinfo_sub2.6.id_sub3': 37,
	 } ). 
  then(doc => {
    console.log("Pridano!!!!");
    res.json({doc: doc});   
  });  
}


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function validateInput(data) {
	let errors = {};

	if (validator.isEmpty(data.username)) {errors.username = 'This is required'
	}if (validator.isEmpty(data.password)) {errors.password = 'This is required'
	}if (data.password !== 'heslo') { errors.login = 'Password does not match to Username'
	}if (data.username !== 'Petr') { errors.login = 'Password does not match to Username'}

	return {
		errors,
	}
}

var ONE_MINUTE = 5000;
function showTime() {


//1. hledani - Tyden predem Biometrie upozorneni FUNGUJE

/*
var dateTydenPred = new Date();
dateTydenPred.setDate(dateTydenPred.getDate() + 7)

PhiliCollection.find({ 'subinfo.7.date_sub': (dateTydenPred).toISOString().substr(0,10) }, function(err, data){

		_.map(data , function(value, key){
			console.log(value.name + " Tyden predem Biometrie Upozorneni!!!")

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
	text: 'Zákazník - ' + value.name + '  -- Biometrie Upozorneni ',
}
transporter.sendMail(mailOptions, function(err, res){
	if(err){
		console.log('Error');
		console.log(err);
	} else {
		console.log('Email Sent');
	}
	})
			
		} )
		console.log('Sub 2 cylkus Tyden napred porbehl - ' + (new Date()).toISOString().substr(0,10) );
	} )



//2. hledani - Tyden predem Potvrzení nostrifikace upozorneni FUNGUJE



var datumSub2A = new Date();
datumSub2A.setDate(datumSub2A.getDate() + 7)

PhiliCollection.find({ 'subinfo.5.subinfo_sub.3.date_sub2': (datumSub2A).toISOString().substr(0,10) }, function(err, data){

		_.map(data , function(value, key){
			console.log(value.name + " Tyden predem Potvrzení nostrifikace UPOZORNENI!!!")

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
	text: 'Zákazník - ' + value.name + '  -- Potvrzení nostrifikace Tyden predem UPOZORNENI',
}
transporter.sendMail(mailOptions, function(err, res){
	if(err){
		console.log('Error');
		console.log(err);
	} else {
		console.log('Email Sent');
	}
	})
		} )
		console.log(' Sub 3 cylkus Tyden napred porbehl - ' + (new Date()).toISOString().substr(0,10) );
	} )



//3. hledani SUB 2 - V den Rozhoduje do Upozorneni  FUNGUJE

var datumSub2B = new Date();
datumSub2B.setDate(datumSub2B.getDate())

PhiliCollection.find({ 'subinfo.5.subinfo_sub.4.date_sub2': (datumSub2B).toISOString().substr(0,10) }, function(err, data){

		_.map(data , function(value, key){
			console.log(value.name + " zakaznik polozka Rozhoduje do (SUB_2) UPOZORNENI!!!")

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
	subject: 'Upozodnení na __Rozhoduje do__ ',
	text: 'Zákazník - ' + value.name + '  -- polozka Rozhoduje do v oddíle SUB 2 dnes se shoduje datum UPOZORNENI!!!',
}
transporter.sendMail(mailOptions, function(err, res){
	if(err){
		console.log('Error');
		console.log(err);
	} else {
		console.log('Email Sent');
	}
	})
		} )
		console.log(' Sub 3 cylkus Tyden napred porbehl - ' + (new Date()).toISOString().substr(0,10) );
	} )




*/

}
setInterval(showTime, ONE_MINUTE);

app.use(express.static(path.join(__dirname, 'client/dist')));

// Index get
app.get('/', function(req, res, next) {
	console.log("__dirname--------------------   ---- ");
	console.log(__dirname);
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//Requestzy pomocne 

app.get('/db', function(req, res, next) {
	console.log("ozvalo se api/users");

	PhiliCollection.find({}, function (err, docs) {
  	console.log("Inside find");
  	console.log(docs);
  	res.json({docs: docs}); });
});


app.get('/delete', function(req, res, next) {
	PhiliCollection.deleteMany({ }, function(err, delData){
	console.log("DELETEDDD")})
	res.send('Deleted - hotovo');  
});

app.get('/add', function(req, res, next) {

	Add();
	res.send('Add hotovo');
});

//Request Pridej zakaznika

app.post('/add/custommer',function(req , res, next){
	Add(req.body.name, req.body.date, req.body.poznamka);

});


//Delete celeho zakaznika podle _id
app.post('/delete/id',function(req , res, next){
  	console.log("ID na smazani");
  	console.log(req.body.delete_id); 
 	PhiliCollection.deleteMany({ _id: req.body.delete_id }, function(err, delData){
	console.log("DELETEDDD")})
});



//Update - Main
app.post('/update/id',function(req , res, next){
  	console.log("Update MAIN - req");

  	var id = req.body.update_id;
 	PhiliCollection.findByIdAndUpdate( id , { $set: { name: req.body.name , date: req.body.date, poznamka: req.body.poznamka, state: req.body.hotovo}}, function(){console.log("Done Update")} );
 	console.log("Update hotov _______X_____"); 
 	res.send('Update hotovo');
});

//Update - Sub
app.post('/update-sub/id',function(req , res, next){
  	console.log("Update SUB - req");
  	var id = req.body.update_id;
 	PhiliCollection.update( {"subinfo._id": req.body.sub_id } , {'$set':  { "subinfo.$.poznamka_sub" : req.body.poznamka_sub , "subinfo.$.date_sub" : req.body.date_sub , "subinfo.$.state_sub" : req.body.state_sub  }}, function(err, data){
     console.log("Update hotov _______X_____"); 
     res.send(data);
  });

});

//Update - Sub2
app.post('/update-sub2/id',function(req , res, next){
  	console.log("Update SUB 2 - req");
 	PhiliCollection.update( {"subinfo._id": req.body.sub_id } , {'$set':  { "subinfo.$.subinfo_sub.$[element].state_sub2": req.body.state_sub2 ,  "subinfo.$.subinfo_sub.$[element].date_sub2": req.body.date_sub2 }}, 
     { arrayFilters: [  { "element.id_sub2": req.body.id_sub2 } ], multi: true} , function(err, data){
     console.log("Update hotov _______X_____"); 
     console.log(data);
  });
});


//Update - Sub3
app.post('/update-sub3/id',function(req , res, next){
  	console.log("Update SUB 3 - req");
  	console.log(req.body.update_id); //_id, WorkingSub, data 3x
  	console.log(req.body.date_sub3);
  	console.log(req.body.state_sub3);
  	console.log(req.body.sub_id);
  	console.log(req.body.id_sub3);
 	PhiliCollection.update( {"subinfo._id": req.body.sub_id } , {'$set':  { "subinfo.$.subinfo_sub.0.subinfo_sub2.$[element].state_sub3": req.body.state_sub3 ,  "subinfo.$.subinfo_sub.0.subinfo_sub2.$[element].date_sub3": req.body.date_sub3 }}, 
     { arrayFilters: [  { "element.id_sub3": req.body.id_sub3 } ], multi: false} , function(err, data){
     console.log("Update hotov _______X  SUB 3 udgrade_____"); 
     console.log(data);
  });
});



//Login USERS
app.post('/api/users',function(req , res, next){
	setTimeout(() => {
  console.log("Posilame hesla");
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

