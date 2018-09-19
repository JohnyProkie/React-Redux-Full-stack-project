var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var validator = require('validator');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var path = require("path");
mongoose.Promise = global.Promise;


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
const Sub2_Menu = new mongoose.Schema({

  id_sub2: {type: Number},
  name_sub2: {type: String},
  date_sub2: {type: String},
  state_sub2: {type: Boolean},
  poznamka_sub2: {type: String},
});

const Sub_Menu = new mongoose.Schema({

  name_sub: {type: String},
  date_sub: {type: String},
  state_sub: {type: Boolean},
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
  	'subinfo.0.name_sub': 'Nabídka', 'subinfo.0.date_sub': 112233, 'subinfo.0.poznamka_sub': "PoznamkaX 1", 'subinfo.0.state_sub': true,
  	'subinfo.1.name_sub': 'Hlášenka', 'subinfo.1.state_sub': false,
	'subinfo.2.name_sub': 'Výběr zaměstnance', 'subinfo.2.state_sub': false,
	'subinfo.3.name_sub': 'Podání žádosti', 'subinfo.3.state_sub': false,
	'subinfo.4.name_sub': 'Letenka', 'subinfo.3.state_sub': false,
	'subinfo.5.name_sub': 'Biometrie', 'subinfo.3.state_sub': false,
	'subinfo.3.subinfo_sub.0.name_sub2': 'Kompletace náležitostí', 'subinfo.3.subinfo_sub.0.state_sub2': true, 'subinfo.3.subinfo_sub.0.id_sub2': 31,
	'subinfo.3.subinfo_sub.1.name_sub2': 'Podání žádosti', 'subinfo.3.subinfo_sub.1.state_sub2': false, 'subinfo.3.subinfo_sub.1.id_sub2': 32,
	'subinfo.3.subinfo_sub.2.name_sub2': 'Žádost o nostrifikace', 'subinfo.3.subinfo_sub.2.state_sub2': true, 'subinfo.3.subinfo_sub.2.id_sub2': 33,
	'subinfo.3.subinfo_sub.3.name_sub2': 'Potvrzení nostrifikace do', 'subinfo.3.subinfo_sub.3.state_sub2': true, 'subinfo.3.subinfo_sub.3.id_sub2': 34,
	'subinfo.3.subinfo_sub.4.name_sub2': 'Rozhoduje do', 'subinfo.3.subinfo_sub.4.state_sub2': true, 'subinfo.3.subinfo_sub.4.id_sub2': 35,
	'subinfo.3.subinfo_sub.5.name_sub2': 'Rozhodnuto', 'subinfo.3.subinfo_sub.5.state_sub2': true, 'subinfo.3.subinfo_sub.5.id_sub2': 36,
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
  console.log(new Date());
	PhiliCollection.find( { "subinfo.date_sub":(new Date()).toISOString().substr(0,10) }, function(err, data){
		console.log(data[0].name+ ' - ' + (new Date()).toISOString().substr(0,10) );
	} )
}
//setInterval(showTime, ONE_MINUTE);

app.use(express.static(path.join(__dirname, 'client/dist')));

// Index get
app.get('/', function(req, res, next) {
	console.log("__dirname--------------------   ---- ");
	console.log(__dirname);
  res.sendFile(path.join(__dirname + '/client/dist/'));
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


app.get('/upd', function(req, res, next) {
	var update = { info: 'two updated'};

	PhiliCollection.find( { "subinfo.date_sub":"2018-09-21" }, function(err, data){
		console.log(data);
		res.send(data[0].name+ ' - ' + (new Date()).toISOString().substr(0,10) );
	} )

});


//Request Pridej zakaznika

app.post('/add/custommer',function(req , res, next){
	console.log("Co pridavam??")
	console.log(req.body)
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
  	console.log("Update - req value");
  	console.log(req.body.name);
  	console.log(req.body.date);
  	console.log(req.body.poznamka);
  	console.log(req.body.update_id);
  	console.log("req.body.hotovo");
  	console.log(req.body.hotovo);
  	var id = req.body.update_id;
 	PhiliCollection.findByIdAndUpdate( id , { $set: { name: req.body.name , date: req.body.date, poznamka: req.body.poznamka, state: req.body.hotovo}}, function(){console.log("Done Update")} );
 	console.log("Update hotov _______X_____"); 
 	res.send('Update hotovo');
});

//Update - Sub
app.post('/update-sub/id',function(req , res, next){
  	console.log("Update - req value");
  	console.log(req.body.update_id); //_id, WorkingSub, data 3x
  	var SubIndx = req.body.subIndex
  	console.log(req.body.date_sub);
  	console.log(req.body.poznamka_sub);
  	console.log(req.body.state_sub);
  	console.log(req.body.sub_id);
  	var id = req.body.update_id;
 	PhiliCollection.update( {"subinfo._id": req.body.sub_id } , {'$set':  { "subinfo.$.poznamka_sub" : req.body.poznamka_sub , "subinfo.$.date_sub" : req.body.date_sub , "subinfo.$.state_sub" : req.body.state_sub  }}, function(err, data){
     console.log("Update hotov _______X_____"); 
     res.send(data);
  });

});

//Update - Sub2
app.post('/update-sub2/id',function(req , res, next){
  	console.log("Update - req value");
  	console.log(req.body.update_id); //_id, WorkingSub, data 3x
  	var SubIndx = req.body.subIndex
  	console.log(req.body.date_sub2);
  	console.log(req.body.state_sub2);
  	console.log(req.body.sub_id);
  	console.log(req.body.id_sub2);
  	var sub2indx = 0;
 	PhiliCollection.update( {"subinfo._id": req.body.sub_id } , {'$set':  { "subinfo.$.subinfo_sub.$[element].state_sub2": req.body.state_sub2 ,  "subinfo.$.subinfo_sub.$[element].date_sub2": req.body.date_sub2 }}, 
     { arrayFilters: [  { "element.id_sub2": req.body.id_sub2 } ], multi: true} , function(err, data){
     console.log("Update hotov _______X_____"); 
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

