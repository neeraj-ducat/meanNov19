// express is imported
const express = require('express');
// body-parser is imported
const bodyParser = require('body-parser');
// mongoose is imported
const mongoose = require('mongoose');
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
// API endpoints are defined
app.get('/employees',function(req, res){
    Emp.find().then(result => {
        res.json(result);
    });
});

app.post('/employees',function(req, res){
    // An object of Model type is created for the body
    let emp = new Emp(req.body);
    emp.save().then(result => {
        res.json(result);
    });
    
})

// app is asked to start a web server
// on port 4500
app.listen(4500, ()=>{
    console.log('server is listening on port 4500');
})