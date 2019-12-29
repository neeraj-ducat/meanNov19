// express is imported
const express = require('express');
// path package is imported
const path =require('path');
// body-parser is imported
const bodyParser = require('body-parser');
// mongoose is imported
const mongoose = require('mongoose');
// ObjectId class of mongoose is imported
const ObjectId = mongoose.Types.ObjectId;
// cors middleware is imported
const cors = require('cors');
// multer is imported
const multer  = require('multer')
// express app object is created
const app = express();
// connect mongoose to the database.
mongoose.connect('mongodb://localhost:27017/ducat');
// Model is created for the emps collection
const Emp = mongoose.model('emps',{
    name: String,
    job: String,
    salary: Number
  });
//body-parser middleware is registered to parse json body
app.use(bodyParser.json());
// cors middleware is registered to add cors headers to the response of
// each request
app.use(cors());
// API endpoints are defined

// multer storage configuration
const config = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploaded/')
    },
    filename: function (req, file, cb) {
        let fname = Date.now() +
         path.extname(file.originalname);
        //imageUrl = uploaded + fname; // to save in db
      cb(null, fname);
    }
  });
// multer object is created to manage file uploads. 
var upload = multer({ storage: config });
app.get('/employees',function(req, res){
    Emp.find().then(result => {
        res.json(result);
    });
});
app.get('/employees/:empId',function(req, res){
    let empId = req.params['empId']
    // An object of Model type is created for the body
    Emp.find({_id: new ObjectId(empId)}).then(result => {
        res.json(result);
    });
    
});
app.post('/employees',function(req, res){
    // An object of Model type is created for the body
    let emp = new Emp(req.body);
    emp.save().then(result => {
        res.json(result);
    });
    
});
// Method to process file upload requests.
app.post('/employees/profileImage',upload.single('profileImage'),
function(req,res){
 // console.log(uploaded+' is uploaded.');
  res.json({'status': 'uploaded.'});
  });
app.put('/employees',function(req, res){
    let emp = req.body;
    // An object of Model type is created for the body
    Emp.updateOne({_id: new ObjectId(emp._id)},{$set: {
        name: emp.name, job: emp.job, salary:emp.salary
    }}).then(result => {
        res.json(result);
    });
    
});

app.delete('/employees/:empId',function(req, res){
    let empId = req.params['empId']
    // An object of Model type is created for the body
    Emp.deleteOne({_id: new ObjectId(empId)}).then(result => {
        res.json(result);
    });
    
});

// app is asked to start a web server
// on port 4500
app.listen(4500, ()=>{
    console.log('server is listening on port 4500');
})